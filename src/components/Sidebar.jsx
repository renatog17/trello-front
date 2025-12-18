import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { 
  BsBarChartFill 
} from "react-icons/bs";

import {
  FaTachometerAlt,
  FaUsers,
  FaHome,
  FaUserTie,
  FaTachometerAlt as FaMeter,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-200"
            >
              <BsBarChartFill />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={logout}
        className="mt-6 flex items-center gap-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
}
