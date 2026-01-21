import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';
import { hardwareProducts } from '../../data/hardware';

const HardwareShowcase = () => {
  return (
    <Section className="bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Hardware That Works with Your Phone
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Upgrade your business with affordable, reliable hardware. All devices work seamlessly with the Invoicer app.
          </p>
        </div>

        {/* Hardware Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {hardwareProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#9FE870] transition-all duration-300 overflow-hidden group"
            >
              {/* Badge */}
              {product.badge && (
                <div className="bg-[#9FE870] text-[#163300] text-xs font-bold px-4 py-2 text-center">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 min-h-[60px]">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#9FE870] mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#163300]">
                    {product.currency}{product.price.toLocaleString()}
                  </div>
                </div>

                {/* CTA */}
                <Link to={product.link}>
                  <Button variant="primary" size="md" className="w-full group-hover:scale-105 transition-transform">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            to="/hardware"
            className="inline-flex items-center gap-2 text-[#163300] hover:text-[#9FE870] font-semibold text-lg transition-colors"
          >
            Compare All Hardware & Bundles
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default HardwareShowcase;
