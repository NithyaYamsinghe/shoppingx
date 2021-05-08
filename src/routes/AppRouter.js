import { Switch, Route } from "react-router-dom";
import Index from "../pages/Index";
import UserLogin from "../pages/UserLogin";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={UserLogin} />
    </Switch>
  );
};

export default AppRouter;
