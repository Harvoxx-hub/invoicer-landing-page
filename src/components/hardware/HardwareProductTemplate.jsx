import { Helmet } from 'react-helmet-async';
import { CheckIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';

const HardwareProductTemplate = ({ product }) => {
  return (
    <>
      <Helmet>
        <title>{product.name} - ₦{product.price.toLocaleString()} | Invoicer Hardware</title>
        <meta
          name="description"
          content={`${product.longDescription} Price: ₦${product.price.toLocaleString()}. Free shipping nationwide.`}
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square flex items-center justify-center overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-9xl mb-4">🖨️</div>
                      <p className="text-sm text-white/70">Product image coming soon</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {product.shortDescription}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#9FE870] mb-2">
                    ₦{product.price.toLocaleString()}
                  </div>
                  <p className="text-white/70">One-time purchase, lifetime value</p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {product.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/90">
                      <CheckIcon className="h-5 w-5 text-[#9FE870] flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg">
                    Order Now
                  </Button>
                  <a
                    href="https://wa.me/2348012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-center text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Ask Questions
                  </a>
                </div>

                <p className="mt-4 text-white/70 text-sm">
                  ✓ Free shipping nationwide  ✓ 1-year warranty  ✓ Setup support
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Product Gallery Section */}
        {product.images && product.images.length > 1 && (
          <Section className="bg-gray-50">
            <Container>
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Product Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-200 overflow-hidden"
                    >
                      <div className="aspect-square flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`${product.name} - View ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* Description Section */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About This Product
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.longDescription}
              </p>
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Choose This Device?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 bg-white rounded-xl border border-gray-200"
                  >
                    <CheckIcon className="h-6 w-6 text-[#9FE870] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Technical Specifications */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Technical Specifications
              </h2>

              <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900 w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </Section>

        {/* What's in the Box */}
        <Section className="bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                What's in the Box
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {product.inTheBox.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <CheckIcon className="h-5 w-5 text-[#9FE870] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Perfect For
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {product.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-[#163300] to-[#0d1f00] rounded-2xl text-white"
                  >
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-white/90">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Optional Add-ons (if available) */}
        {product.addons && product.addons.length > 0 && (
          <Section className="bg-gray-50">
            <Container>
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Optional Add-ons
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {product.addons.map((addon, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200"
                    >
                      <div>
                        <h3 className="font-bold text-gray-900">{addon.name}</h3>
                      </div>
                      <div className="text-2xl font-bold text-[#163300]">
                        ₦{addon.price.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}

        {/* Final CTA */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Upgrade Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Order your {product.name} today and get free nationwide shipping
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Order Now - ₦{product.price.toLocaleString()}
                </Button>
                <a
                  href="/hardware"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Compare All Hardware
                </a>
              </div>
              <p className="mt-6 text-white/70">
                ✓ Free shipping  ✓ 1-year warranty  ✓ Nigerian support  ✓ Setup included
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default HardwareProductTemplate;
