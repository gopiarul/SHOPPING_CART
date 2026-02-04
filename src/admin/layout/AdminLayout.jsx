import AdminNavbar from "../components/AdminNavbar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <AdminNavbar />

      {/* Main content */}
      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "30px",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
