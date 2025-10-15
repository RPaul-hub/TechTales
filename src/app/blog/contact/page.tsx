export default function Contact() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">We’d love to hear from you!</p>
      </header>

      <form className="mt-8 max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Your Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Your Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg">Your Message</label>
          <textarea id="message" rows={4} className="w-full px-4 py-2 mt-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded">Send Message</button>
      </form>
    </div>
  );
}