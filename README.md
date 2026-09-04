# Vivek Kumar Rai — Developer OS Portfolio

A modern, high-performance, data-driven **Developer Workspace Operating System Portfolio** for **Vivek Kumar Rai**, Aspiring Software Engineer, Full Stack Developer, and Backend Developer.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring a sleek dark theme (`#090a0f`), glassmorphism UI, interactive telemetry, and a power-user Command Line Interface (CLI).

---

## 🚀 Design Concept & Core Identity

The portfolio is designed as an interactive **Developer Workspace OS**, departing from generic portfolio layouts while maintaining strict technical credibility and accessibility.

- **Theme**: Dark mode, glassmorphism (`backdrop-blur`), subtle glowing borders, and grid patterns.
- **Data-Driven Architecture**: All projects, experience, skills, and milestones are strictly driven by TypeScript data modules (`src/data/`), guaranteeing clean separation of content and UI.
- **100% Authenticity**: No fake metrics, artificial GitHub contribution grids, or fabricated achievements. All data is verified against resume data and official repositories.

---

## ✨ Key Features

1. **System Boot Sequence**: Lightweight 1–2 second boot sequence introducing system specs with a "Skip Intro" option (persisted via `sessionStorage`).
2. **Interactive Terminal Console**: Global shortcut (`Ctrl+K` / `Cmd+K`) or floating trigger launches an interactive CLI supporting 12 real-time commands and 1-click action pills.
3. **Verified Internship Experience**: Visual system-log detailing backend development at **Coding Arena** for **CampusWire** (REST APIs, PostgreSQL, Supabase, JWT, RLS, Groq API, Sightengine API, rate limiting, and system pipeline flow).
4. **Real Project Case Studies**:
   - 🥇 **CodeGuardianAI**: AI-powered code security platform (React.js, Node.js, OpenAI API, Google Gemini API, Groq API).
   - 🥈 **Tiffin Delivery Management System**: Full-stack food & tiffin platform (React.js, Node.js, Express.js, MongoDB, Razorpay, JWT).
   - 🥉 **InterviewIQ**: AI mock interview platform (React 19, Redux Toolkit, Node.js, Express.js, MongoDB, Groq AI llama-3.3-70b, RAG, face-api.js, jsPDF, Recharts).
5. **Categorized Tech Stack Matrix**: Organized into 7 technical areas with conservative status badges (`CORE`, `PROFICIENT`, `LEARNING`, `EXPLORING`) and interactive operational context.
6. **DSA & Algorithmic Dashboard**: Displays `ACTIVE PROBLEM SOLVER` status, topic progress checklist, and 5-step problem solving approach.
7. **Direct Contact & Verification Integration**:
   - Primary Email: `vivek01234bxr@gmail.com` (`mailto:` link + click-to-copy button emitting `EMAIL COPIED TO CLIPBOARD` toast).
   - GitHub Profile: [https://github.com/vivekrai05-sudo](https://github.com/vivekrai05-sudo)
   - LinkedIn Profile: [https://www.linkedin.com/in/vivek-kumar-rai-a167a5285/](https://www.linkedin.com/in/vivek-kumar-rai-a167a5285/)
   - LeetCode Profile: [https://leetcode.com/u/Vivek_rai1/](https://leetcode.com/u/Vivek_rai1/)
   - Official Resume: `/resume.pdf` (Opens in new tab across Hero, Navbar, Contact, and CLI).

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Utilities
- **Build Tool**: Vite 8
- **Icons**: Lucide React + Custom SVG Icons
- **Type Checking**: TypeScript (`npx tsc --noEmit`)
- **Linting**: Oxlint

---

## 💻 CLI Terminal Commands (`Ctrl+K`)

The interactive terminal supports full keyboard navigation (Up/Down arrow command history, Enter execution, Escape to close):

| Command | Output Description |
| :--- | :--- |
| `help` | Lists all available workspace CLI commands. |
| `about` | Displays Vivek's developer profile, mission, and current focus. |
| `skills` | Lists verified programming languages, backend, database, and dev tools. |
| `experience` | Outputs Coding Arena / CampusWire internship engineering log. |
| `projects` | Summarizes featured engineering projects and tech stacks. |
| `journey` | Displays milestone roadmap and key learnings. |
| `dsa` | Shows DSA problem-solving methodology and topic progress. |
| `contact` | Displays verified email, GitHub, LinkedIn, and LeetCode links. |
| `github` | Outputs official GitHub link (`https://github.com/vivekrai05-sudo`). |
| `linkedin` | Outputs official LinkedIn link (`https://www.linkedin.com/in/vivek-kumar-rai-a167a5285/`). |
| `leetcode` | Outputs official LeetCode link (`https://leetcode.com/u/Vivek_rai1/`). |
| `resume` | Displays official resume link (`/resume.pdf`). |
| `clear` | Clears terminal log buffer. |

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume.pdf                 # Official Resume PDF Document
├── src/
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, SystemStatusBar
│   │   ├── sections/             # Hero, Identity, Experience, Journey, TechStack, Projects, DSA, Contact, etc.
│   │   ├── terminal/             # InteractiveTerminal & terminalCommands
│   │   └── ui/                   # GlassCard, SystemBadge, Toast, SectionHeader, SocialIcons
│   ├── data/                     # Data modules (profile, projects, experience, skills, dsa, journey, socials)
│   ├── types/                    # TypeScript interfaces (portfolio.ts)
│   ├── App.tsx                   # Main Workspace Container
│   ├── index.css                 # Custom glassmorphic utilities & reduced-motion rules
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO optimized title, meta description & theme color
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Local Setup Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vivekrai05-sudo/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Verify TypeScript compilation**:
   ```bash
   npx tsc --noEmit
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Production Deployment (Vercel)

This repository is optimized for one-click deployment on **Vercel** or **Netlify**.

### Vercel Deployment Settings
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: `18.x` or `20.x`

Static assets located in `public/` (including `/resume.pdf`, `favicon.svg`) are served automatically at the root domain upon deployment.

---

## ♿ Accessibility & Performance

- **Keyboard Navigation**: Native tab ordering across buttons, input fields, and skill cards.
- **Escape Key Control**: Closes mobile drawer navigation and CLI terminal overlay.
- **Reduced Motion**: Supports `@media (prefers-reduced-motion: reduce)`.
- **Screen Readers**: Descriptive `aria-label` attributes on all social links, icons, and action buttons.

---

## 📄 License

© 2026 Vivek Kumar Rai. All rights reserved.
