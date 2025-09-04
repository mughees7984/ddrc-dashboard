import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 to-transparent"></div>

      <div className="relative">
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-yellow-600/30 pt-12 pb-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 sm:px-8 md:px-12 mb-12">
            {/* Company Info */}
            <div>
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
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gray-800 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-5 h-5 bg-white group-hover:bg-black rounded opacity-80 group-hover:opacity-100"></div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
              <ul className="space-y-3">
                {["Token Vesting", "Governance", "Analytics", "Staking", "Rewards"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3">
                {["Documentation", "Whitepaper", "API Guide", "Smart Contracts", "Security Audit"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span>{item}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Community</h4>
              <ul className="space-y-3">
                {["Discord", "Telegram", "Twitter", "Medium", "Support"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-700 px-6 sm:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-white font-bold text-xl mb-3">Stay Updated</h4>
              <p className="text-gray-400 mb-6">
                Get the latest updates on DDRC ecosystem and token releases
              </p>

              <div className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-black/50 border border-gray-600 sm:border-r-0 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700 px-6 sm:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
              <div className="text-gray-400 text-sm">
                © 2025 DDRC. All rights reserved. Built on Ethereum.
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm">
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
