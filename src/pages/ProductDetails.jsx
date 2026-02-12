import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/api";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
        setSelectedImage(res.data.image);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container my-5">
      <div className="row">

        {/* LEFT SIDE IMAGES */}
        <div className="col-md-6">

          {/* Main Image */}
          <div className="mb-3 text-center">
            <img
              src={selectedImage || "https://via.placeholder.com/400"}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>

          {/* Thumbnail (if you later add multiple images) */}
          <div className="d-flex gap-2 justify-content-center">
            <img
              src={product.image}
              alt=""
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                cursor: "pointer",
                border: selectedImage === product.image ? "2px solid red" : "1px solid #ccc"
              }}
              onClick={() => setSelectedImage(product.image)}
            />
          </div>

        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="col-md-6">

          <h2 className="fw-bold">{product.name}</h2>

          <div className="mb-2">
            ⭐⭐⭐⭐⭐ <span className="text-muted">(214 reviews)</span>
          </div>

          <h3 className="text-danger">₹{product.price}</h3>

          <p className="text-muted">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="d-flex align-items-center gap-3 my-3">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              -
            </button>

            <span className="fw-bold">{qty}</span>

            <button
              className="btn btn-outline-secondary"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* Add To Cart */}
          <button
            className="btn btn-dark w-100 mb-3"
            onClick={() =>
              addToCart({ ...product, qty })
            }
          >
            ADD TO CART
          </button>

          {/* Extra Info Section */}
          <div className="border-top pt-3">
            <p>✔ Safe & Non-Toxic</p>
            <p>✔ Dermatologist Created</p>
            <p>✔ Biodegradable Ingredients</p>
            <p>✔ Vegan & Cruelty-Free</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
