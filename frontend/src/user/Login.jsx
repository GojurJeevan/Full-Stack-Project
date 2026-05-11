import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [entry, setEntry] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEntry({
      ...entry,
      [name]: value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email: entry.email,
          password: entry.password
        }
      )
      alert(res.data)
      navigate("/home")
    } catch (err) {
      console.log(err);
      setErr("Login Failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        {err && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {err}
          </p>
        )}

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>

          <input
            type="email"
            name="email"
            value={entry.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={entry.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Login
        </button>
        <p className="text-center text-gray-600 mt-5">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
