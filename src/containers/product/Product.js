import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import *  as ProductCall from "../../actions";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useForm } from "react-hook-form";
import ProductForm from "../../components/product/ProductForm";


const Product = (props) => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    console.log(products);

    useEffect(() => {
        dispatch(ProductCall.productsFetch())
    }, [])

    const delProduct = (product) => {
        dispatch(ProductCall.productsDelete(product.id))
    }

    const [saved, setSaved] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [EditProduct, setEditProduct] = useState({})

    const editProduct = (eData) => {
        setEditProduct(eData);
        setModalEdit(!modalEdit);
    }

    const addProduct = () => {
        setEditProduct();
        setModalEdit(!modalEdit);
    }

    const reCalldata = () => {
        setSaved(true)
        setTimeout(() => {
            setModalEdit(false)
            setSaved(false)
        }, 1500);
    }

    const [reView, setReview] = React.useState(null)
    const [thumbnail, setThumbnail] = React.useState(null)

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        //console.log(data)
        if (EditProduct) {
            dispatch(ProductCall.productUpdate(EditProduct.id, data))
            reCalldata();
        } else {
            dispatch(ProductCall.productCreate(data))
            reCalldata();
        }
    }

    const handleFileChange = (e) => {
        let getfiles = Array.from(e.target.files);
        getfiles.forEach((element) => {
            //console.log(element);
            setThumbnail('/images/product/' + element.name);
            setReview(URL.createObjectURL(element));
        })
    }

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"><h1>สินค้า</h1></div>
                    <div className="col-md-6">
                        <button className="btn btn-success title float-right" onClick={() => addProduct()} >
                            เพิ่ม
                            </button>
                    </div>
                </div>
                {Array.isArray(products.datas) &&
                    <ProductList products={products.datas} onDelProduct={delProduct} onEditProduct={editProduct} />
                }
            </div>

            <Modal isOpen={modalEdit} toggle={editProduct} className="className" >
            <ModalHeader toggle={editProduct}>{EditProduct ? 'Update Form' : 'Create Form'}</ModalHeader>
                <ModalBody>
                    <ProductForm
                        handleFileChange={handleFileChange}
                        handleSubmit={handleSubmit}
                        register={register}
                        onSubmit={onSubmit}
                        errors={errors}
                        products={EditProduct}
                        thumbnail={thumbnail}
                        reView={reView}
                        saved={saved} 
                        msg={products.msg} 
                        />
                </ModalBody>
            </Modal >

            <Footer company="Buncha" email="rungrueng.buncha@gmail.com" />
        </div>
    );


}

export default withRouter(Product);