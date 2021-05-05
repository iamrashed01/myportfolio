import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  let redirect = null;
  return (
    <Route
      {...rest}
      render={(props) =>
        !redirect ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

export default PrivateRoute;
