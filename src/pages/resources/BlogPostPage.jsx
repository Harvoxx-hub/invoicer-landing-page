import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, TagIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import Button from '../../components/shared/buttons/Button';
import { getBlogPost, getBlogPosts, urlFor } from '../../lib/sanity';
import PortableText from '../../components/shared/PortableText';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await getBlogPost(slug);
        setPost(data);
        
        // Fetch related posts if we have a post
        if (data) {
          const allPosts = await getBlogPosts();
          const related = allPosts
            .filter((p) => p._id !== data._id && p.category === data.category)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Section className="bg-white min-h-screen">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <div className="text-lg text-gray-600">Loading article...</div>
          </div>
        </Container>
      </Section>
    );
  }

  if (!post) {
    return (
      <Section className="bg-white min-h-screen">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/resources/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Invoicer Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <main>
        {/* Article Header */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Link
                to="/resources/blog"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="inline-block px-3 py-1 bg-[#9FE870] text-[#163300] rounded-full text-sm font-semibold mb-4">
                {post.category}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <div>
                    <div className="font-semibold text-white">{post.author}</div>
                    <div className="text-sm">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              {post.image && (
                <div className="rounded-2xl overflow-hidden mb-12">
                  <img
                    src={urlFor(post.image).width(1200).height(675).url()}
                    alt={post.imageAlt || post.title}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Article Body */}
              <article className="prose prose-lg max-w-none">
                {post.excerpt && (
                  <div className="text-xl text-gray-600 mb-8 font-medium">{post.excerpt}</div>
                )}

                {/* Use PortableText to render Sanity content */}
                {post.content && <PortableText value={post.content} />}
              </article>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-3 mt-12 pt-8 border-t border-gray-200">
                  <TagIcon className="h-5 w-5 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* Author Bio */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#163300] to-[#0d1f00] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{post.author}</h3>
                    <p className="text-[#163300] font-semibold mb-3">{post.authorRole}</p>
                    <p className="text-gray-600">
                      {post.authorRole === 'Business Consultant'
                        ? 'Helping Nigerian businesses grow through smart inventory and sales strategies.'
                        : post.authorRole === 'Retail Technology Expert'
                        ? 'Specialist in POS systems and retail technology for African markets.'
                        : 'Expert in retail operations and sales growth strategies.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <Section className="bg-white">
            <Container>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost._id || relatedPost.slug}
                      to={`/resources/blog/${relatedPost.slug}`}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                    >
                      {/* Image */}
                      <div className="bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
                        {relatedPost.image ? (
                          <img
                            src={urlFor(relatedPost.image).width(600).height(400).url()}
                            alt={relatedPost.imageAlt || relatedPost.title}
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
                          {relatedPost.category}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>

                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-3">
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* CTA Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try Invoicer?</h2>
              <p className="text-xl text-white/90 mb-8">
                Join 50,000+ businesses managing inventory and sales with Invoicer
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Download Free App
                </Button>
                <Link
                  to="/pricing"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default BlogPostPage;
