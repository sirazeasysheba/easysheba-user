import { cartConstants } from "../actions/constants";

const initState = {
  cartItems: {},
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
    case cartConstants.REMOVE_FROM_CART:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
    default:
      return state;
  }
  return state;
};
export default cartReducer;
