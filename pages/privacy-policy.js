import Head from 'next/head'
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Dental One</title>
        <meta name="description" content="Our privacy practices related to the Dental One app." />
      </Head>
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <header className="mt-8 flex justify-center">
          <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
        </header>

        <main className="flex-grow max-w-3xl mx-auto px-6 py-10 space-y-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Data We Collect</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Personal Information: Name, DOB, gender, email, phone, address.</li>
              <li>Health & Dental Records: Medical history, allergies, treatments, prescriptions.</li>
              <li>Appointments: Booking times, doctor, procedure info.</li>
              <li>Insurance Data: Policy, coverage, estimates.</li>
              <li>Usage Data: Activity logs, crashes, login attempts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Sync with Dentrix</li>
              <li>Schedule/manage appointments</li>
              <li>Display treatment & insurance info</li>
              <li>Send reminders & alerts</li>
              <li>Family account access</li>
            </ul>
            <p className="mt-2">We do not use your data for marketing without your consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Dentrix system</li>
              <li>Gabucan Dentistry staff</li>
              <li>Guardians & dependents</li>
              <li>Firebase, AWS, Prometheus/Grafana</li>
            </ul>
            <p className="mt-2">We do not sell or rent your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Role-based access control (RBAC)</li>
              <li>Secure cloud hosting</li>
              <li>OTP login & periodic audits</li>
            </ul>
            <p className="mt-2">You are responsible for keeping your credentials secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access, review, correct or delete personal data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Children’s Privacy</h2>
            <p>Minors' accounts are managed by guardians. Ownership transfers at age 18.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
            <p>We retain your data while your account is active or as legally required.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Updates to this Policy</h2>
            <p>Changes will be posted in the app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
            <p>Email: info@gabucandentistry.com</p>
            <p>Phone: +1 408 945 8880</p>
          </section>
        </main>
      </div>
    </>
  );
}
