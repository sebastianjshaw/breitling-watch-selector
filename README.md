# Breitling watch selector

React + TypeScript + Vite prototype (filters, modal detail, infinite scroll).

## GitHub Pages

The workflow `.github/workflows/deploy-github-pages.yml` deploys on every push to `main`.

### `Failed to create deployment (status: 404)`

GitHub is not allowing Actions to publish until Pages is wired to this workflow.

1. Open **[Settings → Pages](https://github.com/sebastianjshaw/breitling-watch-selector/settings/pages)** for the repo.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch” and not “None”).
3. Go to **Actions**, open the **latest** workflow run on `main`, and use **Re-run all jobs** (or push a new commit).

Errors tied to an **old commit SHA** or **`deploy-pages@v4`** in the log are usually from an **earlier failed run** before the workflow was updated. Always check the **most recent** run after `main` is up to date.

Live URL (after a successful deploy): `https://sebastianjshaw.github.io/breitling-watch-selector/`

---

## React + TypeScript + Vite

This project uses the standard Vite React template. Original template notes:

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
