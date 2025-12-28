# 🚀 Portfolio | Full Stack Developer

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.26-purple)](https://www.framer.com/motion/)

A modern, responsive portfolio website showcasing my journey as a Full Stack Developer and Computer Science student specializing in Data Science & Analytics.

![Portfolio Preview](./preview.png)

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations
- **🌙 Dark/Light Theme**: Automatic theme switching with manual toggle
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance**: Built with Next.js 16 for optimal performance
- **🎭 Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **🔧 TypeScript**: Fully typed for better development experience
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI/UX
- **React Icons** - Icon library
- **Geist Font** - Modern typography
- **Custom Theme Provider** - Theme management

## 📂 Project Structure

```
my-portfolio/
├── app/
│   ├── components/
│   │   ├── Contact.tsx          # Contact section with form
│   │   ├── Education.tsx        # Education timeline
│   │   ├── FloatingMenu.tsx     # Social media floating menu
│   │   ├── IntroLoader.tsx      # Loading animation
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Projects.tsx         # Projects showcase
│   │   ├── Skills.tsx           # Skills & technologies
│   │   ├── ThemeProvider.tsx    # Theme context provider
│   │   └── Typewriter.tsx       # Typewriter animation
│   ├── assets/                  # Images and media
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── types/
│   └── global.d.ts              # TypeScript declarations
└── public/                      # Static assets
```

## 🚀 Featured Projects

### 🤖 eNivaran
**ML & Web Development | 2024**
- Smart pothole detection platform
- React + Flask + Python + Machine Learning
- Geopy integration for location services
- Firebase backend

### 🗣️ J.A.R.V.I.S
**AI & NLP | 2025**
- Multi-lingual AI chatbot
- Intelligent conversational flows
- Cross-language communication
- Advanced language processing

### 🍕 Food Wagon
**Frontend Development | 2023**
- Responsive food ordering website
- HTML, CSS, JavaScript, Bootstrap
- Intuitive user interface
- Seamless order placement

### 🎯 lakshyaSSB
**Full Stack Development | 2025**
- SSB preparation platform
- Defense aspirant resources
- Systematic preparation tools
- Practice materials

### ✅ Todo-List
**Backend Development | 2025**
- Efficient task management app
- Clean and intuitive interface
- Priority tracking
- Progress monitoring

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Souravshukla007/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors
The portfolio uses a custom color scheme defined in `app/globals.css`:

```css
.light {
  --theme-primary: #ffffff;
  --theme-secondary: #001F3D;
}

.dark {
  --theme-primary: #001F3D;
  --theme-secondary: #ffffff;
}
```

### Adding New Projects
Edit the `projects` array in `app/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    color: "#your-color",
    desc: "Project description",
    image: yourImage,
    link: "https://your-link.com",
    category: "Category | Year"
  }
];
```

### Skills Customization
Modify the `skillsData` object in `app/components/Skills.tsx` to add or remove skills.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sourav Shukla Baidya**
- Email: souravshukla097@gmail.com
- LinkedIn: [Sourav Shukla Baidya](https://www.linkedin.com/in/sourav-shukla-baidya-6bb132316/)
- GitHub: [@Souravshukla007](https://github.com/Souravshukla007)
- Instagram: [@souravshukla_51](https://www.instagram.com/souravshukla_51?utm_source=qr&igsh=d3VrbWx1ajQ0M3gz)
- X (Twitter): [@SSB_777](https://x.com/SSB_777)

---

⭐ **Star this repo** if you found it helpful!
