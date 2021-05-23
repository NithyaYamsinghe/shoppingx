import React from "react";
import { ShoppingConsumer } from "./../context/Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./../components/common/Button";

const DetailsScreen = () => {
  return (
    <ShoppingConsumer>
      {(value) => {
        const {
          id,
          name,
          images,
          price,
          category,
          description,
          quantity,
          inCart,
        } = value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{name}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 ">
                <img src={images[0]} alt="Produc" className="img-fluid" />
              </div>

              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>
                  Item Price:<span>Rs.</span>
                  {price}
                </h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  Category :<span className="text-uppercase">{category}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    Quntity Available:
                    {quantity}
                  </strong>
                </h4>
                <p className="text-capitalize fon-weight-blod mt-3 mb-0">
                  some info about the product:
                </p>
                <p className="text-muted lead">{description}</p>

                <div>
                  <Link to="/">
                    <ButtonContainer>Back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.openModal(id);
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ShoppingConsumer>
  );
};

export default DetailsScreen;
