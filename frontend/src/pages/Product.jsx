import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { productsApi } from "../slice/ProductSlice";

export const Product = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { items, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(productsApi());
  }, [dispatch]);

  const perPage = 8;

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
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold animate-pulse text-gray-700">
          Loading Products...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">
          {error}
        </h1>
      </div>
    );
  }

  const filterProducts = items.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const pagination = Math.ceil(items.length / perPage);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 py-10 px-5">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Our Products
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Discover premium quality products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >

            <div className="overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-60 object-cover transition duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm mt-3 line-clamp-3">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-6">
                <h3 className="text-2xl font-bold text-green-600">
                  ${product.price}
                </h3>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-300"
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12 flex-wrap gap-3">
        {Array.from({ length: pagination }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`w-11 h-11 rounded-full font-semibold transition duration-300 ${
              page === i + 1
                ? "bg-black text-white shadow-lg scale-110"
                : "bg-white text-gray-700 border hover:bg-black hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};