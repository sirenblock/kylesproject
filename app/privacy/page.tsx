import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Mail, Phone, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | 30A Junk Removal',
  description: 'Learn how 30A Junk Removal collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  const lastUpdated = 'February 1, 2026'

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-800 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-seafoam-300" />
            <span className="text-seafoam-300 font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-ocean-100">
            How we collect, use, and protect your information
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                At 30A Junk Removal, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website, use our services, or
                communicate with us. Please read this policy carefully.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Personal Information</h3>
              <p className="text-slate-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Request a quote or book a service</li>
                <li>Contact us via phone, text, email, or contact form</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Create an account or profile with us</li>
              </ul>
              <p className="text-slate-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Name and contact information (phone number, email address, mailing address)</li>
                <li>Service address and property details</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Photos of items for removal (when provided for quotes)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-slate-700 mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Location data (general geographic location based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p className="text-slate-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Provide, maintain, and improve our junk removal services</li>
                <li>Process your service requests and payments</li>
                <li>Communicate with you about your service, including scheduling and updates</li>
                <li>Send you quotes, invoices, and service confirmations</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and ensure service quality</li>
              </ul>
            </div>

            {/* Cookie Policy */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookie Policy</h2>
              <p className="text-slate-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are
                small data files stored on your device that help us remember your preferences and understand how
                you use our website.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing to show relevant advertisements</li>
              </ul>

              <p className="text-slate-700">
                You can control cookies through your browser settings. Note that disabling cookies may affect
                your ability to use certain features of our website.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
              <p className="text-slate-700 mb-4">
                We use trusted third-party services to help us operate our business and provide better service:
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Google Services</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li><strong>Google Maps:</strong> Powers our service area maps and location features</li>
                <li><strong>Google Analytics:</strong> Helps us understand website traffic and user behavior</li>
                <li><strong>Google Ads:</strong> Allows us to reach potential customers through search advertising</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Payment Processors</h3>
              <p className="text-slate-700 mb-6">
                We use secure third-party payment processors (such as Stripe or Square) to process transactions.
                We do not store complete credit card information on our servers.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Communication Tools</h3>
              <p className="text-slate-700">
                We may use email marketing platforms, SMS services, and customer relationship management (CRM)
                tools to communicate with you about our services.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-slate-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Service Providers:</strong> With trusted vendors who assist in business operations (payment processing, email delivery, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our customers</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Secure servers and databases with restricted access</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
              <p className="text-slate-700">
                While we strive to protect your information, no method of transmission over the internet or
                electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
              <p className="text-slate-700">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, unless a longer retention period is required by law. Service records are
                typically retained for 7 years for business and legal purposes. Marketing communication preferences
                are retained until you opt out.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Privacy Rights</h2>
              <p className="text-slate-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request that we limit how we use your information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Object:</strong> Object to our processing of your personal information</li>
              </ul>
              <p className="text-slate-700">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
              <p className="text-slate-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children. If we become aware that we have collected information from
                a child under 18 without parental consent, we will take steps to delete that information.
              </p>
            </div>

            {/* California Privacy Rights */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">California Privacy Rights (CCPA)</h2>
              <p className="text-slate-700 mb-4">
                If you are a California resident, you have additional rights under the California Consumer
                Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
                <li>Right to know what personal information we collect and how it's used</li>
                <li>Right to delete personal information (with certain exceptions)</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-slate-700">
                To exercise your CCPA rights, contact us at the email or phone number below.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-slate-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any material changes by posting the new policy on this page
                and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-ocean-50 to-seafoam-50 rounded-xl border-2 border-ocean-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us About Privacy</h2>
              <p className="text-slate-700 mb-6">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
                    You can also review our <Link href="/terms" className="text-ocean-600 hover:text-ocean-700 font-medium">Terms of Service</Link> or return to our <Link href="/" className="text-ocean-600 hover:text-ocean-700 font-medium">homepage</Link>.
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
