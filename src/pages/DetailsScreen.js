import React from "react";
import { ShoppingConsumer } from "./../context/Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./../components/common/Button";

const DetailsScreen = () => {
  return (
    <ShoppingConsumer>
      {(value) => {
        const { id, company, img, info, price, title, inCart } =
          value.detailProduct;
        return (
          <div className="container py-5">
            {/* Title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>

            {/* End Of Title */}
            {/* Product Information */}
            <div className="row">
              {/* Product Image */}
              <div className="col-10 mx-auto col-md-6 my-3 ">
                <img src={img} alt="Produc" className="img-fluid" />
              </div>
              {/* Product Text*/}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model:{title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by :<span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize fon-weight-blod mt-3 mb-0">
                  some info about the product:
                </p>
                <p className="text-muted lead">{info}</p>
                {/* Buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>Back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
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
