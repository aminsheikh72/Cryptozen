import React from "react";

const CryptoLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-white">
      {/* Spinning Coin */}
      <div className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4 shadow-lg"></div>
      
      {/* Text */}
      <h1 className="text-xl font-semibold tracking-widest text-yellow-300 animate-pulse">
        Loading Coins...
      </h1>
    </div>
  );
};

export default CryptoLoader;
