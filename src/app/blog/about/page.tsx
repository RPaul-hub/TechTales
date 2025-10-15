export default function About() {
  return (
   <div className="container mx-auto py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">We are passionate about coding and sharing knowledge.</p>
      </header>

      <section className="bio mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p>Our blog was founded to help developers grow by providing high-quality technical tutorials, tips, and resources. Our team is composed of experienced developers who love to share their insights and knowledge with others.</p>
      </section>

      <section className="contact mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>If you have any questions, feel free to reach out via email or follow us on social media:</p>
        <ul className="social-media mt-4 flex space-x-6 justify-center">
          <li><a href="https://twitter.com" className="text-blue-600">Twitter</a></li>
          <li><a href="https://github.com" className="text-black">GitHub</a></li>
          <li><a href="https://linkedin.com" className="text-blue-700">LinkedIn</a></li>
        </ul>
      </section>
    </div>
  );
}