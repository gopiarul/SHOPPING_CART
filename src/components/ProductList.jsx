import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  // ✅ SAFETY CHECK
  if (!Array.isArray(products)) {
    return <h3 className="text-center">No products found</h3>;
  }

  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-md-4 mb-4" key={p.id}>
          <div className="card h-100 shadow">
            <img
              src={p.image}
              alt={p.title}
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5>{p.title}</h5>
              <p>₹{p.price}</p>
              <Link to={`/product/${p.id}`} className="btn btn-primary">
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
