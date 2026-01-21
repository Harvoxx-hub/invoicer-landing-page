import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Input from '../../components/shared/forms/Input';
import Textarea from '../../components/shared/forms/Textarea';
import Select from '../../components/shared/forms/Select';
import { contactFormSchema, businessTypeOptions } from '../../schemas/contactFormSchema';
import { createContactFormMailto } from '../../utils/mailto';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    const mailtoLink = createContactFormMailto(data);
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions about Invoicer? We're here to help your business succeed.
            Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll open your email client with the message pre-filled.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Your email client should open with the message pre-filled.
                    If not, please contact us directly at support@getinvoicer.app
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  {...register('name')}
                  label="Full Name"
                  placeholder="John Doe"
                  required
                  error={errors.name?.message}
                />

                <Input
                  {...register('email')}
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  required
                  error={errors.email?.message}
                />

                <Input
                  {...register('phone')}
                  type="tel"
                  label="Phone Number"
                  placeholder="+234 801 234 5678"
                  error={errors.phone?.message}
                />

                <Select
                  {...register('businessType')}
                  label="Business Type"
                  options={businessTypeOptions}
                  placeholder="Select your business type"
                  required
                  error={errors.businessType?.message}
                />

                <Textarea
                  {...register('message')}
                  label="Message"
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                  error={errors.message?.message}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Other Ways to Reach Us
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose the method that works best for you
                </p>
              </div>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/2348012345678?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Invoicer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                  <FaWhatsapp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Get instant support via WhatsApp
                  </p>
                  <p className="text-accent font-medium">
                    +234 801 234 5678
                  </p>
                </div>
              </a>

              {/* Email Contact */}
              <a
                href="mailto:support@getinvoicer.app"
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                  <HiMail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Send us an email anytime
                  </p>
                  <p className="text-accent font-medium">
                    support@getinvoicer.app
                  </p>
                </div>
              </a>

              {/* Phone Contact */}
              <a
                href="tel:+2348012345678"
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                  <HiPhone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Call us during business hours
                  </p>
                  <p className="text-accent font-medium">
                    +234 801 234 5678
                  </p>
                </div>
              </a>

              {/* Business Hours */}
              <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * WhatsApp messages are monitored 24/7
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Callout */}
          <div className="mt-16 text-center p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need Quick Answers?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out our Help Center for instant answers to common questions
            </p>
            <a
              href="/resources/help"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
