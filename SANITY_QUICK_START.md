# Sanity CMS - Quick Start (5 Minutes!)

## What You Need

1. A Sanity.io account (free) - https://www.sanity.io/
2. Your blog content ready to add

## 🚀 Super Quick Setup

### 1. Create Sanity Project (2 minutes)

```bash
# Visit https://www.sanity.io/ and sign up
# Create a new project named "Invoicer Content"
# Copy your Project ID (looks like: abc123xyz)
```

### 2. Configure Your App (1 minute)

```bash
# Create .env file
cp .env.example .env

# Edit .env and add your Project ID:
# VITE_SANITY_PROJECT_ID=abc123xyz  # <- Your ID here
```

### 3. Deploy Sanity Studio (2 minutes)

```bash
# Initialize Sanity in your project
npx sanity init --project YOUR_PROJECT_ID --dataset production

# Deploy the Studio
npx sanity deploy

# Choose a studio hostname (e.g., invoicer-cms)
# This becomes: https://invoicer-cms.sanity.studio
```

### 4. Add Your First Blog Post

1. Open your Studio: `https://YOUR-STUDIO-NAME.sanity.studio`
2. Click "Blog Post" → "Create new"
3. Fill in:
   - Title: "Welcome to Our Blog"
   - Slug: Click "Generate"
   - Excerpt: "Our first blog post!"
   - Content: Write your article
   - Category: Select "Getting Started"
   - Author: Your name
   - Publish Date: Today
   - Read Time: "3 min read"
   - Tags: Add 2-3 tags
   - **Published: Toggle ON** ← Important!
4. Click "Publish"

Done! Your post is live! 🎉

---

## 📱 Access Your CMS

### Online (Recommended):
```
https://YOUR-STUDIO-NAME.sanity.studio
```

### Local Development:
```bash
npm run sanity:dev
# Opens at http://localhost:3333
```

---

## ✏️ Adding More Content

### Blog Posts:
1. Click "Blog Post" → "Create new"
2. Fill in all fields
3. Toggle "Published" to ON
4. Click "Publish"

**Pro Tip:** First post in the list becomes the featured post!

### Help Articles:
1. Click "Help Article" → "Create new"
2. Add an emoji icon (e.g., 📦, 💰, 📊)
3. Toggle "Featured" if you want it on the help page
4. Fill remaining fields
5. Publish

---

## 🎨 Rich Text Formatting

Use the editor toolbar for:
- **Bold**, *Italic*, `Code`
- Headings (H2, H3, H4)
- Bullet points and numbered lists
- Block quotes (for testimonials)
- Links to external sites
- Insert images

---

## 🔧 Important: CORS Setup

To allow your website to fetch content:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Click "API" tab
4. Go to "CORS Origins"
5. Add these origins:
   ```
   http://localhost:5174
   http://localhost:5173
   https://your-production-domain.com
   ```

---

## 📊 What Happens Next?

### Current State (Manual):
- Blog posts in `src/data/resourcesData.js` (static)
- You edit code files to add content

### After Sanity (Automatic):
- Content in Sanity CMS (dynamic)
- No code editing needed
- Anyone can add/edit content

### To Complete the Migration:

You need to update your React components to fetch from Sanity instead of static data.

**Files to Update:**
1. `src/pages/resources/BlogPage.jsx`
2. `src/pages/resources/BlogPostPage.jsx`
3. `src/pages/resources/HelpCenterPage.jsx`
4. `src/pages/resources/HelpArticlePage.jsx`
5. `src/pages/SearchResultsPage.jsx`

See `SANITY_INTEGRATION.md` for detailed code examples.

---

## ⚡ Quick Commands

```bash
# Run Sanity Studio locally
npm run sanity:dev

# Deploy Studio updates
npm run sanity:deploy

# Open Sanity project dashboard
npm run sanity:manage

# Check Sanity CLI version
npx sanity --version
```

---

## 🆘 Troubleshooting

### "Project ID not found"
- Check `.env` file has correct `VITE_SANITY_PROJECT_ID`
- Restart dev server: `Ctrl+C` then `npm run dev`

### "Content not showing"
- Make sure post is **Published** (toggle ON in Studio)
- Wait 1-2 minutes for CDN cache
- Check browser console for errors (F12)

### "Studio not loading"
- Run `npm run sanity:deploy` again
- Clear browser cache
- Try incognito mode

### "CORS error"
- Add your domain to CORS origins (see above)
- Include both `http://localhost:5173` and `5174`

---

## 📚 Full Documentation

For complete guides, see:
- `SANITY_SETUP_GUIDE.md` - Detailed setup and features
- `SANITY_INTEGRATION.md` - Code examples for React integration
- Official Docs: https://www.sanity.io/docs

---

## 💡 Tips

1. **Write in Studio, not in code** - That's the whole point!
2. **Use drafts** - Toggle "Published" OFF to work on drafts
3. **Copy existing posts** - Use "Duplicate" to create similar posts faster
4. **Add images** - Sanity handles image optimization automatically
5. **Tag everything** - Makes search more effective

---

## ✨ What You Get

✅ User-friendly editor (no coding!)
✅ Rich text formatting
✅ Image management
✅ Draft/publish workflow
✅ Search and organize
✅ Mobile-friendly
✅ Free up to 100K requests/month
✅ Fast CDN delivery

---

**Ready? Create your Sanity project now and start adding content!** 🚀

Questions? Check `SANITY_SETUP_GUIDE.md` for detailed help.
