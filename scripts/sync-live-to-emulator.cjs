const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const serviceAccountPath = path.resolve(__dirname, '../service-account.json');
const serviceAccount = require(serviceAccountPath);

async function run() {
  // 1. Fetch from LIVE (NO emulator host env var set yet)
  console.log('Fetching data from LIVE Firestore...');
  const liveApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id
  }, 'live');
  
  const liveDb = liveApp.firestore();
  const collectionsToSync = ['products', 'admins', 'orders'];
  const allData = {};

  for (const colName of collectionsToSync) {
    console.log(`Reading ${colName}...`);
    const snapshot = await liveDb.collection(colName).get();
    allData[colName] = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    console.log(`Found ${allData[colName].length} documents in ${colName}.`);
  }

  await liveApp.delete();

  // 2. Write to EMULATOR
  console.log('\nWriting data to LOCAL Emulator...');
  process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
  
  const emulatorApp = admin.initializeApp({
    projectId: serviceAccount.project_id
  }, 'emulator');
  
  const emulatorDb = emulatorApp.firestore();

  for (const colName of collectionsToSync) {
    if (allData[colName].length === 0) continue;
    
    console.log(`Writing ${colName}...`);
    const batch = emulatorDb.batch();
    
    allData[colName].forEach(item => {
      const docRef = emulatorDb.collection(colName).doc(item.id);
      batch.set(docRef, item.data);
    });

    await batch.commit();
    console.log(`Finished writing ${colName}.`);
  }

  console.log('\nSync complete!');
  process.exit(0);
}

run().catch(err => {
  console.error('Sync failed:', err);
  process.exit(1);
});
