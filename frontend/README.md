# React + Vite
# FRONTEND
# PROJECT SETUP
cd frontend - > run npm install to install all dependencies

# FOLLOW THE STEPS BELOW 

1. npm create vite@latest frontend -- --template react
   cd my-project

2. npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

3.content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

4. index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

5. npm create-router-dom

5. npm run dev 
