import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "../_PublicRoute";
import PrivateRoute from "../_PrivateRoute";
import Dashboard from "../admin/Dashboard";
import UserInfo from "../admin/UserInfo";
import LoginPage from "../LoginPage";
import CreateProject from "../admin/CreateProject";
import Projects from "../admin/Projects";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/admin" component={Dashboard} />
        <PrivateRoute exact path="/admin/user-info" component={UserInfo} />
        <PrivateRoute
          exact
          path="/admin/create-project"
          component={CreateProject}
        />
        <PrivateRoute exact path="/admin/projects" component={Projects} />
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
