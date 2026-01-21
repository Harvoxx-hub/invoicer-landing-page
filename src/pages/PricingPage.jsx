import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckIcon } from '@heroicons/react/24/outline';
import Container from '../components/shared/layout/Container';
import Section from '../components/shared/layout/Section';
import PricingCard from '../components/pricing/PricingCard';
import ROICalculator from '../components/pricing/ROICalculator';
import ComparisonTable from '../components/pricing/ComparisonTable';
import PricingFAQ from '../components/pricing/PricingFAQ';
import { pricingTiers } from '../data/pricing';
import { hardwareProducts } from '../data/hardware';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <>
      <Helmet>
        <title>Pricing - Simple Plans from ₦0/month | Invoicer</title>
        <meta
          name="description"
          content="Choose the perfect plan for your business. Start free with up to 100 products. Upgrade to Pro for ₦8,000/month with unlimited products and online store."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Start free, upgrade when you're ready. All plans include a 30-day free trial.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-[#9FE870] text-[#163300]'
                      : 'text-white hover:text-[#9FE870]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
                    billingPeriod === 'annual'
                      ? 'bg-[#9FE870] text-[#163300]'
                      : 'text-white hover:text-[#9FE870]'
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Pricing Cards */}
        <Section className="bg-gray-50 -mt-20 relative z-10">
          <Container>
            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {pricingTiers.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  billingPeriod={billingPeriod}
                  featured={plan.popular}
                />
              ))}
            </div>

            {/* Trust Elements */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <span className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-[#9FE870]" />
                  <span>30-day free trial</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-[#9FE870]" />
                  <span>No credit card required</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-[#9FE870]" />
                  <span>Cancel anytime</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-[#9FE870]" />
                  <span>14-day money-back guarantee</span>
                </span>
              </p>
            </div>
          </Container>
        </Section>

        {/* Hardware Add-ons Section */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hardware Add-ons
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Works with any plan. One-time purchase, lifetime value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {hardwareProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#9FE870] transition-all"
                >
                  <div className="text-4xl mb-4">🖨️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#163300] mb-4">
                    {product.currency}{product.price.toLocaleString()}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckIcon className="h-4 w-4 text-[#9FE870] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={product.link}
                    className="text-[#163300] hover:text-[#9FE870] font-semibold text-sm"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                <CheckIcon className="h-5 w-5 text-[#9FE870] inline mr-2" />
                Free shipping nationwide • 1-year warranty • Nigerian support
              </p>
            </div>
          </Container>
        </Section>

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* FAQ */}
        <PricingFAQ />

        {/* Final CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join 10,000+ Nigerian businesses growing with Invoicer
              </p>
              <button className="px-8 py-4 bg-[#9FE870] text-[#163300] font-bold text-lg rounded-lg hover:bg-[#8ED760] transition-colors">
                Start Your Free Trial
              </button>
              <p className="mt-4 text-white/70">
                No credit card required • Setup in 5 minutes
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default PricingPage;
