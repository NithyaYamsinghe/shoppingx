import { Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import UserLogin from "../pages/UserLogin";
import SellerDashboard from "../pages/SellerDashboard";
import Listings from "../components/sellersComponents/SellerListings/Listings";
import ListItem from "../components/sellersComponents/ListItem/listitem";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={UserLogin} />
      <SellerDashboard>
        <Route path="/listings" component={Listings} />
        <Route path="/listitem" component={ListItem} />
      </SellerDashboard>
    </Switch>
  );
};

export default AppRouter;
