import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">ZoeenCloud</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-800 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-gray-800 px-3 py-2 rounded-md">About</Link>
              <Link to="/internships" className="hover:bg-gray-800 px-3 py-2 rounded-md">Internships</Link>
              <Link to="/contact" className="hover:bg-gray-800 px-3 py-2 rounded-md">Contact</Link>
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Login</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="block hover:bg-gray-800 px-3 py-2 rounded-md">About</Link>
            <Link to="/internships" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Internships</Link>
            <Link to="/contact" className="block hover:bg-gray-800 px-3 py-2 rounded-md">Contact</Link>
            <Link to="/login" className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}