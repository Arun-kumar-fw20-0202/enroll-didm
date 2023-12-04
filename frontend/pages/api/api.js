import axios from "axios";

export const baseURL = "http://localhost:8080/api";
export const clientUrl = "http://localhost:3000/";

export const Imageapi = axios.create({
  withCredentials: true,
  baseURL,
});

const api = axios.create({
  withCredentials: true,
  baseURL,
});

export default api;
