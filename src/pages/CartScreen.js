import React from "react";
import CartColumns from "./../components/Cart/CartColumns";
import CartTotals from "./../components/Cart/CartTotals";
import CartList from "./../components/Cart/CartList";
import EmptyCart from "./../components/Cart/EmptyCart";
import Title from "./../components/common/Title";
import { ShoppingConsumer } from "./../context/Context";

const CartScreen = () => {
  return (
    <section>
      <ShoppingConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <div className="py-5">
                  <div className="container">
                    <Title name="your" title="cart" />
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} />
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ShoppingConsumer>
    </section>
  );
};

export default CartScreen;
