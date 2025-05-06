import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/ColeWhitehurst"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform hover:scale-110 transition duration-300 ease-in-out"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/cole-whitehurst-5339871a0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transform hover:scale-110 transition duration-300 ease-in-out"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <button
        onClick={handleScrollToTop}
        className="text-sm text-gray-400 hover:text-white hover:underline tracking-wide transform hover:-translate-y-0.5 transition-all duration-300 mb-3 bg-transparent border-none cursor-pointer appearance-none"
      >
        Back to top ↑
      </button>

      <p className="text-sm mb-1">
        &copy; {year} Cole Whitehurst. All rights reserved.
      </p>

      <p className="text-xs text-gray-500">
        Built with React, Vite, and JavaScript
      </p>
    </footer>
  );
};

export default Footer;
