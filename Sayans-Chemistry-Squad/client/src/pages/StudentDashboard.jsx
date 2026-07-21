import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

function StudentDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="ml-64 p-8">

        <DashboardNavbar />

        <h1 className="text-4xl font-bold mt-8">
          Student Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back! Continue your learning journey.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-4xl font-bold text-blue-600">12</h2>
            <p>Courses</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-4xl font-bold text-green-600">82%</h2>
            <p>Progress</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-4xl font-bold text-yellow-500">5</h2>
            <p>Certificates</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-4xl font-bold text-purple-600">56h</h2>
            <p>Learning Time</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;