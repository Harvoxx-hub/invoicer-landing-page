import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Container from './Container';
import { footerNavigation } from '../../../data/navigation';
import logo from '../../../assets/images/logo.png';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { newsletterSchema } from '../../../schemas/newsletterSchema';
import { createNewsletterMailto } from '../../../utils/mailto';

const socialIcons = {
  twitter: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onNewsletterSubmit = (data) => {
    const mailtoLink = createNewsletterMailto(data.email);
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <footer className="bg-[#163300] text-white">
      <Container className="py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Invoicer logo - Inventory management and POS system app"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Run your business from your phone - from inventory to online
              sales. Built for African small businesses.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {footerNavigation.social.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#9FE870] transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-[#9FE870] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-bold text-base mb-4">Product</h3>
            <ul className="space-y-3">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-[#9FE870] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-base mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-[#9FE870] transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm text-gray-300 hover:text-[#9FE870] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-[#9FE870] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for tips, updates, and special offers
            </p>

            {isSubmitted && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-200 text-sm">
                  Your email client should open. If not, email us at support@getinvoicer.app
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onNewsletterSubmit)}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors`}
                  aria-label="Email address"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Invoicer. All rights reserved.
            </p>
            <p className="text-sm text-gray-300">
              Made with love for African businesses
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
