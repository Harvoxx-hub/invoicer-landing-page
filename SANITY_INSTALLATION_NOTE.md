# Sanity Installation Status

## ✅ What's Installed

The following Sanity packages are already installed and ready:

```json
{
  "@sanity/client": "^7.14.0",        // ✅ API client for fetching content
  "@sanity/image-url": "^2.0.3",      // ✅ Image optimization
  "@portabletext/react": "^6.0.2"     // ✅ Rich text renderer
}
```

These are the **main packages** needed for your React app to fetch and display content from Sanity.

---

## 📦 Sanity Studio Installation

The Sanity Studio (the CMS interface) will be installed automatically when you run:

```bash
npx sanity init --project YOUR_PROJECT_ID --dataset production
```

**Why this approach?**
- The `npx` command downloads and installs everything needed
- Always gets the latest version
- No need to manually install devDependencies
- Recommended by Sanity for new projects

---

## 🚀 When You're Ready

Follow these steps in order:

### 1. Create Sanity Project (5 minutes)
```bash
# Visit https://www.sanity.io/
# Sign up (free)
# Create new project: "Invoicer Content"
# Copy your Project ID (e.g., abc123xyz)
```

### 2. Configure Environment (1 minute)
```bash
# Create .env file
cp .env.example .env

# Edit .env and add your Project ID:
# VITE_SANITY_PROJECT_ID=abc123xyz
```

### 3. Initialize Sanity (3 minutes)
```bash
# This will install and configure Sanity Studio
npx sanity init --project YOUR_PROJECT_ID --dataset production

# When prompted:
# - Confirm project ID: Yes
# - Confirm dataset: Yes
# - Use default configuration: Yes
```

### 4. Deploy Studio (2 minutes)
```bash
# Deploy to Sanity's hosting
npx sanity deploy

# Choose a hostname (e.g., invoicer-cms)
# Your Studio will be at: https://invoicer-cms.sanity.studio
```

### 5. Add CORS Origins (2 minutes)
```bash
# Go to: https://www.sanity.io/manage
# Select your project
# API tab → CORS Origins
# Add:
#   - http://localhost:5173
#   - http://localhost:5174
#   - https://your-production-domain.com
```

### 6. Create First Content (3 minutes)
```bash
# Open: https://your-studio-name.sanity.studio
# Click "Blog Post" → "Create new"
# Fill in fields
# Toggle "Published" to ON
# Click "Publish"
```

---

## 💻 Your React App is Ready!

Your React app already has everything it needs:

```javascript
// These work right now:
import {
  getBlogPosts,
  getBlogPost,
  getHelpArticles,
  searchContent,
  urlFor
} from './lib/sanity';

// Once you configure .env, these will fetch from Sanity
const posts = await getBlogPosts();
const post = await getBlogPost('my-slug');
```

---

## 🔧 Optional: Install Studio as DevDependency

If you want Sanity Studio commands in your package.json scripts, you can install it:

```bash
# This is optional - npx works fine without it
npm install -D sanity @sanity/vision --legacy-peer-deps
```

**However**, `npx sanity` commands work perfectly without this installation!

---

## 📝 npm Scripts Available

These scripts work **right now** using `npx`:

```bash
npm run sanity:dev       # Run Studio locally
npm run sanity:deploy    # Deploy Studio
npm run sanity:manage    # Open dashboard
```

Under the hood, they use `npx sanity [command]` which downloads and runs Sanity on-demand.

---

## ✅ You're All Set!

Everything is configured and ready. When you're ready to set up Sanity:

1. Read: `SANITY_QUICK_START.md`
2. Follow the 6 steps above
3. Start creating content!

---

## 🐛 If You Encounter Issues

### "npx sanity not found"
```bash
# Make sure you have Node.js installed
node --version  # Should show v18 or higher

# Update npm
npm install -g npm@latest
```

### "Permission denied"
```bash
# Use sudo (macOS/Linux)
sudo npm install -g @sanity/cli

# Or run without global install
npx sanity init
```

### "Network error during init"
```bash
# Check internet connection
# Try again later
# Or use mobile hotspot if behind firewall
```

---

## 📚 Next Steps

1. ✅ Read `SANITY_QUICK_START.md`
2. ✅ Create your Sanity project
3. ✅ Run `npx sanity init`
4. ✅ Deploy Studio
5. ✅ Start creating content!

**Everything is ready for you to begin!** 🚀
