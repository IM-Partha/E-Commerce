import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'; import { decrement, increment, remove } from '../Redux/CartSlice';
import { useNavigate } from "react-router-dom"; // <-- add this

const Cart = () => {
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // <-- hook for navigation

  const TotalQty = items.reduce((totalq, item) => totalq + item.qty, 0);
  const TotalPrice = items.reduce((TotalP, item) => TotalP + item.qty * item.price, 0);

  return (
    <div className="flex flex-col md:flex-row md:items-start px-4 py-6 md:px-10">
      {/* Cart Items */}
      <div className="flex-1 space-y-4">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border rounded-lg shadow-sm bg-white"
            >
              <img
                className="h-24 w-24 md:h-28 md:w-28 object-contain"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col md:flex-1 justify-between w-full">
                <div>
                  <h2 className="font-semibold text-gray-800">{item.title.slice(0, 20)}</h2>
                  <h2 className="text-gray-600">${item.price}</h2>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(decrement(item))}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <AiOutlineMinus className="text-xl" />
                    </button>
                    <span className="mx-2 text-lg md:text-xl">{item.qty}</span>
                    <button
                      onClick={() => dispatch(increment(item))}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <AiOutlinePlus className="text-xl" />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(remove(item))}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center text-lg text-gray-500">Your cart is empty</h2>
        )}
      </div>

      {/* Checkout Summary */}
      {items.length > 0 && (
        <div className="w-full md:w-80 md:ml-6 mt-6 md:mt-0 p-5 border rounded-lg shadow-md bg-white self-start">
          <h2 className="text-lg font-semibold">QTY: {TotalQty}</h2>
          <h2 className="text-lg font-semibold">Total: ${TotalPrice.toFixed(2)}</h2>
          <button
            onClick={() => navigate("/loading")} // 👈 navigate to loading page
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
