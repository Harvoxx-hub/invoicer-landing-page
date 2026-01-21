import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Container from '../components/shared/layout/Container';
import Button from '../components/shared/buttons/Button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Invoicer</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Illustration */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-[#163300] mb-4">404</h1>
              <div className="w-24 h-1 bg-[#9FE870] mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have
              been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button variant="primary" size="lg" className="gap-2">
                  <HomeIcon className="h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-[#163300] hover:text-[#163300]/80 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Go Back
              </button>
            </div>

            {/* Help Text */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Need help?
              </h3>
              <p className="text-gray-600 mb-4">
                Here are some helpful links to get you back on track:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <Link
                  to="/pricing"
                  className="text-[#163300] hover:text-[#163300]/80 font-medium"
                >
                  View Pricing
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/hardware"
                  className="text-[#163300] hover:text-[#163300]/80 font-medium"
                >
                  Browse Hardware
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/resources/help"
                  className="text-[#163300] hover:text-[#163300]/80 font-medium"
                >
                  Help Center
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/about/contact"
                  className="text-[#163300] hover:text-[#163300]/80 font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFoundPage;
