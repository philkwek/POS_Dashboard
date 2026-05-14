import { defineConfig } from 'cypress';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = process.env.CYPRESS_FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID || 'pos-dashboard-zion';

process.env.FIREBASE_AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST || '127.0.0.1:9099';
process.env.FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';

const adminApp = getApps()[0] || initializeApp({ projectId: FIREBASE_PROJECT_ID });
const adminAuth = getAuth(adminApp);
const adminDb = getFirestore(adminApp);

const deleteCollection = async (collectionPath: string) => {
  const docs = await adminDb.collection(collectionPath).listDocuments();
  if (!docs.length) return;

  const batch = adminDb.batch();
  docs.forEach((doc) => batch.delete(doc));
  await batch.commit();
};

const resetFirestore = async () => {
  await deleteCollection('products');
};

interface SeedUser {
  uid: string;
  email: string;
  password: string;
  displayName: string;
}

interface SeedProduct {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  additionalImages?: string[];
  attributes: string[];
  variants: Array<{ name: string; priceModifier: number; stock: number }>;
  basePrice: number;
  isActive: boolean;
}

const seedProducts = async (fixtureName = 'products') => {
  const fixturePath = resolve(process.cwd(), 'cypress', 'fixtures', `${fixtureName}.json`);
  const products = JSON.parse(readFileSync(fixturePath, 'utf-8')) as SeedProduct[];

  for (const product of products) {
    const { id, ...payload } = product;
    await adminDb.collection('products').doc(id).set(payload);
  }
};

const resetAuth = async () => {
  let nextPageToken: string | undefined;

  do {
    const page = await adminAuth.listUsers(1000, nextPageToken);
    await Promise.all(page.users.map((user) => adminAuth.deleteUser(user.uid)));
    nextPageToken = page.pageToken;
  } while (nextPageToken);
};

const seedAuthUsers = async (fixtureName = 'users') => {
  const fixturePath = resolve(process.cwd(), 'cypress', 'fixtures', `${fixtureName}.json`);
  const users = JSON.parse(readFileSync(fixturePath, 'utf-8')) as SeedUser[];

  await Promise.all(
    users.map((user) =>
      adminAuth.createUser({
        uid: user.uid,
        email: user.email,
        password: user.password,
        displayName: user.displayName,
      }),
    ),
  );
};

export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on) {
      on('task', {
        resetFirestore,
        seedProducts,
        resetAuth,
        seedAuthUsers,
      });

      return {};
    },
  },
});
