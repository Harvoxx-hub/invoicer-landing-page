import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../shared/buttons/Button';

const PricingCard = ({ plan, billingPeriod, featured = false }) => {
  const price = plan.price[billingPeriod];
  const isCustom = typeof price !== 'number';

  return (
    <div
      className={`relative rounded-2xl p-8 ${
        featured
          ? 'bg-[#163300] text-white shadow-2xl scale-105 border-2 border-[#9FE870] z-10'
          : 'bg-white border-2 border-gray-200 shadow-sm hover:border-[#9FE870] transition-all'
      }`}
    >
      {/* Popular Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9FE870] text-[#163300] px-4 py-1 rounded-full text-sm font-bold">
          {plan.badge}
        </div>
      )}

      {/* Plan Header */}
      <div className="mb-6">
        <h3
          className={`text-2xl font-bold mb-2 ${
            featured ? 'text-white' : 'text-gray-900'
          }`}
        >
          {plan.name}
        </h3>
        <p className={featured ? 'text-white/80' : 'text-gray-600'}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        {isCustom ? (
          <div
            className={`text-4xl font-bold ${
              featured ? 'text-white' : 'text-gray-900'
            }`}
          >
            {price}
          </div>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span
                className={`text-4xl font-bold ${
                  featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.currency}
                {price.toLocaleString()}
              </span>
              <span className={featured ? 'text-white/80' : 'text-gray-600'}>
                /{billingPeriod === 'monthly' ? 'month' : 'year'}
              </span>
            </div>
            {billingPeriod === 'annual' && !isCustom && (
              <p
                className={`text-sm mt-1 ${
                  featured ? 'text-[#9FE870]' : 'text-green-600'
                }`}
              >
                Save ₦{(plan.price.monthly * 12 - plan.price.annual).toLocaleString()}/year
              </p>
            )}
            {plan.id === 'free' && (
              <p
                className={`text-sm mt-1 ${
                  featured ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                Forever free
              </p>
            )}
          </>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon
              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                featured ? 'text-[#9FE870]' : 'text-[#9FE870]'
              }`}
            />
            <span
              className={`text-sm ${
                featured ? 'text-white/90' : 'text-gray-600'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={featured ? 'secondary' : 'primary'}
        size="lg"
        className="w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
};

export default PricingCard;
