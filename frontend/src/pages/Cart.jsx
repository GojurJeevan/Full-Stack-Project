import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../slice/CartSlice";
import axios from "axios";

export const Cart = () => {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(cartData());
  }, [dispatch]);

  const increaseQty = async (item) => {
    try {
      await axios.put(
        `http://localhost:8080/cart/${item.id}`,
        {
          ...item,
          quantity: item.quantity + 1,
        }
      );

      dispatch(cartData());
    } catch (err) {
      console.log(err);
    }
  };

  const decreaseQty = async (item) => {
    try {

      if (item.quantity === 1) {
        await axios.delete(
          `http://localhost:8080/cart/${item.id}`
        );
      } else {
        await axios.put(
          `http://localhost:8080/cart/${item.id}`,
          {
            ...item,
            quantity: item.quantity - 1,
          }
        );
      }

      dispatch(cartData());
    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl text-red-500 font-bold">
          {error}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Shopping Cart
        </h1>

        <div className="bg-white shadow-lg rounded-2xl px-6 py-4 mt-5 md:mt-0">
          <h2 className="text-lg text-gray-500">
            Total Amount
          </h2>

          <p className="text-3xl font-bold text-green-600">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-4xl font-bold text-gray-500">
            Your Cart is Empty
          </h1>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">
                  {item.title}
                </h2>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-3xl font-bold text-green-600">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="w-10 h-10 rounded-full bg-red-500 text-white text-2xl hover:bg-red-600"
                    >
                      -
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item)}
                      className="w-10 h-10 rounded-full bg-green-500 text-white text-2xl hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                  Checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};