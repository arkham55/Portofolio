# Contributing to the Portfolio Project

Thank you for contributing! To maintain clean code and a professional git log, please follow these guidelines.

## Git Branching Strategy

- **main**: Production branch (Vercel deployment target).
- **develop**: Integration branch for current Sprints.
- **feature/***: New features (e.g. `feature/hero`, `feature/github`).
- **fix/***: Bug fixes.
- **docs/***: Documentation changes.

## Conventional Commits

Please structure your commit messages as follows:

```text
<type>(<scope>): <short summary>
```

Types allowed:

- `feat`: A new user-facing feature.
- `fix`: A bug fix.
- `docs`: Documentation only changes.
- `style`: Changes that do not affect the meaning of the code (formatting, minor CSS adjustments).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Build process or auxiliary tool changes.
