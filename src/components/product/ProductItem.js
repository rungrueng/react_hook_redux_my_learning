import React, { Component } from "react";

class ProductItem extends Component {

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt=''/>
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                <div className="row">
                    {this.props.onAddOrder && 
                        <div className="col-md-12">
                        <button className="btn btn-block btn-success title" onClick={() => this.props.onAddOrder(this.props.product)} >
                            ซื้อ
                        </button>
                        </div>
                    }
                    {(this.props.onDelProduct || this.props.onEditProduct) &&
                        <div className="col-md-6">
                        <button className="btn btn-block btn-secondary title" onClick={() => this.props.onEditProduct(this.props.product)} >
                            แก้ไข
                        </button>
                        </div>
                    }
                    {(this.props.onDelProduct || this.props.onEditProduct) &&
                        <div className="col-md-6">
                        <button className="btn btn-block btn-danger title" onClick={() => this.props.onDelProduct(this.props.product)} >
                            ลบ
                        </button>
                        </div>
                    }
                </div>
                <hr />
            </div>
        )
    }
}

export default ProductItem;