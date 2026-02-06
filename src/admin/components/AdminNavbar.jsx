import { NavLink } from "react-router-dom";
import { adminLogout } from "../utils/adminAuth";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Truck,
  ShoppingBag,
  Users,
  
  Home,
  BarChart2,
  CreditCard,
  Shield
} from "lucide-react";

import "./AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-sidebar">
      <div className="admin-logo">
        <Grid size={22} />
        <span>Admin</span>
      </div>

      <nav className="admin-menu">
        <NavLink to="/admin/dashboard" className="menu-item">
          <Grid size={18} /> Dashboard
        </NavLink>

        <NavLink to="/admin/products" className="menu-item">
          <ShoppingBag size={18} /> Products
        </NavLink>

        <NavLink to="/admin/users" className="menu-item">
          <Users size={18} /> Users
        </NavLink>

        <NavLink to="#" className="menu-item">
          <Truck size={18} /> Shipments
        </NavLink>

        <NavLink to="#" className="menu-item">
          <Home size={18} /> Warehousing
        </NavLink>

        <NavLink to="#" className="menu-item">
          <BarChart2 size={18} /> Reports
        </NavLink>

        <NavLink to="#" className="menu-item">
          <CreditCard size={18} /> Billing
        </NavLink>

        <NavLink to="#" className="menu-item">
          <Shield size={18} /> Security
        </NavLink>
        <NavLink to="/admin/orders" className="menu-item">
  <ShoppingBag size={18} /> Orders
</NavLink>

      </nav>

      <div className="admin-footer">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminNavbar;
