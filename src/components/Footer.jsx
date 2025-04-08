import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
  } from "lucide-react";
  
  const Footer = () => {
    return (
      <footer className="bg-[#0f172a] text-white py-10 border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Cryptozen</h1>
            <p className="text-gray-400 mt-3 text-sm">
              Your trusted source for cryptocurrency insights, prices, and updates.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/coins" className="hover:text-white">Coins</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Support</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Socials */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-red-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-blue-900 pt-4">
          © {new Date().getFullYear()} CryptoInfo. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  