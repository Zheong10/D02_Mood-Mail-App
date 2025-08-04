# 🚀 Day 02: MoodMail – Emotion-Based Email Generator

Welcome to Day 2 of my **30 Days 30 Apps** challenge!  
This app is called **MoodMail** – a simple yet powerful tool that generates email subject lines and emoji footers based on your current mood.

---

## 🎯 What It Does

🧠 You type in a mood like **happy**, **sad**, or **nervous**, and the app:

- Generates a creative **email subject line**
- Adds a **mood-based emoji footer**
- Updates instantly as you change your mood

---

## 🛠 Tech Stack

- ✅ React + Vite (TypeScript)
- ✅ Tailwind CSS
- ✅ ShadCN UI Components
- ❌ Firebase (Coming in Day 3)

---

## 💡 What I Learned

- Using `useState()` for input state management
- Mapping input moods to specific outputs using conditional logic
- Normalizing strings with `.toLowerCase()` and `.includes()`
- Clean file structure with reusable components
- Conditional rendering with `if / else if / else`

---

## 🧪 Bonus Features (Tasks for Students)

- Add moods like `excited`, `angry`, or `relaxed`
- Display motivational quotes based on mood
- Add today’s date in the subject using JavaScript's `Date()` object
- Add “Copy to Clipboard” functionality for subject and footer

---

## 🎓 Interview Readiness

This app helps demonstrate:

- Controlled components & form handling in React
- Basic string manipulation and input validation
- Conditional rendering with clean UI design
- Real-world logic mapping based on user input

---

## 🙌 Instructor Credit

This challenge is guided by **[CodeJavid](https://www.linkedin.com/in/codejavid/)**.  
Thanks for the amazing guidance and practical UI building insights!

---


## 📁 Folder Structure

```bash
MoodMail-App/
├── src/
│   ├── components/
│   │   └── MoodForm.tsx
│   ├── App.tsx
│   ├── main.tsx
├── public/
├── index.html
├── tailwind.config.ts
├── README.md
└── ...







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

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

export default tseslint.config([
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
