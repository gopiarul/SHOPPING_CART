import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Birthday",
      image:
        "https://images.unsplash.com/photo-1562967005-a3c85514d3e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Valentine",
      image:
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Anniversary",
      image:
        "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Christmas",
      image:
        "https://images.unsplash.com/photo-1603793303277-ed67787545e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      {/* 🔹 HERO SECTION */}
      <div
        className="text-white d-flex align-items-center"
        style={{
          height: "80vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="fw-bold display-4">
            Make Every Moment Special 🎁
          </h1>
          <p className="fs-5">
            Beautiful gifts for every celebration
          </p>
          <button
            className="btn btn-danger btn-lg mt-3"
            onClick={() => navigate("/categories")}
          >
            Shop Gifts
          </button>
        </div>
      </div>

      {/* 🔹 CATEGORY SECTION */}
      <div className="container mt-5">
        <h2 className="fw-bold text-center mb-4">
          Shop by Category
        </h2>

        <div className="row">
          {categories.map((cat) => (
            <div className="col-md-3 mb-4" key={cat.name}>
              <div
                className="card border-0 shadow h-100"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/categories")}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{cat.name} Gifts</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 WHY US */}
      <div className="container mt-5 mb-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>🚚 Fast Delivery</h5>
            <p>Quick & safe gift delivery</p>
          </div>
          <div className="col-md-4">
            <h5>🎁 Premium Gifts</h5>
            <p>High quality curated gifts</p>
          </div>
          <div className="col-md-4">
            <h5>💳 Secure Payment</h5>
            <p>100% safe checkout</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
