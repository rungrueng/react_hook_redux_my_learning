import React, { useEffect } from "react";
import ProductForm from "../../components/product/ProductForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
//import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux'
import { productFetch } from "../../actions";

const ProductEdit = (props) => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.match.params.id) {
            dispatch(productFetch(props.match.params.id))
        }
        console.log('edit');
    }, [])

    const { match } = props;
    console.log(props);
    console.log(products);
    return (
        <div>
            <Header />
            <div className="container col-md-5">
                {match.path.indexOf('add') > 0 &&
                    <div>
                        <h1>เพิ่มรายการสินค้า</h1>
                        {products.saved &&
                            <div className="alert alert-success title">{products.msg}</div>
                        }
                        <ProductForm products={!products ? null : products} dispatch={dispatch} match={match}/>
                    </div>
                }
                {match.path.indexOf('edit') > 0 &&
                    <div>
                        <h1>แก้ไขรายการสินค้า</h1>
                        {products.saved &&
                            <div className="alert alert-success title">{products.msg}</div>
                        }
                        <ProductForm products={!products ? null : products} dispatch={dispatch} match={match} />
                    </div>
                }
            </div>
            <Footer />
        </div>
    )

}

export default ProductEdit;