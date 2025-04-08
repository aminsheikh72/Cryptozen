import { Coins, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/AuthSlice';

const Navbar = () => {
  const {user}= useSelector(state=> state.auth)
  const {cart} =useSelector(state=> state.cart)
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const handleRemove=()=>{
    dispatch(logOut())
    navigate('/')
  }
  return (
    <nav className="bg-[#020B2D] border-b border-blue-900 z-40 relative top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2 sm:py-0 gap-3 sm:gap-0">
          
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
            <Link to='/' className="text-2xl font-bold text-white flex items-center gap-2">
              <Coins className="h-8 w-8 text-blue-500" />
              Cryptozen
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
            <Link to='/allcoins' className="text-gray-300 hover:text-white px-3 py-2 whitespace-nowrap">
              All Coins
            </Link>

         

          {
            user ? (
              <>
              <Link to='/cart' className="text-gray-300 hover:text-white p-2 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
              <button onClick={handleRemove} 
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 whitespace-nowrap"
            >
              Logout
            </button>
              </>
            ) : (
              <>
              <Link 
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap"
            >
              Login
            </Link>

            <Link 
              to="/register"
              className="bg-transparent border border-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 whitespace-nowrap"
            >
              Register
            </Link>
              </>
            )
          }
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
