import "../components/AdminNavbar.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function AdminDashboard() {
  // 🔹 REAL DATA FROM LOCALSTORAGE
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // 🔹 CHART DATA (can be improved later with real monthly logic)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [10, 20, 35, 50, orders.length, orders.length + 10],
        backgroundColor: "#0ea5e9",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [5, 10, 18, 25, 35, users.length],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      {/* 🔹 STAT CARDS */}
      <div className="dashboard-cards">
        <div className="stat-card">
          <p>Total Products</p>
          <h3>{products.length}</h3>
        </div>

        <div className="stat-card">
          <p>Total Orders</p>
          <h3>{orders.length}</h3>
        </div>

        <div className="stat-card">
          <p>Total Users</p>
          <h3>{users.length}</h3>
        </div>
      </div>

      {/* 🔹 CHARTS */}
      <div className="dashboard-charts">
        <div className="chart-card">
          <h5>Monthly Orders</h5>
          <Bar data={barData} />
        </div>

        <div className="chart-card">
          <h5>User Growth</h5>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
