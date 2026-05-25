import { z } from 'zod'

// Contact form validation schema
// Attribution fields are optional -- per secret-sauce pattern #10 we capture
// utm_source/medium/campaign/content/term + gclid + pageUrl + referrer
// so leads can be attributed back to the originating campaign/ad/keyword.
//
// Phone field accepts any formatted input ("(850) 555-1234", "850-555-1234",
// "850.555.1234", etc.) and strips non-digits before validating. Without
// this preprocess, the form placeholder "(850) 555-1234" would fail
// validation because the regex expects exactly 10 raw digits.
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .pipe(z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits")),
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
  photos: z.array(z.string()).max(5, "Maximum 5 photos allowed").optional(),
  // Attribution
  gclid: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_content: z.string().optional(),
  utm_term: z.string().optional(),
  pageUrl: z.string().optional(),
  referrer: z.string().optional(),
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
