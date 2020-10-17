import React,{Component} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import { ordersFetch , ordersDelete } from "../../actions";

class Order extends Component {

    getOrderData() {
        this.props.ordersFetch();
    }

    componentDidMount(){
        this.getOrderData();
    }

    delOrder(order) {
        this.props.ordersDelete(order.id);
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderDate);
            return (
                <div key={order.id} className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded">
                    <hr />
                    <h6><button className="btn btn-danger btn-sm title" 
                        onClick={() => this.delOrder(order)}>x</button>{" "}
                        วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h6>
                    <ul>
                        {order.orders && order.orders.map(item => {
                            return (
                            <li key={item.product.id} style={{ paddingBottom: 5,paddingRight: 5 }}><img style={{ height: 70}} className="img-fluid img-thumbnail" src={item.product.thumbnail} alt=''/>  {" "} {item.product.productName} {" ( "+item.product.unitPrice+" บาท ) "}   x {item.quantity}</li>
                            )
                        })}
                    </ul>
                    <hr />
                    <p className="font-weight-bold">ยอดรวม : <font className="text-danger">{order.totalPrice}</font> บาท</p>
                </div>
            );
        });
    }

    render(){
        return (
            <div>
                <Header />
                <div className="container col-md-8">
                <h1>รายการสั่งซื้อ</h1>
                    {this.showOrders()}
                </div>
                <Footer company="Buncha" email="rungrueng.buncha@gmail.com" />
            </div>
        );
    }

}

function mapToPropsState(state){
    //console.log(state.orders);
    return {orders : state.orders.datas};
}

export default connect( mapToPropsState, {ordersFetch, ordersDelete}) (Order);
 