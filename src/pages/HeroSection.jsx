import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TrendingCoins from '../components/TrendingCoins';

import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [search, setSearch] = useState('');

const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${search}`)
  };

  return (
    <div className="relative pb-32 bg-[#010613]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover & Trade <span className="text-blue-500">Crypto</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Explore the world of cryptocurrencies with real-time prices and market data
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="max-w-md mx-auto relative mb-12 flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search coins..."
              className="w-full rounded-r-0 px-4 py-3 pl-12 rounded-l-lg bg-[#1A2547] text-white border border-blue-900 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <button
              type="submit"
              className="px-4 rounded-r-lg cursor-pointer bg-red-600 text-white"
            >
              Search
            </button>
          </div>
        </form>

        <TrendingCoins />
      </div>

      {/* Curved Divider at Bottom */}
      <div className="absolute bottom-[-50px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#010613"
            d="M0,160 C480,320 960,0 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
