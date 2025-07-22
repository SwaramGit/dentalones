import Head from 'next/head'
import Image from 'next/image'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use – Dental One</title>
        <meta name="description" content="Terms and conditions for using the Dental One app and services." />
      </Head>
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <header className="mt-8 flex justify-center">
          <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
        </header>

        <main className="flex-grow max-w-3xl mx-auto px-6 py-10 space-y-6">
          <h1 className="text-3xl font-bold">Terms of Use</h1>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Users must be 18 years or older to independently access the app.</li>
              <li>Minors require access via guardian-managed accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Account Creation</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Accounts are created through Dentrix by clinic staff.</li>
              <li>Patients are responsible for keeping credentials secure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. App Usage</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Users must comply with all applicable laws.</li>
              <li>Prohibited: hacking, data scraping, malware injection, impersonation, or interfering with app functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Appointment Policies</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Appointments must be booked at least 3 days in advance via the app.</li>
              <li>Rescheduling/cancellation requires a 48-hour notice. Failure may incur fees.</li>
              <li>Repeated missed appointments may result in account restrictions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Treatment Approvals</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Users may approve or reject recommended treatments through the app.</li>
              <li>Rejected treatments must include a valid reason.</li>
              <li>Staff may contact you for clarification if rejected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Notifications</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>You will receive appointment confirmations, reminders, and alerts.</li>
              <li>You may customize notification preferences in settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
            <p>All content in the Dental One app is owned by Gabucan Family Dentistry or its licensors. You may not copy, distribute, or use for commercial purposes without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Termination</h2>
            <p>We reserve the right to suspend or terminate accounts that violate these terms, with or without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Disclaimers</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>The app is provided “as is” without warranty.</li>
              <li>Gabucan is not liable for Dentrix-sourced inaccuracies or technical errors beyond its control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Limitation of Liability</h2>
            <p>We are not responsible for indirect, incidental, or consequential damages resulting from app use or service interruption.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Governing Law</h2>
            <p>These terms are governed by the laws applicable in the State of California (or your local jurisdiction).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">12. Contact</h2>
            <p>Email: info@gabucandentistry.com</p>
            <p>Phone: +1 408 945 8880</p>
          </section>
        </main>
      </div>
    </>
  );
}
