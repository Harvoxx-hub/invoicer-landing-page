import { useState } from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    products: 100,
    transactions: 20,
    staff: 1,
    currentSystem: 'pen-paper',
  });

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate ROI based on inputs
  const calculateROI = () => {
    const { products, transactions, staff } = inputs;

    // Time saved per week (hours)
    const timeSaved = Math.round(
      (products / 100) * 3 + // Inventory management time
      (transactions / 10) * 2 + // Transaction processing time
      staff * 2 // Staff management time
    );

    // Potential revenue increase (based on better stock management)
    const revenueIncrease = Math.round(
      transactions * 30 * 500 * 0.15 // 15% increase from avoiding stockouts
    );

    // Stockout reduction savings
    const stockoutSavings = Math.round(transactions * 30 * 300 * 0.1); // 10% of lost sales recovered

    // Total monthly savings
    const totalSavings = revenueIncrease + stockoutSavings;

    // Recommended plan
    let recommendedPlan = 'Free';
    let planCost = 0;
    if (products > 500 || staff > 2) {
      recommendedPlan = 'Pro';
      planCost = 5000;
    } else if (products > 100 || staff > 1) {
      recommendedPlan = 'Starter';
      planCost = 5000;
    }

    // Days to ROI
    const daysToROI = planCost > 0 ? Math.round((planCost / (totalSavings / 30)) * 10) / 10 : 0;

    return {
      timeSaved,
      revenueIncrease,
      stockoutSavings,
      totalSavings,
      recommendedPlan,
      planCost,
      daysToROI,
    };
  };

  const results = calculateROI();

  return (
    <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9FE870]/20 rounded-full mb-4">
              <CalculatorIcon className="h-8 w-8 text-[#9FE870]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-lg text-white/80">
              See how much you could save with Invoicer
            </p>
          </div>

          {/* Calculator Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Products Slider */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Average products in stock
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={inputs.products}
                  onChange={(e) => handleInputChange('products', parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#9FE870]"
                />
                <div className="text-2xl font-bold text-[#9FE870] mt-2">
                  {inputs.products.toLocaleString()} products
                </div>
              </div>

              {/* Transactions Slider */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Daily transactions
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="5"
                  value={inputs.transactions}
                  onChange={(e) => handleInputChange('transactions', parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#9FE870]"
                />
                <div className="text-2xl font-bold text-[#9FE870] mt-2">
                  {inputs.transactions} per day
                </div>
              </div>

              {/* Staff Slider */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Number of staff
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={inputs.staff}
                  onChange={(e) => handleInputChange('staff', parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#9FE870]"
                />
                <div className="text-2xl font-bold text-[#9FE870] mt-2">
                  {inputs.staff} {inputs.staff === 1 ? 'person' : 'people'}
                </div>
              </div>

              {/* Current System Dropdown */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Currently using
                </label>
                <select
                  value={inputs.currentSystem}
                  onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#9FE870]"
                >
                  <option value="pen-paper" className="text-gray-900">Pen & paper</option>
                  <option value="excel" className="text-gray-900">Excel</option>
                  <option value="other-software" className="text-gray-900">Other software</option>
                  <option value="none" className="text-gray-900">Nothing</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-[#9FE870] text-[#163300] rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Your Potential Results
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {results.timeSaved}h
                </div>
                <div className="text-sm font-semibold">Time saved per week</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  ₦{results.totalSavings.toLocaleString()}
                </div>
                <div className="text-sm font-semibold">Potential monthly savings</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {results.daysToROI > 0 ? `${results.daysToROI}` : '0'}
                </div>
                <div className="text-sm font-semibold">
                  {results.daysToROI > 0 ? 'Days to ROI' : 'Immediate value'}
                </div>
              </div>
            </div>

            <div className="bg-[#163300] text-white rounded-xl p-6 mb-6">
              <p className="text-lg text-center mb-4">
                Based on your inputs, we recommend the{' '}
                <span className="font-bold text-[#9FE870]">{results.recommendedPlan}</span> plan
                {results.planCost > 0 && (
                  <> at ₦{results.planCost.toLocaleString()}/month</>
                )}
              </p>
              {results.daysToROI > 0 && (
                <p className="text-center text-white/80">
                  The {results.recommendedPlan} plan pays for itself in just {results.daysToROI} days!
                </p>
              )}
            </div>

            <div className="text-center">
              <Button variant="primary" size="lg">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ROICalculator;
