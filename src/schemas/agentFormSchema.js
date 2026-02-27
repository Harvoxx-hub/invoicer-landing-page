import { z } from 'zod';

export const agentFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),

  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine(
      (val) => /^[\d\s\-+()]+$/.test(val),
      'Please enter a valid phone number'
    ),

  state: z.string().optional(),

  country: z.string().min(1, 'Please select your country'),
});

export const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'Nigeria', label: 'Nigeria' },
  { value: 'Ghana', label: 'Ghana' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'South Africa', label: 'South Africa' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Tanzania', label: 'Tanzania' },
  { value: 'Egypt', label: 'Egypt' },
  { value: 'Other', label: 'Other' },
];
