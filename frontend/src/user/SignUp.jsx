import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      const res = await axios.post("http://localhost:8080/api/users/signup", {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      console.log(res.data);

      alert("Signup Successful");

      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);

      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h1>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </p>
        )}

        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Create Account
        </button>
        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
