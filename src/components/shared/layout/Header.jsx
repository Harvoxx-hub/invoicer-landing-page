import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Container from './Container';
import DesktopNavigation from '../navigation/DesktopNavigation';
import MobileNavigation from '../navigation/MobileNavigation';
import Button from '../buttons/Button';
import logo from '../../../assets/images/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#163300] sticky top-0 z-40 shadow-md">
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Invoicer - Inventory management and POS system"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="secondary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-white hover:text-[#9FE870] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
