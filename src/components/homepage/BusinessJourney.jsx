import {
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
  PrinterIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import Button from '../shared/buttons/Button';
import { businessJourneyStages } from '../../data/features';

const iconComponents = {
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
  PrinterIcon,
  GlobeAltIcon,
};

const BusinessJourney = () => {
  return (
    <Section className="bg-gradient-to-br from-[#163300] to-[#0d1f00] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Store to Online: Your Growth Journey
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Start simple, grow at your own pace. Invoicer grows with you every step of the way.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-4 mb-12">
          {businessJourneyStages.map((stage, index) => {
            const IconComponent = iconComponents[stage.icon];
            return (
              <div key={stage.stage} className="relative">
                {/* Connector Line (desktop only) */}
                {index < businessJourneyStages.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#9FE870]/30 -translate-x-1/2 z-0"></div>
                )}

                {/* Stage Card */}
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  {/* Stage Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-bold text-[#9FE870]">
                      STAGE {stage.stage}
                    </div>
                    {stage.badge && (
                      <span className="inline-flex items-center rounded-full bg-[#9FE870] px-2.5 py-0.5 text-xs font-bold text-[#163300]">
                        {stage.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#9FE870]/20 flex items-center justify-center">
                      <IconComponent className="h-7 w-7 text-[#9FE870]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                  <p className="text-white/80 text-sm">{stage.description}</p>
                </div>

                {/* Connector Arrow (mobile only) */}
                {index < businessJourneyStages.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="text-[#9FE870] text-2xl">↓</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="secondary" size="lg">
            Start Your Journey
          </Button>
          <p className="mt-4 text-white/70 text-sm">
            ✓ Free for 30 days  ✓ No credit card required  ✓ Setup in 5 minutes
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BusinessJourney;
