import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Birthday Gifts",
      image:
        "https://images.unsplash.com/photo-1562967005-a3c85514d3e9",
    },
    {
      name: "Anniversary",
      image:
        "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af",
    },
    {
      name: "Valentine",
      image:
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00",
    },
    {
      name: "Christmas",
      image:
        "https://images.unsplash.com/photo-1603793303277-ed67787545e5",
    },
  ];

  const products = [
    {
      name: "Rose Gift Box",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      name: "Chocolate Hamper",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    },
    {
      name: "Teddy Bear",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    },
    {
      name: "Couple Frame",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="d-flex align-items-center"
        style={{
          minHeight: "85vh",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-white">
          <h1 className="display-4 fw-bold">
            Make Every Moment Special 🎁
          </h1>
          <p className="lead mb-4">
            Premium gifts for every occasion
          </p>
          <button
            className="btn btn-danger btn-lg px-5"
            onClick={() => navigate("/categories")}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              🚚 <b>Free Delivery</b>
              <p className="small text-muted">To your door</p>
            </div>
            <div className="col-md-3">
              🎁 <b>Premium Gifts</b>
              <p className="small text-muted">Best quality</p>
            </div>
            <div className="col-md-3">
              💳 <b>Secure Payment</b>
              <p className="small text-muted">100% safe</p>
            </div>
            <div className="col-md-3">
              📱 <b>Order on the Go</b>
              <p className="small text-muted">Mobile friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Shop by Occasion</h2>

        <div className="row">
          {categories.map((cat) => (
            <div className="col-md-3 mb-4" key={cat.name}>
              <div
                className="card border-0 shadow-sm h-100"
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
                  <h5 className="fw-bold">{cat.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROMO BANNER ================= */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">
                Surprise Your Loved Ones ❤️
              </h2>
              <p className="text-muted">
                Hand-picked gifts with special discounts
              </p>
              <button className="btn btn-danger">
                Explore Deals
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1526040652367-ac003a0475fe"
                className="img-fluid rounded shadow"
                alt="Promo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Most Popular Gifts</h2>

        <div className="row">
          {products.map((p) => (
            <div className="col-md-3 mb-4" key={p.name}>
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">{p.name}</h6>
                  <p className="text-danger fw-bold">₹{p.price}</p>
                  <button className="btn btn-dark btn-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APP DOWNLOAD ================= */}
      <section className="bg-danger text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Shop With Us on the Go 📱</h2>
          <p>Download our app for faster checkout</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light">App Store</button>
            <button className="btn btn-dark">Google Play</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
