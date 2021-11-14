import { serviceConstants } from "./constants";
import axios from "../../helpers/axios";

export const getAllService = () => {
  return async (dispatch) => {
    dispatch({
      type: serviceConstants.GET_ALL_SERVICE_REQUEST,
    });
    const res = await axios.get(`/service/getservice`);
    if (res.status === 200) {
      const { serviceList } = res.data;
      console.log(serviceList);
      dispatch({
        type: serviceConstants.GET_ALL_SERVICE_SUCCESS,
        payload: {
          services: serviceList,
        },
      });
    } else {
      dispatch({
        type: serviceConstants.GET_ALL_SERVICE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
