import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCoin } from "../features/coin/coinSlice";
import { toast } from "react-toastify";
import CryptoLoader from "../components/CryptoLoader";
import { addToCart } from "../features/cart/cartSlice"; // import kiya

const CoinDetails = () => {
  const { coin, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.coin
  );
  const {user}= useSelector(state=> state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCoin(id));
  }, [id]);

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: "top-center",
      });
    }
  }, [isError, message]);

  if (isLoading) {
    return <CryptoLoader />;
  }

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center">
      <div className="md:w-1/2 lg:w-1/2 w-[90%] p-6 bg-gray-800 rounded-2xl shadow-xl my-10  text-white">
        <div className="flex items-center gap-4 mb-6">
          <img src={coin?.image?.large} alt="img" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-bold">{coin.name}</h1>
            <p className="text-gray-400 uppercase text-sm">{coin.symbol}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-400">Current Price</p>
            <p className="text-lg font-medium">
              ₹ {coin?.market_data?.current_price?.inr}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Market Cap Rank</p>
            <p className="text-lg font-medium"># {coin.market_cap_rank || `N/A`}</p>
          </div>
          <div>
            <p className="text-gray-400">24h High</p>
            <p className="text-lg font-medium">
              ₹ {coin?.market_data?.high_24h?.inr || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-400">24h Low</p>
            <p className="text-lg font-medium">
              ₹ {coin?.market_data?.low_24h?.inr || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Total Volume</p>
            <p className="text-lg font-medium">
              ₹ {coin?.market_data?.total_volume?.inr || "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-h-60 overflow-y-auto">
            {coin.description?.en ||
              `No description available.`}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 shadow-md hover:shadow-lg"
            onClick={() => {
              const item = {
                id: coin.id,
                name: coin.name,
                price: coin?.market_data?.current_price?.inr,
                image: coin?.image?.large,
              };
              if(user){
                dispatch(addToCart(item));
                toast.success(`${coin.name} added to cart`, {
                position: "top-center",
              });
              }
              else{
                navigate('/login')
              }
             
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
