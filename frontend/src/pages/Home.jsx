import { Link } from "react-router-dom";
import { ShoppingBag, Star, Truck, ShieldCheck, ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Discover Premium Products For Your Lifestyle
            </h1>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Shop the latest trending products with fast delivery,
              secure payments, and unbeatable quality.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Explore Products
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/cart"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
              >
                View Cart
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
              alt="Shopping"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <Truck className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your products delivered quickly with our reliable
                shipping network.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <ShieldCheck className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience safe and secure payment options with encrypted
                transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="flex justify-center mb-5">
                <Star className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Top Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide premium quality products loved by thousands of
                happy customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Popular Categories</h2>

            <Link
              to="/products"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Electronics",
              "Fashion",
              "Fitness",
              "Accessories",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <ShoppingBag className="w-12 h-12 text-blue-600 mb-5" />

                <h3 className="text-2xl font-semibold mb-3">{item}</h3>

                <p className="text-gray-600 mb-6">
                  Explore the latest {item.toLowerCase()} collection.
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-indigo-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Start Shopping Today
          </h2>

          <p className="text-lg text-indigo-100 mb-8">
            Browse thousands of products and enjoy an amazing shopping
            experience.
          </p>

          <Link
            to="/products"
            className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Go To Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
