import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import Container from '../../components/shared/layout/Container';
import Section from '../../components/shared/layout/Section';
import Button from '../../components/shared/buttons/Button';
import { hardwareProducts, hardwareBundles, hardwareFeatures } from '../../data/hardware';

const HardwareOverviewPage = () => {
  return (
    <>
      <Helmet>
        <title>POS Hardware - Receipt Printers & Devices | Invoicer</title>
        <meta
          name="description"
          content="Professional POS hardware for Nigerian businesses. Bluetooth printers from ₦45,000. Android POS devices from ₦120,000. Free shipping nationwide."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Hardware That Grows with Your Business
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Affordable, reliable POS hardware designed for African businesses. All devices work seamlessly with the Invoicer app.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Compare All Devices
                </Button>
                <a
                  href="/about/contact"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* Hardware Products */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Perfect Device
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From portable printers to full POS terminals, we have the right hardware for every business size.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {hardwareProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#9FE870] transition-all overflow-hidden group"
                >
                  {product.badge && (
                    <div className="bg-[#9FE870] text-[#163300] text-xs font-bold px-4 py-2 text-center">
                      {product.badge}
                    </div>
                  )}

                  <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🖨️</div>
                      <p className="text-sm text-gray-500">Product image coming soon</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 min-h-[60px]">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-[#9FE870] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <div className="text-3xl font-bold text-[#163300]">
                        {product.currency}{product.price.toLocaleString()}
                      </div>
                    </div>

                    <Link to={product.link}>
                      <Button variant="primary" size="md" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Comparison Table */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare All Devices
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Bluetooth Printer
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Handheld POS
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-[#9FE870]/10">
                      Android POS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Price</td>
                    <td className="px-6 py-4 text-sm text-center">₦45,000</td>
                    <td className="px-6 py-4 text-sm text-center">₦95,000</td>
                    <td className="px-6 py-4 text-sm text-center bg-[#9FE870]/5">₦120,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Receipt Printing</td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-[#9FE870]/5"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Barcode Scanner</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-400">–</td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-[#9FE870]/5"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Built-in Screen</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-400">–</td>
                    <td className="px-6 py-4 text-sm text-center">4-inch</td>
                    <td className="px-6 py-4 text-sm text-center bg-[#9FE870]/5">5-inch</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Standalone Operation</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-400">–</td>
                    <td className="px-6 py-4 text-center"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                    <td className="px-6 py-4 text-center bg-[#9FE870]/5"><CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Battery Life</td>
                    <td className="px-6 py-4 text-sm text-center">3-4 hours</td>
                    <td className="px-6 py-4 text-sm text-center">8+ hours</td>
                    <td className="px-6 py-4 text-sm text-center bg-[#9FE870]/5">12+ hours</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Best For</td>
                    <td className="px-6 py-4 text-sm text-center">Mobile vendors</td>
                    <td className="px-6 py-4 text-sm text-center">Small shops</td>
                    <td className="px-6 py-4 text-sm text-center bg-[#9FE870]/5">Busy retail</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </Section>

        {/* Hardware Bundles */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Save with Hardware Bundles
              </h2>
              <p className="text-lg text-gray-600">
                Get everything you need in one package and save 15%
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {hardwareBundles.map((bundle) => (
                <div
                  key={bundle.id}
                  className={`rounded-2xl p-8 border-2 ${
                    bundle.badge
                      ? 'border-[#9FE870] bg-[#9FE870]/5 shadow-lg'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {bundle.badge && (
                    <div className="bg-[#9FE870] text-[#163300] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      {bundle.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                  <p className="text-gray-600 mb-6">{bundle.bestFor}</p>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 line-through">
                      ₦{bundle.originalPrice.toLocaleString()}
                    </div>
                    <div className="text-3xl font-bold text-[#163300]">
                      ₦{bundle.discountedPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save ₦{(bundle.originalPrice - bundle.discountedPrice).toLocaleString()}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-900 mb-3">Includes:</div>
                    <ul className="space-y-2">
                      {bundle.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-[#9FE870] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant={bundle.badge ? 'primary' : 'outline'} size="md" className="w-full">
                    Get This Bundle
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* What's Included */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's Included with All Hardware
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {hardwareFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200">
                  <CheckIcon className="h-8 w-8 text-[#9FE870] mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">{feature}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Upgrade Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get professional hardware delivered nationwide. Free shipping on all orders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="lg">
                  Order Now
                </Button>
                <a
                  href="https://wa.me/2348012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default HardwareOverviewPage;
