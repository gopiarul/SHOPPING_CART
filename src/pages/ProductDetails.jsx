import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product)
    return <h3 className="text-center mt-5">Product not found</h3>;

  return (
    <div className="container my-5">
      <div className="row">

        {/* IMAGE */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>

          {/* RATING */}
          <div className="text-warning mb-2">
            ★★★★☆ <span className="text-muted">(120 reviews)</span>
          </div>

          <h4 className="text-danger fw-bold mb-3">
            ₹{product.price}
          </h4>

          <p className="text-muted">
            This premium gift is designed to make every occasion memorable.
            Crafted with care and high-quality materials.
          </p>

          <ul className="text-muted">
            <li>Premium quality material</li>
            <li>Perfect for gifting</li>
            <li>Fast & safe delivery</li>
          </ul>

          <button
            className="btn btn-success btn-lg mt-3"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
