import React from 'react';
import { PhoneIcon, MessageCircleIcon, MailIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="bg-gray-800 text-white pt-16 pb-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-3 text-green-400" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <MessageCircleIcon size={18} className="mr-3 text-green-400" />
                <span>WhatsApp: +91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-3 text-green-400" />
                <span>info@yourpgname.com</span>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  PG Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Book a Visit
                </a>
              </li>
            </ul>
          </div>
          {/* PG Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            <ul className="space-y-3">
              <li>Near XYZ University, Chennai</li>
              <li>City Center, Chennai</li>
              <li>Near Tech Park, Chennai</li>
            </ul>
          </div>
          {/* Testimonials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              What Our Residents Say
            </h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="italic mb-3">
                "Loved staying here! The staff is friendly and the rooms are
                clean and comfortable."
              </p>
              <p className="font-medium">- Ananya K., Student</p>
            </div>
          </div>
        </div>
        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 Your PG Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;