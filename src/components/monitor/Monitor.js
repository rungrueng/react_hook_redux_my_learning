import React, { useState } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";

const Monitor = (props) => {

    const initialState = { totalPrice: 0, orders: [], confirm: false, msg: '', color: '' };
    const [orderData, setOrderData] = useState(initialState)

    const addOrder = (product) => {
        let findOrder = orderData.orders.find(order => order.product.id === product.id);
        if (findOrder) {
            findOrder.quantity++;
        } else {
            orderData.orders.push({ product: product, quantity: 1 });
        }
        const totalPrice = (orderData.totalPrice + parseInt(product.unitPrice, 0));
        setOrderData({ totalPrice: totalPrice, orders: orderData.orders, confirm: false });
    }

    const delOrder = (product) => {
        let findOrder = orderData.orders.find(order => order.product.id === product.id);
        let resultOrder = orderData.orders.filter(order => order.product.id !== product.id);
        const totalPrice = (orderData.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice, 0)));
        setOrderData({ totalPrice: totalPrice, orders: resultOrder, confirm: false });
    }

    const confirmOrder = () => {
        const { totalPrice, orders } = orderData;
        if (orders && orders.length > 0) {
            axios.post(process.env.REACT_APP_API_URL + "/orders", { orderDate: new Date(), totalPrice, orders })
                .then(res => {
                    setOrderData({ totalPrice: 0, orders: [], confirm: true, color: 'success', msg: 'บันทึกรายการสั่งซื้อ เสร็จเรียบร้อยแล้ว ขอบคุณค่ะ ^_^' });
                });
        } else {
            setOrderData({ totalPrice: 0, orders: [], confirm: true, color: 'danger', msg: 'ไม่พบรายการสั่งซื้อของท่าน กรุณาทำรายการใหม่อีกครั้ง ขอบคุณค่ะ' });
        }
    }

    const cancelOrder = () => {
        setOrderData({ totalPrice: 0, orders: [] });
    }


    let setClassName = 'alert alert-' + orderData.color + ' titile text-right';
    return (
        <div className="container-fluid">
            {orderData.confirm &&
                <div className={setClassName} role="alert">
                    {orderData.msg}
                </div>
            }
            <div className="row">
                <div className="col-md-9 ">
                    <ProductList products={props.products} onAddOrder={addOrder} />
                </div>
                <div className="col-md-3">
                    <Calculator totalPrice={orderData.totalPrice} orders={orderData.orders} onDelOrder={delOrder} onConfirmOrder={confirmOrder} onCancelOrder={cancelOrder} />
                </div>
            </div>
        </div>
    )

}

export default Monitor;