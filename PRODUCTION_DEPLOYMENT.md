# Production Deployment Guide

## ✅ Build Status

Your application has been built successfully for production!

**Build Output:** `dist/` directory

---

## 📦 Build Features

### Optimizations Applied:
- ✅ Code minification (esbuild)
- ✅ Code splitting (vendor, sanity chunks)
- ✅ Gzip compression
- ✅ Brotli compression
- ✅ Asset optimization
- ✅ Tree shaking

### Build Statistics:
- Main bundle: ~630 KB (gzip: ~202 KB)
- Sanity bundle: ~109 KB (gzip: ~35 KB)
- Vendor bundle: ~47 KB (gzip: ~17 KB)
- CSS: ~95 KB (gzip: ~17 KB)

---

## 🚀 Deployment Checklist

### Pre-Deployment

- [x] Build completed successfully
- [ ] **Environment Variables Set**
  - `VITE_SANITY_PROJECT_ID=h7hkmgzh` (fallback already in code)
  - `VITE_SANITY_DATASET=production` (fallback already in code)
  
- [ ] **Sanity CORS Configuration**
  - Go to https://www.sanity.io/manage
  - Select project: `h7hkmgzh`
  - Navigate to: API → CORS Origins
  - Add your production domain(s):
    ```
    https://your-production-domain.com
    https://www.your-production-domain.com
    ```

- [ ] **Sanity Studio Deployed** (optional but recommended)
  ```bash
  npm run sanity:deploy
  ```
  This deploys the CMS interface to Sanity's hosting.

### Test Production Build Locally

```bash
# Test the production build
npm run preview

# Or specify a port
npm run preview -- --port 4173
```

Visit: `http://localhost:4173`

### Deployment Platforms

#### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Or connect via GitHub for automatic deployments
```

**Environment Variables in Vercel:**
- `VITE_SANITY_PROJECT_ID`: `h7hkmgzh`
- `VITE_SANITY_DATASET`: `production`

#### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Environment Variables in Netlify:**
- Go to Site Settings → Environment Variables
- Add: `VITE_SANITY_PROJECT_ID` = `h7hkmgzh`
- Add: `VITE_SANITY_DATASET` = `production`

#### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

#### Option 4: Traditional Web Server (Nginx/Apache)
1. Upload `dist/` folder contents to your web server
2. Configure server to serve `index.html` for all routes (SPA routing)
3. Ensure compression is enabled (gzip/brotli)
4. Set up SSL certificate

**Nginx Configuration Example:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🔍 Post-Deployment Verification

### 1. Test All Pages
- [ ] Homepage loads
- [ ] Blog page loads and shows posts from Sanity
- [ ] Individual blog posts load
- [ ] Help center loads
- [ ] All navigation links work
- [ ] Contact forms work

### 2. Test Sanity Integration
- [ ] Blog posts appear from Sanity CMS
- [ ] Images load correctly
- [ ] Rich text content renders properly
- [ ] No CORS errors in browser console

### 3. Performance Check
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] JavaScript bundles properly loaded

### 4. SEO Check
- [ ] Meta tags present
- [ ] Open Graph tags working
- [ ] Sitemap accessible
- [ ] Robots.txt configured

---

## 🔧 Environment Variables

### For Local Development
Create `.env` file:
```env
VITE_SANITY_PROJECT_ID=h7hkmgzh
VITE_SANITY_DATASET=production
```

### For Production
Set in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Others: Platform-specific environment variable settings

**Note:** If environment variables are not set, the app will use fallback values:
- Project ID: `h7hkmgzh`
- Dataset: `production`

---

## 📊 Build Output

The `dist/` folder contains:
- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and images
  - Chunked JavaScript bundles
  - Optimized CSS
  - Compressed assets (.gz and .br files)

**Deploy everything in the `dist/` folder to your hosting platform.**

---

## 🐛 Troubleshooting

### "Posts not showing"
1. Check Sanity CORS origins include your production domain
2. Verify `VITE_SANITY_PROJECT_ID` is set correctly
3. Check browser console for errors
4. Verify posts are published in Sanity Studio

### "404 errors on routes"
- Ensure your server is configured for SPA routing
- All routes should serve `index.html`

### "Build fails"
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript/ESLint errors

### "Images not loading"
- Verify image URLs in browser DevTools
- Check Sanity CDN is accessible
- Ensure images are uploaded to Sanity

---

## 📝 Quick Deploy Commands

### Build & Preview
```bash
npm run build
npm run preview
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

### Deploy Sanity Studio
```bash
npm run sanity:deploy
```

---

## ✅ Production Ready Checklist

- [x] Application builds without errors
- [ ] Environment variables configured
- [ ] Sanity CORS origins set
- [ ] Production build tested locally
- [ ] Deployed to hosting platform
- [ ] All pages tested
- [ ] Sanity integration verified
- [ ] Performance verified
- [ ] SSL certificate installed
- [ ] Custom domain configured (if applicable)

---

## 🎉 You're Ready to Deploy!

Your application is built and optimized for production. Follow the deployment steps above for your chosen platform.

**Need help?** Check the troubleshooting section or refer to your hosting platform's documentation.
