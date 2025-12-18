# Data Analytics Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase data analytics projects and skills.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between dark and light themes
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Vite for optimal loading speeds
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Routing**: React Router DOM
- **UI Components**: Headless UI

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd data-analytics-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── ProjectCard.tsx # Project display card
├── contexts/           # React contexts
│   └── DarkModeContext.tsx
├── hooks/              # Custom React hooks
│   └── useDarkMode.ts
├── sections/           # Page sections
│   ├── About.tsx       # About section
│   ├── Blog.tsx        # Blog section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer section
│   ├── Hero.tsx        # Hero/landing section
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx            # App entry point
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.ts`. You can modify the primary and dark color schemes:

```typescript
colors: {
  primary: {
    // Custom primary colors
  },
  dark: {
    // Custom dark theme colors
  }
}
```

### Content
Update the following files to customize your portfolio content:
- `src/sections/Hero.tsx` - Personal introduction and main headline
- `src/sections/About.tsx` - About section content
- `src/sections/Projects.tsx` - Your projects and case studies
- `src/sections/Skills.tsx` - Technical skills and expertise
- `src/sections/Contact.tsx` - Contact information

### Resume
Replace `public/resume.pdf` with your own resume file.

## 📱 Sections

- **Hero** - Eye-catching introduction with call-to-action
- **About** - Personal background and professional summary
- **Skills** - Technical skills and tools expertise
- **Projects** - Showcase of data analytics projects
- **Blog** - Articles and insights (optional)
- **Contact** - Contact form and social links

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact form on the website or via email.

---

Built with ❤️ using React and TypeScript