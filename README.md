# Personal Profile Website

A modern, responsive personal profile website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and glass-morphism effects
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js for optimal performance
- 🎯 **SEO Optimized**: Proper metadata and Open Graph tags
- 🎭 **Smooth Animations**: Hover effects and smooth transitions
- 🎨 **Easy to Customize**: All content is stored in a separate data file
- 🚀 **Vercel Ready**: Optimized for deployment on Vercel

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Personal Information

Edit `src/data/profile.ts` to update all your information:

- Your name, title, and bio
- Profile picture initials
- Experience statistics
- Education and current role
- Skills and technologies
- Social media links
- Contact information

**Example:**

```typescript
export const profileData: ProfileData = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio description',
  // ... update all other fields
};
```

### 2. Colors and Theme

The website uses a purple-pink gradient theme. To change colors:

- Update the gradient classes in `src/app/page.tsx`
- Modify the custom CSS variables in `src/app/globals.css`

### 3. Content Sections

The website includes:

- **Hero Section**: Your name, title, and main call-to-action buttons
- **About Section**: Your story, experience, and achievements
- **Skills Section**: Your technical skills organized by category
- **Contact Section**: Call-to-action for potential clients/employers

### 4. Social Links

Update the social media links in `src/data/profile.ts`:

- GitHub
- LinkedIn
- Twitter
- Email

### 5. Metadata

Update `src/app/layout.tsx` with:

- Your name in the title
- Your description
- Relevant keywords
- Open Graph information

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout and metadata
│   └── globals.css       # Global styles and custom CSS
├── data/
│   └── profile.ts        # All profile content and data
├── public/               # Static assets
└── ...
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **ESLint** - Code linting

## Deployment to Vercel

### Quick Deploy (Recommended)

1. **Push your code to GitHub**
2. **Go to [Vercel](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Vercel will automatically detect Next.js and deploy**

### Manual Deploy

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your project

### Environment Variables

No environment variables are required for basic deployment.

### Custom Domain

After deployment, you can add a custom domain in your Vercel project settings.

## Other Deployment Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization Examples

### Change Profile Picture

Replace the initials div with an actual image in `src/app/page.tsx`:

```tsx
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={128}
  height={128}
  className="rounded-full"
/>
```

### Add More Sections

You can easily add new sections like:

- Portfolio/Projects
- Blog posts
- Testimonials
- Resume download

### Modify Skills

Update the skills arrays in `src/data/profile.ts` to match your expertise.

## Performance Optimization

- **Built with Next.js 15** for optimal performance
- **Tailwind CSS** for minimal CSS bundle size
- **Optimized images** with Next.js Image component
- **SEO ready** with proper metadata

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**
