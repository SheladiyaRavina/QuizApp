import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">QuizMaster</h3>
            <p className="text-white">Test your knowledge with our exciting quizzes!</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-sky-500 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-white hover:text-sky-500 transition-colors duration-300">About</a></li>
              <li><a href="/contact" className="text-white hover:text-sky-500 transition-colors duration-300">Contact</a></li>
              <li><a href="#!" className="text-white hover:text-sky-500 transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-white">
          <p>&copy; 2023 QuizMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;