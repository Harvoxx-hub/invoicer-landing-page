import { lazy } from 'react';

// Existing Pages
import HomePage from './pages/HomePage';
import Policies from './pages/Policies';
import TC from './pages/TC';
import BecomeAnAgentPage from './pages/BecomeAnAgentPage';

// New Pages - will be created
const PricingPage = lazy(() => import('./pages/PricingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Features Pages
const InventoryManagementPage = lazy(() => import('./pages/features/InventoryManagementPage'));
const POSPage = lazy(() => import('./pages/features/POSPage'));
const OnlineStorePage = lazy(() => import('./pages/features/OnlineStorePage'));
const ReportsAnalyticsPage = lazy(() => import('./pages/features/ReportsAnalyticsPage'));
const MultiLocationPage = lazy(() => import('./pages/features/MultiLocationPage'));

// Hardware Pages
const HardwareOverviewPage = lazy(() => import('./pages/hardware/HardwareOverviewPage'));
const BluetoothPrinterPage = lazy(() => import('./pages/hardware/BluetoothPrinterPage'));
const AndroidPOSPage = lazy(() => import('./pages/hardware/AndroidPOSPage'));

// Solutions Pages
const RetailPage = lazy(() => import('./pages/solutions/RetailPage'));
const PharmacyPage = lazy(() => import('./pages/solutions/PharmacyPage'));
const RestaurantPage = lazy(() => import('./pages/solutions/RestaurantPage'));
const FashionPage = lazy(() => import('./pages/solutions/FashionPage'));
const MarketVendorsPage = lazy(() => import('./pages/solutions/MarketVendorsPage'));
const SupermarketsPage = lazy(() => import('./pages/solutions/SupermarketsPage'));

// Resources Pages
const BlogPage = lazy(() => import('./pages/resources/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/resources/BlogPostPage'));
const SuccessStoriesPage = lazy(() => import('./pages/resources/SuccessStoriesPage'));
const SuccessStoryPage = lazy(() => import('./pages/resources/SuccessStoryPage'));
const HelpCenterPage = lazy(() => import('./pages/resources/HelpCenterPage'));
const HelpArticlePage = lazy(() => import('./pages/resources/HelpArticlePage'));
const VideoTutorialsPage = lazy(() => import('./pages/resources/VideoTutorialsPage'));
const GettingStartedPage = lazy(() => import('./pages/resources/GettingStartedPage'));

// Search Page
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));

// About Pages
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const OurStoryPage = lazy(() => import('./pages/about/OurStoryPage'));
const VisionPage = lazy(() => import('./pages/about/VisionPage'));
const ContactPage = lazy(() => import('./pages/about/ContactPage'));

export const routes = [
  {
    path: '/',
    element: HomePage,
    exact: true,
  },
  {
    path: '/pricing',
    element: PricingPage,
  },
  // Features routes
  {
    path: '/features/inventory-management',
    element: InventoryManagementPage,
  },
  {
    path: '/features/pos',
    element: POSPage,
  },
  {
    path: '/features/online-store',
    element: OnlineStorePage,
  },
  {
    path: '/features/reports-analytics',
    element: ReportsAnalyticsPage,
  },
  {
    path: '/features/multi-location',
    element: MultiLocationPage,
  },
  // Hardware routes
  {
    path: '/hardware',
    element: HardwareOverviewPage,
  },
  {
    path: '/hardware/bluetooth-printer',
    element: BluetoothPrinterPage,
  },
  {
    path: '/hardware/android-pos',
    element: AndroidPOSPage,
  },
  // Solutions routes
  {
    path: '/solutions/retail',
    element: RetailPage,
  },
  {
    path: '/solutions/pharmacy',
    element: PharmacyPage,
  },
  {
    path: '/solutions/restaurant',
    element: RestaurantPage,
  },
  {
    path: '/solutions/fashion',
    element: FashionPage,
  },
  {
    path: '/solutions/market-vendors',
    element: MarketVendorsPage,
  },
  {
    path: '/solutions/supermarkets',
    element: SupermarketsPage,
  },
  // Resources routes
  {
    path: '/resources/blog',
    element: BlogPage,
  },
  {
    path: '/resources/blog/:slug',
    element: BlogPostPage,
  },
  {
    path: '/resources/success-stories',
    element: SuccessStoriesPage,
  },
  {
    path: '/resources/success-stories/:slug',
    element: SuccessStoryPage,
  },
  {
    path: '/resources/help',
    element: HelpCenterPage,
  },
  {
    path: '/resources/help/:slug',
    element: HelpArticlePage,
  },
  {
    path: '/resources/videos',
    element: VideoTutorialsPage,
  },
  {
    path: '/resources/getting-started',
    element: GettingStartedPage,
  },
  // Search route
  {
    path: '/search',
    element: SearchResultsPage,
  },
  // About routes
  {
    path: '/about',
    element: AboutPage,
  },
  {
    path: '/about/story',
    element: OurStoryPage,
  },
  {
    path: '/about/vision',
    element: VisionPage,
  },
  {
    path: '/about/contact',
    element: ContactPage,
  },
  // Agent / Partnership
  {
    path: '/become-an-agent',
    element: BecomeAnAgentPage,
  },
  // Legal routes
  {
    path: '/policies',
    element: Policies,
  },
  {
    path: '/terms',
    element: TC,
  },
  // 404 route - must be last
  {
    path: '*',
    element: NotFoundPage,
  },
];
