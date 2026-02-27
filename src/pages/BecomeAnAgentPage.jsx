import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Input from '../components/shared/forms/Input';
import Select from '../components/shared/forms/Select';
import Container from '../components/shared/layout/Container';
import Button from '../components/shared/buttons/Button';
import { agentFormSchema, countryOptions } from '../schemas/agentFormSchema';
import { createAgentFormMailto } from '../utils/mailto';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/IMHRcHMa408AZjGAFyRrQV?mode=gi_t';

const BecomeAnAgentPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(agentFormSchema),
  });

  const onSubmit = (data) => {
    const mailtoLink = createAgentFormMailto(data);
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Become an Agent – Invoicer</title>
        <meta
          name="description"
          content="Join the Invoicer agent program. Flexible earning potential helping African businesses grow with POS and inventory management."
        />
        <link rel="canonical" href="https://getinvoicer.app/become-an-agent" />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-[#163300] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#9FE870] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9FE870] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#9FE870]/20 text-[#9FE870] text-sm font-semibold mb-6">
              Partner with Invoicer
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6 leading-tight">
              Enjoy flexible and unlimited earning potential as an Invoicer agent
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-10">
              Are you looking for a meaningful opportunity with real growth? Help small businesses
              across Africa succeed with Invoicer and earn while you do it.
            </p>
            <ul className="text-left max-w-md mx-auto space-y-4 text-gray-100 mb-12">
              <li className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 text-xl" />
                <span>Financial growth and flexible commissions</span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 text-xl" />
                <span>Unlimited earning potential</span>
              </li>
              <li className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 text-xl" />
                <span>Become more relevant in the digital economy</span>
              </li>
            </ul>
            <a
              href="#agent-form"
              className="inline-flex items-center gap-2 bg-[#9FE870] text-[#163300] font-semibold px-10 py-4 rounded-full hover:bg-[#9FE870]/90 transition-all duration-200 shadow-lg shadow-[#9FE870]/25 hover:shadow-[#9FE870]/40 hover:scale-105"
            >
              Apply to become an agent
            </a>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section id="agent-form" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <Container size="sm">
          <div className="bg-white rounded-2xl shadow-xl border-l-4 border-[#163300] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#163300] text-white flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Agent registration form
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              Fill out the form below. After submitting, you’ll be invited to join the Invoicer
              Agents WhatsApp group.
            </p>

            {isSubmitted ? (
              <div className="text-center py-10 px-4 bg-[#9FE870]/10 rounded-2xl border-2 border-[#9FE870]/30">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#9FE870] text-[#163300] mb-6 shadow-lg">
                  <FaCheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application received</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your email client should open with the details. Once you’ve sent the email, join
                  the Invoicer Agents WhatsApp group to connect with the team and other agents.
                </p>
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#20BD5A] transition-all shadow-lg hover:scale-105"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Join Invoicer Agent WhatsApp group
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    {...register('firstName')}
                    label="First Name"
                    placeholder="John"
                    required
                    error={errors.firstName?.message}
                  />
                  <Input
                    {...register('lastName')}
                    label="Last Name"
                    placeholder="Doe"
                    required
                    error={errors.lastName?.message}
                  />
                </div>

                <Input
                  {...register('email')}
                  type="email"
                  label="Email"
                  placeholder="john@example.com"
                  required
                  error={errors.email?.message}
                />

                <Input
                  {...register('phone')}
                  type="tel"
                  label="Phone / Mobile"
                  placeholder="+234 800 000 0000"
                  required
                  error={errors.phone?.message}
                />

                <Input
                  {...register('address')}
                  label="Address"
                  placeholder="Street, area"
                  error={errors.address?.message}
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    {...register('city')}
                    label="City"
                    placeholder="Lagos"
                    required
                    error={errors.city?.message}
                  />
                  <Input
                    {...register('state')}
                    label="State"
                    placeholder="Lagos"
                    error={errors.state?.message}
                  />
                </div>

                <Select
                  {...register('country')}
                  label="Country"
                  options={countryOptions}
                  placeholder="Select Country"
                  required
                  error={errors.country?.message}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Apply now'}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* Rejection reasons + Biggest asset */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#9FE870]/10 to-[#163300]/5 border border-[#9FE870]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why a business owner might say no
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                There are only a few reasons why a business owner may reject Invoicer:
              </p>
              <ul className="list-none space-y-3 mb-8">
                {[
                  'The benefits of the software are not communicated to him/her very well',
                  'He or she is not the actual owner of the business',
                  'The business owner is not ready to help or grow his or her business at the moment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#163300] text-white flex items-center justify-center text-xs font-bold mt-0.5">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-[#163300] text-white">
                <p className="font-semibold mb-1">In business, Invoicer is one of the biggest assets any business owner will ever have.</p>
                <p className="text-white/90 text-sm">It’s like having a team of experts working behind the scenes, making sure everything’s moving along quickly and efficiently.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits of Invoicer to a business owner */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Benefits of Invoicer to a business owner
            </h2>
            <div className="grid gap-3">
              {[
                'It will help them prevent sales staff or employees from stealing their products or money',
                'It will help them keep accurate accounts of their product stock and income',
                'It will help business owners monitor their business from any location using any device',
                'It will help businesses understand which product is about to expire or is running out of stock easily',
                'It will help business owners store their customer data and retrieve their sales transactions',
                'It will help businesses manage customer advance payments and credits easily, without any bookkeeping, and they can send SMS payment reminders and promotional updates to customers',
                'It will help businesses know when they are profiting or losing in their business',
                'It will help businesses serve their customers faster, better and more professionally—they will no longer need calculators or manual receipts',
                'It will help businesses with invoicing and receipts—they can send sales invoices via WhatsApp and email to their customers',
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-[#9FE870]/30 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#163300] text-[#9FE870] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Invoicer is currently in use in */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Invoicer is currently in use in
            </h2>
            <ul className="flex flex-wrap gap-3 mb-6">
              {[
                'Pharmacy',
                'Boutique',
                'Supermarkets',
                'Restaurants',
                'Spare parts shops',
                'Electronic shops',
                'Cosmetics and beauty shops',
                'Mobile phone shops',
                'Computer shops',
                'Stationery',
                'Hospitals',
                'Tailoring',
                'Agro commodities',
                'Electrical',
                'Pure water companies',
              ].map((item) => (
                <li
                  key={item}
                  className="px-5 py-2.5 rounded-full bg-[#9FE870]/20 text-[#163300] font-medium border border-[#9FE870]/30 hover:bg-[#9FE870]/30 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              And can also be used in any business that sells products and services.
            </p>
          </div>
        </Container>
      </section>

      {/* How much can I earn */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#163300] to-[#0f2200] text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
              How much can I earn as an agent?
            </h2>
            <p className="text-[#9FE870] font-semibold text-center text-lg mb-8">
              The answer is as much as you can.
            </p>

            {/* Hero number: annual earnings from one merchant */}
            <div className="text-center p-8 md:p-10 rounded-3xl bg-[#9FE870] text-[#163300] mb-10 shadow-2xl border-4 border-white/20">
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-[#163300]/80 mb-2">
                From a single merchant onboarded
              </p>
              <p className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                ₦24,000
              </p>
              <p className="text-lg md:text-xl font-semibold text-[#163300]/90">
                in one year
              </p>
              <p className="text-sm text-[#163300]/70 mt-3">
                That’s ₦2,000 every month for 12 months — per merchant. More merchants = more income.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-[#9FE870] mb-1">40%</p>
                <p className="text-white/90 text-sm">Commission on what each merchant pays</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-[#9FE870] mb-1">₦2,000</p>
                <p className="text-white/90 text-sm">Per month per retained merchant</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-[#9FE870] mb-1">₦5,000</p>
                <p className="text-white/90 text-sm">Average merchant fee per month</p>
              </div>
            </div>

            <p className="text-white/90 text-center max-w-2xl mx-auto mb-10">
              Agents receive a <strong className="text-white">one-year commission</strong> from our retained merchants. Commission is paid <strong className="text-white">after the merchant has successfully paid</strong>. Many agents earn about <strong className="text-[#9FE870]">₦2,000 per month per retained merchant</strong>—and this continues for the full year as long as you remain active and your merchants stay on the system.
            </p>

            <ul className="space-y-3 text-white/90 max-w-xl mx-auto mb-10">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 mt-0.5 text-lg" />
                <span>40% commission on what each merchant pays</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 mt-0.5 text-lg" />
                <span>Paid only after the merchant has successfully paid</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 mt-0.5 text-lg" />
                <span><strong className="text-[#9FE870]">₦24,000 in a year</strong> from one merchant (₦2,000/month × 12 months)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 mt-0.5 text-lg" />
                <span>Recurring for one full year per merchant, as long as you stay active and merchants stay on the system</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#9FE870] flex-shrink-0 mt-0.5 text-lg" />
                <span>Flexible and independent—no pressure to meet targets</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-center mb-2">
              Listen to what our agents have to say about working with Invoicer
            </h3>
            <p className="text-white/80 text-center mb-10">
              Join the program and connect with other agents in the WhatsApp group to hear their stories and tips.
            </p>

            <div className="text-center p-8 rounded-2xl bg-white/10 border border-[#9FE870]/30">
              <p className="font-semibold text-lg mb-6">Ready to start? Register above to get your invite to the agent community.</p>
              <a
                href="#agent-form"
                className="inline-flex items-center gap-2 bg-[#9FE870] text-[#163300] font-semibold px-8 py-4 rounded-full hover:bg-[#9FE870]/90 transition-all hover:scale-105 shadow-lg"
              >
                Apply to become an agent
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BecomeAnAgentPage;
