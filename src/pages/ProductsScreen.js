import React from "react";
import Product from "./../components/Products/Product";
import Title from "./../components/common/Title";
import { ShoppingConsumer } from "./../context/Context";
import SearchBox from "../components/common/SearchBox";
import { useAuth } from "./../context/AuthContext";

const ProductsScreen = () => {
  const { currentUserType } = useAuth();
  console.log(currentUserType);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <SearchBox placeholder="Search" />
          <div className="row">
            <ShoppingConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      img={product.img}
                      id={product.id}
                      title={product.title}
                      price={product.price}
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

export default ProductsScreen;
