


import React, { useState } from 'react';
import { Plus, Lock, Clock, FileText, Tag, ChevronRight, Sparkles, Shield, CheckCircle } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ticker: '',
    lockingTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50">
                <span className="text-black font-bold text-4xl">D</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
                <Plus className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Create Token Vesting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Design your custom token with transparent vesting schedule on the DDRC ecosystem
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-2xl mx-auto relative group">
          {/* Golden Border Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-10 border border-yellow-600/30">
            
            {/* Form Header */}
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Token Configuration</h2>
                <p className="text-gray-400">Configure your token parameters and vesting schedule</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Token Name Field */}
              <div className="relative">
                <label className="block text-white font-semibold mb-3 flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-yellow-500" />
                  <span>Token Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter token name (e.g., Distributed Digital Resource Coin)"
                    className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                      focusedField === 'name' ? 'border-yellow-500 shadow-lg shadow-yellow-500/25' : 'border-gray-600 hover:border-yellow-600/50'
                    }`}
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
                  )}
                </div>
              </div>

              {/* Description Field */}
              <div className="relative">
                <label className="block text-white font-semibold mb-3 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-yellow-500" />
                  <span>Description</span>
                </label>
                <div className="relative">
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    onFocus={() => setFocusedField('description')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Describe your token's purpose and utility in the DDRC ecosystem..."
                    rows="4"
                    className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'description' ? 'border-yellow-500 shadow-lg shadow-yellow-500/25' : 'border-gray-600 hover:border-yellow-600/50'
                    }`}
                  />
                  {focusedField === 'description' && (
                    <div className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
                  )}
                </div>
              </div>

              {/* Ticker Symbol Field */}
              <div className="relative">
                <label className="block text-white font-semibold mb-3 flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-yellow-500" />
                  <span>Ticker Symbol</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.ticker}
                    onChange={(e) => handleInputChange('ticker', e.target.value.toUpperCase())}
                    onFocus={() => setFocusedField('ticker')}
                    onBlur={() => setFocusedField('')}
                    placeholder="TOKEN"
                    maxLength="6"
                    className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none uppercase tracking-wider ${
                      focusedField === 'ticker' ? 'border-yellow-500 shadow-lg shadow-yellow-500/25' : 'border-gray-600 hover:border-yellow-600/50'
                    }`}
                  />
                  {focusedField === 'ticker' && (
                    <div className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400"></div>
                  )}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <span className="text-gray-500 text-sm">{formData.ticker.length}/6</span>
                  </div>
                </div>
              </div>

              {/* Locking Time Field */}
              <div className="relative">
                <label className="block text-white font-semibold mb-3 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span>Locking Time</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <select
                      value={formData.lockingTime}
                      onChange={(e) => handleInputChange('lockingTime', e.target.value)}
                      onFocus={() => setFocusedField('lockingTime')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none appearance-none cursor-pointer ${
                        focusedField === 'lockingTime' ? 'border-yellow-500 shadow-lg shadow-yellow-500/25' : 'border-gray-600 hover:border-yellow-600/50'
                      }`}
                    >
                      <option value="" className="bg-gray-900">Select Duration</option>
                      <option value="3" className="bg-gray-900">3 Months</option>
                      <option value="6" className="bg-gray-900">6 Months</option>
                      <option value="12" className="bg-gray-900">12 Months</option>
                      <option value="24" className="bg-gray-900">24 Months</option>
                      <option value="36" className="bg-gray-900">36 Months</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  
                  {formData.lockingTime && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <div>
                        <div className="text-green-400 font-semibold">{formData.lockingTime} Month Lock</div>
                        <div className="text-gray-400 text-sm">Gradual release schedule</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Preview Section */}
              {(formData.name || formData.ticker) && (
                <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/5 border border-yellow-600/30 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span>Token Preview</span>
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-xl">
                        {formData.ticker ? formData.ticker.charAt(0) : 'T'}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        {formData.name || 'Token Name'}
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        {formData.ticker || 'TICKER'}
                      </div>
                      {formData.lockingTime && (
                        <div className="text-gray-400 text-sm">
                          {formData.lockingTime} month vesting period
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full relative overflow-hidden rounded-2xl py-6 font-bold text-lg transition-all duration-500 transform ${
                    isSubmitted 
                      ? 'bg-green-600 text-white scale-[1.02]' 
                      : 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.02] shadow-lg shadow-yellow-500/30'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Token Created Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe & Create Token</span>
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </form>

           
          </div>
        </div>

        {/* Bottom Stats Section */}
        
      </div>
    </div>
  );
};

export default Form;