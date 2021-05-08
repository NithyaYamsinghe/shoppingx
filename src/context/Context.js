import React, { Component } from "react";

const ShoppingContext = React.createContext();
class ShoppingProvider extends Component {
  state = {
    name: "Nithya",
  };
  render() {
    return (
      <ShoppingContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ShoppingContext.Provider>
    );
  }
}

const ShoppingConsumer = ShoppingContext.Consumer;
export { ShoppingProvider, ShoppingConsumer, ShoppingContext };
