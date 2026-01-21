import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { HiSearch, HiDocument, HiQuestionMarkCircle } from 'react-icons/hi';
import SearchBar from '../components/shared/widgets/SearchBar';
import { searchContent } from '../utils/search';
import { blogPosts, helpArticles } from '../data/resourcesData';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const { blogResults, helpResults } = useMemo(
    () => searchContent(query, blogPosts, helpArticles),
    [query]
  );

  const totalResults = blogResults.length + helpResults.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="py-12 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Results</h1>

          {/* Search Bar */}
          <SearchBar
            placeholder="Search articles, guides, and more..."
            className="max-w-2xl"
          />

          {query && (
            <p className="mt-4 text-gray-100">
              {totalResults > 0 ? (
                <>
                  Found <span className="font-semibold">{totalResults}</span>{' '}
                  {totalResults === 1 ? 'result' : 'results'} for "
                  <span className="font-semibold">{query}</span>"
                </>
              ) : (
                <>
                  No results found for "
                  <span className="font-semibold">{query}</span>"
                </>
              )}
            </p>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {!query || query.trim().length < 2 ? (
            // No query or query too short
            <div className="text-center py-12">
              <HiSearch className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Start Searching
              </h2>
              <p className="text-gray-600">
                Enter at least 2 characters to search for articles and guides
              </p>
            </div>
          ) : totalResults === 0 ? (
            // No results found
            <div className="text-center py-12">
              <HiSearch className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                No Results Found
              </h2>
              <p className="text-gray-600 mb-6">
                We couldn't find anything matching "{query}". Try different keywords
                or browse our resources below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/resources/blog"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                >
                  Browse Blog
                </Link>
                <Link
                  to="/resources/help"
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
                >
                  Help Center
                </Link>
              </div>
            </div>
          ) : (
            // Results found
            <div className="space-y-12">
              {/* Blog Results */}
              {blogResults.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <HiDocument className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Blog Posts
                      <span className="ml-2 text-lg text-gray-500">
                        ({blogResults.length})
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {blogResults.map((post) => (
                      <Link
                        key={post.id}
                        to={`/resources/blog/${post.slug}`}
                        className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                                {post.category}
                              </span>
                              <span className="text-sm text-gray-500">
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-accent transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.publishDate}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Help Articles Results */}
              {helpResults.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <HiQuestionMarkCircle className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Help Articles
                      <span className="ml-2 text-lg text-gray-500">
                        ({helpResults.length})
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {helpResults.map((article) => (
                      <Link
                        key={article.id}
                        to={`/resources/help/${article.slug}`}
                        className="block p-5 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <HiQuestionMarkCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-accent transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {article.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchResultsPage;
