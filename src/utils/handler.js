import axios from "axios";
import { API_URL, BASE_URL } from "./constants";

// Create an Axios instance
export const axiosInstance = axios.create({
  baseURL: API_URL, // Set your API base URL here
  timeout: 5000, // Set your desired timeout
});

// Middleware to inject JWT token into headers before each request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get your JWT token from wherever you store it (localStorage, cookies, etc.)
    //const token ="478c065007b3670af7fcaec8d9bab4690027b6ac6f14352df25b7dca52495031fe0c00ae6b883c99821eeb081370a6b2604fd8b3e6ae8914b3f5f2ec21e2792759721d0bce3f790c990dd51699b6216d7dc7ac27f3fb321e0d3a77d92fb54ad783081c5ebc50ad2a55e1895fb3557a2856c8b3220e00cef4ff8ffdc96f183285";
    const token =
      "e0e65dff1642b196627f0db52b3843d5333a965c1710c010ecd352565b32b8baf72d587b86bbff7e870419d81326dbba3dcb246893965a4b0ecacf6bad0395bd926bffb9f2e0a59e6a963b153ea6639a48a0b7cc21c54e1e1008ad670bb0dca90e689a881f14d856d21a0721c4ef5fdacff677177d4d3dd276fbcd321a2bc6a0";
    // Check if token exists and is not expired before injecting it into headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const formatImage = (p) => {
  return BASE_URL + p.replace("/uploads", "uploads");
};
