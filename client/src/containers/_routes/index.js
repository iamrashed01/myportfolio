import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRoute from "../_PublicRoute";
import PrivateRoute from "../_PrivateRoute";
import Dashboard from "../admin/Dashboard";
import UserInfo from "../admin/UserInfo";
import LoginPage from "../LoginPage";
import CreateProject from "../admin/CreateProject";
import AdminProjects from "../admin/Projects";
import EditProject from "../admin/EditProject";
import ProjectDetails from "../ProjectDetails";
import Projects from "../Projects";

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
        <PrivateRoute exact path="/admin/projects" component={AdminProjects} />
        <PrivateRoute
          exact
          path="/admin/edit-project/:slug"
          component={EditProject}
        />
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute exact path="/project" component={Projects} />
        <PublicRoute exact path="/project/:slug" component={ProjectDetails} />
        <PublicRoute exact path="/skill" component={HomePage} />
        <PublicRoute exact path="/skill" component={HomePage} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <Route exact component={() => "page not found"} />
      </Switch>
    </Router>
  );
};

export default Routes;
