import { Metadata } from 'next'
import Link from 'next/link'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for 30A Junk Removal. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2>Information We Collect</h2>
          <p>
            When you use our website or contact us for services, we may collect the following information:
          </p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and service address when you request a quote or book a service.</li>
            <li><strong>Service Details:</strong> Information about the items you need removed, photos you share, and service preferences.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and features used.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide quotes and schedule junk removal services</li>
            <li>Communicate with you about your service requests</li>
            <li>Improve our website and services</li>
            <li>Send follow-up communications about completed services</li>
          </ul>

          <h2>Analytics</h2>
          <p>
            We use Google Analytics and Facebook Pixel to understand how visitors interact with our website. These tools collect anonymized data about page views, traffic sources, and user behavior. You can opt out of Google Analytics by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses cookies to remember your preferences, track advertising attribution (such as Google Ads click IDs), and analyze website traffic. You can control cookie settings through your browser preferences.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and conducting our business, provided they agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable precautions to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us:
          </p>
          <ul>
            <li>Phone: <a href={`tel:${PHONE_NUMBER}`}>{FORMATTED_PHONE}</a></li>
            <li>Email: <a href="mailto:30apcbjunkremoval@gmail.com">30apcbjunkremoval@gmail.com</a></li>
          </ul>

          <div className="mt-8 pt-8 border-t border-sand-200">
            <Link href="/" className="text-ocean-600 hover:text-ocean-700 font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
