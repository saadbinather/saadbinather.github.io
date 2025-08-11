# Saad Bin Ather - Portfolio

A responsive, dark-mode portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark mode with smooth animations
- 📱 Fully responsive design
- ✉️ Contact form with Nodemailer backend
- 🚀 Deployed on GitHub Pages

## Setup Instructions

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### 2. Backend Setup (Email Functionality)

#### Step 1: Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Copy the generated password

#### Step 2: Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Important:** Use your actual Gmail address and the app password you generated, NOT your regular Gmail password.

#### Step 3: Start the Backend Server

```bash
# Start the backend server (in a separate terminal)
npm run server

# Or run both frontend and backend together
npm run dev
```

### 3. Deployment

```bash
# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── App.js         # Main app component
│   └── index.css      # Global styles
├── public/            # Static assets
├── server.js          # Express backend with Nodemailer
├── .env              # Environment variables
└── package.json      # Dependencies and scripts
```

## Contact Form

The contact form now uses a custom backend with Nodemailer to send emails directly to `saadbinatherr@gmail.com`. When someone submits the form:

1. The message is sent to your Gmail address
2. You receive a beautifully formatted HTML email
3. The form shows a success message to the user

## Technologies Used

- **Frontend:** React, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Express.js, Nodemailer
- **Deployment:** GitHub Pages

## Troubleshooting

### Email Not Sending

- Check that your Gmail app password is correct
- Ensure 2-Factor Authentication is enabled
- Verify the `.env` file has the correct credentials
- Check that the backend server is running on port 5000

### CORS Issues

- The backend includes CORS middleware to allow requests from the frontend
- If you're still having issues, check that both servers are running

## License

MIT License
