import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ClockIcon, CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import { gettingStartedSteps } from '../../data/resourcesData';

const GettingStartedPage = () => {
  const totalTime = gettingStartedSteps.reduce((acc, step) => {
    const minutes = parseInt(step.estimatedTime.match(/\d+/)[0]);
    return acc + minutes;
  }, 0);

  return (
    <>
      <Helmet>
        <title>Getting Started with Invoicer - Quick Setup Guide</title>
        <meta
          name="description"
          content="Get up and running with Invoicer in under an hour. Follow our step-by-step guide to set up your account and start selling."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Getting Started with Invoicer
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Complete setup in {totalTime} minutes and start selling today
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90">
                <ClockIcon className="h-5 w-5" />
                <span>Estimated time: {totalTime} minutes</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* Progress Overview */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Your Setup Checklist
                </h2>
                <div className="grid md:grid-cols-7 gap-4">
                  {gettingStartedSteps.map((step, index) => (
                    <div key={step.id} className="text-center">
                      <div className="w-12 h-12 mx-auto bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-xl mb-2">
                        {step.icon}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Step {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Detailed Steps */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {gettingStartedSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Step Header */}
                    <div className="bg-gradient-to-r from-[#163300] to-[#0d1f00] text-white p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{step.icon}</div>
                          <div>
                            <div className="text-sm text-white/70 mb-1">
                              Step {index + 1} of {gettingStartedSteps.length}
                            </div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm">
                          <ClockIcon className="h-4 w-4" />
                          {step.estimatedTime}
                        </div>
                      </div>
                      <p className="text-white/90">{step.description}</p>
                    </div>

                    {/* Step Content */}
                    <div className="p-6">
                      <ul className="space-y-3">
                        {step.steps.map((substep, substepIndex) => (
                          <li key={substepIndex} className="flex items-start gap-3 group">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#163300] flex items-center justify-center mt-0.5 group-hover:bg-[#163300] transition-colors">
                              <CheckCircleIcon className="h-4 w-4 text-[#163300] group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">{substep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step Footer */}
                    {index < gettingStartedSteps.length - 1 && (
                      <div className="px-6 pb-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600">
                            Once completed, move to Step {index + 2}
                          </span>
                          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Completion Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white rounded-2xl p-8 md:p-12 text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  You're All Set!
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Congratulations! You've completed the setup and you're ready to start managing your business with Invoicer.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-3xl mb-2">📚</div>
                    <h3 className="font-bold mb-2">Read Help Articles</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Learn advanced features
                    </p>
                    <Link
                      to="/resources/help"
                      className="text-[#9FE870] text-sm font-semibold hover:underline"
                    >
                      Browse Articles
                    </Link>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-3xl mb-2">🎬</div>
                    <h3 className="font-bold mb-2">Watch Tutorials</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Video guides for every feature
                    </p>
                    <Link
                      to="/resources/videos"
                      className="text-[#9FE870] text-sm font-semibold hover:underline"
                    >
                      Watch Now
                    </Link>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-3xl mb-2">💬</div>
                    <h3 className="font-bold mb-2">Get Support</h3>
                    <p className="text-white/80 text-sm mb-3">
                      We're here to help
                    </p>
                    <a
                      href="mailto:support@getinvoicer.app"
                      className="text-[#9FE870] text-sm font-semibold hover:underline"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Next Steps */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Recommended Next Steps
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/resources/help/adding-products"
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">📦</div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#163300] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                    Import Products in Bulk
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to import multiple products at once using CSV
                  </p>
                </Link>

                <Link
                  to="/resources/videos"
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">🎬</div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#163300] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                    Watch Video Tutorials
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Visual guides to help you master every feature
                  </p>
                </Link>

                <Link
                  to="/hardware"
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">🖨️</div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#163300] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                    Get Hardware
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Browse compatible receipt printers and barcode scanners
                  </p>
                </Link>

                <Link
                  to="/resources/success-stories"
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">⭐</div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#163300] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#163300] transition-colors">
                    Read Success Stories
                  </h3>
                  <p className="text-gray-600 text-sm">
                    See how other businesses are growing with Invoicer
                  </p>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default GettingStartedPage;
