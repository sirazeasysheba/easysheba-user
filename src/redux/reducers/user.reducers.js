import { userConstants } from "../actions/constants";

const initialState = {
  address: [],
  loading: false,
  error: null,
  message: "",
};
const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case userConstants.USER_REGISTRATION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.USER_REGISTRATION_SUCCESS:
      state = {
        ...state,
        loading: false,
        // user: action.payload.user,
        // token: action.payload.token,
        // authenticate: true,
        // authenticating: false,
        message: action.payload.message,
      };
      break;
    case userConstants.USER_REGISTRATION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.GET_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.GET_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case userConstants.ADD_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    default:
      return state;
  }
  return state;
};
export default userReducer;
