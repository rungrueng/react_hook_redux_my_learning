import {
  PRODUCTS_FETCH,
  PRODUCT_FETCH,
  PRODUCT_CREATE,
  PRODUCT_UPDATE,
  PRODUCT_DELETE,
} from "../constants/ActionType";

const defaultState = {
  datas: [],
  msg: "",
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case PRODUCT_FETCH:
    case PRODUCTS_FETCH:
      // return { datas: action.payload }
      return {
        ...state,
        datas: action.payload,
        msg: "",
      };

    case PRODUCT_CREATE:
      //return { datas: action.payload, msg: "ระบบได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว" };
      return {
        ...state,
        datas: [...state.datas, action.payload],
        msg: "ระบบได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
      };

    case PRODUCT_UPDATE:
      //return { datas: action.payload, msg: "ระบบได้ทำการแก้ไขข้อมูลเรียบร้อยแล้ว" };
      return {
        ...state,
        datas: state.datas.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        msg: "ระบบได้ทำการแก้ไขข้อมูลเรียบร้อยแล้ว",
      };

    case PRODUCT_DELETE:
      return {
        ...state,
        datas: state.datas.filter(item => item.id !== action.payload),
        msg: "",
      };

    default:
      //return state;
      return state;
  }
}
