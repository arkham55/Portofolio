# Coding Standards & Architecture Guidelines

This project follows strict engineering guidelines to maintain high code readability, accessibility, and architectural separation.

## 🧱 Architectural Patterns

### 1. Separation of Concerns (UI vs. Data)
- **Data Layer**: All page copy, skills arrays, project summaries, and achievements statistics must reside in `src/data/*.ts`.
- **UI Components**: UI components import data configurations dynamically. Absolutely no raw arrays or local details are hardcoded directly within layout templates.

### 2. Feature-Based Directory Structure
Major modules are self-contained under `src/features/[feature_name]/`:
- `components/`: UI sub-atoms or sections.
- `hooks/`: Feature-specific logic hooks (e.g. `useGithubStats`).
- `types/`: Domain-specific TypeScript declarations.
- `data/`: Extracted static properties or configs unique to the feature.
- `logic/`: Business logic rules, calculations, or formatting functions.

### 3. Reusable Generic Components
Standard structural elements (e.g., standard buttons, inputs, skeletons) are placed in `src/components/` and configured via Tailwind custom definitions for standard style tokens.

## 🧑‍💻 Coding Practices

### Clean Code & DRY
- Prefer composition over duplication.
- Keep custom hooks focused on a single responsibility.
- Write explanatory comments for non-trivial CSS rules, Framer Motion properties, or dynamic logic.

### TypeScript Strictness
- Define type safety variables; do not bypass with `any`.
- Define clear interfaces for all component prop structures.

### Accessibility (WCAG Compliance)
- Maintain high contrast ratios for text.
- Use explicit descriptive labels (`aria-label`, `alt` tags on images, proper button roles).
- Support standard keyboard controls.
