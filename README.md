# Premium Developer Portfolio

A production-grade, highly-optimized personal portfolio built with Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion, and shadcn/ui. Built specifically for internships and professional software engineering career opportunities.

Designed with a modern, minimalist aesthetic inspired by Vercel, Apple, and Linear.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Averroes098/Portofolio.git
   cd Portofolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Frontend**: React 19
- **Animations**: Framer Motion
- **Styles & Theme**: TailwindCSS (Dark/Light mode support)
- **Components**: shadcn/ui
- **Icons**: Lucide React & React Icons
- **Deployment**: Vercel

## 📂 Project Architecture
This codebase uses a **Feature-Based Architecture** combined with a decoupled data layer to maximize scalability.

```text
src/
├── app/                  # Next.js App Router layout/pages
├── components/           # Generic shared UI atoms/molecules
├── features/             # Business features (Hero, About, Projects, etc.)
├── hooks/                # Global React hooks
├── lib/                  # Library clients (GitHub API, etc.)
├── utils/                # Pure utility functions
├── config/               # Website constants and configs
├── data/                 # Static data layer (projects.ts, skills.ts, etc.)
└── styles/               # CSS configurations & themes
```

## 📜 Repository Standards
Please refer to the following documents in our repository for coding standards and guides:
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- [SECURITY.md](SECURITY.md)
- [LICENSE](LICENSE)
- [Engineering Documentation Directory](docs/)

## 🧑‍💻 Author
- **Muhammad Nafi Averroes** (Information Technology Undergraduate, Universitas Negeri Yogyakarta)
- Email: muhammadnafi.2023@student.uny.ac.id
- WhatsApp: [Chat Link](https://wa.link/ma8nja)
- GitHub: [@Averroes098](https://github.com/Averroes098)
