import { ORDERS_FETCH, ORDERS_DELETE } from "../constants/ActionType";

const defaultState = {
  datas: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ORDERS_FETCH:
      //console.log(action.payload);
      return {
        ...state,
        datas: action.payload,
      };

    case ORDERS_DELETE:
      return {
        ...state,
        datas: state.datas.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
