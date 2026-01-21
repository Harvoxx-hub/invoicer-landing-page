# Sanity.io CMS Setup Guide

## 🎉 What's Been Set Up

Your project now has Sanity.io integrated for managing blog posts and help articles! Here's what's ready:

### ✅ Files Created:
- `sanity.config.js` - Sanity Studio configuration
- `schemas/blogPost.js` - Blog post schema (with rich text)
- `schemas/helpArticle.js` - Help article schema
- `schemas/index.js` - Schema exports
- `src/lib/sanity.js` - Client and helper functions
- `src/components/shared/PortableText.jsx` - Rich text renderer
- `.env.example` - Environment variables template

### ✅ Dependencies Installed:
- `@sanity/client` - Sanity API client
- `@sanity/image-url` - Image URL builder
- `@portabletext/react` - Rich text renderer
- `sanity` - Sanity Studio (dev dependency)

---

## 🚀 Quick Start

### Step 1: Create a Sanity Project

1. **Go to Sanity.io:**
   - Visit https://www.sanity.io/
   - Sign up or log in (GitHub account recommended)

2. **Create New Project:**
   - Click "Create new project"
   - Project name: `Invoicer Content`
   - Dataset: `production` (default)
   - **Copy the Project ID** (you'll need this!)

### Step 2: Configure Environment Variables

Create a `.env` file in your project root:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` and add your Sanity Project ID:

```env
VITE_SANITY_PROJECT_ID=abc123xyz  # Replace with your actual project ID
VITE_SANITY_DATASET=production
```

### Step 3: Deploy Sanity Studio

```bash
# Install Sanity CLI globally (if not already installed)
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize and link this project to your Sanity project
npx sanity init --project YOUR_PROJECT_ID --dataset production

# Deploy the Studio
npx sanity deploy
```

When prompted:
- Studio hostname: Choose something like `invoicer-cms` (becomes `invoicer-cms.sanity.studio`)
- Select `Yes` to create the Studio

### Step 4: Access Your Studio

Your Sanity Studio will be available at:
```
https://YOUR-STUDIO-NAME.sanity.studio
```

Or run locally:
```bash
npx sanity dev
# Opens at http://localhost:3333
```

---

## 📝 Creating Content

### Adding a Blog Post

1. **Open Sanity Studio** (online or locally)
2. Click **"Blog Post"** in the sidebar
3. Click **"Create new"**
4. Fill in the fields:
   - **Title:** Your post title
   - **Slug:** Click "Generate" (auto-creates URL-friendly slug)
   - **Excerpt:** Short summary (1-2 sentences)
   - **Content:** Write your article (supports rich formatting!)
   - **Category:** Select from dropdown
   - **Author:** Your name
   - **Author Role:** Your title (e.g., "Content Writer")
   - **Publish Date:** Select date
   - **Read Time:** Estimate (e.g., "5 min read")
   - **Featured Image:** Upload an image (optional)
   - **Tags:** Add relevant tags
   - **Published:** Toggle ON to make visible on website

5. Click **"Publish"**

Your post is now live on the website!

### Adding a Help Article

1. Click **"Help Article"** in the sidebar
2. Click **"Create new"**
3. Fill in fields (similar to blog post)
4. Additional fields:
   - **Icon:** Single emoji (e.g., 📦, 💰, 📊)
   - **Featured:** Toggle to show in featured section
   - **Display Order:** Number for sorting (lower = first)
5. Click **"Publish"**

---

## 🎨 Rich Text Editor Features

The content editor supports:

- **Headings:** H2, H3, H4 for structure
- **Text formatting:** Bold, Italic, Code
- **Lists:** Bullet points and numbered lists
- **Quotes:** Blockquotes for testimonials
- **Links:** Add external or internal links
- **Images:** Upload and insert images with captions
- **Paragraphs:** Normal text with automatic spacing

### Writing Tips:

```markdown
## Use H2 for main sections

Regular paragraph text flows naturally.

### H3 for subsections

- Bullet points for lists
- Easy to scan
- Great for tips

**Bold text** for emphasis

> Blockquotes for testimonials or important notes
> - Customer Name
```

---

## 🔄 How It Works

### Data Flow:

1. **You write content** in Sanity Studio
2. **Content is stored** in Sanity's cloud (sanity.io)
3. **React app fetches** data via Sanity Client
4. **Website displays** content automatically

### Caching:

- Content is cached for fast loading
- Updates may take a few minutes to appear
- Set `useCdn: false` in `src/lib/sanity.js` for instant updates (slower)

---

## 📊 Available Queries

Your React app can fetch content using these helper functions:

```javascript
import { getBlogPosts, getBlogPost, getHelpArticles } from '@/lib/sanity';

// Fetch all blog posts
const posts = await getBlogPosts();

// Fetch single blog post by slug
const post = await getBlogPost('my-post-slug');

// Fetch all help articles
const articles = await getHelpArticles();

// Search content
import { searchContent } from '@/lib/sanity';
const results = await searchContent('inventory');
```

---

## 🎯 Next Steps

### 1. Migrate Existing Content

You have existing blog posts in `src/data/resourcesData.js`. You can:

**Option A: Manual Migration** (Recommended for few posts)
1. Open each post in the data file
2. Copy the content
3. Create new post in Sanity Studio
4. Paste and format content
5. Publish

**Option B: Automated Migration** (For many posts)
- Use the migration script (see `MIGRATION_SCRIPT.md`)
- Requires Sanity write token

### 2. Update React Components

The following components need updating to fetch from Sanity:

#### Files to Update:
- `src/pages/resources/BlogPage.jsx`
- `src/pages/resources/BlogPostPage.jsx`
- `src/pages/resources/HelpCenterPage.jsx`
- `src/pages/resources/HelpArticlePage.jsx`
- `src/pages/SearchResultsPage.jsx`

#### Example Update (BlogPage.jsx):

**Before:**
```javascript
import { blogPosts } from '../../data/resourcesData';

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  // ...
```

**After:**
```javascript
import { useState, useEffect } from 'react';
import { getBlogPosts } from '../../lib/sanity';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getBlogPosts();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  const featuredPost = posts[0];
  // ...
```

### 3. Deploy

Once configured:

```bash
# Build and test
npm run build
npm run preview

# Deploy to your hosting provider
# Vercel, Netlify, etc.
```

---

## 🔧 Troubleshooting

### "Project ID not found"
- Check `.env` file exists and has correct `VITE_SANITY_PROJECT_ID`
- Restart dev server: `npm run dev`

### "No content showing"
- Verify posts are marked as **Published** in Sanity Studio
- Check browser console for errors
- Try disabling CDN: Set `useCdn: false` in `src/lib/sanity.js`

### "Studio not loading"
- Run `npx sanity deploy` again
- Check your internet connection
- Clear browser cache

### "CORS errors"
- Go to https://www.sanity.io/manage
- Select your project → API → CORS Origins
- Add your domain (e.g., `http://localhost:5174`)
- Add your production domain

---

## 📱 Sanity Studio Features

### Content Management:
- ✅ Rich text editor
- ✅ Image upload and management
- ✅ Draft/publish workflow
- ✅ Content preview
- ✅ Search and filter
- ✅ Duplicate content
- ✅ Schedule publishing (paid plan)

### Collaboration:
- Multiple users can edit (invite team members)
- Real-time collaboration (paid plan)
- Version history and restore
- Comment on content (paid plan)

### Mobile App:
- Sanity Studio works on tablets
- Sanity mobile app available (iOS/Android)

---

## 💰 Pricing

**Free Plan Includes:**
- 3 users
- 100,000 API requests/month
- 10GB bandwidth
- 10GB assets
- Perfect for small-medium blogs!

**Paid Plans:**
- Start at $99/month
- More users, requests, and features
- See: https://www.sanity.io/pricing

---

## 🎓 Learning Resources

### Official Docs:
- Sanity Docs: https://www.sanity.io/docs
- Schema Types: https://www.sanity.io/docs/schema-types
- GROQ Query Language: https://www.sanity.io/docs/groq

### Tutorials:
- Sanity + React: https://www.sanity.io/guides/sanity-react
- Content Modeling: https://www.sanity.io/guides/content-modeling
- Image Handling: https://www.sanity.io/docs/image-url

---

## 📞 Support

### Sanity Support:
- Community Slack: https://slack.sanity.io/
- GitHub Discussions: https://github.com/sanity-io/sanity/discussions
- Email: support@sanity.io

### Your Project:
- Check `CLAUDE.md` for project details
- Review `IMPLEMENTATION_STATUS.md` for current status

---

## 🚀 Quick Commands Reference

```bash
# Start Sanity Studio locally
npx sanity dev

# Deploy Studio to Sanity's hosting
npx sanity deploy

# Check Sanity CLI version
npx sanity --version

# Manage datasets
npx sanity dataset list
npx sanity dataset create staging

# Export data (backup)
npx sanity dataset export production backup.tar.gz

# Import data (restore)
npx sanity dataset import backup.tar.gz production
```

---

## ✨ Benefits of Using Sanity

### Before (Static Data):
- ❌ Edit code files to add posts
- ❌ Need developer to make changes
- ❌ No content preview
- ❌ Risk of syntax errors
- ❌ Hard to manage images

### After (Sanity CMS):
- ✅ User-friendly editor (no coding!)
- ✅ Anyone can add/edit content
- ✅ Visual content preview
- ✅ Image management built-in
- ✅ Draft/publish workflow
- ✅ Search and organize easily
- ✅ Mobile-friendly editor
- ✅ API-driven (use anywhere)

---

## 📋 Checklist

Before going live:

- [ ] Sanity project created
- [ ] `.env` file configured with Project ID
- [ ] Studio deployed and accessible
- [ ] CORS origins configured (add production URL)
- [ ] First blog post created and published
- [ ] First help article created and published
- [ ] React components updated to fetch from Sanity
- [ ] Search functionality working
- [ ] Images uploading correctly
- [ ] Website displaying content
- [ ] Production build tested

---

**Ready to start?** Open your Sanity Studio and create your first blog post! 🎉
