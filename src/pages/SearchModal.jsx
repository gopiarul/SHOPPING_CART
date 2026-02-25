import React, { useEffect, useState } from "react";
import { searchProducts } from "../api/api";
import { Link } from "react-router-dom";

function SearchModal({ show, onClose }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await searchProducts(query);
        setProducts(res.data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }, 500); // delay for typing

    return () => clearTimeout(delayDebounce);
  }, [query]);

  if (!show) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex justify-content-between mb-3">
          <h5>Search Products</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <input
          type="text"
          placeholder="Type product name..."
          className="form-control mb-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {loading && <p>Searching...</p>}

        <div>
          {products.map((p) => (
            <Link
              key={p._id}
              to={`/product/${p._id}`}
              className="search-item"
              onClick={onClose}
            >
              <img
                src={p.image || "https://via.placeholder.com/60"}
                alt={p.name}
                width="50"
              />
              <div>
                <p className="mb-0 fw-bold">{p.name}</p>
                <small>₹{p.price}</small>
              </div>
            </Link>
          ))}

          {!loading && query && products.length === 0 && (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
