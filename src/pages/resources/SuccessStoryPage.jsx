import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  MapPinIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  CalendarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import Button from '../../components/shared/buttons/Button';
import { successStories } from '../../data/resourcesData';

const SuccessStoryPage = () => {
  const { slug } = useParams();
  const story = successStories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Story Not Found</h1>
            <p className="text-gray-600 mb-6">The success story you're looking for doesn't exist.</p>
            <Link to="/resources/success-stories">
              <Button>Back to Success Stories</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const otherStories = successStories.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{story.businessName} Success Story | Invoicer</title>
        <meta name="description" content={story.quote} />
      </Helmet>

      <main>
        {/* Story Header */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Link
                to="/resources/success-stories"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Success Stories
              </Link>

              <div className="inline-block px-3 py-1 bg-[#9FE870] text-[#163300] rounded-full text-sm font-semibold mb-4">
                {story.businessType}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{story.businessName}</h1>

              {/* Business Info */}
              <div className="flex flex-wrap gap-6 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5" />
                  {story.location}
                </div>
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="h-5 w-5" />
                  {story.employeeCount} Employees
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Started using Invoicer in {story.yearStarted}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl font-medium italic border-l-4 border-[#9FE870] pl-6">
                "{story.quote}"
              </blockquote>
            </div>
          </Container>
        </Section>

        {/* Featured Image */}
        <Section className="bg-white pt-0">
          <Container>
            <div className="max-w-4xl mx-auto -mt-12">
              <div className="bg-gradient-to-br from-[#163300] to-[#0d1f00] aspect-video rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <BuildingStorefrontIcon className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p className="text-white/70">{story.businessType}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Results */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Results Achieved
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {story.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                  >
                    <div className="text-5xl font-bold text-[#163300] mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-600">{result.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* The Challenge */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{story.challenge}</p>
            </div>
          </Container>
        </Section>

        {/* The Solution */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-start gap-4">
                  <CheckCircleIcon className="h-8 w-8 text-[#163300] flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 leading-relaxed">{story.solution}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Testimonial */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#163300] to-[#0d1f00] rounded-2xl p-8 md:p-12 text-white">
                <div className="text-6xl mb-6 opacity-50">"</div>
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                  {story.testimonial}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#9FE870] rounded-full flex items-center justify-center text-[#163300] text-2xl font-bold">
                    {story.owner.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{story.owner}</div>
                    <div className="text-white/80">
                      Owner, {story.businessName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* More Success Stories */}
        {otherStories.length > 0 && (
          <Section className="bg-gray-50">
            <Container>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  More Success Stories
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {otherStories.map((otherStory) => (
                    <Link
                      key={otherStory.id}
                      to={`/resources/success-stories/${otherStory.slug}`}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
                    >
                      {/* Image */}
                      <div className="bg-gradient-to-br from-[#163300] to-[#0d1f00] aspect-video flex items-center justify-center">
                        <BuildingStorefrontIcon className="h-12 w-12 text-white/30" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">
                          {otherStory.businessType}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                          {otherStory.businessName}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {otherStory.quote}
                        </p>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPinIcon className="h-3 w-3" />
                          {otherStory.location}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Success Story Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join {story.businessName} and 50,000+ other businesses using Invoicer
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

export default SuccessStoryPage;
