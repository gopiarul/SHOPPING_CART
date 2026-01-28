import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Categories({ addToCart }) {
  const [category, setCategory] = useState("All");
  const [quickView, setQuickView] = useState(null);

  const categories = [
    "All",
    "Birthday",
    "Anniversary",
    "Valentine",
    "Christmas",
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* ================= SIDEBAR ================= */}
        <div className="col-md-2 border-end px-4">
          <h5 className="fw-bold mb-3">Category</h5>

          {categories.map((cat) => (
            <div
              key={cat}
              className={`py-2 px-2 mb-2 rounded ${
                category === cat ? "bg-danger text-white" : "text-dark"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="col-md-10">
          <div className="row g-4">

            {filteredProducts.map((product) => (
              <div className="col-md-3" key={product.id}>
                <div className="card h-100 shadow-sm border-0 product-card">

                  {/* IMAGE */}
                  <div className="position-relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top p-3"
                      style={{ height: "200px", objectFit: "contain" }}
                    />

                    <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                      -20%
                    </span>
                  </div>

                  {/* CARD BODY */}
                  <div className="card-body text-center">
                    <h6 className="fw-bold">{product.title}</h6>

                    <div className="text-warning mb-1">
                      ★★★★☆ <small className="text-muted">(4.5)</small>
                    </div>

                    <div className="mb-2">
                      <span className="fw-bold text-danger">
                        ₹{product.price}
                      </span>
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{product.price + 300}
                      </span>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-danger btn-sm w-50"
                        onClick={() => setQuickView(product)}
                      >
                        Quick View
                      </button>

                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-danger btn-sm w-50"
                      >
                        Details
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}
      {quickView && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="fw-bold">{quickView.title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setQuickView(null)}
                ></button>
              </div>

              <div className="modal-body row">
                <div className="col-md-6">
                  <img
                    src={quickView.image}
                    alt={quickView.title}
                    className="img-fluid"
                  />
                </div>

                <div className="col-md-6">
                  <h4 className="text-danger fw-bold">₹{quickView.price}</h4>
                  <p className="text-muted">
                    Premium quality gift perfect for special occasions.
                  </p>

                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      addToCart(quickView);
                      setQuickView(null);
                    }}
                  >
                    Add to Cart
                  </button>

                  <Link
                    to={`/product/${quickView.id}`}
                    className="btn btn-outline-danger"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;