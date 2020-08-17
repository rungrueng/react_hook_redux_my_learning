import React from "react";

const ProductForm = (props) => {

    const { register, errors, handleSubmit, onSubmit, handleFileChange, products, thumbnail, reView, saved, msg } = props;

    return (
        <div>
            {saved &&
                <div className="alert alert-success title">{msg}</div>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input className="form-control"
                        type="text"
                        placeholder="ชื่อสินค้า"
                        name="productName"
                        defaultValue={!products ? '' : products.productName}
                        ref={register({ required: true, maxLength: 50 })} />
                    {errors.productName &&
                        <div className="mt-2 text-danger title">กรุณากรอกชื่อสินค้าด้วยครับ</div>
                    }
                </div>
                <div className="form-group">
                    <input className="form-control"
                        type="text"
                        placeholder="ราคา"
                        name="unitPrice"
                        defaultValue={!products ? '' : products.unitPrice}
                        ref={register({ required: 'error message', maxLength: 7 })} />
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
                    <input className="form-control" type="hidden" placeholder="รูปภาพ" name="thumbnail" defaultValue={!products ? thumbnail : products.thumbnail} ref={register({ required: false })} />
                </div>
                {(reView || products) &&
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