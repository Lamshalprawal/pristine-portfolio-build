# Pristine Portfolio

A modern, responsive portfolio website built with cutting-edge technologies to showcase professional work and achievements.

## Features

- **Animated Statistics**: CountUp animations for key metrics
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Performance**: Fast loading with Vite build system

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Modern UI library
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Motion** - Smooth animations and transitions

## Getting Started

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd pristine-portfolio-build

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── lib/                # Utility functions and configurations
├── pages/              # Page components
└── hooks/              # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The project can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Simply run `npm run build` and deploy the `dist` folder to your hosting service of choice.