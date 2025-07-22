import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();

  interface ContactFormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: ContactFormEvent): void => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Message sent successfully!");
    navigate("/"); // Redirect to home after submission
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Contact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="mail@example.com"
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Hello, I'd like to talk about..."
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl w-full md:w-auto"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Other Ways to Connect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-full mb-3">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Email
              </h4>
              <a
                href="mailto:contact@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                contact@example.com
              </a>
            </div>
            {/* Add phone and social media options similarly */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
