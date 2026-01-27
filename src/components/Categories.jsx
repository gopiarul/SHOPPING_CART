import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Categories({ addToCart }) {
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        <div className="col-md-2 bg-light p-4">
          <h5 className="fw-bold mb-3">🎁 Categories</h5>

          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn w-100 mb-2 ${
                category === cat ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="col-md-10">
          <div className="row">

            {filteredProducts.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card shadow-sm h-100 product-card">

                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  {/* CARD BODY */}
                  <div className="card-body">
                    <h6 className="fw-bold">{product.title}</h6>

                    {/* ⭐ RATING */}
                    <div className="text-warning mb-1">
                      ★★★★☆ <small className="text-muted">(4.3)</small>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-muted small mb-2">
                      A perfect gift for special moments.
                    </p>

                    {/* PRICE */}
                    <p className="fw-bold text-danger mb-3">
                      ₹{product.price}
                    </p>

                    {/* ACTION BUTTONS */}
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-danger btn-sm w-50"
                        onClick={() => setSelectedProduct(product)}
                      >
                        Quick View
                      </button>

                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-danger btn-sm w-50"
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
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="fw-bold">{selectedProduct.title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedProduct(null)}
                ></button>
              </div>

              <div className="modal-body row">
                <div className="col-md-6">
                  <img
                    src={selectedProduct.image}
                    className="img-fluid rounded"
                    alt={selectedProduct.title}
                  />
                </div>

                <div className="col-md-6">
                  <div className="text-warning mb-2">
                    ★★★★☆ <small className="text-muted">(4.3)</small>
                  </div>

                  <h4 className="text-danger fw-bold">
                    ₹{selectedProduct.price}
                  </h4>

                  <p className="text-muted">
                    Premium quality gift perfect for celebrations.
                  </p>

                  <button
                    className="btn btn-success me-2"
                    onClick={() => addToCart(selectedProduct)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Close
                  </button>
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
