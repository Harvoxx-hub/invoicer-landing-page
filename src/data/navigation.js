export const navigationItems = [
  {
    name: 'Home',
    href: '/',
    type: 'link',
  },
  {
    name: 'Features',
    href: '/features',
    type: 'dropdown',
    items: [
      {
        name: 'Inventory Management',
        href: '/features/inventory-management',
        description: 'Track stock levels and manage products effortlessly',
      },
      {
        name: 'Point of Sale',
        href: '/features/pos',
        description: 'Fast checkout and sales management',
      },
      {
        name: 'Online Store',
        href: '/features/online-store',
        description: 'Sell online with your own website',
        badge: 'NEW',
      },
      {
        name: 'Reports & Analytics',
        href: '/features/reports-analytics',
        description: 'Track sales and business insights',
      },
      {
        name: 'Multi-location Management',
        href: '/features/multi-location',
        description: 'Manage multiple stores from one account',
      },
    ],
  },
  {
    name: 'Hardware',
    href: '/hardware',
    type: 'dropdown',
    items: [
      {
        name: 'Mobile Bluetooth Print',
        href: '/hardware/bluetooth-printer',
        description: 'Print receipts wirelessly from your phone',
      },
      {
        name: 'Android Handheld POS',
        href: '/hardware/android-pos',
        description: 'All-in-one POS terminal with receipt printer',
      },
      {
        name: 'Hardware Bundles',
        href: '/hardware#bundles',
        description: 'Complete solutions with software and devices',
      },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    type: 'dropdown',
    items: [
      {
        name: 'Retail Shops',
        href: '/solutions/retail',
        description: 'Perfect for general merchandise stores',
      },
      {
        name: 'Pharmacies',
        href: '/solutions/pharmacy',
        description: 'Specialized tools for drug stores',
      },
      {
        name: 'Restaurants & Food',
        href: '/solutions/restaurant',
        description: 'Manage orders and kitchen operations',
      },
      {
        name: 'Fashion Boutiques',
        href: '/solutions/fashion',
        description: 'Track sizes, colors, and seasonal inventory',
      },
      {
        name: 'Market Vendors',
        href: '/solutions/market-vendors',
        description: 'Simple solutions for market traders',
      },
      {
        name: 'Supermarkets',
        href: '/solutions/supermarkets',
        description: 'Scale your grocery or mini-mart',
      },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
    type: 'link',
  },
  {
    name: 'Resources',
    href: '/resources',
    type: 'dropdown',
    items: [
      {
        name: 'Blog',
        href: '/resources/blog',
        description: 'Tips and insights for your business',
      },
      {
        name: 'Success Stories',
        href: '/resources/success-stories',
        description: 'Real businesses, real results',
      },
      {
        name: 'Help Center',
        href: '/resources/help',
        description: 'Get answers and support',
      },
      {
        name: 'Video Tutorials',
        href: '/resources/videos',
        description: 'Learn with step-by-step videos',
      },
      {
        name: 'Getting Started Guide',
        href: '/resources/getting-started',
        description: 'Your first steps with Invoicer',
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    type: 'dropdown',
    items: [
      {
        name: 'Our Story',
        href: '/about/story',
        description: 'How Invoicer came to be',
      },
      {
        name: 'Our Vision',
        href: '/about/vision',
        description: 'Building the Shopify for Africa',
      },
      {
        name: 'Become an Agent',
        href: '/become-an-agent',
        description: 'Join our agent program and earn',
        badge: 'Earn',
      },
      {
        name: 'Contact Us',
        href: '/about/contact',
        description: 'Get in touch with our team',
      },
    ],
  },
];

export const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Become an Agent', href: '/become-an-agent' },
    { name: 'Careers', href: '/about/careers' },
    { name: 'Press Kit', href: '/about/press' },
    { name: 'Contact', href: '/about/contact' },
  ],
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Hardware', href: '/hardware' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Updates', href: '/resources/blog?category=updates' },
  ],
  resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Help Center', href: '/resources/help' },
    { name: 'API Documentation', href: '/resources/api-docs' },
    { name: 'System Status', href: 'https://status.getinvoicer.app' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/policies' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com/getinvoicer', icon: 'twitter' },
    { name: 'Facebook', href: 'https://facebook.com/getinvoicer', icon: 'facebook' },
    { name: 'Instagram', href: 'https://instagram.com/getinvoicer', icon: 'instagram' },
    { name: 'WhatsApp', href: 'https://wa.me/2347079582114', icon: 'whatsapp' },
  ],
};
