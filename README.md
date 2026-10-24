# Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Sanity Studio v4** CMS.

---

## 🚀 Getting Started

Follow these steps to run the website locally:

### 1. Navigate to the Project Directory
```bash
cd portfolio
```

### 2. Check Node.js Version
Make sure Node.js (version 18 or 20 recommended) and npm are installed:
```bash
node -v
npm -v
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the root directory (you can copy `.env.example`):
```bash
cp .env.example .env.local
```

Set the following variables in `.env.local`:
```env
NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_STUDIO_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_API_VERSION=2026-10-24
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
```

### 5. Start the Development Server
```bash
npm run dev
```

### 6. View the Application
- **Main Portfolio:** Open [http://localhost:3000](http://localhost:3000) in your browser.
- **Sanity Studio CMS:** Open [http://localhost:3000/studio](http://localhost:3000/studio) to manage site content.

To stop the server at any time, press `Ctrl + C` in your terminal.

---

## 🛠 Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` with hot-reloading. |
| `npm run build` | Compiles and builds an optimized production version of the app. |
| `npm run start` | Runs the compiled production build locally (requires `npm run build` first). |
| `npm run lint` | Runs Next.js ESLint checks to identify and catch syntax or type issues. |

---

## 🗂 Project Structure

```text
portfolio/
├── components/           # Reusable client UI components
│   ├── About.tsx         # About Me section with bio & portrait
│   ├── ContactMe.tsx     # Contact form & contact details
│   ├── ExperienceCard.tsx# Individual experience cards
│   ├── Header.tsx        # Top navigation bar with social icons
│   ├── Hero.tsx          # Landing section with typewriter effect
│   ├── Projects.tsx      # Case studies carousel
│   ├── Skill.tsx         # Individual skill bubble
│   ├── Skills.tsx        # Grid of skills with hover proficiency
│   └── WorkExperience.tsx# Horizontal scrolling work experience list
├── public/               # Static assets (images, logos, fonts)
│   └── avatars/          # Local fallback images and brand icons
├── src/
│   ├── app/              # Next.js 15 App Router
│   │   ├── api/          # Route handlers for Sanity data (/api/skills, etc.)
│   │   ├── studio/       # Embedded Sanity Studio CMS (/studio)
│   │   ├── globals.css   # Global styling and Tailwind directives
│   │   ├── layout.tsx    # Root HTML layout and font loading
│   │   └── page.tsx      # Main portfolio homepage (Server Component)
│   └── sanity/           # Sanity CMS configuration & schemas
│       ├── lib/          # Sanity client & image URL helper
│       └── schemaTypes/  # Schemas (pageInfo, experience, project, skill, social)
├── utils/                # Data-fetching helper utilities for Sanity queries
├── env.js                # Sanity environment variable loader
├── sanity.config.js      # Sanity Studio root configuration
└── typings.d.ts          # TypeScript type definitions for Sanity data
```

---

## 🎨 Managing Content in Sanity Studio

The portfolio dynamically pulls content from **Sanity.io**.

1. Start your dev server (`npm run dev`).
2. Visit [http://localhost:3000/studio](http://localhost:3000/studio).
3. Log in with your Sanity credentials.
4. Update or add documents:
   - **PageInfo**: Name, role, hero photo, profile picture, bio summary, and contact info.
   - **Experience**: Companies, roles, date ranges, descriptions, and technology badges.
   - **Project**: Case studies, project summaries, screenshots, and live demo links.
   - **Skill**: Tool logos and titles (Figma, React, Tailwind, etc.).
   - **Social**: Social media links (LinkedIn, GitHub, etc.) displayed in the header.
5. Click **Publish** in Sanity. The homepage revalidates and displays updated data automatically.

---

## 🔧 Troubleshooting

### Port 3000 is already in use
If another process is using port 3000, Next.js will automatically try port 3001 (`http://localhost:3001`). To free up port 3000 on macOS/Linux:
```bash
lsof -ti :3000 | xargs kill -9
```

### Sanity images not displaying
Ensure image assets uploaded to Sanity Studio have finished uploading and the document is **Published** (not just saved as a Draft).

### Verify Build
To test if the project compiles cleanly for production:
```bash
npm run lint
npm run build
```
