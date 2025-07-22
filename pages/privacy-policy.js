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

        <main className="flex-grow max-w-3xl mx-auto px-4 py-10 space-y-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>

          <p><strong>1. Data We Collect:</strong> We collect data such as personal information, dental records, appointments, insurance details, and device usage logs.</p>

          <p><strong>2. How We Use Your Data:</strong> We use it to sync with Dentrix, manage appointments, display treatment/insurance, send reminders, and manage family accounts. No marketing use without consent.</p>

          <p><strong>3. Data Sharing:</strong> Shared only with Dentrix, clinic staff, legal guardians, and infrastructure providers (Firebase, AWS, Prometheus). Never sold or rented.</p>

          <p><strong>4. Data Security:</strong> Enforced via RBAC, secure cloud, OTP auth, and audits. You’re responsible for credential safety.</p>

          <p><strong>5. Your Rights:</strong> You may access, edit, or request deletion of your data. Contact support to exercise these rights.</p>

          <p><strong>6. Children’s Privacy:</strong> Guardians manage minor accounts. Ownership transfers at age 18.</p>

          <p><strong>7. Data Retention:</strong> Retained while active or as legally required.</p>

          <p><strong>8. Updates:</strong> Changes to this policy will be posted in the app.</p>

          <p><strong>9. Contact:</strong> info@gabucandentistry.com | +1 408 945 8880</p>
        </main>
      </div>
    </>
  );
}
