import { Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import UserLogin from "../pages/UserLogin";
import SetCard from "C:/Users/MY PC/Documents/shoppingx/src/pages/payment";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={UserLogin} />
      <Route path="/payment" component={SetCard} />
    </Switch>
  );
};

export default AppRouter;
