import React from "react";
import Product from "./../components/Products/Product";
import { ShoppingConsumer } from "./../context/Context";
import SearchBox from "../components/common/SearchBox";

const ProductsScreen = () => {
  return (
    <ShoppingConsumer>
      {(value) => {
        const { sortedProducts, search, handleProductChange } = value;
        return (
          <React.Fragment>
            <div className="py-5">
              <div className="container">
                <SearchBox
                  placeholder="Search"
                  handleChange={handleProductChange}
                  search={search}
                />
                {sortedProducts.length === 0 ? (
                  <center>
                    <h5 className="text-blue mt-5 mb-0">
                      sorry, no items matched your search
                    </h5>
                  </center>
                ) : (
                  <div className="row">
                    {sortedProducts.map((product) => {
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
                    })}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </ShoppingConsumer>
  );
};

export default ProductsScreen;
