export const featuresData = {
  'inventory-management': {
    id: 'inventory-management',
    name: 'Inventory Management',
    slug: 'inventory-management',
    tagline: 'Never Run Out of Stock Again',
    description: 'Track every product in real-time, get alerts when stock is low, and always know what you have.',
    heroImage: '/images/features/inventory-hero.jpg',
    icon: 'CubeIcon',

    keyBenefits: [
      {
        title: 'Real-time Stock Tracking',
        description: 'Know exactly how many of each product you have at any moment. No more guessing or manual counting.',
        icon: 'ChartBarIcon',
      },
      {
        title: 'Low Stock Alerts',
        description: 'Get automatic notifications when products are running low so you can reorder before you run out.',
        icon: 'BellAlertIcon',
      },
      {
        title: 'Barcode Scanning',
        description: 'Add products and make sales 10x faster with barcode scanning. Works with any smartphone camera or dedicated scanner.',
        icon: 'QrCodeIcon',
      },
      {
        title: 'Stock Take Made Easy',
        description: 'Physical stock counting is simple - scan items, compare to system, and update discrepancies in minutes.',
        icon: 'ClipboardDocumentCheckIcon',
      },
    ],

    capabilities: [
      {
        title: 'Product Catalog',
        features: [
          'Unlimited products (on paid plans)',
          'Product categories and tags',
          'Product variants (size, color, etc.)',
          'Multiple product images',
          'SKU and barcode management',
          'Cost price and selling price tracking',
        ],
      },
      {
        title: 'Stock Management',
        features: [
          'Real-time stock levels',
          'Low stock alerts (customizable thresholds)',
          'Stock adjustment with reasons',
          'Stock transfer between locations',
          'Batch and expiry date tracking',
          'Supplier information',
        ],
      },
      {
        title: 'Reporting & Insights',
        features: [
          'Current stock value',
          'Stock movement history',
          'Top selling products',
          'Slow moving items',
          'Stock aging reports',
          'Reorder recommendations',
        ],
      },
    ],

    useCases: [
      {
        industry: 'Retail Shops',
        scenario: 'Track hundreds of products across multiple categories without manual counting.',
      },
      {
        industry: 'Pharmacies',
        scenario: 'Monitor expiry dates and batch numbers for regulatory compliance.',
      },
      {
        industry: 'Restaurants',
        scenario: 'Track ingredient inventory and get alerts when running low on key items.',
      },
      {
        industry: 'Fashion Boutiques',
        scenario: 'Manage the same item in multiple sizes and colors with ease.',
      },
    ],

    integrations: [
      'Barcode scanners (Bluetooth and USB)',
      'Supplier catalogs (CSV import)',
      'Accounting software (via API)',
      'E-commerce platforms',
    ],

    pricing: {
      free: 'Up to 100 products',
      starter: 'Up to 500 products',
      pro: 'Unlimited products',
      enterprise: 'Unlimited + Multi-location',
    },
  },

  pos: {
    id: 'pos',
    name: 'Point of Sale',
    slug: 'pos',
    tagline: 'Serve Customers Faster Than Ever',
    description: 'Lightning-fast checkout, receipt printing, and payment tracking - all from your phone or dedicated POS device.',
    heroImage: '/images/features/pos-hero.jpg',
    icon: 'DevicePhoneMobileIcon',

    keyBenefits: [
      {
        title: 'Fast Checkout',
        description: 'Scan items, accept payment, print receipt - all in under 10 seconds. No more long queues.',
        icon: 'BoltIcon',
      },
      {
        title: 'Multiple Payment Methods',
        description: 'Accept cash, bank transfer, card, or credit. Track everything automatically.',
        icon: 'CreditCardIcon',
      },
      {
        title: 'Receipt Printing',
        description: 'Print professional branded receipts with your logo, contact info, and custom messages.',
        icon: 'PrinterIcon',
      },
      {
        title: 'Staff Tracking',
        description: 'Know who made each sale, track performance, and prevent unauthorized transactions.',
        icon: 'UsersIcon',
      },
    ],

    capabilities: [
      {
        title: 'Checkout Features',
        features: [
          'Barcode scanning for instant item lookup',
          'Quick item search by name or SKU',
          'Quantity adjustment',
          'Apply discounts (percentage or amount)',
          'Add notes to transactions',
          'Split payments across methods',
        ],
      },
      {
        title: 'Receipt Management',
        features: [
          'Customize receipt layout and branding',
          'Include business logo and contact info',
          'Print or email receipts',
          'Reprint past receipts',
          'Add footer messages (e.g., "Thank you")',
          'Generate returns and refunds',
        ],
      },
      {
        title: 'Sales Tracking',
        features: [
          'Daily sales summary',
          'Sales by payment method',
          'Sales by staff member',
          'Best selling items',
          'Hourly sales patterns',
          'Cash reconciliation',
        ],
      },
    ],

    useCases: [
      {
        industry: 'Retail Shops',
        scenario: 'Process 100+ transactions daily with barcode scanning and fast checkout.',
      },
      {
        industry: 'Supermarkets',
        scenario: 'Run multiple POS stations simultaneously with centralized inventory.',
      },
      {
        industry: 'Market Vendors',
        scenario: 'Take payments and print receipts even without internet connection.',
      },
      {
        industry: 'Restaurants',
        scenario: 'Take orders at tables and send them straight to the kitchen.',
      },
    ],

    integrations: [
      'Receipt printers (Bluetooth and USB)',
      'Barcode scanners',
      'Cash drawers',
      'Card payment terminals',
    ],

    pricing: {
      free: 'Basic POS with 1 staff',
      starter: 'POS with 2 staff + custom receipts',
      pro: 'POS with 5 staff + all features',
      enterprise: 'Unlimited staff + multi-location',
    },
  },

  'online-store': {
    id: 'online-store',
    name: 'Online Store',
    slug: 'online-store',
    tagline: 'Launch Your Website in Minutes',
    description: 'Turn your inventory into an online store. Sell 24/7 with your own branded website.',
    heroImage: '/images/features/online-store-hero.jpg',
    icon: 'GlobeAltIcon',
    badge: 'NEW',

    keyBenefits: [
      {
        title: 'Instant Setup',
        description: 'Your online store is ready in minutes. Just activate, choose a template, and start selling.',
        icon: 'RocketLaunchIcon',
      },
      {
        title: 'Unified Inventory',
        description: 'Sell online and in-store from the same inventory. Stock updates automatically across all channels.',
        icon: 'ArrowPathIcon',
      },
      {
        title: 'Mobile Optimized',
        description: 'Your store looks perfect on every device. Most Nigerian shoppers use phones, so we optimize for mobile first.',
        icon: 'DevicePhoneMobileIcon',
      },
      {
        title: 'No Coding Required',
        description: 'Beautiful, professional website without hiring a developer. Customize colors, add your logo, you\'re done.',
        icon: 'PaintBrushIcon',
      },
    ],

    capabilities: [
      {
        title: 'Store Features',
        features: [
          'Your own branded domain (yourname.getinvoicer.app)',
          'Customizable templates',
          'Product catalog with images',
          'Categories and collections',
          'Search functionality',
          'Customer reviews',
        ],
      },
      {
        title: 'Selling Features',
        features: [
          'Shopping cart',
          'Secure checkout',
          'Bank transfer payment instructions',
          'WhatsApp order notifications',
          'Order management',
          'Customer accounts',
        ],
      },
      {
        title: 'Marketing Tools',
        features: [
          'SEO optimization',
          'Social media sharing',
          'Discount codes and promotions',
          'Email notifications',
          'Instagram shopping integration',
          'Sales analytics',
        ],
      },
    ],

    useCases: [
      {
        industry: 'Fashion Boutiques',
        scenario: 'Sell on Instagram and your website simultaneously with unified inventory.',
      },
      {
        industry: 'Retail Shops',
        scenario: 'Expand beyond your physical location and reach customers across Nigeria.',
      },
      {
        industry: 'Market Vendors',
        scenario: 'Take pre-orders online and reduce market day rush.',
      },
      {
        industry: 'Specialty Stores',
        scenario: 'Sell niche products to customers who can\'t visit your physical store.',
      },
    ],

    integrations: [
      'Instagram Shopping',
      'Facebook Catalog',
      'WhatsApp Business',
      'Google Shopping',
    ],

    pricing: {
      free: 'Not available',
      starter: 'Not available',
      pro: 'Included (0% transaction fees)',
      enterprise: 'Included + custom domain',
    },
  },

  'reports-analytics': {
    id: 'reports-analytics',
    name: 'Reports & Analytics',
    slug: 'reports-analytics',
    tagline: 'Know Your Numbers, Grow Your Business',
    description: 'Make data-driven decisions with easy-to-understand reports and real-time business insights.',
    heroImage: '/images/features/reports-hero.jpg',
    icon: 'ChartBarIcon',

    keyBenefits: [
      {
        title: 'Sales Insights',
        description: 'See what\'s selling, what\'s not, and when your busiest hours are. Make smart stocking decisions.',
        icon: 'ChartBarIcon',
      },
      {
        title: 'Profit Tracking',
        description: 'Know your actual profit margins, not just revenue. Understand which products make you the most money.',
        icon: 'BanknotesIcon',
      },
      {
        title: 'Staff Performance',
        description: 'Track sales by staff member, identify top performers, and spot training needs.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'Export Everything',
        description: 'Download reports as Excel or PDF to share with accountants, partners, or lenders.',
        icon: 'ArrowDownTrayIcon',
      },
    ],

    capabilities: [
      {
        title: 'Sales Reports',
        features: [
          'Daily, weekly, monthly sales summaries',
          'Sales by product',
          'Sales by category',
          'Sales by payment method',
          'Sales by staff member',
          'Hourly sales patterns',
        ],
      },
      {
        title: 'Financial Reports',
        features: [
          'Profit & loss statement',
          'Gross profit margins',
          'Product profitability',
          'Expense tracking',
          'Cash flow overview',
          'Tax summaries',
        ],
      },
      {
        title: 'Inventory Reports',
        features: [
          'Current stock value',
          'Stock movement history',
          'Low stock alerts',
          'Top selling items',
          'Slow moving items',
          'Dead stock identification',
        ],
      },
      {
        title: 'Customer Insights',
        features: [
          'Top customers by spend',
          'Customer purchase frequency',
          'Average transaction value',
          'Customer lifetime value',
          'New vs returning customers',
          'Customer database export',
        ],
      },
    ],

    useCases: [
      {
        industry: 'Retail Shops',
        scenario: 'Identify bestsellers and optimize inventory to reduce stockouts and overstocking.',
      },
      {
        industry: 'Pharmacies',
        scenario: 'Generate NAFDAC-compliant reports for inspections with one click.',
      },
      {
        industry: 'Restaurants',
        scenario: 'Track food cost percentages and menu item profitability.',
      },
      {
        industry: 'Fashion Boutiques',
        scenario: 'Analyze seasonal trends to make better buying decisions.',
      },
    ],

    integrations: [
      'Excel export',
      'PDF generation',
      'Email delivery',
      'Accounting software sync',
    ],

    pricing: {
      free: 'Basic sales reports',
      starter: 'Standard reports',
      pro: 'Advanced analytics + export',
      enterprise: 'Custom reports + API access',
    },
  },

  'multi-location': {
    id: 'multi-location',
    name: 'Multi-location Management',
    slug: 'multi-location',
    tagline: 'Manage All Your Stores from One Place',
    description: 'Open multiple locations without the headache. Centralized inventory, reporting, and control.',
    heroImage: '/images/features/multi-location-hero.jpg',
    icon: 'BuildingStorefrontIcon',

    keyBenefits: [
      {
        title: 'Centralized Dashboard',
        description: 'See performance across all locations at a glance. Know which stores are performing and which need attention.',
        icon: 'ChartBarIcon',
      },
      {
        title: 'Stock Transfers',
        description: 'Move inventory between locations easily. Restock struggling stores from locations with excess inventory.',
        icon: 'ArrowsRightLeftIcon',
      },
      {
        title: 'Location-Specific Pricing',
        description: 'Set different prices for different locations based on local market conditions.',
        icon: 'TagIcon',
      },
      {
        title: 'Staff Management',
        description: 'Control which staff can access which locations. Assign managers and restrict permissions as needed.',
        icon: 'ShieldCheckIcon',
      },
    ],

    capabilities: [
      {
        title: 'Inventory Management',
        features: [
          'Track stock levels per location',
          'Transfer stock between locations',
          'Location-specific reorder points',
          'Consolidated inventory view',
          'Inter-location orders',
          'Stock take by location',
        ],
      },
      {
        title: 'Sales & Reporting',
        features: [
          'Sales comparison by location',
          'Location performance rankings',
          'Consolidated financial reports',
          'Individual location P&L',
          'Cross-location customer tracking',
          'Consolidated tax reports',
        ],
      },
      {
        title: 'Staff & Access Control',
        features: [
          'Location-based staff access',
          'Manager roles per location',
          'Cross-location staff tracking',
          'Centralized employee database',
          'Permission management',
          'Activity logs per location',
        ],
      },
    ],

    useCases: [
      {
        industry: 'Retail Chains',
        scenario: 'Manage 5+ stores with centralized purchasing and distributed operations.',
      },
      {
        industry: 'Restaurants',
        scenario: 'Run multiple restaurant locations with unified menu and local inventory.',
      },
      {
        industry: 'Pharmacies',
        scenario: 'Transfer medications between branches based on demand.',
      },
      {
        industry: 'Supermarkets',
        scenario: 'Compare performance across locations and optimize inventory distribution.',
      },
    ],

    integrations: [
      'Cloud sync across locations',
      'Central dashboard',
      'Consolidated reporting',
      'Multi-location API',
    ],

    pricing: {
      free: 'Not available',
      starter: 'Not available',
      pro: 'Not available',
      enterprise: 'Included (unlimited locations)',
    },
  },
};

export const allFeatures = Object.values(featuresData);
