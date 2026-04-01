# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DigiTools — Premium Digital Tools Marketplace

Welcome to DigiTools — a small React + Vite demo marketplace that showcases a curated collection of premium digital products (resume builders, portfolio tools, AI assistants and more). This project demonstrates a clean product catalog with a cart, toast notifications, and responsive UI built with Tailwind CSS and DaisyUI.

**Quick Links**:

- Demo data: `public/data.json`
- Main UI: `src/App.jsx`, `src/components/tools/ToolsSection.jsx`

**Technologies**

- **React.js**: UI library used for components and state management.
- **Vite**: Dev server and build tooling.
- **Tailwind CSS & DaisyUI**: Styling and UI utilities.
- **React-Toastify**: User-friendly toast notifications for add/remove/checkout actions.
- **Axios**: Fetch product JSON from `public/data.json`.

**3 Key Features**

- **Product Catalog**: Browse 10 curated digital products with icons, features, pricing, and badges. (Data in `public/data.json`.)
- **Cart & Checkout**: Add/remove products to the cart, see live cart count in the Navbar, and clear the cart with "Proceed To Checkout".
- **Polished UX**: Button-level feedback ("Added to cart"), toasts for actions, and responsive layout across screen sizes.

**Getting started**

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the app (Vite will print the local URL, usually `http://localhost:5173`).

**Project structure (high level)**

- `public/data.json` — product data (10 items)
- `src/components/tools/Cards.jsx` — product cards and Buy button
- `src/components/tools/Cart.jsx` — cart UI and Remove / Checkout
- `src/components/Navbar.jsx` — header and cart badge
- `src/App.jsx` — app state (cart) and toast container

If you want additional README sections (screenshots, deployment instructions, license, or contribution guidelines), tell me which ones and I will add them.
