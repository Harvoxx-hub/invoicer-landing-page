import { Outlet } from 'react-router-dom';
import Header from '../components/shared/layout/Header';
import Footer from '../components/shared/layout/Footer';
import WhatsAppWidget from '../components/shared/widgets/WhatsAppWidget';
import ScrollToTop from '../components/shared/ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
