import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  if (!Array.isArray(products)) {
    return <h3 className="text-center">No products found</h3>;
  }

  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-md-4 mb-4" key={p.id}>
          <div className="card h-100 shadow-sm product-card">

            {/* IMAGE */}
            <img
              src={p.image}
              alt={p.title}
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />

            {/* BODY */}
            <div className="card-body">
              <h6 className="fw-bold">{p.title}</h6>

              {/* ⭐ RATING */}
              <div className="mb-1 text-warning">
                ★★★★☆ <small className="text-muted">(4.5)</small>
              </div>

              {/* DESCRIPTION */}
              <p className="text-muted small">
                Perfect gift for your loved ones on special occasions.
              </p>

              {/* PRICE */}
              <h5 className="text-danger fw-bold">₹{p.price}</h5>
            </div>

            {/* ACTION */}
            <div className="card-footer bg-white border-0 text-center">
              <Link
                to={`/product/${p.id}`}
                className="btn btn-outline-danger btn-sm w-100"
              >
                View Details
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
