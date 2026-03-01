import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// Response
apiClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default apiClient;
