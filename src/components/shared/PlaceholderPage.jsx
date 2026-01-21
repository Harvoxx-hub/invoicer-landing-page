import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Container from './layout/Container';
import Button from './buttons/Button';

const PlaceholderPage = ({ title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Invoicer</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#9FE870] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚧</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {description || 'This page is currently under construction. Check back soon!'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button variant="primary" size="md">
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
          </div>
        </Container>
      </div>
    </>
  );
};

export default PlaceholderPage;
