# Vercel Deployment Guide

This guide will help you deploy your Omega Event website to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project pushed to GitHub, GitLab, or Bitbucket
3. Cloudinary video URL (if using Cloudinary for videos)

## Step 1: Prepare Your Repository

Make sure your code is committed and pushed to your Git repository:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   cd omega-web
   vercel
   ```

4. Follow the prompts and deploy to production:
   ```bash
   vercel --prod
   ```

## Step 3: Configure Environment Variables

After deployment, configure your environment variables:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:

   **Variable Name**: `VITE_CLOUDINARY_VIDEO_URL`
   
   **Value**: Your Cloudinary video URL
   
   Example: `https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/f_auto,q_auto/YOUR_VIDEO_ID.mp4`

4. Make sure to add it for all environments (Production, Preview, Development)
5. Click **"Save"**
6. **Redeploy** your project for changes to take effect

## Step 4: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Step 5: Verify Deployment

1. Visit your deployment URL (provided by Vercel)
2. Test all routes to ensure SPA routing works correctly
3. Check that the video loads from Cloudinary
4. Test on mobile and desktop devices

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)
- Check build logs in Vercel dashboard

### Routes Not Working

- The `vercel.json` file should handle SPA routing automatically
- If routes still don't work, verify the `rewrites` configuration

### Environment Variables Not Working

- Make sure variable names start with `VITE_` (required for Vite)
- Redeploy after adding environment variables
- Check that variables are added to the correct environment (Production/Preview/Development)

### Video Not Loading

- Verify your Cloudinary URL is correct
- Check that the environment variable is set correctly
- Ensure the video is publicly accessible on Cloudinary

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to your main/master branch
- **Preview**: Every push to other branches or pull requests

## Performance Tips

1. **Optimize Images**: Use Cloudinary for image optimization
2. **Enable Compression**: Vercel automatically enables gzip/brotli
3. **CDN**: Vercel uses a global CDN automatically
4. **Caching**: Static assets are cached automatically (configured in `vercel.json`)

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

