import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "../_PublicRoute";
import PrivateRoute from "../_PrivateRoute";
import AdminDashboard from "../AdminDashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project" component={HomePage} />
        <PublicRoute path="/skill" component={HomePage} />
        <PublicRoute path="/blog" component={HomePage} />
        <PrivateRoute path="/admin" component={AdminDashboard} />
        <Route exact component={() => "page not found"} />
      </Switch>
    </Router>
  );
};

export default Routes;
