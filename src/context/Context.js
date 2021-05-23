import React, { Component } from "react";
import { detailProduct } from "./../Data";
import { storeProducts } from "./../Data";
import {
  getItems,
  getItem,
  getCategories,
  getItemSByCategory,
} from "./../services/ItemService";
import { setDeliverInfo } from "./../services/PaymentService";

const ShoppingContext = React.createContext();
class ShoppingProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    detailProduct: detailProduct,
    cart: [],
    categories: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    currentUser: "",
    items: [],
    categorizedProducts: [],
    search: "",
  };

  componentDidMount = async () => {
    await this.setProducts();
    await this.setCategories();
    this.setState({
      detailProduct: this.getStorageProduct(),
      categorizedProducts: this.getStorageCategorizedProducts(),
    });
  };

  setProducts = async () => {
    const { data: products } = await getItems();
    this.setState({ products, sortedProducts: products });
  };

  setCategories = async () => {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  };

  setCategorizedProducts = async (categoryId) => {
    const { data: categorizedProducts } = await getItemSByCategory(categoryId);
    this.setState({ categorizedProducts });
    localStorage.setItem(
      "categorized product",
      JSON.stringify(categorizedProducts)
    );
  };

  getStorageCategorizedProducts = () => {
    return localStorage.getItem("categorized product")
      ? JSON.parse(localStorage.getItem("categorized product"))
      : {};
  };

  getProduct = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    this.setState({ detailProduct: product });
    localStorage.setItem("product", JSON.stringify(product));
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  getStorageProduct = () => {
    return localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : {};
  };

  // Add To cart Method implementation

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          product: tempProducts,
          cart: [...this.state.cart, product],
          items: [...this.state.items, product.id],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Open Modal Implemetation
  openModal = async (id) => {
    const { data: product } = await getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  // Close Modal Implemetation
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // Cart Incerement Implementation
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          items: [...this.state.items, product.id],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Cart Decrement Implementation
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  // Cart Remove Item Implementation
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Clear Cart Implementation
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  // Add Totals Implementation
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  // handle products searching
  handleProductChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortProductData
    );
  };

  sortProductData = () => {
    const { products, search } = this.state;
    let tempProducts = [...products];

    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.name.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedProducts: tempProducts,
    });
  };

  render() {
    return (
      <ShoppingContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          getProduct: this.getProduct,
          setCategorizedProducts: this.setCategorizedProducts,
          handleProductChange: this.handleProductChange,
        }}
      >
        {this.props.children}
      </ShoppingContext.Provider>
    );
  }
}

const ShoppingConsumer = ShoppingContext.Consumer;
export { ShoppingProvider, ShoppingConsumer, ShoppingContext };
