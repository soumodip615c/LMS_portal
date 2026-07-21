import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to continue learning
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>

            <Link to="#" className="text-blue-600">
              Forgot Password?
            </Link>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2 font-semibold"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;