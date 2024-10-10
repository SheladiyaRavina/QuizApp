import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-950 to-sky-950 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-purple-200 transition-colors duration-300">
          QuizMaster
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-purple-200 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-200 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-200 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;