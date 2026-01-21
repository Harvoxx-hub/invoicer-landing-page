# How to Add a Blog Post

## Quick Method (Current Setup)

Blog posts are stored in `src/data/resourcesData.js` as static data.

### Step 1: Open the data file

```bash
src/data/resourcesData.js
```

### Step 2: Add your blog post

Add a new object to the **beginning** of the `blogPosts` array (after line 2):

```javascript
// Blog Posts Data
export const blogPosts = [
  // ADD YOUR NEW POST HERE ↓
  {
    id: 'boost-sales-with-pos',
    slug: 'boost-sales-with-pos',
    title: 'How to Boost Sales by 30% Using a Modern POS System',
    excerpt: 'Discover proven strategies to increase your retail sales using POS analytics and customer insights.',
    content: `A modern POS system does more than process transactions—it's a powerful tool for growing your business.

## Why POS Systems Boost Sales

Traditional cash registers only record sales. A modern POS like Invoicer gives you insights into:

- Which products sell best
- When customers prefer to shop
- What items are often bought together

## 5 Ways to Use POS Data to Increase Sales

### 1. Identify Your Best Sellers

Use sales reports to see which products drive revenue. Stock more of what sells.

### 2. Create Strategic Bundles

See which items customers buy together. Create bundles or place them near each other.

### 3. Optimize Your Pricing

Track which price points convert best. Test different prices and measure results.

### 4. Run Targeted Promotions

Send SMS to customers who haven't visited in 30 days with a special offer.

### 5. Reduce Stockouts

Set low-stock alerts for fast-moving items. Never lose a sale because you ran out.

## Real Results from Nigerian Retailers

> "After switching to Invoicer, we increased sales by 35% in 3 months by identifying our top products and stocking them better." - Amina, Lagos

## Get Started Today

Download Invoicer and start tracking your sales data to make smarter decisions.`,
    category: 'Business Growth',
    author: 'Victor Okonkwo',
    authorRole: 'Sales Consultant',
    publishDate: '2026-01-21',
    readTime: '6 min read',
    image: '/images/blog/boost-sales-pos.jpg',
    tags: ['sales', 'pos', 'analytics', 'growth'],
  },
  // EXISTING POSTS BELOW ↓
  {
    id: 'inventory-management-tips',
    // ... rest of existing posts
  },
```

### Step 3: Save and test

```bash
# The dev server will auto-reload
# Visit http://localhost:5174/resources/blog
```

Your new post will appear as the **featured post** (first item in array).

## Field Descriptions

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `id` | ✅ Yes | Unique identifier (no spaces) | `'boost-sales-with-pos'` |
| `slug` | ✅ Yes | URL path (usually same as id) | `'boost-sales-with-pos'` |
| `title` | ✅ Yes | Full post title | `'How to Boost Sales by 30%...'` |
| `excerpt` | ✅ Yes | Short summary (1-2 sentences) | `'Discover proven strategies...'` |
| `content` | ✅ Yes | Full article (Markdown supported) | See template above |
| `category` | ✅ Yes | Post category | `'Business Growth'` |
| `author` | ✅ Yes | Author name | `'Victor Okonkwo'` |
| `authorRole` | ✅ Yes | Author title/role | `'Sales Consultant'` |
| `publishDate` | ✅ Yes | Date (YYYY-MM-DD format) | `'2026-01-21'` |
| `readTime` | ✅ Yes | Estimated reading time | `'6 min read'` |
| `image` | ⚠️ Optional | Image path | `'/images/blog/post.jpg'` |
| `tags` | ✅ Yes | Array of tags | `['sales', 'pos']` |

## Markdown Support

The `content` field supports Markdown:

```markdown
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet points
- Work great

1. Numbered lists
2. Also work

> Blockquotes for testimonials

[Links work too](https://example.com)
```

## Categories to Use

Common categories already in use:
- `'Inventory Management'`
- `'Business Growth'`
- `'POS Systems'`
- `'Success Stories'`
- `'Tips & Tricks'`
- `'Getting Started'`

You can create new categories too!

## Common Tags

Use relevant tags for better search:
- `'inventory'`, `'stock'`, `'tracking'`
- `'pos'`, `'sales'`, `'checkout'`
- `'reports'`, `'analytics'`, `'insights'`
- `'tips'`, `'guide'`, `'tutorial'`
- `'retail'`, `'restaurant'`, `'pharmacy'`
- `'nigeria'`, `'africa'`, `'small-business'`

## Pro Tips

### 1. Order Matters
The **first post** in the array is the featured post on `/resources/blog`

### 2. Keep IDs Unique
Use lowercase letters, numbers, and hyphens only:
- ✅ Good: `'how-to-manage-inventory'`
- ❌ Bad: `'How To Manage Inventory!'`

### 3. Slug = URL
The slug becomes the URL:
- Slug: `'boost-sales'`
- URL: `/resources/blog/boost-sales`

### 4. Estimate Read Time
Formula: `words ÷ 200 = minutes`
- 1000 words ≈ 5 min read
- 1500 words ≈ 8 min read

### 5. Write Useful Excerpts
The excerpt appears in:
- Blog listing page
- Search results
- Social media previews (future)

Make it compelling!

## Need Images?

For now, images are optional. You can:
1. Use placeholder path: `'/images/blog/placeholder.jpg'`
2. Add actual images later to `public/images/blog/`

## Testing Your Post

After adding:

1. **Check blog page:** http://localhost:5174/resources/blog
2. **View full post:** http://localhost:5174/resources/blog/your-slug
3. **Test search:** Search for keywords from your post
4. **Check mobile:** Resize browser to test responsive design

## Troubleshooting

### Post doesn't appear?
- Check for syntax errors (missing commas, brackets)
- Make sure object is inside `blogPosts` array
- Check browser console for errors (F12)

### Wrong formatting?
- Markdown requires empty lines between sections
- Use backticks for inline `code`
- Use triple backticks for code blocks

### Build fails?
```bash
npm run build
# Check error message for specific issue
```

---

## Future: CMS Integration (Optional)

For easier blog management, consider:

1. **Markdown Files** - Store posts as `.md` files
2. **Headless CMS** - Use Strapi, Contentful, or Sanity
3. **Git-based CMS** - Use Decap CMS (formerly Netlify CMS)
4. **Custom Admin Panel** - Build a simple form interface

Would you like help setting up any of these?

---

## Quick Reference

```javascript
{
  id: 'unique-id-here',
  slug: 'unique-id-here',
  title: 'Your Compelling Title',
  excerpt: 'Short summary that hooks readers.',
  content: `Full content with Markdown formatting.`,
  category: 'Category Name',
  author: 'Author Name',
  authorRole: 'Author Role',
  publishDate: '2026-01-21',
  readTime: 'X min read',
  image: '/images/blog/image.jpg',
  tags: ['tag1', 'tag2', 'tag3'],
},
```

Copy this template and fill in your content!
