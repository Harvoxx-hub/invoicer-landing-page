/**
 * Search through content (blog posts and help articles)
 * @param {string} query - The search query
 * @param {Array} blogPosts - Array of blog posts
 * @param {Array} helpArticles - Array of help articles
 * @returns {Object} - Object containing blogResults and helpResults arrays
 */
export function searchContent(query, blogPosts = [], helpArticles = []) {
  if (!query || query.trim().length < 2) {
    return { blogResults: [], helpResults: [] };
  }

  const normalizedQuery = query.toLowerCase().trim();

  // Search blog posts
  const blogResults = blogPosts.filter((post) => {
    const titleMatch = post.title?.toLowerCase().includes(normalizedQuery);
    const excerptMatch = post.excerpt?.toLowerCase().includes(normalizedQuery);
    const contentMatch = post.content?.toLowerCase().includes(normalizedQuery);
    const tagsMatch = post.tags?.some((tag) =>
      tag.toLowerCase().includes(normalizedQuery)
    );
    const categoryMatch = post.category?.toLowerCase().includes(normalizedQuery);

    return titleMatch || excerptMatch || contentMatch || tagsMatch || categoryMatch;
  });

  // Search help articles
  const helpResults = helpArticles.filter((article) => {
    const titleMatch = article.title?.toLowerCase().includes(normalizedQuery);
    const contentMatch = article.content?.toLowerCase().includes(normalizedQuery);
    const categoryMatch = article.category?.toLowerCase().includes(normalizedQuery);

    return titleMatch || contentMatch || categoryMatch;
  });

  // Limit results to 50 per category
  return {
    blogResults: blogResults.slice(0, 50),
    helpResults: helpResults.slice(0, 50),
  };
}

/**
 * Highlight search query in text
 * @param {string} text - The text to highlight
 * @param {string} query - The search query
 * @returns {string} - Text with highlighted query
 */
export function highlightSearchQuery(text, query) {
  if (!query || !text) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
}
