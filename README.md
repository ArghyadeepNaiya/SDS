# SDS (Student Data Science Community)

A modern, responsive, and interactive web application built to represent our data science community. It features beautiful UI with 3D interactions, smooth scrolling, and an organized resources library.

## 🚀 Tech Stack

This project is built using modern web development tools:
- **React 19** - UI Library
- **Vite** - Fast frontend build tool
- **React Router** - For client-side routing
- **Tailwind CSS & Vanilla CSS** - For styling, responsive design, and glassmorphism UI
- **Framer Motion** - For fluid page animations and hover effects
- **Three.js & React Three Fiber/Drei** - For the interactive 3D Brain Hologram canvas

## 📁 File & Folder Structure

```text
SDS/
├── public/                     # Static assets that don't need compilation
│   ├── brain_hologram.glb      # 3D model for the interactive brain canvas
│   └── mask.svg                # SVG mask used for the hover effect text
├── src/                        # Source code
│   ├── assets/                 # Image and SVG assets
│   │   ├── icons/              # Social and miscellaneous icons
│   │   ├── close.svg           # Mobile menu close icon
│   │   ├── menu.svg            # Mobile menu hamburger icon
│   │   └── twinPeaks-removebg.png # Main SDS Logo
│   ├── components/             # Reusable React components
│   │   ├── Brain.jsx           # Renders the 3D model with R3F
│   │   ├── FlipWords.jsx       # Animated typography component
│   │   ├── aboutus/            # About Us section component & styling
│   │   ├── contact/            # Contact Us/Footer section component & styling
│   │   ├── hero/               # Landing page Hero section with 3D background
│   │   └── navbar/             # Responsive Navbar component
│   ├── routes/                 # Pages managed by React Router
│   │   ├── Resources.jsx       # Downloadable resources library page
│   │   └── resources.css       # Resources page styling
│   ├── App.jsx                 # Main application layout component
│   ├── index.css               # Global CSS and Tailwind directives
│   └── main.jsx                # React DOM entry point and Router provider
├── .gitignore                  # Files and folders ignored by Git
├── eslint.config.js            # Linter configuration
├── index.html                  # Main HTML entry point
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite configuration
