import React, { useState, useEffect } from "react";
import {
  Lock,
  Unlock,
  TrendingUp,
  Clock,
  Coins,
  Calendar,
  Zap,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VestingDashboard() {
  const [mounted, setMounted] = useState(false);
  const [tokenVestingProgress, setTokenVestingProgress] = useState(0);
  const [gradualVestingProgress, setGradualVestingProgress] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setTokenVestingProgress(65);
      setGradualVestingProgress(42);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-yellow-400/30">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              DDRC Vesting Portal
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white mb-6">
            Vesting Dashboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track your token unlocks and manage your DDRC vesting schedules with
            real-time analytics
          </p>
        </div>
      </div>

      {/* Main Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 cursor-pointer">
          {/* Token Vesting Card */}
          <div onClick={() => navigate("/form")} className="group relative">
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform duration-300">
                      <Lock className="w-8 h-8 text-black" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      Token Vesting
                    </h2>
                    <p className="text-yellow-400 font-medium">
                      Standard Release Schedule
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative mb-8 h-48 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl overflow-hidden border border-yellow-400/20">
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Floating Coins Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main Coin */}
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                      <Coins className="w-12 h-12 text-black" />
                    </div>

                    {/* Orbiting Coins */}
                    <div
                      className="absolute inset-0 animate-spin"
                      style={{ animationDuration: "8s" }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400/80 rounded-full"></div>
                      <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-6 h-6 bg-orange-400/80 rounded-full"></div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400/80 rounded-full"></div>
                      <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-6 h-6 bg-orange-400/80 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Sparkles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-orange-300 rounded-full animate-ping delay-1000"></div>
              </div>

              {/* Progress Section */}
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-lg">
                    Vesting Progress
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-yellow-400">
                      {tokenVestingProgress}%
                    </span>
                    <Shield className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden border border-gray-600">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                      style={{
                        width: `${mounted ? tokenVestingProgress : 0}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700/50 hover:border-yellow-400/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <Coins className="w-4 h-4 text-yellow-400" />
                    <p className="text-gray-400 text-sm">Total Allocated</p>
                  </div>
                  <p className="text-white font-bold text-2xl">50,000</p>
                  <p className="text-yellow-400 text-sm">DDRC</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700/50 hover:border-green-400/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <Unlock className="w-4 h-4 text-green-400" />
                    <p className="text-gray-400 text-sm">Currently Unlocked</p>
                  </div>
                  <p className="text-white font-bold text-2xl">32,500</p>
                  <p className="text-green-400 text-sm">DDRC</p>
                </div>
              </div>

              {/* Timeline Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Next Unlock</span>
                  </div>
                  <span className="text-white font-bold">Oct 15, 2025</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Vesting Period</span>
                  </div>
                  <span className="text-white font-bold">24 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gradual Token Vesting Card */}
          <div onClick={() => navigate("/form")} className="group relative">
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse delay-500"></div>

            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      Gradual Token Vesting
                    </h2>
                    <p className="text-blue-400 font-medium">
                      Linear Release Model
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>LINEAR</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual - Advanced Chart */}
              <div className="relative mb-8 h-48 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-2xl overflow-hidden border border-blue-400/20">
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Chart Visualization */}
                <div className="absolute inset-0 p-6">
                  <svg className="w-full h-full" viewBox="0 0 300 150">
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                      <linearGradient
                        id="fillGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3b82f6"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                    </defs>

                    {/* Chart Line */}
                    <path
                      d="M 30 120 L 80 100 L 130 75 L 180 50 L 230 30 L 270 15"
                      stroke="url(#chartGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-pulse"
                      style={{
                        strokeDasharray: mounted ? "none" : "1000",
                        strokeDashoffset: mounted ? "0" : "1000",
                        transition: "stroke-dashoffset 2s ease-in-out",
                      }}
                    />

                    {/* Fill Area */}
                    <path
                      d="M 30 120 L 80 100 L 130 75 L 180 50 L 230 30 L 270 15 L 270 135 L 30 135 Z"
                      fill="url(#fillGradient)"
                      opacity={mounted ? "1" : "0"}
                      className="transition-opacity duration-2000 delay-500"
                    />

                    {/* Data Points */}
                    <circle
                      cx="30"
                      cy="120"
                      r="6"
                      fill="#3b82f6"
                      className="animate-pulse"
                    />
                    <circle
                      cx="80"
                      cy="100"
                      r="6"
                      fill="#8b5cf6"
                      className="animate-pulse delay-200"
                    />
                    <circle
                      cx="130"
                      cy="75"
                      r="6"
                      fill="#06b6d4"
                      className="animate-pulse delay-400"
                    />
                    <circle
                      cx="180"
                      cy="50"
                      r="6"
                      fill="#3b82f6"
                      className="animate-pulse delay-600"
                    />
                    <circle
                      cx="230"
                      cy="30"
                      r="6"
                      fill="#8b5cf6"
                      className="animate-pulse delay-800"
                    />
                    <circle
                      cx="270"
                      cy="15"
                      r="6"
                      fill="#06b6d4"
                      className="animate-pulse delay-1000"
                    />
                  </svg>
                </div>

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-400/30">
                  <p className="text-blue-400 text-xs font-semibold">
                    Daily Release
                  </p>
                  <p className="text-white font-bold">125 DDRC</p>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-lg">
                    Release Progress
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-blue-400">
                      {gradualVestingProgress}%
                    </span>
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden border border-gray-600">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
                      style={{
                        width: `${mounted ? gradualVestingProgress : 0}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <p className="text-gray-400 text-sm">Total Allocation</p>
                  </div>
                  <p className="text-white font-bold text-2xl">25,000</p>
                  <p className="text-blue-400 text-sm font-semibold">DDRC</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Unlock className="w-4 h-4 text-cyan-400" />
                    <p className="text-gray-400 text-sm">Currently Released</p>
                  </div>
                  <p className="text-white font-bold text-2xl">10,500</p>
                  <p className="text-cyan-400 text-sm font-semibold">DDRC</p>
                </div>
              </div>

              {/* Timeline Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Release Rate</span>
                  </div>
                  <span className="text-white font-bold">125 DDRC/day</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Total Duration</span>
                  </div>
                  <span className="text-white font-bold">36 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center space-x-2">
              <Unlock className="w-5 h-5" />
              <span>Claim Available Tokens</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button className="group px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>View Full Schedule</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Vesting Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coins className="w-8 h-8 text-black" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Total Vested</p>
              <p className="text-white font-bold text-xl">75,000 DDRC</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Still Locked</p>
              <p className="text-white font-bold text-xl">32,000 DDRC</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Unlock className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Available to Claim</p>
              <p className="text-white font-bold text-xl">43,000 DDRC</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-1">Next Release</p>
              <p className="text-white font-bold text-xl">14 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
