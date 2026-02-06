import React, { useState, useEffect } from "react";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  const openModal = (product = null, index = null) => {
    if (product) {
      setForm(product);
      setEditIndex(index);
    } else {
      setForm({ name: "", price: "", category: "", image: "" });
      setEditIndex(null);
    }
    setShowModal(true);
  };

  const saveProduct = () => {
    let updated = [...products];

    if (editIndex !== null) {
      updated[editIndex] = form;
    } else {
      updated.push({ ...form, id: Date.now() });
    }

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setShowModal(false);
  };

  const deleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Manage Products</h4>
        <button className="btn btn-success" onClick={() => openModal()}>
          + Add Product
        </button>
      </div>

      <table className="table table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th width="160">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No products found
              </td>
            </tr>
          )}

          {products.map((p, i) => (
            <tr key={p.id}>
              <td>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    width="50"
                    height="50"
                    style={{ objectFit: "cover", borderRadius: "6px" }}
                  />
                ) : (
                  <span className="text-muted">No image</span>
                )}
              </td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.category}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => openModal(p, i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {showModal && (
        <div className="modal fade show d-block bg-dark bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <h5>{editIndex !== null ? "Edit" : "Add"} Product</h5>

              <input
                className="form-control mb-2"
                placeholder="Product Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="form-control mb-2"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              <input
                className="form-control mb-2"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />

              <input
                type="file"
                className="form-control mb-2"
                onChange={handleImage}
              />

              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  width="80"
                  className="mb-2"
                />
              )}

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={saveProduct}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;
