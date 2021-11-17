import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SERVICE:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case productConstants.GET_ALL_PRODUCTS:
      state = {
        ...state,
        productList: action.payload.productList,
      };
      break;
    default:
      break;
  }
  return state;
};
export default productReducer;
