import React from "react";
import { useForm } from 'react-hook-form';
import { productCreate, productUpdate } from "../../actions";

const ProductForm = (props) => {

    const { dispatch, products, match } = props;

    const [reView, setReview] = React.useState(null)
    const [thumbnail, setThumbnail] = React.useState(null)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        //console.log(data)
        if (match.path.indexOf('edit') > 0) {
            dispatch(productUpdate(products.id, data))
        } else {
            dispatch(productCreate(data))
        }
    }

    //console.log(thumbnail)

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="ชื่อสินค้า" name="productName" defaultValue={products.productName} ref={register({ required: true, maxLength: 50 })} />
                    {errors.productName &&
                        <div className="mt-2 text-danger title">กรุณากรอกชื่อสินค้าด้วยครับ</div>
                    }
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="ราคา" name="unitPrice" defaultValue={products.unitPrice} ref={register({ required: 'error message', maxLength: 7 })} />
                    {errors.unitPrice &&
                        <div className="mt-2 text-danger title">กรุณากรอกราคาสินค้าด้วยครับ</div>
                    }
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="fileUpload">
                                Upload
                            </span>
                        </div>
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                id="fileUpload"
                                aria-describedby="inputGroupFileAddon01"
                                onChange={(e) => handleFileChange(e)}
                            />
                            <label className="custom-file-label" htmlFor="fileUpload">
                                Choose file
                            </label>
                        </div>
                    </div>
                    <input className="form-control" type="hidden" placeholder="รูปภาพ" name="thumbnail" defaultValue={!thumbnail ? products.thumbnail : thumbnail} ref={register({ required: false })} />
                </div>
                {(reView || match.path.indexOf('edit') > 0) &&
                    <div className="col-md-9 text-center mt-2 mb-3" style={{ margin: 'auto' }}>
                        <img src={!reView ? products.thumbnail : reView} width="100%" alt="" style={{ borderRadius: 6 }} />
                    </div>
                }
                <button className="btn btn-block btn-info title" type="submit">บันทึก</button>
            </form>
        </div>
    )

}


export default ProductForm;