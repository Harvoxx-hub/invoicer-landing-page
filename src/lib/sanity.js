import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'h7hkmgzh',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // Use CDN for faster reads (set to false for fresh data)
  apiVersion: '2024-01-01',
});

// Helper function to build image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// GROQ Queries

// Fetch all published blog posts
export const blogPostsQuery = `*[_type == "blogPost" && published == true] | order(publishDate desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  authorRole,
  publishDate,
  readTime,
  "image": featuredImage.asset->url,
  "imageAlt": featuredImage.alt,
  tags,
  "content": content[] {
    ...,
    _type == "image" => {
      "url": asset->url,
      "alt": alt
    }
  }
}`;

// Fetch single blog post by slug
export const blogPostBySlugQuery = (slug) => `*[_type == "blogPost" && slug.current == "${slug}" && published == true][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  category,
  author,
  authorRole,
  publishDate,
  readTime,
  "image": featuredImage.asset->url,
  "imageAlt": featuredImage.alt,
  tags
}`;

// Fetch all published help articles
export const helpArticlesQuery = `*[_type == "helpArticle" && published == true] | order(order asc, category asc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  icon,
  readTime,
  featured,
  order,
  "content": content[] {
    ...,
    _type == "image" => {
      "url": asset->url,
      "alt": alt,
      caption
    }
  }
}`;

// Fetch single help article by slug
export const helpArticleBySlugQuery = (slug) => `*[_type == "helpArticle" && slug.current == "${slug}" && published == true][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  category,
  icon,
  readTime,
  "relatedArticles": relatedArticles[]-> {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    icon
  }
}`;

// Fetch featured help articles
export const featuredHelpArticlesQuery = `*[_type == "helpArticle" && published == true && featured == true] | order(order asc) [0...4] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  icon,
  readTime
}`;

// Search blog posts and help articles
export const searchQuery = (searchTerm) => `{
  "blogResults": *[_type == "blogPost" && published == true && (
    title match "${searchTerm}*" ||
    excerpt match "${searchTerm}*" ||
    category match "${searchTerm}*" ||
    "${searchTerm}" in tags
  )] | order(publishDate desc) [0...50] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    author,
    publishDate,
    readTime,
    tags
  },
  "helpResults": *[_type == "helpArticle" && published == true && (
    title match "${searchTerm}*" ||
    excerpt match "${searchTerm}*" ||
    category match "${searchTerm}*"
  )] | order(order asc) [0...50] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    icon,
    readTime
  }
}`;

// Fetch help article categories with counts
export const helpCategoriesQuery = `*[_type == "helpArticle" && published == true] {
  category
} | {
  "categories": array::unique(category[])
}`;

// Helper functions

/**
 * Fetch all blog posts
 */
export async function getBlogPosts() {
  try {
    const posts = await client.fetch(blogPostsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetch single blog post by slug
 */
export async function getBlogPost(slug) {
  try {
    const post = await client.fetch(blogPostBySlugQuery(slug));
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

/**
 * Fetch all help articles
 */
export async function getHelpArticles() {
  try {
    const articles = await client.fetch(helpArticlesQuery);
    return articles || [];
  } catch (error) {
    console.error('Error fetching help articles:', error);
    return [];
  }
}

/**
 * Fetch single help article by slug
 */
export async function getHelpArticle(slug) {
  try {
    const article = await client.fetch(helpArticleBySlugQuery(slug));
    return article;
  } catch (error) {
    console.error('Error fetching help article:', error);
    return null;
  }
}

/**
 * Fetch featured help articles
 */
export async function getFeaturedHelpArticles() {
  try {
    const articles = await client.fetch(featuredHelpArticlesQuery);
    return articles || [];
  } catch (error) {
    console.error('Error fetching featured help articles:', error);
    return [];
  }
}

/**
 * Search blog posts and help articles
 */
export async function searchContent(searchTerm) {
  if (!searchTerm || searchTerm.trim().length < 2) {
    return { blogResults: [], helpResults: [] };
  }

  try {
    const results = await client.fetch(searchQuery(searchTerm));
    return results || { blogResults: [], helpResults: [] };
  } catch (error) {
    console.error('Error searching content:', error);
    return { blogResults: [], helpResults: [] };
  }
}

/**
 * Convert Sanity block content to plain text (for excerpts)
 */
export function blockContentToPlainText(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';

  return blocks
    .filter((block) => block._type === 'block')
    .map((block) => {
      if (block.children) {
        return block.children.map((child) => child.text).join('');
      }
      return '';
    })
    .join('\n\n');
}
