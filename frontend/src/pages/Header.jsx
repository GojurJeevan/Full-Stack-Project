import { Link } from "react-router-dom";

export const Header = () => {
  const info = [
    {
      name: "Login",
      path: "/",
    },
    {
      name: "SignUp",
      path: "/signup",
    },
    {
      name:"Products",
      path:"/products",
    },
    {
      name:"Cart",
      path:"/cart"
    }
  ];

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600">
          Auth App
        </h1>

        <div className="flex items-center gap-4">
          {info.map((loc) => (
            <Link
              to={loc.path}
              key={loc.name}
              className="px-5 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};