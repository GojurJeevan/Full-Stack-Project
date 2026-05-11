import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { productsApi } from "../slice/ProductSlice";

export const Product = () => {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch((productsApi()));
  }, [dispatch]);

  const addToCart = async (product) => {
    try {
      await axios.post("http://localhost:8080/cart", {
        productId: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      });

      alert("Product Added To Cart");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <h1 className="text-3xl text-center mt-10">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-3xl text-center mt-10 text-red-500">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-52 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-4">
              {product.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {product.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <h3 className="text-2xl font-bold text-green-600">
                ${product.price}
              </h3>

              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};