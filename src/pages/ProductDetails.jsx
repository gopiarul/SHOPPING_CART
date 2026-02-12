import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Product error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p className="text-muted">{product.category?.name}</p>
          <h4 className="text-danger">₹{product.price}</h4>
          <p>{product.description}</p>

          <button
            className="btn btn-success"
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
