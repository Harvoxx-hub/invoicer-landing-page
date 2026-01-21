import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),

  phone: z.string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true;
      // Basic phone validation - allow common formats
      return /^[\d\s\-\+\(\)]+$/.test(val);
    }, "Please enter a valid phone number"),

  businessType: z.string()
    .min(1, "Please select a business type"),

  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export const businessTypeOptions = [
  { value: "retail", label: "Retail Store" },
  { value: "supermarket", label: "Supermarket" },
  { value: "restaurant", label: "Restaurant/Cafe" },
  { value: "fashion", label: "Fashion/Boutique" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "electronics", label: "Electronics Store" },
  { value: "other", label: "Other" },
];
