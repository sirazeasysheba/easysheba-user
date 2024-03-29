import { authConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: {
    name: "",
    username: "",
    email: "",
    contactNumber: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};
const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
        loading: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        loading: false,
        error: null,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        loading: true,
        error: action.payload.error,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        initialState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    default:
      return state;
  }
  return state;
};
export default authReducer;
