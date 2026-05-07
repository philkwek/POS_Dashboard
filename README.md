# POS Dashboard

A Point of Sale (POS) Dashboard built with React, Vite, TypeScript, and Firebase. This project uses NPM Workspaces to share types between the frontend and the Firebase Functions backend.

## 🛠 Tech Stack
- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS (DaisyUI)
- **Backend**: Firebase Cloud Functions (TypeScript), Firebase Auth, Firestore
- **Workspaces**: Root (Frontend), `functions/` (Backend), `shared/` (Shared Types)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v22/v24+ recommended)
- Firebase CLI (`npm install -g firebase-tools`)

### 2. Installation
Run `npm install` from the root directory. This will automatically install dependencies for the frontend, functions, and the shared workspace.
```bash
npm install
```

### 3. Environment Variables
You need to set up environment variables for both the frontend and backend.

**Frontend (`.env` in root):**
Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**Backend (`functions/.env`):**
Create a `.env` file inside the `functions/` directory:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_DATABASE_URL=your_database_url
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Service Account (For Local Data Syncing)
To pull live database data into your local emulator, you must place your Firebase Admin `service-account.json` file in the **root** of the project. 
*(Note: This file is ignored by Git for security).*

---

## 💻 Local Development Workflow

We use the **Firebase Local Emulator Suite** for development to avoid touching production data and incurring costs.

### Start the Emulators
This command starts Auth, Functions, Firestore, Database, and the Emulator UI. It automatically loads data from `./emulator_data` and exports it back when you shut down (Ctrl+C).
```bash
npm run emulators
```
- **Emulator UI**: [http://127.0.0.1:4000](http://127.0.0.1:4000)

### Start the Frontend
In a separate terminal window, start the Vite development server:
```bash
npm run dev
```

### Sync Live Data to Emulator (One-Time/As Needed)
If you need fresh data from the live production database in your local emulator:
1. Ensure the emulators are running (`npm run emulators`).
2. Ensure `service-account.json` is in the root folder.
3. Run the sync script in a new terminal:
```bash
npm run db:sync
```

---

## 📁 Project Structure

- `/src`: The React frontend application.
  - `/components`: Reusable UI components (e.g., `StoreItem.tsx`).
  - `/pages`: Main page views (e.g., `StoreFront.tsx`, `Login.tsx`).
  - `/context`: Global React context (e.g., `AuthContext.tsx`).
- `/functions`: Firebase Cloud Functions backend.
- `/shared`: Shared NPM Workspace for TypeScript types and interfaces. Import via `@pos-dashboard/shared`.
- `/scripts`: Utility scripts (e.g., `sync-live-to-emulator.cjs`).
- `/emulator_data`: The local, persistent snapshot of the Firebase emulator data.

---

## 🤝 Contributing Guidelines

1. **Shared Types**: If you create a new data model that needs to be used by both the frontend and backend, define it in `shared/types/` and export it from `shared/index.ts`.
2. **Environment Checks**: The frontend automatically connects to the local emulators when `import.meta.env.DEV` is true. Do not hardcode emulator connections.
3. **Secrets**: Never commit `.env` files or `service-account.json`. Always check `.gitignore` if adding new credential files.
