import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import SearchBar from '../../components/shared/widgets/SearchBar';
import { getBlogPosts, urlFor } from '../../lib/sanity';

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
      <Section className="bg-white min-h-screen">
        <Container>
          <div className="max-w-6xl mx-auto py-12 text-center">
            <div className="text-lg text-gray-600">Loading blog posts...</div>
          </div>
        </Container>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="bg-white min-h-screen">
        <Container>
          <div className="max-w-6xl mx-auto py-12 text-center">
            <div className="text-lg text-red-600">{error}</div>
          </div>
        </Container>
      </Section>
    );
  }

  if (posts.length === 0) {
    return (
      <Section className="bg-white min-h-screen">
        <Container>
          <div className="max-w-6xl mx-auto py-12 text-center">
            <div className="text-lg text-gray-600">No blog posts available yet.</div>
          </div>
        </Container>
      </Section>
    );
  }

  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog - Invoicer Tips, Guides & Insights</title>
        <meta
          name="description"
          content="Learn how to grow your business with tips on inventory management, POS systems, and retail strategies from Invoicer experts."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Invoicer Blog
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Tips, guides, and insights to help you grow your business
              </p>

              {/* Search Bar */}
              <SearchBar placeholder="Search blog posts..." />
            </div>
          </Container>
        </Section>

        {/* Featured Post */}
        {featuredPost && (
          <Section className="bg-white">
            <Container>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                <Link
                  to={`/resources/blog/${featuredPost.slug}`}
                  className="block bg-gradient-to-br from-[#163300] to-[#0d1f00] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow group"
                >
                  <div className="md:grid md:grid-cols-2">
                    {/* Image */}
                    <div className="bg-white/10 aspect-video md:aspect-auto flex items-center justify-center overflow-hidden">
                      {featuredPost.image ? (
                        <img
                          src={urlFor(featuredPost.image).width(800).height(600).url()}
                          alt={featuredPost.imageAlt || featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-8">
                          <div className="text-6xl mb-2">📝</div>
                          <p className="text-white/70 text-sm">Featured image</p>
                        </div>
                      )}
                    </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 text-white">
                    <div className="inline-block px-3 py-1 bg-[#9FE870] text-[#163300] rounded-full text-sm font-semibold mb-4">
                      {featuredPost.category}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-[#9FE870] transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/90 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-6">
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(featuredPost.publishDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#9FE870] font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRightIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Container>
        </Section>
        )}

        {/* Categories Filter */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                <button className="px-6 py-2 bg-[#163300] text-white rounded-full font-semibold hover:bg-[#0d1f00] transition-colors">
                  All Articles
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-full font-semibold hover:border-[#163300] hover:text-[#163300] transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Recent Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <Link
                    key={post._id || post.slug}
                    to={`/resources/blog/${post.slug}`}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Image */}
                    <div className="bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
                      {post.image ? (
                        <img
                          src={urlFor(post.image).width(600).height(400).url()}
                          alt={post.imageAlt || post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-4xl mb-1">📝</div>
                          <p className="text-gray-400 text-xs">Article image</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block px-2 py-1 bg-[#9FE870]/20 text-[#163300] rounded text-xs font-semibold mb-3">
                        {post.category}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#163300] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-3 w-3" />
                          {new Date(post.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Newsletter CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Business Tips in Your Inbox
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join 10,000+ business owners receiving weekly insights
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#9FE870] text-[#163300] rounded-lg font-semibold hover:bg-[#8FD860] transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-white/70 text-sm mt-3">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default BlogPage;
