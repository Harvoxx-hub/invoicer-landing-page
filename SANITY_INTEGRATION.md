# Sanity CMS - React Integration Guide

This guide shows you exactly how to update your React components to fetch content from Sanity instead of static data files.

---

## 📋 Files to Update

1. `src/pages/resources/BlogPage.jsx` - Blog listing page
2. `src/pages/resources/BlogPostPage.jsx` - Individual blog post
3. `src/pages/resources/HelpCenterPage.jsx` - Help center listing
4. `src/pages/resources/HelpArticlePage.jsx` - Individual help article
5. `src/pages/SearchResultsPage.jsx` - Search results
6. `src/utils/search.js` - Search utility

---

## 1. Update BlogPage.jsx

### Before (Static Data):

```javascript
import { blogPosts } from '../../data/resourcesData';

const BlogPage = () => {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    // ... JSX
  );
};
```

### After (Sanity):

```javascript
import { useState, useEffect } from 'react';
import { getBlogPosts } from '../../lib/sanity';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  const categories = [...new Set(posts.map((post) => post.category))];
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    // ... JSX (same as before)
  );
};
```

**Key Changes:**
- Import `useState`, `useEffect`, and `getBlogPosts`
- Add state for posts, loading, and error
- Fetch data on component mount
- Show loading and error states
- Use fetched `posts` instead of static `blogPosts`

---

## 2. Update BlogPostPage.jsx

### Before (Static Data):

```javascript
import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/resourcesData';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};
```

### After (Sanity):

```javascript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPost } from '../../lib/sanity';
import PortableText from '../../components/shared/PortableText';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await getBlogPost(slug);
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Replace dangerouslySetInnerHTML with PortableText */}
      <PortableText value={post.content} />
    </article>
  );
};
```

**Key Changes:**
- Fetch post by slug using `getBlogPost(slug)`
- Replace `dangerouslySetInnerHTML` with `<PortableText />`
- PortableText safely renders Sanity's rich text content

---

## 3. Update HelpCenterPage.jsx

### Before (Static Data):

```javascript
import { helpCategories, helpArticles } from '../../data/resourcesData';

const HelpCenterPage = () => {
  const featuredArticles = helpArticles.slice(0, 4);

  return (
    // ... JSX using helpCategories and featuredArticles
  );
};
```

### After (Sanity):

```javascript
import { useState, useEffect } from 'react';
import { getHelpArticles, getFeaturedHelpArticles } from '../../lib/sanity';

const HelpCenterPage = () => {
  const [articles, setArticles] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [allArticles, featured] = await Promise.all([
          getHelpArticles(),
          getFeaturedHelpArticles(),
        ]);
        setArticles(allArticles);
        setFeaturedArticles(featured);
      } catch (err) {
        console.error('Error fetching help articles:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Extract unique categories from articles
  const helpCategories = [
    ...new Set(articles.map((article) => article.category)),
  ].map((category) => ({
    name: category,
    articleCount: articles.filter((a) => a.category === category).length,
    icon: articles.find((a) => a.category === category)?.icon || '📄',
  }));

  return (
    // ... JSX (same structure)
  );
};
```

**Key Changes:**
- Fetch all articles and featured articles in parallel
- Dynamically generate categories from articles
- Use `Promise.all()` for concurrent fetching

---

## 4. Update HelpArticlePage.jsx

### Before (Static Data):

```javascript
import { useParams } from 'react-router-dom';
import { helpArticles } from '../../data/resourcesData';

const HelpArticlePage = () => {
  const { slug } = useParams();
  const article = helpArticles.find((a) => a.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
};
```

### After (Sanity):

```javascript
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHelpArticle } from '../../lib/sanity';
import PortableText from '../../components/shared/PortableText';

const HelpArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const data = await getHelpArticle(slug);
        setArticle(data);
      } catch (err) {
        console.error('Error fetching help article:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article>
      <h1>{article.icon} {article.title}</h1>
      <PortableText value={article.content} />

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2>Related Articles</h2>
          <div className="grid gap-4">
            {article.relatedArticles.map((related) => (
              <Link key={related._id} to={`/resources/help/${related.slug}`}>
                {related.icon} {related.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
```

**Key Changes:**
- Fetch article with `getHelpArticle(slug)`
- Use PortableText for content
- Display related articles (Sanity provides these automatically!)

---

## 5. Update SearchResultsPage.jsx

### Before (Static Data):

```javascript
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchContent } from '../utils/search';
import { blogPosts, helpArticles } from '../data/resourcesData';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const { blogResults, helpResults } = useMemo(
    () => searchContent(query, blogPosts, helpArticles),
    [query]
  );

  // ... rest of component
};
```

### After (Sanity):

```javascript
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchContent } from '../lib/sanity'; // ← Changed import

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [results, setResults] = useState({ blogResults: [], helpResults: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function performSearch() {
      if (query && query.trim().length >= 2) {
        setLoading(true);
        try {
          const data = await searchContent(query);
          setResults(data);
        } catch (err) {
          console.error('Error searching:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setResults({ blogResults: [], helpResults: [] });
      }
    }
    performSearch();
  }, [query]);

  if (loading) {
    return <div>Searching...</div>;
  }

  const { blogResults, helpResults } = results;
  const totalResults = blogResults.length + helpResults.length;

  // ... rest of component (same JSX)
};
```

**Key Changes:**
- Import `searchContent` from `lib/sanity` (not `utils/search`)
- Fetch search results asynchronously
- Show loading state during search

---

## 6. Optional: Update utils/search.js

You can keep the old search utility as a fallback or remove it entirely since Sanity handles search now.

**Option A: Keep as fallback**
```javascript
// Keep the file, add a comment
// This is a fallback for local/offline search
// Production uses Sanity search (see lib/sanity.js)
```

**Option B: Remove**
```bash
# Delete the file
rm src/utils/search.js
```

---

## 🎨 Using Images from Sanity

Sanity optimizes images automatically. Use the `urlFor` helper:

```javascript
import { urlFor } from '../../lib/sanity';

// In your component:
<img
  src={urlFor(post.image).width(800).height(400).url()}
  alt={post.imageAlt}
/>

// Or with auto format:
<img
  src={urlFor(post.image).width(800).auto('format').url()}
  alt={post.imageAlt}
/>
```

---

## 🔄 Suspense and Error Boundaries (Advanced)

For better UX, wrap components with Suspense and Error Boundaries:

```javascript
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPage />
      </Suspense>
    </ErrorBoundary>
  );
}
```

---

## ✅ Testing Your Integration

After updating components:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Test each page:**
   - `/resources/blog` - Should load blog posts from Sanity
   - `/resources/blog/your-post-slug` - Should display full post
   - `/resources/help` - Should load help articles
   - `/search?q=test` - Should search Sanity content

3. **Check browser console:**
   - No errors (F12 → Console tab)
   - Network tab shows Sanity API calls

4. **Test with new content:**
   - Add a new post in Sanity Studio
   - Publish it
   - Refresh your website (may take 1-2 minutes for CDN)
   - New post should appear!

---

## 🐛 Common Issues

### "Cannot read property of undefined"
- Check that Sanity is returning data
- Add optional chaining: `post?.title`
- Verify Project ID in `.env`

### "Content not updating"
- Wait 1-2 minutes for CDN cache
- Set `useCdn: false` in `src/lib/sanity.js` for instant updates
- Clear browser cache

### "CORS errors"
- Add your domain to CORS origins in Sanity dashboard
- Include `http://localhost:5173` and `http://localhost:5174`

### "Images not loading"
- Check image URLs in browser devtools
- Verify `urlFor` helper is imported
- Make sure images are uploaded in Sanity

---

## 📦 Migration Checklist

- [ ] Environment variables configured (`.env`)
- [ ] BlogPage.jsx updated
- [ ] BlogPostPage.jsx updated
- [ ] HelpCenterPage.jsx updated
- [ ] HelpArticlePage.jsx updated
- [ ] SearchResultsPage.jsx updated
- [ ] Test all pages load correctly
- [ ] Test search functionality
- [ ] Test individual post/article pages
- [ ] Verify images display
- [ ] Check mobile responsiveness
- [ ] Test with new content from Sanity
- [ ] Remove old static data file (optional)

---

## 🚀 Go Live

Once everything works:

```bash
# Build for production
npm run build

# Test production build
npm run preview

# Deploy to your hosting
# (Vercel, Netlify, etc.)
```

**Remember:** Add your production domain to Sanity CORS origins!

---

## 💡 Pro Tips

1. **Loading skeletons:** Use the Skeleton component for better UX
2. **Caching:** Consider using React Query or SWR for client-side caching
3. **Prefetching:** Prefetch blog posts on hover for instant navigation
4. **Image optimization:** Always use `urlFor` with width/height parameters
5. **Error handling:** Show user-friendly error messages

---

**Questions?** Check the full setup guide: `SANITY_SETUP_GUIDE.md`
