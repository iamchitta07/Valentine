# Valentine - A Digital Valentine's Day Experience 💝

A beautiful, interactive React-based web application designed to celebrate Valentine's Day. This project features smooth animations, draggable elements, and a heartfelt countdown timer to cherish special moments.

## ✨ Features

-   **Interactive Landing Page**: A welcoming introduction with smooth transitions.
-   **"Moments" Gallery**: A curated display of photo memories with descriptions.
-   **Draggable Photo Cards**: An interactive "End Page" where users can drag and toss photo cards around the screen.
    -   *Tech Note*: Uses `framer-motion` for physics-based gestures and `useMotionValue` for stable, glitch-free dragging.
-   **Relationship Timer**: A live countdown timer showing the duration of togetherness in Days, Hours, and Minutes.
-   **Responsive Design**: optimized for various screen sizes.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
-   **Animations**:
    -   [Framer Motion](https://www.framer.com/motion/) (Gestures, layout transitions)
    -   [GSAP](https://greensock.com/gsap/) (Complex timeline animations)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (Latest LTS recommended)
-   npm or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/iamchitta07/Valentine.git
    cd Valentine
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    bun install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    bun dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate the static files in the `dist` directory.

## 📂 Project Structure

-   `src/components`: Contains all React components (Home, Main, EndPage, etc.).
-   `src/constants.ts`: Stores static data like image URLs and messages.
-   `src/types.ts`: TypeScript interfaces and type definitions.

## 🤝 Contributing

Feel free to fork this project and customize it for your own special someone!

## 🧑‍💻 Author

- [Chittajit Nath](https://github.com/iamchitta07)
