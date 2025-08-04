# Saad Bin Ather - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my journey as a full-stack developer and CS student. Features smooth animations, dark mode support, and a sleek design.

## 🚀 Features

- **Responsive Design** - Looks great on all devices
- **Dark Mode Toggle** - Seamless light/dark theme switching
- **Smooth Animations** - Powered by Framer Motion
- **Interactive UI** - Hover effects and micro-interactions
- **Contact Form** - Functional contact form (frontend ready)
- **Performance Optimized** - Fast loading and smooth scrolling
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel/Netlify

## 🎨 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal introduction and highlights
3. **Skills** - Technical skills organized by categories
4. **Experience** - Work experience and internships
5. **Projects** - Showcase of notable projects with filters
6. **Certifications** - Academic achievements and certifications
7. **Contact** - Contact form and social links

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/saadbinather/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   - Visit `http://localhost:3000`
   - The app will automatically reload when you make changes

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

## 🎯 Customization

### Colors & Branding

- Edit `tailwind.config.js` to customize the color scheme
- Update the primary colors in the `extend.colors` section

### Content

- Update personal information in each component file
- Modify project data in `src/components/Projects.js`
- Update skills in `src/components/Skills.js`

### Animations

- Customize animations in component files using Framer Motion
- Adjust animation timing and effects as needed

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The website includes a sophisticated dark mode implementation:

- Automatic detection of system preference
- Manual toggle with smooth transitions
- Persistent user preference storage
- Optimized for both light and dark themes

## 🔗 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure any necessary redirects

### Manual Deployment

1. Run `npm run build`
2. Upload the `build` folder contents to your web server

## 📧 Contact Form

The contact form is ready for backend integration. To make it functional:

1. **Backend Integration**

   - Set up a backend endpoint (Node.js/Express, PHP, etc.)
   - Handle form submissions and email sending
   - Add proper validation and security measures

2. **Third-party Services**

   - Use services like Formspree, Netlify Forms, or EmailJS
   - Update the form action/endpoint in `Contact.js`

3. **Environment Variables**
   - Add API keys and endpoints to `.env` file
   - Update form submission logic accordingly

## 🧑‍💻 About the Developer

**Saad Bin Ather**

- 2nd-year Computer Science Student at FAST NUCES Lahore
- Full-Stack Developer with expertise in React, Next.js, Node.js
- Passionate about AI applications and modern web development

**Connect with me:**

- 📧 Email: saadbinather@gmail.com
- 💼 LinkedIn: [saad-bin-ather](https://www.linkedin.com/in/saad-bin-ather-b11b2b313/)
- 🐱 GitHub: [saadbinather](https://github.com/saadbinather)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, I'd love to see them.

## ⭐ Show Your Support

If you like this portfolio template, please give it a star! It helps me know that people find it useful.

---

**Built with ❤️ and ☕ by Saad Bin Ather**
