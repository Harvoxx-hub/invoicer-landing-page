export const hardwareProducts = [
  {
    id: 'bluetooth-printer',
    name: 'Bluetooth Receipt Printer',
    slug: 'bluetooth-printer',
    price: 45000,
    currency: '₦',
    image: '/images/bluetooth-printer.jpg', // placeholder
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
    name: 'Android POS Device',
    slug: 'android-pos',
    price: 120000,
    currency: '₦',
    image: '/images/android-pos.jpg', // placeholder
    badge: 'MOST POPULAR',
    features: [
      'Built-in receipt printer',
      'Barcode scanner included',
      '12+ hours battery life',
    ],
    description: 'All-in-one POS terminal with 5-inch screen, built-in printer, and barcode scanner. Ideal for busy retail environments.',
    link: '/hardware/android-pos',
  },
  {
    id: 'handheld-pos',
    name: 'Handheld POS Device',
    slug: 'handheld-pos',
    price: 95000,
    currency: '₦',
    image: '/images/handheld-pos.jpg', // placeholder
    badge: null,
    features: [
      'Integrated printer and scanner',
      '8+ hours battery',
      'Lightweight and portable',
    ],
    description: 'Compact handheld device with built-in printer and scanner. Great for small shops and market vendors.',
    link: '/hardware/handheld-pos',
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
      'Bluetooth Printer',
      'Receipt Paper Rolls (50-pack)',
      'Phone Mount',
    ],
    bestFor: 'New businesses and mobile vendors',
  },
  {
    id: 'small-shop-kit',
    name: 'Small Shop Kit',
    originalPrice: 110000,
    discountedPrice: 105000,
    savings: '15%',
    items: [
      'Handheld POS Device',
      'Receipt Paper Rolls (50-pack)',
      'Counter Stand',
    ],
    bestFor: 'Small retail shops and pharmacies',
    badge: 'POPULAR',
  },
  {
    id: 'professional-setup',
    name: 'Professional Setup',
    originalPrice: 150000,
    discountedPrice: 145000,
    savings: '15%',
    items: [
      'Android POS Device',
      'Barcode Scanner',
      'Receipt Paper Rolls (100-pack)',
      'Counter Stand',
    ],
    bestFor: 'Busy retail stores and supermarkets',
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
    name: 'Bluetooth Receipt Printer',
    price: 45000,
    images: ['/images/bluetooth-printer-1.jpg', '/images/bluetooth-printer-2.jpg'],
    shortDescription: 'Print professional receipts wirelessly from your smartphone.',
    longDescription: 'The Invoicer Bluetooth Receipt Printer is perfect for mobile vendors and small shops. Connect wirelessly to any smartphone or tablet running the Invoicer app and start printing professional receipts instantly. Compact, portable, and built to last.',
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
      'Bluetooth Receipt Printer',
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
    name: 'Android POS Device',
    price: 120000,
    images: ['/images/android-pos-1.jpg', '/images/android-pos-2.jpg'],
    shortDescription: 'All-in-one POS terminal with built-in printer and barcode scanner.',
    longDescription: 'Transform your business with the Invoicer Android POS Device. This all-in-one terminal includes a 5-inch touchscreen, built-in receipt printer, and barcode scanner. Perfect for busy retail environments, supermarkets, and pharmacies.',
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
      'Android POS Device',
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
  'handheld-pos': {
    name: 'Handheld POS Device',
    price: 95000,
    images: ['/images/handheld-pos-1.jpg', '/images/handheld-pos-2.jpg'],
    shortDescription: 'Compact handheld device with integrated printer and scanner.',
    longDescription: 'The Invoicer Handheld POS Device combines portability with power. This compact device features an integrated thermal printer, barcode scanner, and touchscreen - all in a lightweight, easy-to-hold form factor.',
    specifications: [
      { label: 'Display', value: '4-inch touchscreen' },
      { label: 'Processor', value: 'Quad-core ARM' },
      { label: 'RAM', value: '1GB' },
      { label: 'Storage', value: '8GB' },
      { label: 'Operating System', value: 'Android 10' },
      { label: 'Printer', value: '58mm thermal printer (built-in)' },
      { label: 'Scanner', value: '1D barcode scanner (built-in)' },
      { label: 'Connectivity', value: 'WiFi, Bluetooth' },
      { label: 'Battery', value: '3000mAh' },
      { label: 'Battery Life', value: '8+ hours' },
      { label: 'Dimensions', value: '180mm × 75mm × 45mm' },
      { label: 'Weight', value: '280g' },
    ],
    inTheBox: [
      'Handheld POS Device',
      'USB Charging Cable',
      '3 Receipt Paper Rolls',
      'Belt Clip',
      'User Manual',
    ],
    useCases: [
      {
        title: 'Small Shops',
        description: 'Perfect size for counter space with full POS functionality.',
      },
      {
        title: 'Market Vendors',
        description: 'Portable enough to carry, powerful enough for busy markets.',
      },
      {
        title: 'Fashion Boutiques',
        description: 'Scan tags, print receipts, manage inventory on the sales floor.',
      },
    ],
    benefits: [
      'Lightweight and portable without sacrificing features',
      'Integrated design means no separate devices to manage',
      'Perfect balance of size and capability',
      'Affordable entry to professional POS hardware',
      'Built rugged for daily use',
    ],
  },
};
