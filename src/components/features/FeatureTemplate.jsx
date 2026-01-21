import { Helmet } from 'react-helmet-async';
import { CheckIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';

const FeatureTemplate = ({ feature }) => {
  return (
    <>
      <Helmet>
        <title>{feature.name} - Invoicer Features | Inventory & POS Software</title>
        <meta
          name="description"
          content={feature.description}
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              {feature.badge && (
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {feature.badge}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {feature.tagline}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {feature.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Start Free Trial
                </Button>
                <button className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Benefits Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why {feature.name}?
                </h2>
                <p className="text-lg text-gray-600">
                  Powerful features that solve real business problems
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {feature.keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-[#9FE870] transition-all"
                  >
                    <div className="w-12 h-12 bg-[#9FE870]/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Capabilities Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Everything You Need
                </h2>
                <p className="text-lg text-gray-600">
                  Complete features to run your business smoothly
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {feature.capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <ul className="space-y-3">
                      {capability.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-[#9FE870] flex-shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Perfect For
                </h2>
                <p className="text-lg text-gray-600">
                  See how different businesses use {feature.name}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {feature.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-[#163300] to-[#0d1f00] rounded-2xl text-white"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {useCase.industry}
                    </h3>
                    <p className="text-white/90">
                      {useCase.scenario}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Integrations Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Works With
                </h2>
                <p className="text-lg text-gray-600">
                  Integrates seamlessly with the tools you already use
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {feature.integrations.map((integration, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <CheckIcon className="h-5 w-5 text-[#9FE870] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Pricing Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Pricing & Availability
                </h2>
                <p className="text-lg text-gray-600">
                  Choose the plan that's right for you
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {Object.entries(feature.pricing).map(([plan, availability]) => (
                  <div
                    key={plan}
                    className={`p-6 rounded-2xl border-2 ${
                      plan === 'pro'
                        ? 'border-[#9FE870] bg-[#9FE870]/5'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 capitalize mb-2">
                        {plan}
                      </h3>
                      <p className={`text-sm ${
                        availability.toLowerCase().includes('not')
                          ? 'text-gray-400'
                          : 'text-gray-600'
                      }`}>
                        {availability}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-[#163300] hover:text-[#9FE870] font-semibold"
                >
                  See Full Pricing Details →
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Start using {feature.name} today with your free trial
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Start Free Trial
                </Button>
                <a
                  href="/about/contact"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to Sales
                </a>
              </div>
              <p className="mt-6 text-white/70">
                ✓ 30-day free trial  ✓ No credit card required  ✓ Setup in minutes
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default FeatureTemplate;
