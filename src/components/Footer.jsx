import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <section className="max-w-7xl main-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-12 text-center  text-gray-400">
          {/* Customer Service */}
          <div className="border-b border-gray-800 sm:border-none pb-5">
            <h3 className="text-lg text-white font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border-b border-gray-800 sm:border-none pb-5">
            <h3 className="text-lg text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div className="space-y-4 text-white ">
            <h3 className="text-lg  font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4">We Accept</h3>
            <div className="flex justify-center gap-4">
              <FaCcVisa size={40} />
              <FaCcMastercard size={40} />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
