import React from "react";
import Product from "./../components/Products/Product";
import { ShoppingConsumer } from "./../context/Context";
import SearchBox from "../components/common/SearchBox";

const ProductScreen = () => {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <ShoppingConsumer>
              {(value) => {
                return value.categorizedProducts.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      images={product.images}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      category={product.categoryId}
                      description={product.description}
                      quantity={product.quantity}
                      inCart={product.inCart}
                    />
                  );
                });
              }}
            </ShoppingConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductScreen;
