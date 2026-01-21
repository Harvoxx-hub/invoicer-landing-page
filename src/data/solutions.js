export const solutionsData = {
  retail: {
    id: 'retail',
    name: 'Retail Shops',
    slug: 'retail',
    tagline: 'Everything Your Retail Shop Needs in One App',
    description: 'From small corner shops to growing retail stores, Invoicer helps you manage inventory, track sales, and serve customers faster.',
    heroImage: '/images/solutions/retail-hero.jpg',

    challenges: [
      {
        icon: 'XCircleIcon',
        title: 'Stockouts and Overstocking',
        description: 'Running out of bestsellers or having too much slow-moving inventory ties up your cash.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Slow Checkout Process',
        description: 'Long queues frustrate customers and cost you sales, especially during peak hours.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Unclear Product Performance',
        description: 'Not knowing which products are profitable makes it hard to make smart buying decisions.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Theft and Shrinkage',
        description: 'Missing inventory without accountability eats into your profit margins.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Multiple Payment Methods',
        description: 'Tracking cash, transfers, and credit sales manually leads to errors and confusion.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Staff Accountability',
        description: "Can't track individual staff performance or identify who made mistakes.",
      },
    ],

    solutions: [
      {
        icon: 'CheckCircleIcon',
        title: 'Real-time Stock Alerts',
        description: 'Get notified when popular items are running low so you never miss a sale.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Fast Barcode Scanning',
        description: 'Serve customers 3x faster with instant barcode scanning and receipt printing.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Sales & Profit Reports',
        description: 'See which products make you the most money and make data-driven restocking decisions.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Staff Tracking & Permissions',
        description: 'Track every sale by staff member and set permissions to prevent unauthorized actions.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Payment Reconciliation',
        description: 'Automatically track all payment methods and reconcile cash at end of day.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Audit Trail',
        description: 'Every transaction is logged with timestamp and staff member for complete accountability.',
      },
    ],

    keyFeatures: [
      'Unlimited product catalog',
      'Barcode scanning & printing',
      'Low stock alerts',
      'Fast checkout & receipt printing',
      'Multiple payment methods',
      'Staff performance tracking',
      'Daily sales reports',
      'Supplier management',
    ],

    successStory: {
      businessName: "Bello's Supermarket",
      owner: 'Ahmed Bello',
      location: 'Abuja',
      image: '/images/testimonials/ahmed.jpg',
      quote: 'Before Invoicer, I had no idea what was selling. Now I know exactly what to restock and when. Sales are up 30%.',
      results: [
        { label: 'Sales Increase', value: '30%' },
        { label: 'Time Saved Daily', value: '2 hours' },
        { label: 'Stockouts Reduced', value: '80%' },
      ],
      beforeAfter: {
        before: [
          'Manual stock counting took 3 hours daily',
          'Frequent stockouts of popular items',
          'No idea which products were profitable',
          'Cash reconciliation issues at end of day',
        ],
        after: [
          'Real-time inventory updates',
          'Automatic low stock alerts',
          'Clear profit margins on every product',
          'Instant payment reconciliation',
        ],
      },
    },

    recommendedPlan: 'Pro',
    recommendedHardware: ['Android Handheld POS', 'Barcode Scanner'],
  },

  pharmacy: {
    id: 'pharmacy',
    name: 'Pharmacies',
    slug: 'pharmacy',
    tagline: 'NAFDAC-Ready Inventory for Your Pharmacy',
    description: 'Manage medications, track expiry dates, and stay compliant with regulations - all from your phone.',
    heroImage: '/images/solutions/pharmacy-hero.jpg',

    challenges: [
      {
        icon: 'XCircleIcon',
        title: 'Expiry Date Management',
        description: 'Losing money on expired medications that you forgot to track or sell in time.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Regulatory Compliance',
        description: 'NAFDAC requires proper record-keeping and traceability that paper records can\'t provide.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Expensive Medication Tracking',
        description: 'High-value drugs need extra security and accountability to prevent losses.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Multiple Suppliers',
        description: 'Managing different suppliers, batch numbers, and purchase orders manually is overwhelming.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Prescription Management',
        description: 'Tracking prescriptions and ensuring proper dispensing records for audit compliance.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Insurance Claims',
        description: 'Processing HMO claims and keeping proper documentation for reimbursement.',
      },
    ],

    solutions: [
      {
        icon: 'CheckCircleIcon',
        title: 'Expiry Date Tracking',
        description: 'Get automatic alerts for medications approaching expiry so you can sell them first.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Batch Number Tracking',
        description: 'Track every medication by batch number for complete traceability and NAFDAC compliance.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Audit-Ready Reports',
        description: 'Generate NAFDAC-compliant reports for inspections with just a few taps.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Supplier Management',
        description: 'Track purchases by supplier, manage credit terms, and monitor payment schedules.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'High-Value Item Alerts',
        description: 'Set special tracking for expensive medications with notifications for any movement.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Digital Prescription Records',
        description: 'Store prescription information digitally for easy retrieval during audits.',
      },
    ],

    keyFeatures: [
      'Expiry date tracking & alerts',
      'Batch number management',
      'NAFDAC-compliant reports',
      'Supplier credit management',
      'Prescription records',
      'HMO/Insurance tracking',
      'Controlled substance monitoring',
      'Purchase order management',
    ],

    successStory: {
      businessName: 'Grace Pharmacy',
      owner: 'Chioma Okafor',
      location: 'Lagos',
      image: '/images/testimonials/chioma.jpg',
      quote: 'Invoicer helped me track expiry dates and reduce waste. I\'ve saved over ₦200,000 in 6 months just from better expiry management.',
      results: [
        { label: 'Waste Reduction', value: '40%' },
        { label: 'Money Saved', value: '₦200K' },
        { label: 'Audit Preparation', value: '2 hours' },
      ],
      beforeAfter: {
        before: [
          'Lost ₦50K+ monthly to expired drugs',
          'Struggled during NAFDAC inspections',
          'No way to track batch numbers',
          'Manual prescription record keeping',
        ],
        after: [
          'Automatic expiry alerts save thousands',
          'Pass NAFDAC audits with ease',
          'Complete batch traceability',
          'Digital prescription database',
        ],
      },
    },

    recommendedPlan: 'Pro',
    recommendedHardware: ['Android Handheld POS', 'Barcode Scanner'],
  },

  restaurant: {
    id: 'restaurant',
    name: 'Restaurants & Food',
    slug: 'restaurant',
    tagline: 'Run Your Restaurant from Kitchen to Customer',
    description: 'Manage ingredients, track recipes, speed up orders, and deliver exceptional service with Invoicer.',
    heroImage: '/images/solutions/restaurant-hero.jpg',

    challenges: [
      {
        icon: 'XCircleIcon',
        title: 'Complex Menu Management',
        description: 'Managing menu items with multiple variations, add-ons, and special instructions is complicated.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Ingredient Inventory',
        description: 'Tracking raw ingredients and knowing when to reorder before you run out during service.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Recipe Costing',
        description: 'Not knowing the true cost of each dish makes it hard to price profitably.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Kitchen Communication',
        description: 'Orders get lost between front-of-house and kitchen, causing delays and mistakes.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Table Management',
        description: 'Tracking which tables are occupied, who ordered what, and managing split bills is chaotic.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Food Waste',
        description: 'Over-ordering perishable ingredients leads to spoilage and wasted money.',
      },
    ],

    solutions: [
      {
        icon: 'CheckCircleIcon',
        title: 'Menu Modifiers & Variations',
        description: 'Handle complex orders with ease - extra cheese, no onions, spicy - all tracked automatically.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Ingredient Tracking',
        description: 'Track every ingredient and get alerts when you\'re running low so you never stop service.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Recipe Costing',
        description: 'Know the exact cost and profit margin of every dish to price your menu optimally.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Kitchen Display System',
        description: 'Orders go straight to the kitchen with timestamps so chefs know what to prepare next.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Table & Order Management',
        description: 'Track tables, split bills, add items to existing orders - all from one device.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Waste Tracking',
        description: 'Monitor ingredient usage patterns to reduce over-ordering and minimize waste.',
      },
    ],

    keyFeatures: [
      'Menu with modifiers & variations',
      'Ingredient inventory tracking',
      'Recipe costing & margins',
      'Kitchen order printing',
      'Table management',
      'Split bill handling',
      'Daily sales by menu item',
      'Food cost percentage reports',
    ],

    successStory: {
      businessName: 'Quick Bites Restaurant',
      owner: 'Emeka Nwankwo',
      location: 'Port Harcourt',
      image: '/images/testimonials/emeka.jpg',
      quote: 'Tracking ingredients and managing recipes is now so simple. My profit margins improved by 20% just from better cost control.',
      results: [
        { label: 'Profit Margin Increase', value: '20%' },
        { label: 'Kitchen Efficiency', value: '+40%' },
        { label: 'Food Waste Reduced', value: '30%' },
      ],
      beforeAfter: {
        before: [
          'No idea of actual dish costs',
          'Frequent ingredient stockouts',
          'Kitchen orders getting lost',
          'High food waste from over-ordering',
        ],
        after: [
          'Know exact cost and profit per dish',
          'Never run out during service',
          'Orders go direct to kitchen',
          'Optimized ordering reduces waste',
        ],
      },
    },

    recommendedPlan: 'Pro',
    recommendedHardware: ['Android Handheld POS', 'Kitchen Printer'],
  },

  fashion: {
    id: 'fashion',
    name: 'Fashion Boutiques',
    slug: 'fashion',
    tagline: 'Manage Fashion Inventory with Style',
    description: 'Track sizes, colors, and styles effortlessly. Sell in-store and online from the same inventory.',
    heroImage: '/images/solutions/fashion-hero.jpg',

    challenges: [
      {
        icon: 'XCircleIcon',
        title: 'Size & Color Variations',
        description: 'Managing the same item in multiple sizes and colors is a nightmare with spreadsheets.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Seasonal Inventory',
        description: 'Knowing what sold well last season and what to stock this season is guesswork.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Online & In-Store Sales',
        description: 'Selling on Instagram and in your shop means tracking inventory in two places.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Style Trends',
        description: 'Fashion moves fast - you need to know what\'s hot and what\'s not selling.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Product Photos',
        description: 'Keeping track of which photo belongs to which item and variation is chaotic.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Customer Preferences',
        description: 'Remembering customer sizes and style preferences to provide better service.',
      },
    ],

    solutions: [
      {
        icon: 'CheckCircleIcon',
        title: 'Smart Variant Management',
        description: 'Manage one item with all sizes and colors. Track stock levels for each variation automatically.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Seasonal Trend Analysis',
        description: 'See what sold best each season to make smarter buying decisions next year.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Unified Inventory',
        description: 'Sell online and in-store from the same inventory - no double-entry or confusion.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Product Photos & Gallery',
        description: 'Attach multiple photos to each item for easy identification and online selling.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Online Store Included',
        description: 'Launch your own branded online store in minutes and start selling 24/7.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Customer Database',
        description: 'Save customer information and purchase history to provide personalized service.',
      },
    ],

    keyFeatures: [
      'Size & color variant tracking',
      'Product photo gallery',
      'Online store integration',
      'Seasonal sales reports',
      'Style performance analytics',
      'Customer purchase history',
      'Low stock by size/color alerts',
      'Instagram shopping integration',
    ],

    successStory: {
      businessName: "Funke's Fashion House",
      owner: 'Funke Adeyemi',
      location: 'Lagos',
      image: '/images/testimonials/funke.jpg',
      quote: 'Managing different sizes and colors was a nightmare. Invoicer made it so easy. Plus, my online store is doing great - 25% of sales now!',
      results: [
        { label: 'Online Sales', value: '25%' },
        { label: 'Time Saved', value: '10 hrs/week' },
        { label: 'Inventory Accuracy', value: '95%' },
      ],
      beforeAfter: {
        before: [
          'Excel sheets for every size/color combo',
          'Constantly overselling online',
          'No idea what styles were trending',
          'Lost customer details',
        ],
        after: [
          'One system for all variants',
          'Real-time inventory across channels',
          'Clear trend insights',
          'Customer database for VIP service',
        ],
      },
    },

    recommendedPlan: 'Pro',
    recommendedHardware: ['Android Handheld POS', 'Barcode Scanner'],
  },

  'market-vendors': {
    id: 'market-vendors',
    name: 'Market Vendors',
    slug: 'market-vendors',
    tagline: 'Professional Business Tools for Market Vendors',
    description: 'Built for the market - works offline, battery lasts all day, and makes you look professional.',
    heroImage: '/images/solutions/market-hero.jpg',

    challenges: [
      {
        icon: 'XCircleIcon',
        title: 'No Electricity',
        description: 'Market stalls don\'t have power, so you need tools that work all day without charging.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Unreliable Internet',
        description: 'Poor network connectivity means you can\'t rely on online-only solutions.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Mobile Environment',
        description: 'Moving between stalls or selling at different markets requires portable tools.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Manual Record Keeping',
        description: 'Writing everything in a notebook is slow, error-prone, and unprofessional.',
      },
      {
        icon: 'XCircleIcon',
        title: 'End-of-Day Counting',
        description: 'Counting money and trying to remember all transactions takes forever.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Customer Trust',
        description: 'Customers trust vendors who give printed receipts more than handwritten notes.',
      },
    ],

    solutions: [
      {
        icon: 'CheckCircleIcon',
        title: 'Offline Mode',
        description: 'Works perfectly without internet. Syncs automatically when you get connection.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Long Battery Life',
        description: 'All our hardware lasts 8+ hours on a single charge - enough for a full market day.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Portable & Lightweight',
        description: 'Bluetooth printer fits in your bag. Handheld device is smaller than a wallet.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Simple Interface',
        description: 'So easy to use, you can start selling in 5 minutes even with no tech experience.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Instant End-of-Day Reports',
        description: 'Know exactly how much you made today with one button press.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Professional Receipts',
        description: 'Print branded receipts that make customers trust you and remember your business.',
      },
    ],

    keyFeatures: [
      'Offline mode (no internet needed)',
      'Works on basic smartphones',
      'Bluetooth receipt printing',
      'Battery-efficient design',
      'Simple product catalog',
      'Fast checkout',
      'Daily sales summary',
      'Cash counting tool',
    ],

    successStory: {
      businessName: "Blessing's Market Stall",
      owner: 'Blessing Okoro',
      location: 'Enugu',
      image: '/images/testimonials/blessing.jpg',
      quote: 'I\'m just a small market vendor, but Invoicer makes me look professional. Customers love the printed receipts and come back more.',
      results: [
        { label: 'Customer Trust', value: '+50%' },
        { label: 'Time Saved Daily', value: '1 hour' },
        { label: 'Return Customers', value: '+30%' },
      ],
      beforeAfter: {
        before: [
          'Writing everything by hand',
          'Customers asking for receipts I couldn\'t give',
          'End-of-day counting took 45 minutes',
          'Lost track of regular customers',
        ],
        after: [
          'Fast digital record keeping',
          'Professional printed receipts',
          'Know my sales instantly',
          'Remember customer purchases',
        ],
      },
    },

    recommendedPlan: 'Starter',
    recommendedHardware: ['Bluetooth Printer'],
  },

  supermarkets: {
    id: 'supermarkets',
    name: 'Supermarkets',
    slug: 'supermarkets',
    tagline: 'Affordable Supermarket Management System',
    description: 'Handle high volumes, multiple departments, and many staff without breaking the bank.',
    heroImage: '/images/solutions/supermarket-hero.jpg',

    challenges: [
      {
        icon: 'XCircleIcon',
        title: 'High Transaction Volume',
        description: 'Processing hundreds of customers daily requires fast, reliable POS systems.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Multiple Departments',
        description: 'Managing groceries, frozen foods, fresh produce, household items - all with different needs.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Many Staff Members',
        description: 'Multiple cashiers, stock clerks, and supervisors need different access levels.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Theft Prevention',
        description: 'With high volumes and many people, shrinkage from theft is a major concern.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Supplier Management',
        description: 'Dozens of suppliers, different credit terms, and payment schedules to track.',
      },
      {
        icon: 'XCircleIcon',
        title: 'Perishable Items',
        description: 'Fresh produce and dairy need special expiry tracking to minimize waste.',
      },
    ],

    solutions: [
      {
        icon: 'CheckCircleIcon',
        title: 'Fast Barcode Checkout',
        description: 'Scan items at lightning speed and process payments in seconds, not minutes.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Department Tracking',
        description: 'Track sales and inventory by department to understand your business better.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Unlimited Staff Accounts',
        description: 'Create accounts for all staff with custom permissions and activity tracking.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Comprehensive Audit Trails',
        description: 'Every transaction, price change, and void is logged with who did it and when.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Supplier Credit Management',
        description: 'Track what you owe each supplier and when payments are due.',
      },
      {
        icon: 'CheckCircleIcon',
        title: 'Expiry Date Management',
        description: 'Track expiry dates on perishables and get alerts to sell before spoilage.',
      },
    ],

    keyFeatures: [
      'High-speed barcode scanning',
      'Multiple POS stations',
      'Department-wise reporting',
      'Unlimited staff accounts',
      'Role-based permissions',
      'Comprehensive audit logs',
      'Supplier payment tracking',
      'Expiry date management',
    ],

    successStory: {
      businessName: 'City Supermarket',
      owner: 'Daniel Okonkwo',
      location: 'Lagos',
      image: '/images/testimonials/daniel.jpg',
      quote: 'We handle 500+ customers daily. Invoicer keeps everything running smoothly across 4 cash registers. Shrinkage is down 40%.',
      results: [
        { label: 'Shrinkage Reduced', value: '40%' },
        { label: 'Checkout Speed', value: '+60%' },
        { label: 'Staff Accountability', value: '100%' },
      ],
      beforeAfter: {
        before: [
          'Slow manual price entry',
          'No way to track which cashier did what',
          'Inventory discrepancies',
          'Lost track of supplier payments',
        ],
        after: [
          'Lightning-fast barcode scanning',
          'Complete cashier accountability',
          'Real-time accurate inventory',
          'Automated supplier payment tracking',
        ],
      },
    },

    recommendedPlan: 'Enterprise',
    recommendedHardware: ['Android Handheld POS (multiple)', 'Barcode Scanners'],
  },
};

export const allSolutions = Object.values(solutionsData);
