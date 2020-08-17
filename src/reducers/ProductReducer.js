import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "../constants/ActionType";

export default function (state = [], action) {
    switch (action.type) {
        case PRODUCT_FETCH:
        case PRODUCTS_FETCH:
            return { datas: action.payload }

        case PRODUCT_CREATE:
            return { datas: action.payload, msg: "ระบบได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว" };

        case PRODUCT_UPDATE:
            //return action.payload;
            return { datas: action.payload, msg: "ระบบได้ทำการแก้ไขข้อมูลเรียบร้อยแล้ว" };

        default:
            //return state;
            return { datas: state }
    }
} 