import axios from "axios";

const api = axios.create({
  baseURL: "https://growdevers-api-ext.herokuapp.com",
});

export default api;
