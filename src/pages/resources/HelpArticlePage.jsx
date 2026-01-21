import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import Button from '../../components/shared/buttons/Button';
import { helpArticles } from '../../data/resourcesData';

const HelpArticlePage = () => {
  const { slug } = useParams();
  const article = helpArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The help article you're looking for doesn't exist.</p>
            <Link to="/resources/help">
              <Button>Back to Help Center</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const relatedArticles = helpArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | Invoicer Help Center</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <main>
        {/* Article Header */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Link
                to="/resources/help"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Help Center
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{article.icon}</div>
                <div className="inline-block px-3 py-1 bg-[#9FE870] text-[#163300] rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>

              <div className="flex items-center gap-2 text-white/80">
                <ClockIcon className="h-5 w-5" />
                {article.readTime}
              </div>
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Excerpt */}
              <div className="text-xl text-gray-600 mb-8 p-6 bg-[#9FE870]/10 rounded-xl border-l-4 border-[#163300]">
                {article.excerpt}
              </div>

              {/* Article Body */}
              <article className="prose prose-lg max-w-none">
                {/* Convert markdown-style content to HTML */}
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .split('\n\n')
                      .map((paragraph) => {
                        // Headings
                        if (paragraph.startsWith('## ')) {
                          return `<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${paragraph.replace('## ', '')}</h2>`;
                        }
                        if (paragraph.startsWith('### ')) {
                          return `<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">${paragraph.replace('### ', '')}</h3>`;
                        }
                        // Numbered lists
                        if (paragraph.match(/^\d+\./)) {
                          const items = paragraph.split('\n').filter((line) => line.trim());
                          return `<ol class="list-decimal list-inside space-y-2 mb-4">${items
                            .map(
                              (item) =>
                                `<li class="text-gray-700">${item.replace(/^\d+\.\s*/, '')}</li>`
                            )
                            .join('')}</ol>`;
                        }
                        // Bulleted lists
                        if (paragraph.startsWith('- ')) {
                          const items = paragraph.split('\n').filter((line) => line.trim());
                          return `<ul class="list-disc list-inside space-y-2 mb-4">${items
                            .map(
                              (item) => `<li class="text-gray-700">${item.replace(/^-\s*/, '')}</li>`
                            )
                            .join('')}</ul>`;
                        }
                        // Regular paragraph
                        return `<p class="text-gray-700 leading-relaxed mb-4">${paragraph}</p>`;
                      })
                      .join(''),
                  }}
                />
              </article>

              {/* Was this helpful? */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Was this article helpful?</h3>
                  <div className="flex items-center justify-center gap-4">
                    <button className="px-6 py-2 bg-[#163300] text-white rounded-lg font-semibold hover:bg-[#0d1f00] transition-colors">
                      Yes, helpful
                    </button>
                    <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:border-[#163300] hover:text-[#163300] transition-colors">
                      No, not helpful
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <Section className="bg-gray-50">
            <Container>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Help Articles</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/resources/help/${relatedArticle.slug}`}
                      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
                    >
                      <div className="text-4xl mb-3">{relatedArticle.icon}</div>

                      <div className="inline-block px-2 py-1 bg-[#9FE870]/20 text-[#163300] rounded text-xs font-semibold mb-3">
                        {relatedArticle.category}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                        {relatedArticle.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <BookOpenIcon className="h-3 w-3" />
                        {relatedArticle.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* Need More Help? */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl text-white/90 mb-8">
                Our support team is here to assist you
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:support@getinvoicer.app"
                  className="px-6 py-3 bg-[#9FE870] text-[#163300] rounded-lg font-semibold hover:bg-[#8FD860] transition-colors"
                >
                  Contact Support
                </a>
                <Link
                  to="/resources/help"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Browse All Articles
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default HelpArticlePage;
