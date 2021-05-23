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
import PrivateRoute from "./../components/common/PrivateRoute";
import ResetPasswordScreen from "./../pages/ResetPasswordScreen";
import ProductScreen from "./../pages/ProductScreen";

const AppRouter = () => {
  return (
    <React.Fragment>
      <SideNavBar />
      <Switch>
        <Route exact path="/" component={LoginScreen}></Route>
        <PrivateRoute
          path="/products/:id"
          component={ProductScreen}
        ></PrivateRoute>
        <PrivateRoute
          path="/products"
          component={ProductsScreen}
        ></PrivateRoute>
        <PrivateRoute path="/details" component={DetailsScreen}></PrivateRoute>
        <PrivateRoute path="/cart" component={CartScreen}></PrivateRoute>
        <Route path="/register" component={RegisterScreen}></Route>
        <PrivateRoute path="/payment" component={PaymentScreen}></PrivateRoute>
        <PrivateRoute path="/deliver" component={DeliverScreen}></PrivateRoute>
        <Route path="/resetPassword" component={ResetPasswordScreen}></Route>
        <PrivateRoute component={Default}></PrivateRoute>
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;
