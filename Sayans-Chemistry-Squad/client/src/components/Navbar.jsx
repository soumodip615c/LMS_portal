import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-600">
          Sayan's Chemistry Squad
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/courses">About</Link>
          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
