import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import { pricingFAQ } from '../../data/pricing';

const PricingFAQ = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {pricingFAQ.map((faq, index) => (
              <Disclosure key={index} as="div">
                {({ open }) => (
                  <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <Disclosure.Button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className={clsx(
                          'h-5 w-5 text-gray-500 transition-transform',
                          open && 'rotate-180'
                        )}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-[#163300] to-[#0d1f00] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-3">
              Still have questions?
            </h3>
            <p className="text-white/80 mb-6">
              Our support team is here to help you find the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/about/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#9FE870] text-[#163300] font-semibold rounded-lg hover:bg-[#8ED760] transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="https://wa.me/2347079582114"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PricingFAQ;
