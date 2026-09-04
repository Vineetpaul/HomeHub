# HomeHub

HomeHub is a responsive real-estate landing page built with React and Tailwind CSS. The current home page combines a navigation bar with links, a property-focused hero section, and a building image. The project is structured so additional discovery, product, testimonial, subscription, authentication, and footer sections can be added as the experience grows.

## Features

- Responsive navigation with React Router links
- Property-focused hero section with responsive layout
- Local image and logo assets
- Tailwind CSS utility styling
- Vite development server with hot module replacement
- ESLint configuration for code quality checks

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd Palace-clone
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```text
src/
├── assets/                  # Images and other static assets
├── components/              # Reusable page sections and UI components
├── Pages/                   # Login and signup page components
├── App.jsx                  # Router and page composition
├── index.css                # Tailwind CSS entry point
└── main.jsx                 # React application entry point
```

## Current Routes

| Route | Content |
| --- | --- |
| `/` | HomeHub navbar and hero section |

Additional navigation paths are defined in the navbar and can be connected to page components as those pages are implemented.

## Building for Production

```bash
npm run build
```

The generated files are placed in `dist/`. Use `npm run preview` to inspect that build locally.
