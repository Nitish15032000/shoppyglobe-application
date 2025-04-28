import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[60vh] flex flex-col sm:flex-row bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-8 sm:py-12 px-6">
        <div className="text-[#414141] max-w-lg">
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <div className="w-12 md:w-14 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <p className="font-medium text-sm md:text-base tracking-wider">OUR BESTSELLERS</p>
          </div>
          
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-3">
            Welcome to
          </h1>
          
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 p-4 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg shadow-lg text-blue-900">
            ShoppyGlobe
          </h1>
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <p className="font-semibold text-sm md:text-base tracking-wider transition-colors duration-300 group-hover:text-blue-600">
              SHOP NOW
            </p>
            <div className="w-12 md:w-14 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform transition-all duration-300 group-hover:w-16"></div>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="w-full sm:w-1/2 py-6 sm:py-12 px-6 flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-30 animate-pulse"></div>
          <img 
            src="../../hero_img.png" 
            alt="Hero" 
            className="relative rounded-lg shadow-xl w-full h-[300px] sm:h-[400px] object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;