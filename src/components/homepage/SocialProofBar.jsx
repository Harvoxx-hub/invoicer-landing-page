import { useEffect, useState } from 'react';
import Container from '../shared/layout/Container';
import { testimonialStats } from '../../data/testimonials';

const SocialProofBar = () => {
  const [counts, setCounts] = useState(
    testimonialStats.map(() => 0)
  );

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const interval = duration / steps;

    const targetValues = testimonialStats.map(item => {
      const numStr = item.stat.replace(/[^0-9.]/g, '');
      return parseFloat(numStr);
    });

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounts(
          targetValues.map(target =>
            Math.floor((target / steps) * currentStep)
          )
        );
      } else {
        clearInterval(timer);
        // Set final values with original formatting
        setCounts(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const formatStat = (value, originalStat) => {
    if (originalStat.includes('+')) {
      if (originalStat.includes('M')) {
        return `₦${value}M+`;
      } else if (originalStat.includes('K')) {
        return `${value}K+`;
      }
      return `${value.toLocaleString()}+`;
    }
    return value.toString();
  };

  return (
    <div className="bg-[#9FE870] py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {testimonialStats.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#163300] mb-1">
                {formatStat(counts[index], item.stat)}
              </div>
              <div className="text-sm md:text-base text-[#163300]/80 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SocialProofBar;
