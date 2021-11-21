import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import cartReducer from "./cart.reducers";
import categoryReducer from "./category.reducers";
import productReducer from "./product.reducers";
import serviceReducer from "./service.reducers";
import userReducer from "./user.reducers";
//import userReducers from "./user.reducers";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  service: serviceReducer,
  product: productReducer,
  cart: cartReducer,
});
export default rootReducer;
