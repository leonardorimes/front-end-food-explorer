import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"
  // baseURL: "https://food-explorer-api-a5gj.onrender.com"
});
