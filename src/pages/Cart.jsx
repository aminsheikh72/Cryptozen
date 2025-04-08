import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-[#0F172A] text-white p-6 rounded-xl max-w-3xl mx-auto mt-6 shadow-lg border border-blue-800">
      <h2 className="text-2xl font-semibold mb-4 border-b border-blue-700 pb-2">
        Your Cart
      </h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-[#1A2547] rounded-lg border border-blue-900"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt="coin"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-400">Price: ₹{item.price}</p>
                <p className="text-sm text-gray-400">Qty: {item.qty}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="hover:text-red-600"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="mt-6 border-t border-blue-800 pt-4 flex justify-between items-center">
        <span className="text-xl font-semibold">Total: ₹{total.toLocaleString()}</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
