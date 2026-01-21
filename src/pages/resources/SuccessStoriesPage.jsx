import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPinIcon, BuildingStorefrontIcon, ArrowRightIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import { successStories } from '../../data/resourcesData';

const SuccessStoriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Success Stories - Real Businesses Growing with Invoicer</title>
        <meta
          name="description"
          content="Read how Nigerian businesses are growing with Invoicer. Real stories from retailers, pharmacies, and supermarkets across Africa."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Success Stories
              </h1>
              <p className="text-xl text-white/90">
                Real businesses achieving real results with Invoicer
              </p>
            </div>
          </Container>
        </Section>

        {/* Stats Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#163300] mb-2">50,000+</div>
                  <div className="text-gray-600">Active Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#163300] mb-2">10M+</div>
                  <div className="text-gray-600">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#163300] mb-2">8</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#163300] mb-2">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Success Stories Grid */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {successStories.map((story) => (
                  <Link
                    key={story.id}
                    to={`/resources/success-stories/${story.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
                  >
                    {/* Image Placeholder */}
                    <div className="bg-gradient-to-br from-[#163300] to-[#0d1f00] aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <BuildingStorefrontIcon className="h-16 w-16 mx-auto mb-2 opacity-50" />
                        <p className="text-white/70 text-sm">{story.businessType}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Business Info */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                          {story.businessName}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="h-4 w-4" />
                            {story.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <UserGroupIcon className="h-4 w-4" />
                            {story.employeeCount} employees
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-[#9FE870] pl-4">
                        "{story.quote}"
                      </blockquote>

                      {/* Owner */}
                      <div className="mb-6">
                        <div className="font-semibold text-gray-900">{story.owner}</div>
                        <div className="text-sm text-gray-600">Owner, {story.businessName}</div>
                      </div>

                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {story.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="bg-[#9FE870]/10 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-[#163300] mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-[#163300] font-semibold group-hover:gap-3 transition-all">
                        Read Full Story
                        <ArrowRightIcon className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of businesses growing with Invoicer
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://apps.apple.com/app/invoicer/id6751941791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#9FE870] text-[#163300] rounded-lg font-semibold hover:bg-[#8FD860] transition-colors"
                >
                  Download Free App
                </a>
                <Link
                  to="/pricing"
                  className="px-8 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default SuccessStoriesPage;
