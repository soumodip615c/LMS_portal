import {
  FaHome,
  FaBook,
  FaClipboardList,
  FaCertificate,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white fixed left-0 top-0">

      <div className="p-6 text-3xl font-bold border-b border-blue-500">
        LMS
      </div>

      <div className="mt-8 flex flex-col">

        <Link to="/student" className="px-6 py-4 hover:bg-blue-800 flex items-center gap-3">
          <FaHome /> Dashboard
        </Link>

        <Link to="/courses" className="px-6 py-4 hover:bg-blue-800 flex items-center gap-3">
          <FaBook /> My Courses
        </Link>

        <Link className="px-6 py-4 hover:bg-blue-800 flex items-center gap-3">
          <FaClipboardList /> Assignments
        </Link>

        <Link className="px-6 py-4 hover:bg-blue-800 flex items-center gap-3">
          <FaCertificate /> Certificates
        </Link>

        <Link to="/profile" className="px-6 py-4 hover:bg-blue-800 flex items-center gap-3">
          <FaUser /> Profile
        </Link>

        <Link className="px-6 py-4 hover:bg-blue-800 flex items-center gap-3">
          <FaCog /> Settings
        </Link>

        <Link className="px-6 py-4 hover:bg-red-600 flex items-center gap-3 mt-8">
          <FaSignOutAlt /> Logout
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;