# 🚀 Landing Page Portfolio Boilerplate

A modern, high-performance landing page boilerplate built with React, TypeScript, and Tailwind CSS. Perfect for freelancers, agencies, and creative professionals looking to showcase their work with style.


## ✨ Features

- 🎨 **Dark Mode by Default** - Sleek, modern dark theme optimized for professional portfolios
- 🎬 **Cinematic Loading Animation** - Engaging 2.5s intro animation with logo reveal
- 🌊 **Parallax Scrolling** - Smooth parallax effects on hero section for depth and motion
- 🎯 **SF Pro Display Typography** - Premium Apple font for headlines and headings
- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimized production builds
- 📱 **Fully Responsive** - Pixel-perfect across all devices and screen sizes
- 🎭 **Framer Motion Animations** - Buttery smooth animations and transitions
- 🧩 **shadcn/ui Components** - Beautiful, accessible UI components out of the box
- 🎨 **Tailwind CSS** - Utility-first styling with custom design system
- 📊 **TanStack Query** - Powerful async state management
- 🗄️ **Drizzle ORM + Neon DB** - Type-safe database with PostgreSQL

## 🎯 Perfect For

- Freelancers showcasing their portfolio
- Creative agencies displaying projects
- Developers building personal brands
- Designers presenting their work
- Marketing professionals

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.6.3** - Type-safe development
- **Vite 5.4.20** - Next-generation frontend tooling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.13.1** - Production-ready animation library
- **Wouter 3.3.5** - Lightweight routing solution

### Backend
- **Express 4.21.2** - Minimal and flexible Node.js web framework
- **Drizzle ORM 0.39.1** - TypeScript ORM for SQL databases
- **Neon Database** - Serverless PostgreSQL

### UI Components
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful & consistent icons

### Forms & Validation
- **React Hook Form 7.55.0** - Performant form handling
- **Zod 3.24.2** - TypeScript-first schema validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/JustAsabre/Landing-Page-Portfolio.git
cd Landing-Page-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env file in the root directory
cp .env.example .env
# Add your database connection string and other variables
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5000
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   └── examples/ # Example components
│   │   ├── pages/        # Page components (Home, Portfolio, About, Contact)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and helpers
│   ├── public/           # Static assets
│   └── index.html        # HTML entry point
│
├── server/               # Backend Express application
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── vite.ts          # Vite middleware
│
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema
│
└── attached_assets/     # Project assets and images
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
theme: {
  extend: {
    colors: {
      // Add your brand colors here
    }
  }
}
```

### Fonts
The project uses SF Pro Display for headlines. Update in `client/src/index.css`:
```css
:root {
  --font-display: -apple-system, BlinkMacSystemFont, 'SF Pro Display', ...;
}
```

### Content
- Update hero content in `client/src/components/HeroSection.tsx`
- Modify portfolio items in `client/src/pages/Portfolio.tsx`
- Edit about section in `client/src/pages/About.tsx`
- Customize contact form in `client/src/pages/Contact.tsx`

## 📦 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` directory.

## 🚢 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### Docker
```bash
docker build -t landing-page-portfolio .
docker run -p 5000:5000 landing-page-portfolio
```

## 🎯 Key Features Explained

### Loading Animation
A cinematic 2.5-second loading sequence featuring:
- Animated RI logo with scale and fade effects
- Gradient loading bar with progress animation
- Smooth reveal transition using Framer Motion

### Parallax Scrolling
Implemented using Framer Motion's `useScroll` and `useTransform`:
- Background moves at different speed than foreground
- Smooth opacity and scale transitions
- Performance-optimized with GPU acceleration

### Dark Mode
Default dark theme with:
- Carefully chosen color palette for readability
- Consistent styling across all components
- Optimized contrast ratios for accessibility

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - For the amazing utility-first framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Lucide Icons](https://lucide.dev/) - For the icon set

## 📧 Contact

For questions or support, please open an issue or reach out through the contact form on the live site.

---

<div align="center">
  <strong>Built with ❤️ using React, TypeScript, and Tailwind CSS</strong>
</div>

<div align="center">
  <sub>Star ⭐ this repository if you find it helpful!</sub>
</div>
