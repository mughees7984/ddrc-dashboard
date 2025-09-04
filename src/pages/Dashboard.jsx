import React, { useState } from "react";
import {
  Wallet,
  AlertCircle,
  BarChart3,
  Vote,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  Globe,
  X,
  Menu,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";
import { ethers } from "ethers";

export default function Dashboard() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Network configurations
  const networks = {
    ethereum: {
      name: "Ethereum Mainnet",
      chainId: "0x1",
      rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
      currency: "ETH",
      explorerUrl: "https://etherscan.io",
      icon: "🔷",
      description: "Production network with real ETH",
    },
    sepolia: {
      name: "Sepolia Testnet",
      chainId: "0xaa36a7",
      rpcUrl: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
      currency: "SepoliaETH",
      explorerUrl: "https://sepolia.etherscan.io",
      icon: "🧪",
      description: "Test network for development",
    },
  };

  // Switch or add network to MetaMask
  const switchOrAddNetwork = async (networkKey) => {
    const networkConfig = networks[networkKey];

    try {
      // Try to switch to the network
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: networkConfig.chainId }],
      });
    } catch (switchError) {
      // If network doesn't exist, add it (mainly for testnets)
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: networkConfig.chainId,
                chainName: networkConfig.name,
                rpcUrls: [networkConfig.rpcUrl],
                nativeCurrency: {
                  name: networkConfig.currency,
                  symbol: networkConfig.currency,
                  decimals: 18,
                },
                blockExplorerUrls: [networkConfig.explorerUrl],
              },
            ],
          });
        } catch (addError) {
          throw addError;
        }
      } else {
        throw switchError;
      }
    }
  };

  // Connect wallet with selected network
  const handleNetworkSelection = async (networkKey) => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    setSelectedNetwork(networkKey);
    setIsConnecting(true);

    try {
      // Switch to selected network first
      await switchOrAddNetwork(networkKey);

      const provider = new ethers.BrowserProvider(window.ethereum);

      // Request accounts
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
      setShowNetworkModal(false);
    } catch (err) {
      console.error("Wallet connection error:", err);
      setShowError(true);
    } finally {
      setIsConnecting(false);
      setSelectedNetwork(null);
    }
  };

  // Show network selection modal
  const handleConnectWallet = () => {
    setShowNetworkModal(true);
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

  // Get current network info
  const getCurrentNetworkInfo = () => {
    if (!network) return null;

    const chainId = `0x${network.chainId.toString(16)}`;
    if (chainId === networks.ethereum.chainId) return networks.ethereum;
    if (chainId === networks.sepolia.chainId) return networks.sepolia;
    return { name: network.name, chainId, currency: "ETH", icon: "⚡" };
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Mobile Header */}

      {/* Network Selection Modal */}
      {showNetworkModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur opacity-50"></div>

            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-6 sm:p-8 border border-yellow-600/30">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Select Network
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Choose your preferred blockchain
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowNetworkModal(false)}
                  className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>
              </div>

              {/* Network Options */}
              <div className="space-y-4">
                {Object.entries(networks).map(([key, networkInfo]) => (
                  <div
                    key={key}
                    onClick={() => handleNetworkSelection(key)}
                    className={`group relative cursor-pointer transition-all duration-300 ${
                      selectedNetwork === key && isConnecting
                        ? "pointer-events-none"
                        : ""
                    }`}
                  >
                    {/* Network Card Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/0 via-yellow-500/0 to-yellow-600/0 group-hover:from-yellow-600/50 group-hover:via-yellow-500/30 group-hover:to-yellow-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative bg-gray-800/50 border border-gray-600 group-hover:border-yellow-500/50 rounded-2xl p-4 sm:p-6 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                          <div className="text-2xl sm:text-3xl flex-shrink-0">
                            {networkInfo.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-white font-bold text-base sm:text-lg truncate">
                              {networkInfo.name}
                            </h4>
                            <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                              {networkInfo.description}
                            </p>
                            <p className="text-yellow-400 text-xs font-mono mt-1">
                              Currency: {networkInfo.currency}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center flex-shrink-0 ml-2">
                          {selectedNetwork === key && isConnecting ? (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Make sure MetaMask is installed and unlocked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Dashboard */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Hero Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                DDRC Dashboard
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Empowering access, rewards, and governance through a{" "}
                <span className="text-yellow-400 font-semibold">
                  transparent, utility-first token
                </span>{" "}
                on Ethereum
              </p>
            </div>

            {/* Connect Wallet Section */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-yellow-600/20">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Wallet Connection
                  </h2>
                  <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                </div>

                {!isConnected ? (
                  <button
                    onClick={handleConnectWallet}
                    className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
                               bg-gradient-to-r from-yellow-600 to-yellow-500 text-black 
                               hover:from-yellow-500 hover:to-yellow-400 shadow-lg shadow-yellow-500/30
                               touch-manipulation"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Connect Wallet</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </button>
                ) : (
                  <>
                    <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="text-green-400 font-semibold text-sm sm:text-base">
                            Wallet Connected
                          </div>
                          {getCurrentNetworkInfo() && (
                            <div className="text-gray-300 text-xs sm:text-sm flex items-center space-x-2 mt-1">
                              <span>{getCurrentNetworkInfo().icon}</span>
                              <span className="truncate">
                                {getCurrentNetworkInfo().name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Account Info */}
                    <div className="space-y-3 mb-4 sm:mb-6">
                      <div className="bg-black/40 rounded-xl p-3 sm:p-4 border border-yellow-600/10">
                        <p className="text-gray-400 text-xs sm:text-sm mb-1">
                          Account:
                        </p>
                        <p className="text-white font-mono text-xs sm:text-sm break-all">
                          <span className="sm:hidden">
                            {formatAddress(account)}
                          </span>
                          <span className="hidden sm:inline">{account}</span>
                        </p>
                      </div>
                      <div className="bg-black/40 rounded-xl p-3 sm:p-4 border border-yellow-600/10">
                        <p className="text-gray-400 text-xs sm:text-sm mb-1">
                          Balance:
                        </p>
                        <p className="text-white font-bold text-lg sm:text-xl">
                          {parseFloat(balance).toFixed(4)}{" "}
                          {getCurrentNetworkInfo()?.currency || "ETH"}
                        </p>
                      </div>
                    </div>

                    {/* Disconnect Button */}
                    <button
                      onClick={handleDisconnectWallet}
                      className="w-full py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-lg bg-red-600/80 hover:bg-red-600 text-white transition-all duration-300 touch-manipulation active:scale-[0.98]"
                    >
                      Disconnect Wallet
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons - Hidden on mobile (shown in mobile menu) */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02]">
                <BarChart3 className="w-5 h-5" />
                <span>Analytics</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02]">
                <Vote className="w-5 h-5" />
                <span>Governance</span>
              </button>
            </div>

            {/* Error Notification */}
            {showError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-300 text-sm sm:text-base">
                    Wallet connection failed. Please try again.
                  </span>
                </div>
                <button
                  onClick={() => setShowError(false)}
                  className="text-red-400 hover:text-red-300 text-xl font-bold ml-2 flex-shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Hero Image */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-full blur-2xl sm:blur-3xl scale-150"></div>

              {/* Main Logo - Responsive sizes */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/40">
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl">
                        D
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl sm:text-2xl">
                      DDRC
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 leading-tight">
                      Distributed Digital
                      <br />
                      Resource Coin
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Responsive positions */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-500/30 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 bg-green-500/30 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-12 sm:mt-16 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed px-4 sm:px-0">
            DDRC (Distributed Digital Resource Coin) is a mission-driven digital
            currency designed to power a decentralized resource economy—where
            every contribution counts, and every user is a stakeholder.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/0 to-yellow-500/0 group-hover:from-yellow-600/50 group-hover:to-yellow-500/30 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 group-hover:border-yellow-600/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-yellow-400 font-semibold text-base sm:text-lg">
                  Total Supply
                </h3>
                <TrendingUp className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-xl sm:text-2xl font-bold">
                1,000,000 DDRC
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/0 to-yellow-500/0 group-hover:from-yellow-600/50 group-hover:to-yellow-500/30 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 group-hover:border-yellow-600/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-yellow-400 font-semibold text-base sm:text-lg">
                  Holders
                </h3>
                <Users className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-xl sm:text-2xl font-bold">2,547</p>
            </div>
          </div>

          <div className="relative group sm:col-span-2 lg:col-span-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/0 to-yellow-500/0 group-hover:from-yellow-600/50 group-hover:to-yellow-500/30 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 group-hover:border-yellow-600/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-yellow-400 font-semibold text-base sm:text-lg">
                  Market Cap
                </h3>
                <DollarSign className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-xl sm:text-2xl font-bold">
                $125.6M
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform active:scale-[0.98] touch-manipulation">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform active:scale-[0.98] touch-manipulation">
            <Vote className="w-5 h-5" />
            <span>Governance</span>
          </button>
        </div>
      </div>
    </div>
  );
}
