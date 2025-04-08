import { TrendingUp } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../features/coin/coinSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CryptoLoader from "../components/CryptoLoader";

const AllCoins = () => {
  const { coins, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.coin
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: "top-center",
      });
    }
  }, [isError, message]);

  if (isLoading) {
    return (
    <CryptoLoader/>
    );
  }

  return (
    <section className="relative bg-[#010613] py-16">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <TrendingUp className="text-blue-500 w-8 h-8 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-white">Top Trending Coins</h2>
          <p className="text-gray-400 mt-2">
            Check out what's hot in the crypto market right now!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coins?.coins && coins.coins.length > 0 ? (
  coins.coins.map((coin) => (
    <div
      key={coin?.item?.id}
      className="bg-[#1A2547] p-6 rounded-xl text-white shadow-gray-600 shadow-md
                 transform transition duration-300 
                 hover:scale-105 
                 hover:shadow-blue-600"
    >
      <img
        src={coin?.item?.large}
        alt={coin?.item?.name}
        className="h-12 w-12 object-contain mb-4"
      />
      <h3 className="text-xl font-semibold">{coin?.item?.name}</h3>
      <p className="text-blue-400 mt-1">
        Price: {coin?.item?.data?.price}
      </p>
      <p
        className={`mt-1 ${
          coin?.item?.data?.price_change_percentage_24h?.inr > 0
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        24h Change: {coin?.item?.data?.price_change_percentage_24h?.inr}%
      </p>

      <Link
        to={`/coin/${coin?.item?.id}`}
        className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-[90%] mx-auto"
      >
        View More Details
      </Link>
    </div>
  ))
) : (
  <p className="text-white text-center col-span-3">No trending coins available.</p>
)}


        </div>
      </div>
    </section>
  );
};

export default AllCoins;
