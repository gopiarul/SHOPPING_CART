import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.image);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row g-5">

        {/* ================= IMAGE GALLERY ================= */}
        <div className="col-md-6">
          <div className="border rounded p-3 mb-3 text-center">
            <img
              src={mainImage}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "420px" }}
            />
          </div>

          {/* Thumbnails */}
          <div className="d-flex gap-3 justify-content-center">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className="border rounded p-1"
                style={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  objectFit: "contain",
                }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="col-md-6">
          <span className="badge bg-primary mb-2">NEW ARRIVAL</span>

          <h2 className="fw-bold">{product.title}</h2>

          {/* Rating */}
          <div className="text-warning mb-2">
            ★★★★☆ <span className="text-muted">(4.5 | 623 reviews)</span>
          </div>

          {/* Price */}
          <h3 className="fw-bold text-danger mb-3">
            ₹{product.price}
          </h3>

          {/* Colors */}
          <div className="mb-3">
            <strong>Available Colors</strong>
            <div className="d-flex gap-2 mt-2">
              {["Black", "Blue", "Green"].map((c) => (
                <button
                  key={c}
                  className={`btn btn-sm ${
                    color === c ? "btn-dark" : "btn-outline-secondary"
                  }`}
                  onClick={() => setColor(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-3">
            <strong>Available Size</strong>
            <div className="d-flex gap-2 mt-2">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`btn btn-sm ${
                    size === s ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <strong>Description</strong>
            <ul className="text-muted mt-2">
              <li>Premium quality product</li>
              <li>Comfortable and durable material</li>
              <li>Perfect for all special occasions</li>
            </ul>
          </div>

          {/* Shipping Info */}
          <div className="row text-muted mb-4">
            <div className="col-4">🚚 Fast Delivery</div>
            <div className="col-4">🌍 Worldwide Shipping</div>
            <div className="col-4">📦 Secure Packing</div>
          </div>

          {/* Button */}
          <button
            className="btn btn-danger px-5 py-2"
            onClick={() => addToCart({ ...product, size, color })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
