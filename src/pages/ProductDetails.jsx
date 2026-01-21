import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <h3 className="text-center mt-5">Product not found</h3>;

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-primary">₹{product.price}</h4>
          <button className="btn btn-success" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
