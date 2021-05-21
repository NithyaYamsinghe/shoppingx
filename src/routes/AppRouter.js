import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsScreen from "./../pages/ProductsScreen";
import DetailsScreen from "./../pages/DetailsScreen";
import CartScreen from "./../pages/CartScreen";
import Default from "./../components/common/Default";
import React from "react";
import Footer from "./../components/common/Footer";
import Modal from "./../components/common/Modal";
import SideNavBar from "./../components/common/SideNavBar";
import LoginScreen from "./../pages/LoginScreen";
import RegisterScreen from "./../pages/RegisterScreen";
import PaymentScreen from "../pages/PaymentScreen";
import DeliverScreen from "./../pages/DeliverScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <SideNavBar />
      <Switch>
        <Route exact path="/" component={ProductsScreen}></Route>
        <Route path="/details" component={DetailsScreen}></Route>
        <Route path="/cart" component={CartScreen}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/payment" component={PaymentScreen}></Route>
        <Route path="/deliver" component={DeliverScreen}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;
