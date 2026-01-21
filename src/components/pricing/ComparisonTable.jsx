import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import { planFeatureComparison } from '../../data/pricing';

const ComparisonTable = () => {
  const renderFeatureValue = (value) => {
    if (value === true) {
      return <CheckIcon className="h-5 w-5 text-[#9FE870] mx-auto" />;
    }
    if (value === false) {
      return <XMarkIcon className="h-5 w-5 text-gray-300 mx-auto" />;
    }
    return <span className="text-gray-900 font-medium">{value}</span>;
  };

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare All Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See exactly what's included in each plan
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/3">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Free
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-[#9FE870]/10">
                    Pro
                    <div className="text-xs font-normal text-gray-600 mt-1">Most Popular</div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {planFeatureComparison.map((category, categoryIndex) => (
                  <>
                    {/* Category Header */}
                    <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                      <td
                        colSpan="5"
                        className="px-6 py-3 text-sm font-bold text-gray-900"
                      >
                        {category.category}
                      </td>
                    </tr>

                    {/* Category Features */}
                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={`feature-${categoryIndex}-${featureIndex}`}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          {renderFeatureValue(feature.free)}
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          {renderFeatureValue(feature.starter)}
                        </td>
                        <td className="px-6 py-4 text-sm text-center bg-[#9FE870]/5">
                          {renderFeatureValue(feature.pro)}
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          {renderFeatureValue(feature.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {planFeatureComparison.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0">
                {/* Category Header */}
                <div className="bg-gray-100 px-4 py-3">
                  <h3 className="text-sm font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                {/* Features */}
                <div className="divide-y divide-gray-100">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="p-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">
                        {feature.name}
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        <div className="text-center">
                          <div className="text-gray-600 mb-1 font-semibold">Free</div>
                          <div>{renderFeatureValue(feature.free)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-600 mb-1 font-semibold">Starter</div>
                          <div>{renderFeatureValue(feature.starter)}</div>
                        </div>
                        <div className="text-center bg-[#9FE870]/10 rounded p-1">
                          <div className="text-gray-600 mb-1 font-semibold">Pro</div>
                          <div>{renderFeatureValue(feature.pro)}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-600 mb-1 font-semibold">Enterprise</div>
                          <div>{renderFeatureValue(feature.enterprise)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ComparisonTable;
