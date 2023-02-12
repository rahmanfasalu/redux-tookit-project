import axios from "axios";
import { BASE_URL } from "constants/api.constants";

export function axiosInterceptor() {
  axios.defaults.baseURL = BASE_URL
  axios.interceptors.request.use((request) => {
    return request;
  });
}
