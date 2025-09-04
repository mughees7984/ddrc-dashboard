import React, { useState } from 'react';
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

  const vestingPools = [
    { pool: 'Ecosystem Grants', contract: '0xEc0.....ECO', beneficiary: '-', total: '500,000', released: '125,000', releasableProgress: 25 },
    { pool: 'Treasury & Reserves', contract: '0xTre.....RES', beneficiary: '-', total: '750,000', released: '187,500', releasableProgress: 25 },
    { pool: 'Strategic Investors', contract: '0xStr.....INV', beneficiary: '-', total: '300,000', released: '90,000', releasableProgress: 30 },
    { pool: 'Core Team', contract: '0xTeA.....TEAM', beneficiary: '-', total: '200,000', released: '40,000', releasableProgress: 20 },
    { pool: 'Liquidity & MM', contract: '0xMMm.....MMM', beneficiary: '-', total: '150,000', released: '75,000', releasableProgress: 50 },
    { pool: 'Marketing & Partnerships', contract: '0xMar.....MKT', beneficiary: '-', total: '100,000', released: '35,000', releasableProgress: 35 },
    { pool: 'Advisors', contract: '0xAdv.....ADV', beneficiary: '-', total: '80,000', released: '16,000', releasableProgress: 20 },
    { pool: 'Reserves & Airdrops', contract: '0xAir.....AIR', beneficiary: '-', total: '120,000', released: '24,000', releasableProgress: 20 }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const handleRelease = (poolName) => {
    console.log(`Releasing tokens for ${poolName}`);
  };

  const totalAllocated = vestingPools.reduce((sum, pool) => sum + parseInt(pool.total.replace(',', '')), 0);
  const totalReleased = vestingPools.reduce((sum, pool) => sum + parseInt(pool.released.replace(',', '')), 0);
  const overallProgress = Math.round((totalReleased / totalAllocated) * 100);

  return (
    <div className="min-h-screen bg-black pt-5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        
        {/* Header */}
        <div className="mb-6 sm:mb-4 ">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg sm:text-xl lg:text-2xl">D</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-tight">DDRC Vesting Dashboard</h1>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-lg">Transparent token distribution tracking</p>
              </div>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="hidden sm:flex items-center justify-center space-x-1 sm:space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-2 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-md sm:rounded-lg lg:rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 text-xs sm:text-sm lg:text-base"
            >
              <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden xs:inline sm:inline">Refresh</span>
            </button>
          </div>

          {/* Connection Status */}
          <div className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base">
            {isConnected ? (
              <>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <span className="text-white font-semibold">Connected:</span>
                <span className="text-yellow-400 font-mono truncate">{connectedAccount}</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                <span className="text-white font-semibold">Not Connected</span>
              </>
            )}
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            {/* Card 1 */}
            <div className="relative bg-gray-900/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-yellow-600/30">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-500" />
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Total Allocated</p>
                  <p className="text-white text-sm sm:text-lg lg:text-2xl font-bold">{totalAllocated.toLocaleString()}</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative bg-gray-900/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-green-600/30">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-500" />
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Total Released</p>
                  <p className="text-white text-sm sm:text-lg lg:text-2xl font-bold">{totalReleased.toLocaleString()}</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative bg-gray-900/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-blue-600/30">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-500" />
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Remaining</p>
                  <p className="text-white text-sm sm:text-lg lg:text-2xl font-bold">{(totalAllocated - totalReleased).toLocaleString()}</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative bg-gray-900/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-purple-600/30">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-500" />
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm truncate">Overall Progress</p>
                  <p className="text-white text-sm sm:text-lg lg:text-2xl font-bold">{overallProgress}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden lg:block overflow-x-auto mb-8">
          <div className="min-w-[800px] bg-gray-900/95 rounded-3xl border border-yellow-600/20 overflow-hidden">
            {/* Table Header */}
            <div className="bg-yellow-600/10 border-b border-yellow-600/30 px-8 py-6">
              <div className="grid grid-cols-8 gap-4 text-white font-bold text-lg">
                <div className="col-span-2">Pool</div>
                <div>Contract</div>
                <div>Beneficiary</div>
                <div>Total</div>
                <div>Released</div>
                <div>Progress</div>
                <div>Action</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-700/50">
              {vestingPools.map((pool, i) => (
                <div key={i} className="grid grid-cols-8 gap-4 px-8 py-6 text-base hover:bg-yellow-600/5">
                  <div className="col-span-2 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-sm">
                        {pool.pool.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{pool.pool}</p>
                      <p className="text-gray-400 text-sm">DDRC Allocation</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-yellow-400 font-mono text-sm">{pool.contract}</p>
                  </div>
                  <div className="flex items-center text-gray-400">{pool.beneficiary}</div>
                  <div className="text-right">
                    <p className="text-white font-bold">{pool.total}</p>
                    <p className="text-gray-400 text-sm">DDRC</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{pool.released}</p>
                    <p className="text-gray-400 text-sm">DDRC</p>
                  </div>
                  <div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-yellow-500 h-full rounded-full"
                        style={{ width: `${pool.releasableProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-yellow-400 text-sm mt-1">{pool.releasableProgress}%</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleRelease(pool.pool)}
                      className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-sm font-semibold px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all"
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

        {/* Mobile Card View - Shown on mobile and tablet */}
        <div className="lg:hidden space-y-4 mb-8">
          {vestingPools.map((pool, i) => (
            <div key={i} className="bg-gray-900/95 rounded-2xl border border-yellow-600/20 p-4 sm:p-6">
              {/* Pool Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-sm">
                      {pool.pool.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm sm:text-base leading-tight">{pool.pool}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">DDRC Allocation</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRelease(pool.pool)}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all flex-shrink-0"
                >
                  Release
                </button>
              </div>

              {/* Contract Address */}
              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                <p className="text-gray-400 text-xs mb-1">Contract Address</p>
                <div className="flex items-center space-x-2">
                  <p className="text-yellow-400 font-mono text-xs sm:text-sm flex-1 truncate">{pool.contract}</p>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Total Allocated</p>
                  <p className="text-white font-bold text-sm sm:text-base">{pool.total} DDRC</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Released</p>
                  <p className="text-green-400 font-bold text-sm sm:text-base">{pool.released} DDRC</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-400 text-xs">Progress</p>
                  <p className="text-yellow-400 text-xs font-semibold">{pool.releasableProgress}%</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${pool.releasableProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Active Pools</p>
                <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold">{vestingPools.length}</p>
              </div>
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Network</p>
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold">Ethereum</p>
              </div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="bg-gray-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-600/20 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Last Updated</p>
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold">Just now</p>
              </div>
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestingDashboard;