import { Metadata } from 'next'
import Link from 'next/link'
import { FORMATTED_PHONE, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for 30A Junk Removal. Read our service agreement, policies, and conditions.',
}

export default function TermsPage() {
  return (
    <div className="py-12">
      <section className="py-16 bg-gradient-to-br from-ocean-50 to-seafoam-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2>Service Agreement</h2>
          <p>
            By scheduling a junk removal service with 30A Junk Removal, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h2>Services Provided</h2>
          <p>
            30A Junk Removal provides residential and commercial junk removal services in the 30A corridor of Northwest Florida, including but not limited to:
          </p>
          <ul>
            <li>Furniture and appliance removal</li>
            <li>Construction debris removal</li>
            <li>Estate cleanouts</li>
            <li>Property management turnover services</li>
            <li>Yard debris and outdoor item removal</li>
          </ul>

          <h2>Pricing and Payment</h2>
          <ul>
            <li>All quotes are estimates based on the information provided. Final pricing is determined upon on-site assessment of the items to be removed.</li>
            <li>Payment is due upon completion of service.</li>
            <li>We accept cash, credit cards, Venmo, and Zelle.</li>
            <li>Construction debris and specialty items may require custom pricing.</li>
          </ul>

          <h2>Scheduling and Cancellation</h2>
          <ul>
            <li>We offer same-day service when available, subject to schedule capacity.</li>
            <li>You may cancel or reschedule at no charge with at least 24 hours notice.</li>
            <li>We will make every effort to arrive within the scheduled time window. If we need to reschedule, we will notify you as soon as possible.</li>
          </ul>

          <h2>Customer Responsibilities</h2>
          <p>By using our services, you confirm that:</p>
          <ul>
            <li>You are authorized to have the items removed from the property.</li>
            <li>Items to be removed do not include hazardous materials (chemicals, paint, asbestos, etc.).</li>
            <li>Reasonable access to the items will be provided.</li>
            <li>All information provided for quoting is accurate to the best of your knowledge.</li>
          </ul>

          <h2>Liability</h2>
          <p>
            30A Junk Removal is fully insured. We take every precaution to protect your property during service. In the unlikely event of accidental damage, please notify us within 24 hours for resolution.
          </p>

          <h2>Disposal</h2>
          <p>
            We are committed to responsible disposal. Items in good condition are donated to local charities when possible. Recyclable materials are separated and recycled. Remaining items are disposed of at licensed facilities in compliance with local regulations.
          </p>

          <h2>Website Use</h2>
          <p>
            The information on this website is for general informational purposes. While we strive to keep pricing and service information current, details may change without notice. Quotes provided through the website calculator are estimates only.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us:
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
