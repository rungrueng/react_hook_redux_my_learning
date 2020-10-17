import axios from "axios";
import { ORDERS_FETCH, ORDERS_DELETE } from "../constants/ActionType";

export const ordersFetch = () => {
  return (dispatch) => {
    axios.get(process.env.REACT_APP_API_URL + "/orders").then((res) => {
      dispatch({ type: ORDERS_FETCH, payload: res.data });
    });
  };
};

export const ordersDelete = (id) => {
  return (dispatch) => {
    axios
      .delete(process.env.REACT_APP_API_URL + "/orders/" + id)
      .then((res) => {
        dispatch({ type: ORDERS_DELETE, payload: id });
        // axios.get(process.env.REACT_APP_API_URL + "/orders").then((res) => {
        //   dispatch({ type: ORDERS_FETCH, payload: res.data });
        // });
      });
  };
};
