import Head from 'next/head'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us – Dental One</title>
        <meta name="description" content="How to contact Dental One for support or questions." />
      </Head>
      <main className="max-w-xl mx-auto px-4 py-10 text-center text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="mb-2">📞 <a href="tel:+14089458880" className="text-blue-600 underline">+1 408 945 8880</a></p>
        <p>📧 <a href="mailto:info@gabucandentistry.com" className="text-blue-600 underline">info@gabucandentistry.com</a></p>
      </main>
    </>
  );
}
