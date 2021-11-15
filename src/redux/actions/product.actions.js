import axios from "../../helpers/axios";
import { productConstants } from "./constants";
export const getProductByService = (service) => {
  return async (dispatch) => {
    console.log(service);
    const res = await axios.post(`/product/getproductbyservice`, { service });
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SERVICE,
        payload: {
          products: res.data,
        },
      });
    } else {
      //   dispatch({
      //     type: serviceConstants.GET_ALL_SERVICE_FAILURE,
      //     payload: { error: res.data.error },
      //   });
    }
  };
};
