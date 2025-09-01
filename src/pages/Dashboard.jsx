import React, { useState } from "react";
import {
  Wallet,
  AlertCircle,
  BarChart3,
  Vote,
  ExternalLink,
} from "lucide-react";
import { ethers } from "ethers";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  // Connect wallet
  const handleConnectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Always request accounts -> forces popup every time
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const network = await provider.getNetwork();
      const bal = await provider.getBalance(accounts[0]);

      setAccount(accounts[0]);
      setNetwork(network);
      setBalance(ethers.formatEther(bal));
      setIsConnected(true);
      setShowError(false);
    } catch (err) {
      console.error("Wallet connection error:", err);
      setShowError(true);
    }
  };

  // Disconnect wallet
  const handleDisconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    setNetwork(null);
    setBalance(null);

    // Remove listeners to avoid auto reconnect
    if (window.ethereum && window.ethereum.removeAllListeners) {
      window.ethereum.removeAllListeners("accountsChanged");
      window.ethereum.removeAllListeners("chainChanged");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Dashboard */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                DDRC Dashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Empowering access, rewards, and governance through a{" "}
                <span className="text-yellow-400 font-semibold">
                  transparent, utility-first token
                </span>{" "}
                on Ethereum
              </p>
            </div>

            {/* Connect Wallet Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Wallet Connection
                </h2>
                <Wallet className="w-8 h-8 text-yellow-400" />
              </div>

              {!isConnected ? (
                <button
                  onClick={handleConnectWallet}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 
                             bg-gradient-to-r from-yellow-400 to-orange-500 text-black 
                             hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105"
                >
                  Connect Wallet
                </button>
              ) : (
                <>
                  <button
                    disabled
                    className="w-full py-4 px-6 rounded-xl font-semibold text-lg bg-green-600 text-white cursor-default"
                  >
                    Wallet Connected ✓
                  </button>

                  {/* Account Info */}
                  <div className="mt-6 space-y-3">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">Account:</p>
                      <p className="text-white font-mono text-sm break-all">
                        {account}
                      </p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">Balance:</p>
                      <p className="text-white font-bold text-xl">
                        {parseFloat(balance).toFixed(4)} ETH
                      </p>
                    </div>
                  </div>

                  {/* Disconnect Button */}
                  <button
                    onClick={handleDisconnectWallet}
                    className="mt-4 w-full py-3 px-6 rounded-xl font-semibold text-lg bg-red-600 hover:bg-red-700 text-white transition"
                  >
                    Disconnect Wallet
                  </button>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span>Governance</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                <Vote className="w-5 h-5" />
                <span>Vesting Dashboard</span>
              </button>
            </div>

            {/* Error Notification */}
            {showError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">Wallet connection failed</span>
                </div>
                <button
                  onClick={() => setShowError(false)}
                  className="text-red-400 hover:text-red-300"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl scale-150"></div>

              {/* Main Logo */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold text-4xl">D</span>
                    </div>
                    <h3 className="text-white font-bold text-2xl">DDRC</h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Distributed Digital
                      <br />
                      Resource Coin
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/30 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-green-500/30 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            DDRC (Distributed Digital Resource Coin) is a mission-driven digital
            currency designed to power a decentralized resource economy—where
            every contribution counts, and every user is a stakeholder.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Total Supply
            </h3>
            <p className="text-white text-2xl font-bold">1,000,000 DDRC</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Holders
            </h3>
            <p className="text-white text-2xl font-bold">2,547</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 font-semibold text-lg mb-2">
              Market Cap
            </h3>
            <p className="text-white text-2xl font-bold">$125.6M</p>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #fbbf24 1px, transparent 1px), radial-gradient(circle at 75% 75%, #f59e0b 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>
    </div>
  );
}
