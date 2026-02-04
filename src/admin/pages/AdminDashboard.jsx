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
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 60, 50, 80, 120],
        backgroundColor: "#0ea5e9",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [10, 20, 28, 35, 42, 48],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      {/* STAT CARDS */}
      <div className="dashboard-cards">
        <div className="stat-card">
          <p>Total Products</p>
          <h3>25</h3>
        </div>
        <div className="stat-card">
          <p>Total Orders</p>
          <h3>120</h3>
        </div>
        <div className="stat-card">
          <p>Total Users</p>
          <h3>48</h3>
        </div>
      </div>

      {/* CHARTS */}
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
