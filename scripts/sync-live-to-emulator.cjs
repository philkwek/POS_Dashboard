const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const serviceAccountPath = path.resolve(__dirname, '../service-account.json');
const serviceAccount = require(serviceAccountPath);
const bucketName = `${serviceAccount.project_id}.firebasestorage.app`;

async function run() {
  // 1. Fetch from LIVE
  console.log('Fetching data from LIVE Firebase...');
  const liveApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
    storageBucket: bucketName
  }, 'live');
  
  // Sync Firestore
  const liveDb = liveApp.firestore();
  const collectionsToSync = ['products', 'admins', 'orders'];
  const allData = {};

  for (const colName of collectionsToSync) {
    console.log(`Reading Firestore collection: ${colName}...`);
    const snapshot = await liveDb.collection(colName).get();
    allData[colName] = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    console.log(`Found ${allData[colName].length} documents in ${colName}.`);
  }

  // Sync Storage
  console.log(`Reading Storage bucket: ${bucketName}...`);
  const liveBucket = liveApp.storage().bucket();
  const [files] = await liveBucket.getFiles();
  const fileData = [];

  for (const file of files) {
    console.log(`Downloading file: ${file.name}...`);
    try {
      const [content] = await file.download();
      fileData.push({ 
        name: file.name, 
        content, 
        contentType: file.metadata.contentType,
        metadata: file.metadata.metadata 
      });
    } catch (e) {
      console.warn(`Failed to download ${file.name}: ${e.message}`);
    }
  }
  console.log(`Successfully downloaded ${fileData.length} files from Storage.`);

  await liveApp.delete();

  // 2. Write to EMULATOR
  console.log('\nWriting data to LOCAL Emulator...');
  
  // Set Emulator Environment Variables
  process.env.GCLOUD_PROJECT = serviceAccount.project_id;
  process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
  process.env.FIREBASE_STORAGE_EMULATOR_HOST = '127.0.0.1:9199';
  process.env.STORAGE_EMULATOR_HOST = 'http://127.0.0.1:9199';
  
  console.log(`Targeting Firestore Emulator at ${process.env.FIRESTORE_EMULATOR_HOST}`);
  console.log(`Targeting Storage Emulator at ${process.env.FIREBASE_STORAGE_EMULATOR_HOST}`);
  
  const emulatorApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
    storageBucket: bucketName
  }, 'emulator');
  
  // Write Firestore
  const emulatorDb = emulatorApp.firestore();
  emulatorDb.settings({
    host: '127.0.0.1:8080',
    ssl: false
  });
  for (const colName of collectionsToSync) {
    if (allData[colName].length === 0) continue;
    
    console.log(`Writing Firestore collection: ${colName}...`);
    const batch = emulatorDb.batch();
    allData[colName].forEach(item => {
      const docRef = emulatorDb.collection(colName).doc(item.id);
      batch.set(docRef, item.data);
    });
    await batch.commit();
    console.log(`Finished writing Firestore collection: ${colName}.`);
  }

  // Write Storage
  const emulatorBucket = emulatorApp.storage().bucket();
  for (const file of fileData) {
    console.log(`Uploading ${file.name} to emulator storage...`);
    try {
      await emulatorBucket.file(file.name).save(file.content, {
        metadata: {
          contentType: file.contentType,
          metadata: file.metadata
        }
      });
    } catch (e) {
      console.warn(`Failed to upload ${file.name} to emulator: ${e.message}`);
    }
  }
  console.log('Finished writing Storage files.');

  console.log('\nSync complete!');
  process.exit(0);
}

run().catch(err => {
  console.error('Sync failed:', err);
  process.exit(1);
});
