import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Mail, Phone, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | 30A Junk Removal',
  description: 'Terms and conditions for using 30A Junk Removal services. Learn about our service policies, payment terms, cancellations, and guarantees.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.30ajunkremoval.com/terms',
  },
}

export default function TermsPage() {
  const lastUpdated = 'February 1, 2026'

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="-mt-24 pt-32 pb-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-seafoam-300" />
            <span className="text-seafoam-300 font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-ocean-100">
            Service terms, conditions, and customer agreement
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-ocean-200">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and 30A Junk
                Removal ("Company," "we," "us," or "our") concerning your access to and use of our junk removal
                services and website.
              </p>
              <p className="text-slate-700 leading-relaxed">
                By booking our services or using our website, you agree to be bound by these Terms. If you do not
                agree to these Terms, you may not use our services.
              </p>
            </div>

            {/* Service Description */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Description</h2>
              <p className="text-slate-700 mb-4">
                30A Junk Removal provides professional junk removal and hauling services throughout the 30A
                corridor and surrounding areas in Florida. Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>One-time junk removal and hauling</li>
                <li>Construction debris removal</li>
                <li>Property management services for vacation rentals</li>
                <li>Estate cleanouts and downsizing assistance</li>
                <li>Furniture and appliance removal</li>
                <li>Hot tub and spa removal</li>
                <li>Yard waste and landscaping debris removal</li>
              </ul>
            </div>

            {/* Service Scope and Limitations */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Scope and Limitations</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Accepted Items</h3>
              <p className="text-slate-700 mb-4">
                We accept most household junk, furniture, appliances, construction debris, and yard waste.
                All items must be accessible and ready for removal at the scheduled service time.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Prohibited Items</h3>
              <p className="text-slate-700 mb-4">
                We cannot remove the following items due to safety and legal restrictions:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Hazardous materials (asbestos, chemicals, oil, gasoline, pesticides)</li>
                <li>Medical waste or biohazardous materials</li>
                <li>Firearms, ammunition, or explosives</li>
                <li>Radioactive materials</li>
                <li>Materials requiring special permits or handling</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Service Area</h3>
              <p className="text-slate-700">
                We primarily serve communities along the 30A corridor from Destin to Panama City Beach, Florida.
                Service availability may vary by location. Additional fees may apply for remote or difficult-to-access
                properties.
              </p>
            </div>

            {/* Booking and Scheduling */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Booking and Scheduling</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">How to Book</h3>
              <p className="text-slate-700 mb-6">
                Services can be booked via phone, text, email, or through our website. We recommend providing
                photos of items for accurate quotes. All bookings are subject to availability.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Scheduling</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Service appointments are scheduled based on availability</li>
                <li>We offer same-day and next-day service when possible</li>
                <li>Appointment windows are typically 2-4 hours</li>
                <li>We will call 30 minutes before arrival</li>
                <li>Rescheduling requests should be made at least 24 hours in advance when possible</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Access Requirements</h3>
              <p className="text-slate-700">
                You must provide clear access to all items for removal. This includes unlocking gates, clearing
                pathways, and ensuring items are accessible. You or an authorized representative must be present
                during service, or provide clear instructions and authorization for our team to proceed.
              </p>
            </div>

            {/* Pricing and Quotes */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing and Quotes</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Pricing Structure</h3>
              <p className="text-slate-700 mb-6">
                Our pricing is volume-based, determined by how much space your items take up in our truck.
                We offer transparent, upfront pricing with no hidden fees.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Quote Accuracy</h3>
              <p className="text-slate-700 mb-6">
                Quotes provided remotely (via text, email, or phone) are estimates based on the information
                and photos you provide. Final pricing is confirmed on-site before work begins. If the actual
                volume differs significantly from what was described, we will provide a revised quote before
                proceeding.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Price Changes</h3>
              <p className="text-slate-700 mb-4">
                Prices may increase from the original estimate if:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Additional items are added to the removal</li>
                <li>Items require more labor than initially assessed</li>
                <li>Access issues require additional time or equipment</li>
                <li>Disposal fees exceed initial estimates</li>
              </ul>
              <p className="text-slate-700">
                You will always be informed of and approve any price changes before work proceeds.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Terms</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Accepted Payment Methods</h3>
              <p className="text-slate-700 mb-4">
                We accept the following payment methods:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Cash</li>
                <li>Credit cards (Visa, Mastercard, American Express, Discover)</li>
                <li>Debit cards</li>
                <li>Venmo</li>
                <li>Zelle</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Payment Due</h3>
              <p className="text-slate-700 mb-6">
                Payment is due upon completion of service unless other arrangements have been made in advance
                for property management accounts or recurring services. We may offer net-30 terms to established
                property management clients.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Late Payment</h3>
              <p className="text-slate-700">
                Accounts not paid within agreed terms may be subject to a late fee of 1.5% per month (18%
                annually) or the maximum rate permitted by law, whichever is less.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cancellation Policy</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Customer Cancellations</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li><strong>More than 24 hours notice:</strong> Full refund or free rescheduling</li>
                <li><strong>Less than 24 hours notice:</strong> 50% cancellation fee may apply</li>
                <li><strong>Same-day cancellation or no-show:</strong> Full service fee may be charged</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Our Cancellations</h3>
              <p className="text-slate-700 mb-4">
                We reserve the right to cancel or reschedule service due to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Severe weather or unsafe working conditions</li>
                <li>Equipment failure or vehicle breakdown</li>
                <li>Staff illness or emergency</li>
                <li>Discovery of prohibited items or unsafe conditions</li>
              </ul>
              <p className="text-slate-700">
                In such cases, we will make every effort to reschedule at your earliest convenience with no
                penalty to you.
              </p>
            </div>

            {/* Liability and Insurance */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability and Insurance Coverage</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Our Insurance</h3>
              <p className="text-slate-700 mb-6">
                30A Junk Removal is fully licensed, bonded, and insured. We carry general liability insurance
                and workers' compensation coverage to protect both our team and your property.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Property Damage</h3>
              <p className="text-slate-700 mb-6">
                While we take every precaution to protect your property, accidents can happen. If damage occurs
                due to our negligence during service, we will work with you to resolve the matter promptly and
                fairly. Claims must be reported within 48 hours of service completion.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Limitation of Liability</h3>
              <p className="text-slate-700 mb-4">
                Our liability is limited to direct damages only and shall not exceed the amount paid for the
                service. We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Pre-existing damage or wear to property or items</li>
                <li>Damage caused by conditions you failed to disclose</li>
                <li>Items you identified for removal (we assume you want them discarded)</li>
                <li>Indirect, consequential, or incidental damages</li>
                <li>Damages resulting from acts of God or circumstances beyond our control</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Your Responsibility</h3>
              <p className="text-slate-700">
                You are responsible for identifying items for removal and securing or protecting items you wish
                to keep. Once items are loaded and removed from your property, they cannot be returned.
              </p>
            </div>

            {/* Service Guarantees */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Guarantees</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Satisfaction Guarantee</h3>
              <p className="text-slate-700 mb-6">
                We stand behind our work. If you are not satisfied with our service, please contact us within
                24 hours, and we will work to resolve the issue or provide a refund for the unsatisfactory portion
                of the service.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Environmental Commitment</h3>
              <p className="text-slate-700 mb-6">
                We are committed to environmental responsibility. We recycle and donate whenever possible,
                diverting items from landfills. However, we cannot guarantee that specific items will be recycled
                or donated, as this depends on their condition and the availability of accepting facilities.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">On-Time Service</h3>
              <p className="text-slate-700">
                We strive to arrive within our scheduled appointment window. If we are running more than 30
                minutes late, we will notify you. Significant delays due to our fault may result in a service
                discount at our discretion.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Informal Resolution</h3>
              <p className="text-slate-700 mb-6">
                If you have a complaint or dispute, please contact us first. We will make a good faith effort
                to resolve the matter informally within 30 days.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Mediation</h3>
              <p className="text-slate-700 mb-6">
                If we cannot resolve a dispute informally, both parties agree to attempt mediation before
                pursuing legal action. Mediation costs will be shared equally.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Governing Law</h3>
              <p className="text-slate-700 mb-6">
                These Terms are governed by the laws of the State of Florida, without regard to its conflict
                of law provisions. Any legal action must be brought in the appropriate state or federal courts
                located in Walton County, Florida.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Class Action Waiver</h3>
              <p className="text-slate-700">
                You agree to resolve disputes on an individual basis only, and not as part of a class action,
                collective action, or representative proceeding.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
              <p className="text-slate-700 mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the
                property of 30A Junk Removal and is protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="text-slate-700">
                You may not reproduce, distribute, modify, or create derivative works from our content without
                our express written permission.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <p className="text-slate-700">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately
                upon posting to our website with an updated "Last Updated" date. Your continued use of our
                services after changes constitutes acceptance of the modified Terms. We recommend reviewing
                these Terms periodically.
              </p>
            </div>

            {/* Severability */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Severability</h2>
              <p className="text-slate-700">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                limited or eliminated to the minimum extent necessary, and the remaining provisions will remain
                in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Entire Agreement</h2>
              <p className="text-slate-700">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                30A Junk Removal regarding our services and supersede all prior agreements, understandings, and
                communications, whether written or oral.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-ocean-50 to-seafoam-50 rounded-xl border-2 border-ocean-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions About Our Terms?</h2>
              <p className="text-slate-700 mb-6">
                If you have questions about these Terms of Service or need clarification on any of our policies,
                please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-ocean-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:30apcbjunkremoval@gmail.com" className="text-ocean-600 hover:text-ocean-700">
                      30apcbjunkremoval@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-ocean-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a href="tel:8507141928" className="text-ocean-600 hover:text-ocean-700">
                      (850) 714-1928
                    </a>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    You can also review our <Link href="/privacy" className="text-ocean-600 hover:text-ocean-700 font-medium">Privacy Policy</Link> or return to our <Link href="/" className="text-ocean-600 hover:text-ocean-700 font-medium">homepage</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
