# Project Folder Structure

This project adopts a **Feature-Based Architecture** to ensure high modularity, scalability, and ease of maintainability. Below is the detailed breakdown of the directories.

## Root Directory

```text
Portofolio/
├── .github/              # CI/CD Workflows
│   └── workflows/
│       ├── lint.yml
│       └── build.yml
├── docs/                 # Engineering Documentation
│   ├── architecture.md
│   ├── design-system.md
│   ├── folder-structure.md
│   ├── roadmap.md
│   ├── deployment.md
│   ├── project-showcase.md
│   └── coding-standards.md
├── public/               # Static assets (images, icons)
├── src/                  # Application source code
└── standard config files (.gitignore, package.json, tsconfig.json, etc.)
```

## Source Code (`src/`)

### `src/app/`

Contains the Next.js 15 App Router pages, layout configurations, API route handlers, and global metadata settings.

### `src/components/`

Contains generic, highly reusable UI components that do not belong to any specific feature (e.g. `Button`, `Input`, `Skeleton`, `Badge`). These are styled atomic elements.

### `src/features/`

Feature-specific modules containing their own business logic, hooks, types, and presentation layers.
Each feature (e.g., `hero`, `about`, `projects`, `skills`, `contact`, `github`) contains:

- `components/`: Feature-specific subcomponents.
- `hooks/`: Custom hooks dedicated to this feature.
- `types/`: Domain TypeScript type definitions.
- `logic/`: Calculations, API transformers, or utilities specific to the feature.
- `data/`: Extracted copy or data structures unique to this feature.

### `src/hooks/`

Shared, application-wide React hooks (e.g. `useScrollDirection`, `useWindowSize`).

### `src/lib/`

Configuration and client wrappers for external libraries (e.g. `github.ts` client setup).

### `src/utils/`

Pure, side-effect-free helper functions (e.g., date formatters, unit converters, string helpers).

### `src/config/`

Global configuration files containing static app variables, links, and constant metadata.

### `src/constants/`

Constant copy configurations used across multiple layout structures.

### `src/types/`

Shared type definitions used across multiple features.

### `src/styles/`

Global styling overrides, CSS custom properties, and Tailwind config extensions.

### `src/data/`

Decoupled static data layer. This is the single source of truth for portfolio content:

- `projects.ts`
- `skills.ts`
- `education.ts`
- `experience.ts`
- `social.ts`
- `certificates.ts`
- `achievements.ts`
- `learning.ts`
