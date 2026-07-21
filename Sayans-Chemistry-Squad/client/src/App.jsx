import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admission from "./pages/Admission";

import Login from "./pages/Login";
import AdminLogin from "./pages/admin/Login";

import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />

        {/* Student Login */}
        <Route path="/login" element={<Login />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
