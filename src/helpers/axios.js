import axios from "axios";
import { api } from "../urlConfig";
import store from "../redux/store";
import { authConstants } from "../redux/actions/constants";

const token = window.localStorage.getItem("token");
const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});
axiosIntance.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    const { status } = error.response;
    if (status === 500) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);
export default axiosIntance;
