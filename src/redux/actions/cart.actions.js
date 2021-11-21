import store from "../store";
import { cartConstants } from "./constants";

export const addToCart = (product) => {
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + 1)
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({
      type: cartConstants.ADD_TO_CART,
      payload: { cartItems },
    });
  };
};

export const removeOneItemFromCart = (product) => {
  console.log(product);
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    console.log(cartItems);
    if (product.qty > 1) {
      const qty = parseInt(cartItems[product._id].qty - 1);
      cartItems[product._id] = {
        ...product,
        qty,
      };
    } else {
      //    const newArray = cartItems.filter((item) => item !== product);
      //   console.log(newArray);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({
      type: cartConstants.REMOVE_FROM_CART,
      payload: { cartItems },
    });
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    if (cart) {
      dispatch({
        type: cartConstants.ADD_TO_CART,
        payload: { cartItems: cart },
      });
    }
  };
};
