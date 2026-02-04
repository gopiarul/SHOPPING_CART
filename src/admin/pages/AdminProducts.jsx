import React, { useState } from "react";
import "../components/AdminProducts.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const addProduct = () => {
    if (!form.name || !form.price || !form.image) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: form.price,
      category: form.category,
      image: URL.createObjectURL(form.image),
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", category: "", image: null });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-products">
      {/* Header */}
      <div className="products-header">
        <h3>Products</h3>
        <button className="add-btn" onClick={addProduct}>
          + Add New Product
        </button>
      </div>

      {/* Add Product Form */}
      <div className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleChange} />
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <h6>{p.name}</h6>
              <p>₹{p.price}</p>
              <span>{p.category}</span>
            </div>

            <div className="card-actions">
              <button className="edit-btn">Edit</button>
              <button
                className="delete-btn"
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="empty-text">No products added yet</p>
        )}
      </div>
    </div>
  );
}

export default AdminProducts;
