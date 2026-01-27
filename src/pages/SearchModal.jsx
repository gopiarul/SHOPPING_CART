import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // adjust path if needed

function SearchModal({ show, onClose }) {
  const [query, setQuery] = useState("");

  if (!show) return null;

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="fw-bold">Search Gifts</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <input
              className="form-control mb-3"
              placeholder="Search gifts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />

            {filtered.length === 0 ? (
              <p className="text-muted">No products found</p>
            ) : (
              filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  onClick={onClose}
                  className="d-flex gap-3 mb-2 text-decoration-none text-dark"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    width="50"
                    height="50"
                    style={{ borderRadius: "6px", objectFit: "cover" }}
                  />
                  <div>
                    <p className="mb-0 fw-semibold">{p.title}</p>
                    <small className="text-danger">₹{p.price}</small>
                  </div>
                </Link>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchModal;
