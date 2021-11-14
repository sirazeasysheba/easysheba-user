import { serviceConstants } from "../actions/constants";

const initState = {
  services: [],
  loading: false,
  error: null,
};

const serviceReducer = (state = initState, action) => {
  switch (action.type) {
    case serviceConstants.GET_ALL_SERVICE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case serviceConstants.GET_ALL_SERVICE_SUCCESS:
      state = {
        ...state,
        services: action.payload.services,
        loading: false,
      };
      break;
    case serviceConstants.GET_ALL_SERVICE_FAILURE:
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
export default serviceReducer;
