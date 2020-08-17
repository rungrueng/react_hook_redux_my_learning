import React , { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { formatFieldProduct } from "../common/FormatField";
import { formFieldProduct } from "../common/FormFields";
import { connect } from "react-redux";

class ProductForm extends Component{

    renderFields(formFieldProduct){
        return formFieldProduct.map(res => {
            return (
                <Field key={res.id} label={res.label} name={res.name} type={res.type} component={formatFieldProduct}  required={res.required}/>
            );
        });
    }
 
    render(){
        const { onProductSubmit } = this.props;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFields(formFieldProduct)}
                    {/* <Field name="productName" type="text" component="input" />    
                    <Field name="unitPrice" type="number" component="input" />
                    <Field name="thumbnail" type="text" component="input" />*/}
                    <button className="btn btn-block btn-info title" type="submit">บันทึก</button>
                </form>
            </div>
        )
    }

}

function validate(value) {
    //console.log(value);
    const msgError = {};
    formFieldProduct.forEach(({name,required}) => {
        if(!value[name] && required){
            msgError[name] = "กรุณากรอกข้อมูล ด้วยนะค่ะ";
        }
    });
    return msgError;
}

function mapToPropState({products}){
    if(products && products.id){
        return { initialValues : products };
    }else{
        return {};
    }
}


ProductForm = reduxForm({ validate, form : "productForm" })(ProductForm);

export default connect(mapToPropState)(ProductForm);