import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // will point to our backend
});

export default api;
