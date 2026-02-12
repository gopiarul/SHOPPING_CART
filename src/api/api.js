import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getCategories = () => API.get("/categories");

export const searchProducts = (query, category) =>
  API.get("/products/search", {
    params: {
      q: query || undefined,
      category: category || undefined
    }
  });
 export const getProductById = (id) =>
    API.get(`/products/${id}`);


export default API;
