import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

myAxios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default myAxios;
