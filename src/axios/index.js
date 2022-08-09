import axios from "axios";
import store from "../store/index";

const axiosClient = axios.create({
	baseURL: "http://localhost:8000",
});

axiosClient.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${store.getters.getToken}`;
	return config;
});

export default axiosClient;
