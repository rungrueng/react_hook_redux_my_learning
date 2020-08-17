import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {

  //console.log('list');
  //console.log(props.products);
  return (
    <div className="row">
      {props.products &&
        props.products.map(product => (
          <ProductItem key={product.id}
            product={product}
            onAddOrder={props.onAddOrder}
            onDelProduct={props.onDelProduct}
            onEditProduct={props.onEditProduct}
          />
        ))
      }
    </div>
  )

}

export default ProductList;
