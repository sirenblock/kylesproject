import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  serviceType: z.enum([
    'one-time',
    'construction',
    'property-management',
    'estate-cleanout',
    'other'
  ], {
    message: "Please select a valid service type"
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  photos: z.array(z.string()).max(5, "Maximum 5 photos allowed").optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Quote calculator with photo upload schema
export const quoteCalculatorSchema = z.object({
  volumeLevel: z.enum(['small', 'medium', 'large', 'extra-large']),
  selectedItems: z.array(z.string()).min(1, "Please select at least one item"),
  photos: z.array(z.string()).max(5, "Maximum 5 photos allowed").optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits").optional(),
  email: z.string().email("Invalid email address").optional(),
})

export type QuoteCalculatorData = z.infer<typeof quoteCalculatorSchema>
