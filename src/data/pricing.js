export const pricingTiers = [
  {
    id: 'free',
    name: 'Free',
    price: {
      monthly: 0,
      annual: 0,
    },
    currency: '₦',
    description: 'Testing the waters',
    badge: null,
    features: [
      'Up to 100 products',
      '1 staff member',
      'Basic sales tracking',
      'Mobile app access',
      'Email support',
    ],
    limitations: [
      'Limited reports',
      'No online store',
      'No multi-location',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: 3000,
      annual: 30000, // Save ~17%
    },
    currency: '₦',
    description: 'Small shops',
    badge: null,
    features: [
      'Up to 500 products',
      '2 staff members',
      'Barcode scanning',
      'Receipt customization',
      'WhatsApp support',
      'Basic reports',
    ],
    limitations: [
      'No online store',
      'No multi-location',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 8000,
      annual: 80000, // Save ~17%
    },
    currency: '₦',
    description: 'Growing businesses',
    badge: 'MOST POPULAR',
    features: [
      'Unlimited products',
      '5 staff members',
      'Advanced reports',
      'Online store included',
      'API access',
      'Priority support',
      'Custom receipts',
      'Low stock alerts',
    ],
    limitations: [],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      annual: 'Custom',
    },
    currency: '₦',
    description: 'Multiple locations',
    badge: null,
    features: [
      'Unlimited everything',
      'Unlimited staff',
      'Multi-location management',
      'Dedicated account manager',
      'Custom integrations',
      'Phone support',
      'Advanced analytics',
      'Custom training',
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const pricingFAQ = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What happens after the free trial?',
    answer: 'After 30 days, you can choose to continue with a paid plan or stay on the free plan. Your data is never deleted.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked.',
  },
  {
    question: 'Can I use my own hardware?',
    answer: 'Yes! Invoicer works with most Bluetooth printers and barcode scanners. We also offer certified hardware.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees or hidden charges. What you see is what you pay.',
  },
  {
    question: 'How do I pay?',
    answer: 'We accept bank transfers, card payments, and mobile money (USSD). All payments are processed securely.',
  },
];

export const planFeatureComparison = [
  {
    category: 'Products & Inventory',
    features: [
      { name: 'Number of products', free: '100', starter: '500', pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Barcode scanning', free: false, starter: true, pro: true, enterprise: true },
      { name: 'Low stock alerts', free: false, starter: true, pro: true, enterprise: true },
      { name: 'Product variants', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Batch tracking', free: false, starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Sales & POS',
    features: [
      { name: 'Number of staff', free: '1', starter: '2', pro: '5', enterprise: 'Unlimited' },
      { name: 'Receipt printing', free: true, starter: true, pro: true, enterprise: true },
      { name: 'Custom receipts', free: false, starter: true, pro: true, enterprise: true },
      { name: 'Multiple payment methods', free: true, starter: true, pro: true, enterprise: true },
      { name: 'Staff permissions', free: false, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Reports & Analytics',
    features: [
      { name: 'Basic sales reports', free: true, starter: true, pro: true, enterprise: true },
      { name: 'Advanced analytics', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Profit analysis', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Custom reports', free: false, starter: false, pro: false, enterprise: true },
      { name: 'Export to Excel', free: false, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Online & Growth',
    features: [
      { name: 'Online store', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Multi-location', free: false, starter: false, pro: false, enterprise: true },
      { name: 'API access', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Custom integrations', free: false, starter: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email support', free: true, starter: true, pro: true, enterprise: true },
      { name: 'WhatsApp support', free: false, starter: true, pro: true, enterprise: true },
      { name: 'Priority support', free: false, starter: false, pro: true, enterprise: true },
      { name: 'Phone support', free: false, starter: false, pro: false, enterprise: true },
      { name: 'Dedicated account manager', free: false, starter: false, pro: false, enterprise: true },
    ],
  },
];
