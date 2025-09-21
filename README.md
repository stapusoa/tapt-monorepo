# TruBalance Bodywork - MonoRepo Full Stack

This is the TruBalance Bodywork LLC monorepo, which contains the full stack of our application:
	•	Frontend (web) → React + Vite + Tailwind (deployed on Vercel)
	•	Backend (apps/backend) → Node/Express API (deployed on Render or Vercel)
	•	CMS (apps/cms) → Sanity.io studio (deployed on Sanity)
	•	Infrastructure → Cloudflare (DNS/CDN), Firebase (auth & services), GitHub (version control + CI/CD)
---

## 📁 Project Structure

Key structure:
```
trubalance-bodywork/
│
├── apps/
│   ├── web/        # Frontend (React + Vite + Tailwind)
│   ├── backend/    # Backend API (Node/Express)
│   └── cms/        # Sanity.io Studio
│
├── packages/       # Shared packages (utils, types, components)
├── .env            # Local development environment variables
├── .env.staging    # Staging environment variables
├── .env.production # Production environment variables
└── README.md
```
---

## 🚀 Tech Stack

	•	Frontend: React, Vite, TailwindCSS, shadcn/ui
	•	Backend: Node.js, Express, Auth0/JWT for auth
	•	CMS: Sanity.io (content backend)
	•	Database: Sanity + Firebase (for appointments & real-time data)
	•	Deployment: Vercel (frontend + backend), Sanity (CMS), Cloudflare (DNS/CDN), Firebase (services)
---

## 🛠 Setup Instructions

1. Clone the Repo
   ```
   git clone https://github.com/YOUR_USERNAME/trubalance-monorepo.git
   cd trubalance-monorepo
   pnpm install
   ```
2. Environment Variables
   Copy .env.example to .env and fill in required values:
   ```
   cp .env.example .env
   ```
   🔑 Environment variables include:
     •	Auth0 (authentication)
     •	Sanity project details
     •	Firebase project credentials
     •	Vercel + Cloudflare API keys
   👉 See .env.example for the full list.
3. Install dependencies
   From the monorepo root:
   ```bash
   pnpm install
   ```
   This installs all dependencies across the monorepo, including shared packages.
4. Build project
   ```bash
   pnpm build
   ```
   The `build` command outputs the production assets to the `dist/` folder.
5. Run Locally
   ```
   # Frontend
   pnpm dev:web

   # Backend
   pnpm dev:backend

   # CMS
   pnpm dev:cms
   ```
---

## Environment Variables Checklist

•	Frontend (Vercel):
  •	VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, etc.
  •	VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID
  •	VITE_BACKEND_URL
  •	VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET
•	Backend (Render/Vercel):
  •	AUTH0_SECRET, AUTH0_DOMAIN
  •	GITHUB_TOKEN (if syncing to GitHub)
  •	SANITY_TOKEN (read/write)
  •	Any Firebase service account keys
•	Sanity:
  •	In sanity.cli.ts / .env: dataset, project ID.

Simplified:
•	GitHub = source of truth.
•	Vercel = frontend (web + cms).
•	Render / Vercel Functions = backend API.
•	Cloudflare = DNS + domain proxy.
•	Sanity = content platform.
•	Firebase = auth + storage + real-time services.

Create an `.env` file in the root of the monorepo with the following:

```env
# ──────────────────────────────
# GENERAL SETTINGS
# ──────────────────────────────
NODE_ENV=development
APP_NAME=trubalance
MONOREPO=true

# ──────────────────────────────
# SANITY (CMS)
# ──────────────────────────────
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=development
SANITY_API_VERSION=2025-09-21
SANITY_STUDIO_URL=http://localhost:3333
SANITY_TOKEN=your_local_dev_sanity_token

# ──────────────────────────────
# FIREBASE
# (frontend-safe ones prefixed with VITE_)
# ──────────────────────────────
VITE_FIREBASE_API_KEY=your_local_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_local_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdefg
VITE_FIREBASE_MEASUREMENT_ID=G-ABCDEFG

# ──────────────────────────────
# AUTH0
# ──────────────────────────────
VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
VITE_AUTH0_CLIENT_ID=your_local_client_id
AUTH0_CLIENT_SECRET=your_local_client_secret
AUTH0_AUDIENCE=https://your-backend.dev/api

# ──────────────────────────────
# BACKEND
# ──────────────────────────────
VITE_BACKEND_URL=http://localhost:5000
BACKEND_PORT=5000
SESSION_SECRET=supersecretlocalkey

# ──────────────────────────────
# GITHUB INTEGRATION (backend only)
# ──────────────────────────────
GITHUB_TOKEN=your_local_github_token
```

Then create an `.env.production` in the same directory.

```env
NODE_ENV=production
APP_NAME=trubalance

# ──────────────────────────────
# SANITY
# ──────────────────────────────
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2025-09-21
SANITY_STUDIO_URL=https://cms.trubalance.com
SANITY_TOKEN=your_prod_sanity_token   # backend only

# ──────────────────────────────
# FIREBASE
# ──────────────────────────────
VITE_FIREBASE_API_KEY=prod_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=trubalance.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=trubalance-prod
VITE_FIREBASE_STORAGE_BUCKET=trubalance.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=987654321
VITE_FIREBASE_APP_ID=1:987654321:web:hijklmn
VITE_FIREBASE_MEASUREMENT_ID=G-PROD12345

# ──────────────────────────────
# AUTH0
# ──────────────────────────────
VITE_AUTH0_DOMAIN=trubalance.us.auth0.com
VITE_AUTH0_CLIENT_ID=prod_auth0_client_id
AUTH0_CLIENT_SECRET=prod_auth0_client_secret
AUTH0_AUDIENCE=https://api.trubalance.com

# ──────────────────────────────
# BACKEND
# ──────────────────────────────
VITE_BACKEND_URL=https://api.trubalance.com
BACKEND_PORT=8080
SESSION_SECRET=prod_super_secret_key

# ──────────────────────────────
# GITHUB
# ──────────────────────────────
GITHUB_TOKEN=prod_github_token
```

And create `.env.staging` as well.

```env
NODE_ENV=staging
APP_NAME=trubalance

# ──────────────────────────────
# SANITY
# ──────────────────────────────
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=staging
SANITY_API_VERSION=2025-09-21
SANITY_STUDIO_URL=https://cms-staging.trubalance.com
SANITY_TOKEN=your_staging_sanity_token   # backend only

# ──────────────────────────────
# FIREBASE
# ──────────────────────────────
VITE_FIREBASE_API_KEY=staging_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=trubalance-staging.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=trubalance-staging
VITE_FIREBASE_STORAGE_BUCKET=trubalance-staging.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=111111111
VITE_FIREBASE_APP_ID=1:111111111:web:xyz123
VITE_FIREBASE_MEASUREMENT_ID=G-STAGING123

# ──────────────────────────────
# AUTH0
# ──────────────────────────────
VITE_AUTH0_DOMAIN=staging-trubalance.us.auth0.com
VITE_AUTH0_CLIENT_ID=staging_auth0_client_id
AUTH0_CLIENT_SECRET=staging_auth0_client_secret
AUTH0_AUDIENCE=https://api-staging.trubalance.com

# ──────────────────────────────
# BACKEND
# ──────────────────────────────
VITE_BACKEND_URL=https://api-staging.trubalance.com
BACKEND_PORT=8081
SESSION_SECRET=staging_secret_key

# ──────────────────────────────
# GITHUB
# ──────────────────────────────
GITHUB_TOKEN=staging_github_token
```

Replace the placeholders with your actual credentials and URLs.
These credentials connect the site to the headless Sanity CMS (read-only access).

---

## Git

### Save SSH Key Passphrase (Optional)

If your SSH key has a passphrase and you want to avoid entering it every time:

```bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add your SSH key (update the path if necessary)
ssh-add ~/.ssh/id_ed25519_personal
```

Add these lines to your shell profile (`~/.zshrc`, `~/.bashrc`, etc.) to automate this on terminal start.

---

### Github Setup

Create a new repository on github.com.

On your local machine run:

```
cd ~/Documents/Playground/monorepo-project
git init
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Frontend Hosting

Vercel is best for frontend apps inside your monorepo.

	1.	Go to Vercel → “Add New Project”.
	2.	Connect your GitHub account + select the monorepo repo.
	3.	Choose Framework Preset = Vite / React.
	4.	Under Root Directory, pick your frontend app folder (apps/web/ or apps/cms/).
	5.	Add environment variables (Auth0, Firebase, Sanity, API URLs, etc).
	6.	Deploy.
	•	You can repeat for multiple apps (web, cms) inside the same monorepo by creating new projects in Vercel.


### DNS Hosting

You’ll use Cloudflare mostly for custom domains + performance/security.
	1.	Point your domain DNS to Cloudflare.
	2.	Add your project domain (e.g., myapp.com).
	3.	In Vercel, set up a custom domain → copy the CNAME/TXT records into Cloudflare DNS.
	4.	For backend (Render, Vercel Functions, etc.), you can also proxy via Cloudflare if you want caching or security.

### Backend Hosting

	•	If your backend is serverless, deploy via Vercel (like apps/backend/).
	•	If it’s an Express/Node server, use Render, Railway, or Vercel Functions:
	1.	Go to Render (or provider of choice).
	2.	Connect GitHub → pick your repo → set apps/backend/ as the root.
	3.	Choose build command (pnpm install && pnpm build) + start command (node dist/index.js).
	4.	Add your environment variables (Auth0 secrets, GitHub tokens, etc).
	5.	Deploy → get backend API URL → update frontend .env with this.

### Sanity (CMS Studio + Dataset Hosting)

	1.	Go to Sanity.io → create a new project.
	2.	Connect GitHub if you want auto-deploys for your apps/cms/.
	3.	Run in your CMS app:
  ```
  cd apps/cms
  npx sanity init
  ```
  •	Link to existing project or create a new one.

	4.	Deploy your Sanity Studio via:
	•	Sanity Hosting (sanity deploy) → gives you a free .sanity.studio domain.
	•	Or Vercel (point apps/cms/) for custom domain hosting.
	5.	Save project ID + dataset name → add to .env in web/frontend/backend.

### Firebase (Auth + DB + Hosting if needed)

	1.	Go to Firebase Console.
	2.	Create a project → add Web App.
	3.	Copy the Firebase SDK config → put it in .env for your frontend.
	4.	Enable products:
	•	Auth → email/password, Google, etc.
	•	Firestore / Realtime DB (if needed).
	•	Storage for images/files.
	•	Hosting (only if you want Firebase to host something, otherwise Vercel is fine).
	5.	Deploy with:
  ```
  firebase login
  firebase init
  firebase deploy
  ```
  
### Push Changes to CMS Repository

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Verify your remote:

```bash
git remote -v
```

If the remote is missing or incorrect, add it with:

```bash
git remote add origin git@github.com:your-username/your-cms-repo.git
```

Replace `your-username/your-cms-repo` with your actual GitHub path.

For the backend repo to push:

```
git subtree push --prefix apps/api api main
```

---

## 🌐 Deployment

	•	Frontend (web) → Vercel
	•	Backend (API) → [Vercel Functions / Render]
	•	CMS (Sanity) → [Sanity.io Managed Hosting]
	•	DNS/CDN → [Cloudflare]
	•	Services → [Firebase]
---

## Deployment Notes

- The site is deployed via Vercel, using `./` as the project root.
- Configure all required environment variables via Vercel’s dashboard.
- No Sanity Studio is hosted here — only Sanity integration (via its API).
- The Cloudflare-managed domain points to Vercel.

---

## Additional Tips

- Keep `.env` files out of Git to protect secrets.

- Use `.gitignore` to exclude `node_modules/`, `.env`, and other local files.

- Use pnpm workspaces to manage dependencies across the monorepo.
- Shared UI components and utilities may live in /packages.
- For CMS edits or schema changes, use the Sanity Studio project, managed separately.
---

## 📦 Environments

	•	.env → Local Development
	•	.env.staging → Staging (preview deploys)
	•	.env.production → Production (live site)
---

## 🤝 Contributing
	1.	Fork the repo
	2.	Create a feature branch
	3.	Commit changes with Conventional Commits
	4.	Open a PR 🚀
---

Happy coding! 🚀
