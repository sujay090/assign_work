# GS3 Company Homepage

A modern, fully responsive homepage for the fictional MNC company "GS3" built with React.js, Vite, and Tailwind CSS. Features a dark theme, creative animations, and professional design.

## 🌟 Features

- **Modern Design**: Dark theme with professional aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Advanced Animations**: GSAP ScrollTrigger-based scroll animations
- **Interactive Components**: Animated hero text, infinite scrolling technology sections
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Component Architecture**: Modular React components for easy maintenance

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0, Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: GSAP 3.13.0 with ScrollTrigger
- **Icons**: React Icons 5.5.0
- **Typography Effects**: React Simple Typewriter 5.0.1
- **Code Quality**: ESLint with React hooks and refresh plugins

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section with animated text
│   ├── Services.jsx       # Services showcase
│   ├── WorkExamples.jsx   # Portfolio/work examples
│   ├── ClientReviews.jsx  # Testimonials and reviews
│   ├── Technologies.jsx   # Technology stack with infinite scroll
│   ├── Team.jsx          # Team section
│   ├── Contact.jsx       # Contact form and information
│   └── Footer.jsx        # Footer with links
├── App.jsx               # Main application component
├── main.jsx             # Application entry point
├── index.css            # Global styles
└── App.css              # Application-specific styles
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd assign_work
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### 🔧 Development

1. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. **Open your browser**
   - Navigate to `http://localhost:5173` (default Vite port)
   - The application will automatically reload when you make changes

### 🏗️ Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. **Preview production build locally**
   ```bash
   npm run preview
   ```
   or
   ```bash
   yarn preview
   ```

The build files will be generated in the `dist/` directory.

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI** (Optional)
   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli
   
   # Deploy to Netlify
   netlify deploy --prod --dir=dist
   ```

3. **Deploy via Netlify Website**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy
   - Or connect your GitHub repository for continuous deployment

### Deploy to Vercel

1. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🧹 Code Quality

### Linting

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Code Formatting

The project uses ESLint for code quality. Make sure to fix any linting errors before committing.

## 📱 Responsive Design

The application is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Customization

### Colors and Theme
- Update Tailwind CSS classes in components
- Modify the color palette in `tailwind.config.js` (if present)

### Animations
- GSAP animations are configured in individual components
- ScrollTrigger settings can be adjusted for different animation timings

### Content
- Update company information in respective components
- Replace placeholder images and content as needed

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **GSAP animations not working**
   - Ensure ScrollTrigger is properly registered
   - Check browser console for JavaScript errors

## 📄 License

This project is for educational/demonstration purposes. Feel free to use it as a template for your own projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
