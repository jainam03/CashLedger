# 💰 CashLedger — Personal Finance Tracker

A multi-account personal finance tracker with real-time Firebase sync, proper ledger accounting, smart reconciliation checks, and a glassmorphism interface powered by modern Lucide icons. Built for students managing stipends.

## ✨ Features
- **Multi-account ledger** — Bank, Cash, Investment accounts with derived balances
- **5 transaction types** — Income, Expense, Withdrawal, Transfer, Investment
- **Reconciliation check** — Always-visible balance verification (`Σ balances + total spent = total income`)
- **Real-time sync** — Firebase Firestore with `onSnapshot` listeners
- **Google Sign-In** — Secure access across all your devices
- **Modern Lucide Icons** — Crisp vector icons across the entire UI
- **Dark/Light mode** — Glassmorphism UI with theme persistence
- **Mobile-first** — Responsive design with bottom navigation and quick FAB

---

## 🛠️ Setup Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project.
3. **Enable Authentication**: Go to **Authentication** → **Sign-in method** → Enable **Google**.
4. **Create Firestore Database**: Go to **Firestore Database** → **Create database** → Start in production mode.

### 2. Set Firestore Security Rules
In **Firebase Console** → **Firestore Database** → **Rules** tab, replace rules with:
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
Click **Publish**.

### 3. Configure Local Environment
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Paste your Firebase web app credentials into `.env`.

### 4. Run Locally
```bash
npm install
npm run dev
```

---

## 🚀 Deploy to GitHub Pages

### Option A: Automatic via GitHub Actions (Recommended)
1. Push your repository to GitHub.
2. In your repository on GitHub, go to **Settings** → **Secrets and variables** → **Actions**.
3. Add your `VITE_FIREBASE_*` environment variables as Repository Secrets.
4. Enable GitHub Pages under **Settings** → **Pages** → Build and deployment Source: **GitHub Actions**.
5. Every push to `main` will automatically build & deploy your app!

### Option B: Command Line Deployment
```bash
npm run deploy
```

---

## 🧮 Core Financial Engine Model
- Balances are **always derived** from transactions + opening balance — **never edited manually**.
- `Total Spent` strictly counts `expense` transactions.
- ATM withdrawals are modeled as transfers (`bank` → `cash`), NOT expenses.
- Real-time reconciliation strip validates `Σ account balances + total spent = total income` continuously.
