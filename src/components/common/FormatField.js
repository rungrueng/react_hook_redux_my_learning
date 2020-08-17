import React from "react";

export const formatFieldProduct = ({input,label,type,required , meta}) => {
    //console.log(meta);
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" type={type} required={required} {...input}></input>
            {meta.error && meta.touched && 
                <div className="mt-2 text-danger title">{meta.error}</div>
            }
        </div>
    );
}