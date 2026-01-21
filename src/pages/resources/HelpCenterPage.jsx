import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import SearchBar from '../../components/shared/widgets/SearchBar';
import { helpCategories, helpArticles } from '../../data/resourcesData';

const HelpCenterPage = () => {
  const featuredArticles = helpArticles.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Help Center - Invoicer Support & Documentation</title>
        <meta
          name="description"
          content="Find answers, guides, and tutorials for getting the most out of Invoicer. Search our knowledge base or browse by category."
        />
      </Helmet>

      <main>
        {/* Hero Section with Search */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help?</h1>
              <p className="text-xl text-white/90 mb-8">
                Search for answers or browse our help articles
              </p>

              {/* Search Bar */}
              <SearchBar placeholder="Search for help articles..." />

              <p className="text-white/70 text-sm mt-3">
                Popular: Getting Started, Adding Products, Processing Sales
              </p>
            </div>
          </Container>
        </Section>

        {/* Categories Grid */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Browse by Category
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {helpCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/resources/help/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#163300] transition-all group"
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.articleCount} articles</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Featured Articles */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Featured Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/resources/help/${article.slug}`}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{article.icon}</div>
                      <div className="flex-1">
                        <div className="inline-block px-2 py-1 bg-[#9FE870]/20 text-[#163300] rounded text-xs font-semibold mb-2">
                          {article.category}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{article.excerpt}</p>
                        <p className="text-sm text-gray-500">{article.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Contact Support CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Our support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#9FE870] text-[#163300] rounded-lg font-semibold hover:bg-[#8FD860] transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:support@getinvoicer.app"
                  className="px-8 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Email Support
                </a>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Monday - Saturday: 8am - 8pm WAT
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default HelpCenterPage;
