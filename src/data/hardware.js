export const hardwareProducts = [
  {
    id: 'bluetooth-printer',
    name: 'Mobile Bluetooth Print',
    slug: 'bluetooth-printer',
    price: 45000,
    currency: '₦',
    image: '/mobile-printer.png',
    badge: null,
    features: [
      'Wireless printing from any phone',
      '3-4 hours battery life',
      'Compact and portable',
    ],
    description: 'Print professional receipts wirelessly from your smartphone. Perfect for mobile vendors and small shops.',
    link: '/hardware/bluetooth-printer',
  },
  {
    id: 'android-pos',
    name: 'Android Handheld POS',
    slug: 'android-pos',
    price: 120000,
    currency: '₦',
    image: '/android-pos.png',
    badge: 'MOST POPULAR',
    features: [
      'Built-in receipt printer',
      'Barcode scanner included',
      '12+ hours battery life',
    ],
    description: 'All-in-one POS terminal with 5-inch screen, built-in printer, and barcode scanner. Ideal for busy retail environments.',
    link: '/hardware/android-pos',
  },
];

export const hardwareBundles = [
  {
    id: 'starter-kit',
    name: 'Starter Kit',
    originalPrice: 50000,
    discountedPrice: 50000,
    savings: '15%',
    items: [
      'Mobile Bluetooth Print',
      'Receipt Paper Rolls (50-pack)',
      'Phone Mount',
    ],
    bestFor: 'New businesses and mobile vendors',
  },
  {
    id: 'professional-setup',
    name: 'Professional Setup',
    originalPrice: 150000,
    discountedPrice: 145000,
    savings: '15%',
    items: [
      'Android Handheld POS',
      'Barcode Scanner',
      'Receipt Paper Rolls (100-pack)',
      'Counter Stand',
    ],
    bestFor: 'Busy retail stores and supermarkets',
    badge: 'POPULAR',
  },
];

export const hardwareFeatures = [
  'Free shipping nationwide',
  'Setup guide and video tutorials',
  '1-year warranty',
  'Nigerian customer support',
];

export const hardwareDetails = {
  'bluetooth-printer': {
    name: 'Mobile Bluetooth Print',
    price: 45000,
    images: ['/mobile-printer.png'],
    shortDescription: 'Print professional receipts wirelessly from your smartphone.',
    longDescription: 'The Invoicer Mobile Bluetooth Print is perfect for mobile vendors and small shops. Connect wirelessly to any smartphone or tablet running the Invoicer app and start printing professional receipts instantly. Compact, portable, and built to last.',
    specifications: [
      { label: 'Printing Method', value: 'Direct thermal' },
      { label: 'Print Width', value: '58mm (2.25 inches)' },
      { label: 'Print Speed', value: '90mm/sec' },
      { label: 'Connectivity', value: 'Bluetooth 4.0' },
      { label: 'Battery Capacity', value: '2000mAh' },
      { label: 'Battery Life', value: '3-4 hours continuous use' },
      { label: 'Charging Time', value: '2-3 hours' },
      { label: 'Paper Roll', value: '58mm thermal paper' },
      { label: 'Dimensions', value: '110mm × 110mm × 45mm' },
      { label: 'Weight', value: '300g' },
    ],
    inTheBox: [
      'Mobile Bluetooth Print',
      'USB Charging Cable',
      '2 Receipt Paper Rolls',
      'User Manual',
      'Quick Start Guide',
    ],
    useCases: [
      {
        title: 'Market Vendors',
        description: 'Perfect for mobile traders who need portable, reliable receipt printing.',
      },
      {
        title: 'Small Retail Shops',
        description: 'Affordable solution for shops just starting with digital receipts.',
      },
      {
        title: 'Food Delivery',
        description: 'Print order receipts on the go for delivery services.',
      },
    ],
    benefits: [
      'No wires, no hassle - works from anywhere',
      'Compatible with any phone running Invoicer',
      'Professional branded receipts boost customer trust',
      'Rechargeable battery lasts all day',
      'Compact size fits in any bag or pocket',
    ],
  },
  'android-pos': {
    name: 'Android Handheld POS',
    price: 120000,
    images: ['/android-pos.png'],
    shortDescription: 'All-in-one POS terminal with built-in printer and barcode scanner.',
    longDescription: 'Transform your business with the Invoicer Android Handheld POS. This all-in-one terminal includes a 5-inch touchscreen, built-in receipt printer, and barcode scanner. Perfect for busy retail environments, supermarkets, and pharmacies.',
    specifications: [
      { label: 'Display', value: '5-inch IPS touchscreen (720×1280)' },
      { label: 'Processor', value: 'Quad-core 1.5GHz' },
      { label: 'RAM', value: '2GB' },
      { label: 'Storage', value: '16GB (expandable)' },
      { label: 'Operating System', value: 'Android 11' },
      { label: 'Printer', value: '58mm thermal printer (built-in)' },
      { label: 'Scanner', value: '1D/2D barcode scanner (built-in)' },
      { label: 'Connectivity', value: 'WiFi, 4G, Bluetooth' },
      { label: 'Battery', value: '5000mAh' },
      { label: 'Battery Life', value: '12+ hours' },
      { label: 'Dimensions', value: '195mm × 85mm × 65mm' },
      { label: 'Weight', value: '450g' },
    ],
    inTheBox: [
      'Android Handheld POS',
      'Power Adapter',
      '5 Receipt Paper Rolls',
      'Counter Stand',
      'Protective Case',
      'User Manual',
    ],
    useCases: [
      {
        title: 'Busy Retail Stores',
        description: 'Handle high transaction volumes with fast scanning and printing.',
      },
      {
        title: 'Supermarkets',
        description: 'Multiple checkout counters with reliable, professional devices.',
      },
      {
        title: 'Pharmacies',
        description: 'Scan medications, track inventory, print receipts - all in one device.',
      },
    ],
    benefits: [
      'Everything in one device - no separate phone needed',
      'Fast barcode scanning speeds up checkout',
      'Long battery life handles full business day',
      'Runs full Invoicer app with all features',
      'Professional appearance builds customer confidence',
    ],
    addons: [
      { name: 'Extra Barcode Scanner', price: 15000 },
      { name: 'Card Reader', price: 25000 },
      { name: 'Customer Display', price: 35000 },
      { name: 'Counter Stand (Premium)', price: 8000 },
    ],
  },
};
