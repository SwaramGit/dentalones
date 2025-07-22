import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Dental One</title>
        <meta name="description" content="Our commitment to protecting your data and privacy at Dental One." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Dental One is committed to protecting your privacy. We collect and use personal information solely to improve our services, including appointment scheduling and secure communication with your dental provider.
        </p>
        <p className="mb-4">
          Your data is never shared with third parties, and is encrypted in transit and at rest. By using the Dental One app, you consent to this policy.
        </p>
        <p>For any concerns, please contact us at info@gabucandentistry.com</p>
      </main>
    </>
  );
}
