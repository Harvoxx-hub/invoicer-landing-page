import { Helmet } from 'react-helmet-async';
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';
import { pricingTiers } from '../../data/pricing';
import { hardwareProducts } from '../../data/hardware';

const SolutionTemplate = ({ solution }) => {
  const recommendedPlanData = pricingTiers.find(p => p.name === solution.recommendedPlan);

  return (
    <>
      <Helmet>
        <title>{solution.name} - Invoicer Solutions | POS & Inventory Management</title>
        <meta
          name="description"
          content={solution.description}
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-[#9FE870]/20 text-[#9FE870] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {solution.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {solution.tagline}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {solution.description}
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

        {/* Challenges Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Challenges {solution.name} Face
                </h2>
                <p className="text-lg text-gray-600">
                  Running a {solution.name.toLowerCase()} comes with unique challenges
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-6 bg-red-50 rounded-xl border-2 border-red-100"
                  >
                    <XCircleIcon className="h-8 w-8 text-red-500 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Solutions Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How Invoicer Helps {solution.name}
                </h2>
                <p className="text-lg text-gray-600">
                  Purpose-built features that solve your specific challenges
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.solutions.map((sol, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border-2 border-green-100 hover:border-[#9FE870] transition-all"
                  >
                    <CheckIcon className="h-8 w-8 text-[#9FE870] mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {sol.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {sol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Features Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Key Features for {solution.name}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {solution.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckIcon className="h-5 w-5 text-[#9FE870] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Success Story Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Success Story
                </h2>
                <p className="text-xl text-white/80">
                  See how {solution.successStory.businessName} transformed their business
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Story Content */}
                <div>
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-[#9FE870]/20 rounded-full flex items-center justify-center text-4xl mb-4">
                      👤
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {solution.successStory.businessName}
                    </h3>
                    <p className="text-white/80">
                      {solution.successStory.owner} • {solution.successStory.location}
                    </p>
                  </div>

                  <blockquote className="text-xl italic mb-6 text-white/90 border-l-4 border-[#9FE870] pl-4">
                    "{solution.successStory.quote}"
                  </blockquote>

                  <div className="grid grid-cols-3 gap-4">
                    {solution.successStory.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-[#9FE870] mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-white/70">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before/After */}
                <div className="grid gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-lg font-bold mb-4 text-red-300">Before Invoicer</h4>
                    <ul className="space-y-2">
                      {solution.successStory.beforeAfter.before.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                          <XCircleIcon className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#9FE870]/20 backdrop-blur-sm rounded-xl p-6 border border-[#9FE870]/30">
                    <h4 className="text-lg font-bold mb-4 text-[#9FE870]">After Invoicer</h4>
                    <ul className="space-y-2">
                      {solution.successStory.beforeAfter.after.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-white/90">
                          <CheckIcon className="h-4 w-4 text-[#9FE870] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Recommended Setup Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Recommended Setup for {solution.name}
                </h2>
                <p className="text-lg text-gray-600">
                  Get started with the best plan and hardware for your needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Recommended Plan */}
                {recommendedPlanData && (
                  <div className="bg-white rounded-2xl p-8 border-2 border-[#9FE870] shadow-lg">
                    <div className="text-sm font-bold text-[#9FE870] mb-2">
                      RECOMMENDED PLAN
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {recommendedPlanData.name} Plan
                    </h3>
                    <div className="text-4xl font-bold text-[#163300] mb-6">
                      {typeof recommendedPlanData.price.monthly === 'number'
                        ? `₦${recommendedPlanData.price.monthly.toLocaleString()}/month`
                        : recommendedPlanData.price.monthly
                      }
                    </div>
                    <ul className="space-y-3 mb-6">
                      {recommendedPlanData.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-[#9FE870] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="primary" size="lg" className="w-full">
                      Start Free Trial
                    </Button>
                  </div>
                )}

                {/* Recommended Hardware */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                  <div className="text-sm font-bold text-gray-600 mb-2">
                    RECOMMENDED HARDWARE
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {solution.recommendedHardware.join(' + ')}
                  </h3>
                  <div className="space-y-4 mb-6">
                    {solution.recommendedHardware.map((hwName, index) => {
                      const hardware = hardwareProducts.find(h => h.name === hwName);
                      return hardware ? (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl">🖨️</div>
                          <div>
                            <div className="font-semibold text-gray-900">{hardware.name}</div>
                            <div className="text-sm text-gray-600">{hardware.currency}{hardware.price.toLocaleString()}</div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                  <Button variant="outline" size="lg" className="w-full">
                    View Hardware Options
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your {solution.name.slice(0, -1)}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join hundreds of {solution.name.toLowerCase()} already using Invoicer
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Start Your Free Trial
                </Button>
                <a
                  href="/about/contact"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule a Demo
                </a>
              </div>
              <p className="mt-6 text-white/70">
                ✓ 30-day free trial  ✓ No credit card required  ✓ Setup in 5 minutes
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default SolutionTemplate;
