import React , { Component } from "react";
import ProductForm from "../../components/product/ProductForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import { productFetch , productCreate , productUpdate } from "../../actions";

class ProductEdit extends Component {

    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetch(this.props.match.params.id);
        }
    }
     
    render() {
        const { formValues, match , products , productCreate , productUpdate} = this.props;
        console.log(products);
        return(
            <div>
                <Header />
                <div className="container col-md-5">
                    {match.path.indexOf('add') > 0 && 
                    <div>
                        <h1>เพิ่มรายการสินค้า</h1>
                        {products.saved &&
                            <div className="alert alert-success title">{products.msg}</div>
                        }
                        <ProductForm onProductSubmit={() => productCreate(formValues)} />
                    </div>
                    }
                    {match.path.indexOf('edit') > 0 && 
                    <div>
                        <h1>แก้ไขรายการสินค้า</h1>
                        {products.saved &&
                            <div className="alert alert-success title">{products.msg}</div>
                        }
                        <ProductForm onProductSubmit={() => productUpdate(products.id,formValues)}/>
                    </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
    
}

function mapToPropsState({form,products}){
    //console.log(form);
    return { formValues : form.productForm ? form.productForm.values : null, products};
}

export default connect(mapToPropsState,{productFetch,productCreate,productUpdate}) (ProductEdit);