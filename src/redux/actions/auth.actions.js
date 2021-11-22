import axios from "../../helpers/axios";
import { authConstants, cartConstants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    try {
      const res = await axios.post("/signin", {
        ...user,
      });
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: error.response,
        },
      });
    }
  };
};
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    // localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });
    const res = await axios.post(`/signout`);

    if (res.status === 200) {
      // localStorage.removeItem("user");
      // localStorage.removeItem("token");
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
      });
      dispatch({
        type: cartConstants.RESET_CART,
      });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
