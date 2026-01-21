# How to Add a Blog Post (with Sanity CMS)

## ✨ New Way: Using Sanity Studio (Recommended!)

No more editing code files! Add blog posts through a user-friendly interface.

---

## 🚀 Quick Start

### 1. Open Sanity Studio

**Online (Recommended):**
```
https://YOUR-STUDIO-NAME.sanity.studio
```

**Or run locally:**
```bash
npm run sanity:dev
# Opens at http://localhost:3333
```

### 2. Create New Blog Post

1. Click **"Blog Post"** in the left sidebar
2. Click the **"Create"** button (top right)
3. Fill in the fields...

### 3. Fill in the Details

#### Required Fields:

**Title**
```
Example: "10 Ways to Boost Your Retail Sales"
```

**Slug**
- Click "Generate" button (auto-creates URL-friendly version)
- Or customize: `10-ways-boost-retail-sales`
- This becomes the URL: `/resources/blog/10-ways-boost-retail-sales`

**Excerpt** (1-2 sentences, max 200 characters)
```
Example: "Discover proven strategies to increase your retail sales by 30% using smart POS analytics and customer insights."
```

**Content** (Rich Text Editor)
- Write your article using the rich text editor
- See formatting options below

**Category**
- Select from dropdown:
  - Inventory Management
  - Business Growth
  - POS Systems
  - Tips & Tricks
  - Getting Started
  - Success Stories

**Author**
```
Example: Victor Okonkwo
```

**Author Role**
```
Example: Business Consultant
```

**Publish Date**
- Click calendar icon
- Select today's date (or future date for scheduling)

**Read Time**
```
Example: 5 min read
Formula: word count ÷ 200 = minutes
```

**Tags** (3-5 recommended)
```
Example: sales, analytics, pos, retail, growth
```

**Published** (Toggle)
- ⚠️ **Must be ON for post to appear on website!**
- OFF = Draft mode (not visible to public)
- ON = Live on website

#### Optional Fields:

**Featured Image**
- Click "Upload"
- Select image from computer
- Add Alt Text (for accessibility and SEO)
- Image will be automatically optimized!

### 4. Publish!

Click the green **"Publish"** button (top right)

Your post is now live! 🎉

---

## 🎨 Rich Text Editor Guide

### Headings

Use the dropdown to select:
- **H2** - Main sections
- **H3** - Subsections
- **H4** - Sub-subsections

```
## Main Section (H2)

Your paragraph text here.

### Subsection (H3)

More content.
```

### Text Formatting

Use toolbar buttons:
- **Bold** - Click "B" or Ctrl/Cmd+B
- *Italic* - Click "I" or Ctrl/Cmd+I
- `Code` - Click "</>" for inline code

### Lists

**Bullet Points:**
- Click bullet icon in toolbar
- Type item and press Enter for next item
- Press Enter twice to exit list

**Numbered Lists:**
1. Click numbered list icon
2. Same as bullet points
3. Auto-numbers!

### Quotes

> Great for testimonials or highlighting key points

Click the quote icon (") in toolbar

### Links

1. Select text
2. Click link icon (🔗)
3. Enter URL
4. Click "Apply"

### Images

1. Click where you want image
2. Click image icon in toolbar
3. Upload image or select existing
4. Add Alt Text (required for accessibility)
5. Optional: Add caption

Images are automatically:
- Optimized for web
- Responsive (adjust to screen size)
- Lazy-loaded (faster page loads)

---

## 💡 Writing Tips

### 1. Start with a Hook
Begin with a compelling question or statement:
```
"Are you losing sales because of poor inventory management?"
```

### 2. Use Subheadings (H2, H3)
Break content into scannable sections:
```
## Why This Matters
## 5 Proven Strategies
### Strategy 1: Track Everything
### Strategy 2: Set Alerts
```

### 3. Add Lists
Lists are easy to scan:
```
Benefits of using a POS system:
- Faster checkouts
- Accurate inventory
- Better insights
```

### 4. Include Examples
```
**Example:** "After switching to Invoicer, Amina's boutique increased sales by 40% in just two months."
```

### 5. Use Quotes for Testimonials
```
> "Invoicer transformed how I manage inventory. I saved 10 hours a week!"
> - Chidi, Electronics Store Owner
```

### 6. End with Call-to-Action
```
Ready to transform your business? Download Invoicer today and start your free trial!
```

---

## 📸 Image Best Practices

### Upload Guidelines:
- **Format:** JPG or PNG
- **Size:** Under 5MB (Sanity will optimize)
- **Dimensions:** 1200x630px recommended
- **Alt Text:** Always add! (e.g., "Woman using Invoicer POS system in retail store")

### Where to Get Images:
- Your own photos (best!)
- Unsplash.com (free stock photos)
- Pexels.com (free stock photos)
- Custom graphics from Canva

---

## 🏷️ Tags Best Practices

### Good Tags:
- `inventory` - Specific and searchable
- `pos` - Short and clear
- `small-business` - Relevant to audience
- `nigeria` - Location-specific
- `tips` - Content type

### Avoid:
- Too many tags (3-5 is ideal)
- Vague tags like `blog` or `article`
- Duplicate tags in different forms (`inventory`, `inventories`)

---

## 📋 Content Checklist

Before publishing:
- [ ] Title is compelling and clear
- [ ] Slug is URL-friendly (click "Generate")
- [ ] Excerpt is concise (under 200 chars)
- [ ] Content is well-formatted with headings
- [ ] Spell check done
- [ ] Author and author role filled
- [ ] Publish date is correct
- [ ] Read time estimated
- [ ] Featured image uploaded (optional but recommended)
- [ ] Alt text added to images
- [ ] Tags added (3-5 tags)
- [ ] **"Published" toggle is ON** ← Most important!
- [ ] Preview looks good
- [ ] Clicked "Publish" button

---

## 🔄 Editing Existing Posts

1. Open Sanity Studio
2. Click "Blog Post" in sidebar
3. Find your post in the list
4. Click to open
5. Make changes
6. Click "Publish" to save

Changes appear on website in 1-2 minutes (CDN cache)

---

## 📱 Managing Posts

### Duplicate a Post
1. Open post
2. Click three dots menu (⋮)
3. Click "Duplicate"
4. Edit title and content
5. Publish

Great for creating series or similar posts!

### Unpublish a Post
1. Open post
2. Toggle "Published" to OFF
3. Click "Publish"

Post becomes draft and disappears from website.

### Delete a Post
1. Open post
2. Click three dots menu (⋮)
3. Click "Delete"
4. Confirm

⚠️ This is permanent!

---

## 🎯 Post Visibility

### Featured Post
The **first published post** (sorted by publish date, newest first) appears as the featured post on `/resources/blog`.

To feature a post:
1. Set its publish date to today or recent date
2. It will automatically appear first

### Post Order
Posts are sorted by **Publish Date** (newest first) automatically.

---

## 🔍 SEO Tips

### Title:
- 60 characters or less
- Include main keyword
- Make it compelling

```
✅ Good: "10 Inventory Management Tips for Nigerian Retailers"
❌ Bad: "Inventory Tips"
```

### Excerpt:
- 150-160 characters ideal
- Include main keyword
- Write for humans, not robots

### Tags:
- Use relevant keywords people search for
- Think about what customers would type in Google

---

## 📊 After Publishing

### View Your Post
1. Click "Open preview" (if available)
2. Or visit: `https://your-site.com/resources/blog/your-slug`

### Share Your Post
Copy the URL and share on:
- Social media (Twitter, LinkedIn, Facebook)
- WhatsApp groups
- Email newsletters

### Track Performance
- Monitor page views in your analytics
- See which posts get the most engagement
- Write more content on popular topics

---

## ❓ Common Questions

**Q: How long does it take for posts to appear?**
A: 1-2 minutes after publishing (CDN cache)

**Q: Can I schedule posts for future?**
A: Set a future publish date, but post goes live immediately. Scheduling requires paid Sanity plan or custom setup.

**Q: Can multiple people edit at once?**
A: Yes! Sanity supports real-time collaboration.

**Q: What if I make a mistake?**
A: Use version history to restore previous versions (click document history icon)

**Q: Can I write offline?**
A: No, Sanity requires internet connection. Write in Google Docs first, then copy to Sanity.

**Q: How do I add code snippets?**
A: Use the inline code button (</>) for short code. For code blocks, use the code block option in content.

---

## 🆘 Troubleshooting

### "Publish button is disabled"
- Check all required fields are filled
- Make sure title and slug are present

### "Can't upload image"
- Check file size (under 5MB)
- Try different format (JPG or PNG)
- Check internet connection

### "Post not showing on website"
- Verify "Published" toggle is ON
- Wait 2 minutes for cache
- Check browser console for errors (F12)
- Verify Project ID in .env is correct

### "Lost my changes"
- Sanity auto-saves every few seconds
- Check version history (clock icon)
- Can restore previous versions

---

## 🎓 Learn More

### Sanity Studio:
- Official docs: https://www.sanity.io/docs
- Keyboard shortcuts: https://www.sanity.io/docs/keyboard-shortcuts

### Your Project:
- Setup guide: `SANITY_SETUP_GUIDE.md`
- Quick start: `SANITY_QUICK_START.md`

---

## ✨ Benefits of Sanity vs Old Method

### Old Way (Editing Code):
- ❌ Edit `resourcesData.js` file
- ❌ Write in Markdown
- ❌ Risk syntax errors
- ❌ Need developer to publish
- ❌ No image management
- ❌ Hard to preview

### New Way (Sanity Studio):
- ✅ User-friendly interface
- ✅ Rich text editor (like Word)
- ✅ No syntax errors possible
- ✅ Anyone can publish
- ✅ Image upload built-in
- ✅ Live preview
- ✅ Works on mobile/tablet
- ✅ Version history
- ✅ Collaboration

---

**Ready to write?** Open Sanity Studio and create your first post! 🚀
