import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Categories({ addToCart }) {   // ✅ RECEIVE PROP
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

        {/* SIDEBAR */}
        <div className="col-md-2 bg-light p-4">
          <h5 className="fw-bold">🎁 Categories</h5>
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

        {/* PRODUCTS */}
        <div className="col-md-10">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card shadow h-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <p className="fw-bold text-danger">
                      ₹{product.price}
                    </p>

                    {/* ✅ QUICK VIEW */}
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Quick View
                    </button>

                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-danger btn-sm"
                    >
                      View Page
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ QUICK VIEW MODAL */}
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5>{selectedProduct.title}</h5>
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
                  <h4 className="text-danger">
                    ₹{selectedProduct.price}
                  </h4>

                  {/* ✅ FIXED addToCart */}
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
