import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CryptoLoader from './../components/CryptoLoader';
import { TrendingUp } from 'lucide-react';
import { searchCoin } from '../features/coin/coinSlice';

const searchCoinList = () => {
    const {coins,isError,isSucces,isLoading,message}= useSelector(state=> state.coin)
    const dispatch = useDispatch()
    const {query}= useParams()
    useEffect(()=>{
dispatch(searchCoin(query))
    },[query])
    if(isError && message){
      toast.error(message,{
        position : "top-center"
      })
    }
    if(isLoading){
      return <CryptoLoader/>
    }
   
  return (
    <section className="relative bg-[#010613] py-16">
    {/* Top Wave Divider */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
      <svg
        className="relative block w-full h-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#010613"
          d="M0,160 C480,0 960,320 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>

    {/* Section Title */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <TrendingUp className="text-blue-500 w-8 h-8 mx-auto mb-2" />
        <h2 className="text-3xl font-bold text-white">Search Results</h2>
        <p className="text-gray-400 mt-2">Coins matching your query</p>
      </div>

      {/* Coin Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coins?.coins?.map((coin) => (
          <div
            key={coin.id}
            className="bg-[#1A2547] p-6 rounded-xl text-white shadow-gray-600 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-blue-600"
          >
            <img
              src={coin.large}
              alt={coin.name}
              className="h-12 w-12 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{coin.name}</h3>
            <p className="text-gray-400 text-sm uppercase">Symbol: {coin.symbol}</p>
            <p className="text-blue-400 mt-1">
              Market Cap Rank:{" "}
              {coin.market_cap_rank !== null ? `#${coin.market_cap_rank}` : "N/A"}
            </p>

            <Link
              to={`/coin/${coin.id}`}
              className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-[90%] mx-auto"
            >
              View More Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default searchCoinList
