import React, { useEffect, useState } from "react";
import { getCategories, searchProducts } from "../api/api";

const ProductSearch = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load categories once
  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Category error:", err));
  }, []);

  // Fetch products when query or category changes
  useEffect(() => {
    // 🚨 Prevent API call on empty state
    if (!query && !category) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await searchProducts(query, category);
        setProducts(res.data);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query, category]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Product Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      {loading && <p>Loading...</p>}

      <div style={{ marginTop: "20px" }}>
        {!loading && products.length === 0 && (query || category) && (
          <p>No products found</p>
        )}

        {products.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <small>Category: {p.category?.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
