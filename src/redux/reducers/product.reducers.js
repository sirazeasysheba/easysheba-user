import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SERVICE:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;

    default:
      break;
  }
  return state;
};
export default productReducer;
