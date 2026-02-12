import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, searchProducts } from "../api/api";


function Categories({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [quickView, setQuickView] = useState(null);

  // Load Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (error) {
        console.error("Category error:", error);
      }
    };
    fetchCategories();
  }, []);

  // Load Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await searchProducts(undefined, selectedCategory);
        setProducts(res.data);
      } catch (error) {
        console.error("Product fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="container-fluid mt-4 category-page">
      <div className="row">

        {/* ================= SIDEBAR ================= */}
        <div className="col-md-2 category-sidebar">
          <h5 className="fw-bold mb-3">Category</h5>

          <div
            className={`category-item ${selectedCategory === "" ? "active" : ""}`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </div>

          {categories.map((cat) => (
            <div
              key={cat._id}
              className={`category-item ${
                selectedCategory === cat._id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat._id)}
            >
              {cat.name}
            </div>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="col-md-10">
          {loading && <p>Loading...</p>}
          {!loading && products.length === 0 && (
            <p className="text-muted">No products found</p>
          )}

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-3" key={product._id}>
                <div className="product-card">

                  <span className="discount-badge">-20%</span>

                  <img
                    src={product.image || "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="product-img"
                  />

                  <div className="p-3 text-center">

                    <h6 className="fw-bold">{product.name}</h6>

                    <div className="rating">
                      ★★★★★ <span>(4.5)</span>
                    </div>

                    <div className="mt-2">
                      <span className="price">₹{product.price}</span>
                      <span className="old-price">
                        ₹{product.price + 300}
                      </span>
                    </div>

                    <div className="mt-3">
                      <button
                        className="btn-quick"
                        onClick={() => setQuickView(product)}
                      >
                        Quick View
                      </button>

                      <Link
                        to={`/product/${product._id}`}
                        className="btn-details"
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
          className="custom-modal"
          onClick={() => setQuickView(null)}
        >
          <div
            className="custom-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h5>{quickView.name}</h5>
              <button
                className="btn-close"
                onClick={() => setQuickView(null)}
              ></button>
            </div>

            <div className="row p-3">
              <div className="col-md-6">
                <img
                  src={quickView.image || "https://via.placeholder.com/400"}
                  alt={quickView.name}
                  className="img-fluid"
                />
              </div>

              <div className="col-md-6">
                <h4 className="text-danger">₹{quickView.price}</h4>
                <p>{quickView.description}</p>

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
                  to={`/product/${quickView._id}`}
                  className="btn btn-outline-danger"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
