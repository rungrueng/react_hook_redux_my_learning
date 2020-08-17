import axios from "axios";
import { PRODUCTS_FETCH,PRODUCT_FETCH,PRODUCT_CREATE,PRODUCT_UPDATE } from "../constants/ActionType";

export const productsFetch = () => {

    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL+"/products").then(res => {
            dispatch({ type : PRODUCTS_FETCH, payload: res.data});
        });
    }

}

export const productFetch = (id) => {

    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL+"/products/"+id).then(res => {
            dispatch({ type : PRODUCT_FETCH, payload: res.data});
        });
    }

}

export const productsDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL+"/products/"+id).then(res => {
            axios.get(process.env.REACT_APP_API_URL+"/products").then(res => {
                dispatch({ type : PRODUCTS_FETCH, payload: res.data});
            });
        });
    }
}

export const productCreate = (value) => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL+"/products",value).then(res => {
            //dispatch({ type : PRODUCT_CREATE , payload :  res.data});
            axios.get(process.env.REACT_APP_API_URL+"/products").then(res => {
                dispatch({ type : PRODUCT_CREATE, payload: res.data});
            });
        });
    }
}

export const productUpdate = (id,value) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL+"/products/"+id,value).then(res => {
            //dispatch({ type : PRODUCT_UPDATE , payload :  res.data});
            axios.get(process.env.REACT_APP_API_URL+"/products").then(res => {
                dispatch({ type : PRODUCT_UPDATE, payload: res.data});
            });
        });
    }
}