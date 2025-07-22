import Head from 'next/head'
import Image from 'next/image'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use – Dental One</title>
        <meta name="description" content="Terms of using the Dental One mobile app." />
      </Head>
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <header className="mt-8 flex justify-center">
          <Image src="/logo.jpeg" alt="Logo" width={128} height={64} />
        </header>

        <main className="flex-grow max-w-3xl mx-auto px-4 py-10 space-y-6">
          <h1 className="text-3xl font-bold">Terms of Use</h1>

          <p><strong>1. Eligibility:</strong> You must be 18+ to use the app independently. Minors need guardian-managed access.</p>

          <p><strong>2. Account Creation:</strong> Created via Dentrix by staff. Patients are responsible for credential security.</p>

          <p><strong>3. App Usage:</strong> Use must be lawful. No unauthorized access, malware, or disruption allowed.</p>

          <p><strong>4. Appointments:</strong> Must be booked 3+ days in advance. Cancel/reschedule 48+ hours prior or fees apply.</p>

          <p><strong>5. Treatment Approvals:</strong> Can approve/reject treatments via app. Rejections require reason.</p>

          <p><strong>6. Notifications:</strong> Sent via push/email. Preferences are user-controllable.</p>

          <p><strong>7. Intellectual Property:</strong> All app content belongs to Gabucan Family Dentistry & partners.</p>

          <p><strong>8. Termination:</strong> We may suspend access without notice for violations.</p>

          <p><strong>9. Disclaimers:</strong> The app is “as is.” We’re not liable for Dentrix-sourced data errors.</p>

          <p><strong>10. Limitation of Liability:</strong> No liability for indirect or consequential damages.</p>

          <p><strong>11. Governing Law:</strong> Governed by applicable laws (e.g., California).</p>

          <p><strong>12. Contact:</strong> info@gabucandentistry.com | +1 408 945 8880</p>
        </main>
      </div>
    </>
  );
}
