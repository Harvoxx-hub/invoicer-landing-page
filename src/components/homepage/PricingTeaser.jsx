import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';
import { pricingTiers } from '../../data/pricing';

const PricingTeaser = () => {
  // Show only 3 main plans (Free, Pro, Enterprise)
  const displayedPlans = pricingTiers.filter(
    tier => ['free', 'pro', 'enterprise'].includes(tier.id)
  );

  return (
    <Section className="bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {displayedPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl bg-white p-8 shadow-sm border-2 ${
                plan.popular
                  ? 'border-[#9FE870] shadow-xl scale-105 z-10'
                  : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9FE870] text-[#163300] px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {typeof plan.price.monthly === 'number' ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.currency}{plan.price.monthly.toLocaleString()}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {plan.id === 'free' && (
                      <p className="text-sm text-gray-500 mt-1">Forever free</p>
                    )}
                  </>
                ) : (
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price.monthly}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-[#9FE870] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.features.length > 5 && (
                  <li className="text-sm text-gray-500 italic">
                    + {plan.features.length - 5} more features
                  </li>
                )}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                size="md"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="text-center mb-8">
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
          </p>
        </div>

        {/* Link to Full Pricing Page */}
        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-[#163300] hover:text-[#9FE870] font-semibold transition-colors"
          >
            See Full Pricing Details & Comparison
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default PricingTeaser;
