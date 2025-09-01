// import React, { useState, useEffect } from 'react';
// import { User, FileText, Tag, Clock, Send, Shield, Sparkles, CheckCircle } from 'lucide-react';

// const VestingForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     ticker: '',
//     lockingTime: ''
//   });
//   const [isAnimated, setIsAnimated] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsAnimated(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
    
//     // Reset form after success
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', description: '', ticker: '', lockingTime: '' });
//     }, 3000);
//   };

//   const inputFields = [
//     {
//       name: 'name',
//       label: 'Token Name',
//       placeholder: 'Enter your token name...',
//       icon: User,
//       type: 'text'
//     },
//     {
//       name: 'description',
//       label: 'Description',
//       placeholder: 'Describe your token purpose and utility...',
//       icon: FileText,
//       type: 'textarea'
//     },
//     {
//       name: 'ticker',
//       label: 'Token Ticker',
//       placeholder: 'e.g., DDRC, BTC, ETH...',
//       icon: Tag,
//       type: 'text'
//     },
//     {
//       name: 'lockingTime',
//       label: 'Locking Time',
//       placeholder: 'Select vesting duration...',
//       icon: Clock,
//       type: 'select',
//       options: [
//         { value: '', label: 'Select Duration' },
//         { value: '3', label: '3 Months' },
//         { value: '6', label: '6 Months' },
//         { value: '12', label: '12 Months' },
//         { value: '24', label: '24 Months' },
//         { value: '36', label: '36 Months' }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-6 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/4 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-600/2 rounded-full blur-3xl animate-pulse delay-500"></div>
        
//         {/* Floating Particles */}
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3000}ms`,
//               animationDuration: `${2000 + Math.random() * 2000}ms`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto">
//         {/* Enhanced Header */}
//         <div 
//           className="text-center mb-16"
//           style={{
//             transform: isAnimated ? 'translateY(0)' : 'translateY(-30px)',
//             opacity: isAnimated ? 1 : 0,
//             transition: 'all 800ms ease-out'
//           }}
//         >
//           <div className="inline-flex items-center gap-4 mb-8">
//             <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl">
//               <Shield className="w-8 h-8 text-black" />
//             </div>
//             <div className="text-left">
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
//                 Create Vesting
//               </h1>
//               <p className="text-yellow-400/80 font-medium">Secure Token Distribution</p>
//             </div>
//           </div>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Set up your token vesting schedule with enterprise-grade security and transparency. 
//             Design your distribution strategy with our advanced vesting protocols.
//           </p>
//         </div>

//         {/* Premium Form Container */}
//         <div 
//           className="relative group"
//           style={{
//             transform: isAnimated ? 'translateY(0)' : 'translateY(50px)',
//             opacity: isAnimated ? 1 : 0,
//             transition: 'all 1000ms ease-out 200ms'
//           }}
//         >
//           {/* Form Glow Effect */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
          
//           <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-3xl border border-yellow-500/30 overflow-hidden">
//             {/* Form Header */}
//             <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 p-8">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               <div className="relative z-10 flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
//                     <Sparkles className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">Token Vesting Setup</h2>
//                     <p className="text-white/80">Configure your distribution parameters</p>
//                   </div>
//                 </div>
//                 <div className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
//                   Step 1 of 2
//                 </div>
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-8 space-y-8">
//               {inputFields.map((field, index) => (
//                 <div 
//                   key={field.name}
//                   className="relative"
//                   style={{
//                     transform: isAnimated ? 'translateX(0)' : 'translateX(-30px)',
//                     opacity: isAnimated ? 1 : 0,
//                     transition: `all 600ms ease-out ${300 + index * 150}ms`
//                   }}
//                 >
//                   <label className="block text-gray-300 font-semibold text-lg mb-3 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
//                       focusedField === field.name 
//                         ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg' 
//                         : 'bg-gray-700/50'
//                     }`}>
//                       <field.icon className={`w-4 h-4 ${
//                         focusedField === field.name ? 'text-black' : 'text-gray-300'
//                       }`} />
//                     </div>
//                     {field.label}
//                   </label>
                  
//                   <div className="relative group">
//                     {/* Input Glow Effect */}
//                     <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300 ${
//                       focusedField === field.name ? 'opacity-30' : ''
//                     }`}></div>
                    
//                     {field.type === 'textarea' ? (
//                       <textarea
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedField(field.name)}
//                         onBlur={() => setFocusedField(null)}
//                         placeholder={field.placeholder}
//                         rows={4}
//                         className="relative w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/60 focus:bg-gray-800/70 transition-all duration-300 resize-none text-lg"
//                       />
//                     ) : field.type === 'select' ? (
//                       <select
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedField(field.name)}
//                         onBlur={() => setFocusedField(null)}
//                         className="relative w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-yellow-400/60 focus:bg-gray-800/70 transition-all duration-300 text-lg appearance-none cursor-pointer"
//                       >
//                         {field.options.map(option => (
//                           <option key={option.value} value={option.value} className="bg-gray-800 text-white">
//                             {option.label}
//                           </option>
//                         ))}
//                       </select>
//                     ) : (
//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedField(field.name)}
//                         onBlur={() => setFocusedField(null)}
//                         placeholder={field.placeholder}
//                         className="relative w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/60 focus:bg-gray-800/70 transition-all duration-300 text-lg"
//                       />
//                     )}
                    
//                     {/* Input Enhancement Effects */}
//                     {focusedField === field.name && (
//                       <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30 pointer-events-none animate-pulse"></div>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               {/* Enhanced Submit Button */}
//               <div 
//                 className="pt-6"
//                 style={{
//                   transform: isAnimated ? 'translateY(0)' : 'translateY(30px)',
//                   opacity: isAnimated ? 1 : 0,
//                   transition: 'all 800ms ease-out 1000ms'
//                 }}
//               >
//                 <button
//                   type="submit"
//                   disabled={isSubmitting || isSubmitted}
//                   className="relative w-full group overflow-hidden rounded-2xl"
//                 >
//                   {/* Button Background Layers */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400"></div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   {/* Animated Shine Effect */}
//                   <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                  
//                   <div className="relative flex items-center justify-center gap-4 py-6 px-8 group-hover:transform group-hover:scale-105 transition-all duration-200">
//                     {isSubmitted ? (
//                       <>
//                         <CheckCircle className="w-6 h-6 text-black animate-bounce" />
//                         <span className="text-xl font-bold text-black">Successfully Created!</span>
//                       </>
//                     ) : isSubmitting ? (
//                       <>
//                         <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
//                         <span className="text-xl font-bold text-black">Processing...</span>
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-200" />
//                         <span className="text-xl font-bold text-black">Create Vesting Schedule</span>
//                       </>
//                     )}
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* Form Footer */}
//             <div className="px-8 pb-8">
//               <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Shield className="w-5 h-5 text-yellow-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold mb-2">Security Notice</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">
//                       Your vesting schedule will be deployed on Ethereum with immutable smart contracts. 
//                       All parameters are final once confirmed. Please review carefully before submission.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Benefits Section */}
//         <div 
//           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
//           style={{
//             transform: isAnimated ? 'translateY(0)' : 'translateY(50px)',
//             opacity: isAnimated ? 1 : 0,
//             transition: 'all 1000ms ease-out 1200ms'
//           }}
//         >
//           {[
//             {
//               icon: Shield,
//               title: 'Secure Vesting',
//               description: 'Military-grade security with audited smart contracts',
//               color: 'from-green-500 to-green-400'
//             },
//             {
//               icon: Clock,
//               title: 'Flexible Timing',
//               description: 'Customizable cliff periods and release schedules',
//               color: 'from-blue-500 to-blue-400'
//             },
//             {
//               icon: Sparkles,
//               title: 'Full Transparency',
//               description: 'Real-time tracking and immutable blockchain records',
//               color: 'from-purple-500 to-purple-400'
//             }
//           ].map((benefit, index) => (
//             <div 
//               key={index}
//               className="relative group"
//               style={{
//                 transform: isAnimated ? 'translateY(0)' : 'translateY(30px)',
//                 opacity: isAnimated ? 1 : 0,
//                 transition: `all 700ms ease-out ${1400 + index * 200}ms`
//               }}
//             >
//               <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
//               <div className="relative bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 text-center group-hover:border-gray-600/70 transition-all duration-300 h-full">
//                 <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                   <benefit.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div 
//           className="mt-16 text-center"
//           style={{
//             transform: isAnimated ? 'translateY(0)' : 'translateY(30px)',
//             opacity: isAnimated ? 1 : 0,
//             transition: 'all 800ms ease-out 1800ms'
//           }}
//         >
//           <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
//             <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//             <span className="text-yellow-400 font-medium">Powered by Ethereum Smart Contracts</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VestingForm;


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