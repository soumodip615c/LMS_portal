import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Join our Learning Management System
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="font-medium">Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-medium">Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-medium">Select Role</label>

            <select className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Student</option>
              <option>Instructor</option>
            </select>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;