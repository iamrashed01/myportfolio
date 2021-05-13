import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "../_PublicRoute";
import PrivateRoute from "../_PrivateRoute";
import Dashboard from "../admin/Dashboard";
import UserInfo from "../admin/UserInfo";
import LoginPage from "../LoginPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/admin" component={Dashboard} />
        <PrivateRoute path="/user-info" component={UserInfo} />
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute path="/project" component={HomePage} />
        <PublicRoute path="/skill" component={HomePage} />
        <PublicRoute path="/skill" component={HomePage} />
        <PublicRoute path="/login" component={LoginPage} />
        <Route exact component={() => "page not found"} />
      </Switch>
    </Router>
  );
};

export default Routes;
