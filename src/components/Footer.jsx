import React from "react";
import { ChevronRight } from "lucide-react";
const Footer = () => {
  return (
    <footer className="relative">
      {/* Footer Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 to-transparent"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900  border-t border-yellow-600/30 pt-12 pb-8">
          {/* Footer Top */}
          <div className=" grid md:grid-cols-4 gap-8 mb-12 px-10">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">DDRC</h3>
                  <p className="text-gray-400 text-sm">
                    Distributed Digital Resource Coin
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Empowering a decentralized resource economy where every
                contribution counts and every user is a stakeholder.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <div className="w-5 h-5 bg-white group-hover:bg-black rounded opacity-80 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <div className="w-5 h-5 bg-white group-hover:bg-black rounded opacity-80 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <div className="w-5 h-5 bg-white group-hover:bg-black rounded opacity-80 group-hover:opacity-100"></div>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <div className="w-5 h-5 bg-white group-hover:bg-black rounded opacity-80 group-hover:opacity-100"></div>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Token Vesting</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Governance</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Analytics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Staking</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Rewards</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Whitepaper</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>API Guide</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Smart Contracts</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Security Audit</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Community & Support */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Community</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Discord</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Medium</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-white font-bold text-xl mb-3">
                Stay Updated
              </h4>
              <p className="text-gray-400 mb-6">
                Get the latest updates on DDRC ecosystem and token releases
              </p>

              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/50 border border-gray-600 border-r-0 rounded-l-xl px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-r-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 DDRC. All rights reserved. Built on Ethereum.
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>

              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Ethereum Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
