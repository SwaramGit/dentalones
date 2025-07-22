import Head from 'next/head'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions – Dental One</title>
        <meta name="description" content="Terms for using the Dental One mobile app and services." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="mb-4">
          By using the Dental One app, you agree to our terms which include responsible usage, accurate data entry, and compliance with our privacy policy.
        </p>
        <p className="mb-4">
          We reserve the right to modify or suspend access to features as needed for maintenance or updates.
        </p>
        <p>
          Your continued use of the app signifies your acceptance of these terms.
        </p>
      </main>
    </>
  );
}
