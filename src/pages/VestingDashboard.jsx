import React, { useState, useEffect } from 'react';

import { 
  Wallet, 
  RefreshCw, 
  ChevronRight, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Eye,
  ExternalLink
} from 'lucide-react';

const VestingDashboard = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [connectedAccount] = useState('0x0695...b89d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock vesting data
  const vestingPools = [
    {
      pool: 'Ecosystem Grants',
      contract: '0xEc0.....ECO',
      beneficiary: '-',
      total: '500,000',
      released: '125,000',
      releasableProgress: 25
    },
    {
      pool: 'Treasury & Reserves',
      contract: '0xTre.....RES',
      beneficiary: '-',
      total: '750,000',
      released: '187,500',
      releasableProgress: 25
    },
    {
      pool: 'Strategic Investors',
      contract: '0xStr.....INV',
      beneficiary: '-',
      total: '300,000',
      released: '90,000',
      releasableProgress: 30
    },
    {
      pool: 'Core Team',
      contract: '0xTeA.....TEAM',
      beneficiary: '-',
      total: '200,000',
      released: '40,000',
      releasableProgress: 20
    },
    {
      pool: 'Liquidity & MM',
      contract: '0xMMm.....MMM',
      beneficiary: '-',
      total: '150,000',
      released: '75,000',
      releasableProgress: 50
    },
    {
      pool: 'Marketing & Partnerships',
      contract: '0xMar.....MKT',
      beneficiary: '-',
      total: '100,000',
      released: '35,000',
      releasableProgress: 35
    },
    {
      pool: 'Advisors',
      contract: '0xAdv.....ADV',
      beneficiary: '-',
      total: '80,000',
      released: '16,000',
      releasableProgress: 20
    },
    {
      pool: 'Reserves & Airdrops',
      contract: '0xAir.....AIR',
      beneficiary: '-',
      total: '120,000',
      released: '24,000',
      releasableProgress: 20
    }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  const handleRelease = (poolName) => {
    console.log(`Releasing tokens for ${poolName}`);
    // Add your release logic here
  };

  const totalAllocated = vestingPools.reduce((sum, pool) => sum + parseInt(pool.total.replace(',', '')), 0);
  const totalReleased = vestingPools.reduce((sum, pool) => sum + parseInt(pool.released.replace(',', '')), 0);
  const overallProgress = Math.round((totalReleased / totalAllocated) * 100);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-2xl">D</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">DDRC Vesting Dashboard</h1>
                <p className="text-gray-400 text-lg">Transparent token distribution tracking</p>
              </div>
            </div>
            
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-6 py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          {/* Connection Status */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              {isConnected ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Connected:</span>
                  <span className="text-yellow-400 font-mono">{connectedAccount}</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-white font-semibold">Not Connected</span>
                </>
              )}
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/50 to-yellow-500/30 rounded-2xl blur opacity-60"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/30">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Total Allocated</p>
                    <p className="text-white text-2xl font-bold">{totalAllocated.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/50 to-green-500/30 rounded-2xl blur opacity-60"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-green-600/30">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Total Released</p>
                    <p className="text-white text-2xl font-bold">{totalReleased.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-blue-500/30 rounded-2xl blur opacity-60"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-600/30">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Remaining</p>
                    <p className="text-white text-2xl font-bold">{(totalAllocated - totalReleased).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 to-purple-500/30 rounded-2xl blur opacity-60"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/30">
                <div className="flex items-center space-x-3">
                  <Eye className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Overall Progress</p>
                    <p className="text-white text-2xl font-bold">{overallProgress}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vesting Table */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-sm rounded-3xl border border-yellow-600/20 overflow-hidden">
            
            {/* Table Header */}
            <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border-b border-yellow-600/30 px-8 py-6">
              <div className="grid grid-cols-8 gap-4 text-white font-bold text-lg">
                <div className="col-span-2">Pool</div>
                <div className="col-span-1">Contract</div>
                <div className="col-span-1">Beneficiary</div>
                <div className="col-span-1">Total</div>
                <div className="col-span-1">Released</div>
                <div className="col-span-1">Progress</div>
                <div className="col-span-1">Action</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-700/50">
              {vestingPools.map((pool, index) => (
                <div
                  key={index}
                  className="grid grid-cols-8 gap-4 px-8 py-6 hover:bg-yellow-600/5 transition-all duration-300 group/row"
                >
                  {/* Pool Name */}
                  <div className="col-span-2 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-600/30 to-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-sm">
                        {pool.pool.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{pool.pool}</p>
                      <p className="text-gray-400 text-sm">DDRC Allocation</p>
                    </div>
                  </div>

                  {/* Contract */}
                  <div className="col-span-1 flex items-center">
                    <div className="bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-600">
                      <p className="text-yellow-400 font-mono text-sm">{pool.contract}</p>
                    </div>
                  </div>

                  {/* Beneficiary */}
                  <div className="col-span-1 flex items-center">
                    <p className="text-gray-400">{pool.beneficiary}</p>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 flex items-center">
                    <div className="text-right">
                      <p className="text-white font-bold">{pool.total}</p>
                      <p className="text-gray-400 text-sm">DDRC</p>
                    </div>
                  </div>

                  {/* Released */}
                  <div className="col-span-1 flex items-center">
                    <div className="text-right">
                      <p className="text-green-400 font-bold">{pool.released}</p>
                      <p className="text-gray-400 text-sm">DDRC</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="col-span-1 flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">Progress</span>
                        <span className="text-yellow-400 font-bold text-sm">{pool.releasableProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full rounded-full transition-all duration-500 shadow-lg shadow-yellow-500/50"
                          style={{ width: `${pool.releasableProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="col-span-1 flex items-center">
                    <button
                      onClick={() => handleRelease(pool.pool)}
                      className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 opacity-90 group-hover/row:opacity-100"
                    >
                      <div className="flex items-center space-x-2">
                        <span>Release</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Pools</p>
                <p className="text-white text-2xl font-bold">{vestingPools.length}</p>
              </div>
              <Wallet className="w-8 h-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Network</p>
                <p className="text-white text-xl font-bold">Ethereum</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Last Updated</p>
                <p className="text-white text-xl font-bold">Just now</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestingDashboard;