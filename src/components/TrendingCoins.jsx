import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingCoins } from '../features/coin/coinSlice';
import { TrendingUp } from 'lucide-react';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

const TrendingCoins = () => {
    const {trendingCoins,isLoading,isSuccess,isError,message}= useSelector(state=> state.coin)
    const dispatch = useDispatch()
    const {query}= useParams()
    useEffect(()=>{
 dispatch(getTrendingCoins())
    },[dispatch])
        

    
    useEffect(()=>{
if(isError && message){
    toast.error(message,{
        position : "top-center"
    })
}
    },[isError,message])
    if(isLoading){
        return <h1 className=' text-5xl text-gray-600 text-center mt-30'>Loading</h1>
    }
  return (
    <div className="mt-12">
    <div className="flex items-center justify-center gap-2 mb-6">
      <TrendingUp className="h-6 w-6 text-blue-500" />
      <h3 className="text-xl font-semibold text-white">Trending Coins</h3>
    </div>
    <div className="flex flex-wrap justify-center gap-3">
    {Array.isArray(trendingCoins) && trendingCoins.map((coin) => (
  <span
    key={coin.id}
    className="px-4 py-2 bg-[#1A2547] text-blue-400 rounded-full text-sm hover:bg-blue-900 transition-colors cursor-pointer"
  >
    <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
  </span>
))}

    </div>
  </div>
  )
}

export default TrendingCoins
