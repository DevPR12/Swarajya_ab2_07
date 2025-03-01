import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { auth } from "../firebase"; // Firebase Import
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            BloodConnect
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/request" className="hover:text-gray-200">Request Blood</Link>
            <Link to="/donors" className="hover:text-gray-200">Find Donors</Link>
            <Link to="/sos" className="hover:text-yellow-300 font-bold">SOS</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </div>

          {/* Authentication (Desktop) */}
          <div className="hidden md:flex space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="font-semibold">{user.displayName || user.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Login / Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/request" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Request Blood</Link>
            <Link to="/donors" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Find Donors</Link>
            <Link to="/sos" className="hover:text-yellow-300 font-bold" onClick={() => setIsOpen(false)}>SOS</Link>
            <Link to="/contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Mobile Authentication */}
            {user ? (
              <button
                className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
