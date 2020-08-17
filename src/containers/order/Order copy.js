import React,{Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders : null
        };
    }

    getOrderData() {
        axios.get("http://localhost:3001/orders").then(res => {
            this.setState({orders:res.data});
        });
    }

    componentDidMount(){
        this.getOrderData();
    }

    delOrder(order) {
        axios.delete("http://localhost:3001/orders/"+order.id).then(res => {
            this.getOrderData();
        });
    }

    showOrders() {
        return this.state.orders && this.state.orders.map(order => {
            const date = new Date(order.orderDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" 
                        onClick={() => this.delOrder(order)}>x</button>
                    </p>
                    <h6>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h6>
                    <ul>
                        {order.orders && order.orders.map(item => {
                            return (
                            <li key={item.product.id}><img style={{ height: 30 }} className="img-fluid img-thumbnail" src={item.product.thumbnail} />  {item.product.productName}   x {item.quantity} 
                             <br />ราคา : {item.product.unitPrice * item.quantity} บาท </li>
                            )
                        })}
                    </ul>
                    <hr />
                    <p>ยอดรวม : {order.totalPrice} บาท</p>
                </div>
            );

        });
    }

    render(){
        return (
            <div>
                <Header />
                <h1>รายการสั่งซื้อ</h1>
                <div className="row">
                    {this.showOrders()}
                </div>
                <Footer company="Buncha" email="rungrueng.buncha@gmail.com" />
            </div>
        );
    }

}

export default Order;
 