import axios from "../../helpers/axios";
import store from "../store";
import { cartConstants } from "./constants";

const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: cartConstants.ADD_TO_CART_REQUEST,
      });
      const res = await axios.post(`/user/cart/getcartitems`);
      console.log(res);

      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, Qty = 1) => {
  console.log(product);
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    const token = localStorage.getItem("token");
    console.log(token);
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + Qty)
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };

    if (token) {
      dispatch({
        type: cartConstants.ADD_TO_CART_REQUEST,
      });
      const payload = {
        cartItems: [
          {
            product: product._id,
            // service:product.service,
            quantity: qty,
          },
        ],
      };
      console.log(payload);
      const res = await axios.post(`/user/cart/addtocart`, payload);
      console.log(res);
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  };
};

export const removeOneItemFromCart = (product) => {
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    const newCarts = [];
    if (product.qty > 1) {
      const qty = parseInt(cartItems[product._id].qty - 1);
      cartItems[product._id] = {
        ...product,
        qty,
      };
    } else {
      Object.keys(cartItems).map((item) => {
        if (item !== product._id) {
          newCarts.push(cartItems[item]);
        }
      });
    }

    console.log(newCarts);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({
      type: cartConstants.REMOVE_FROM_CART,
      payload: { cartItems },
    });
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    if (token) {
      localStorage.removeItem("cart");
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((item, index) => {
            return {
              quantity: cartItems[item].qty,
              product: cartItems[item]._id,
            };
          }),
        };

        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems: cartItems },
        });
      }
    }
  };
};
export { getCartItems };
