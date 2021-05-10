import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import RootContext from "../../store/authContext";

function PublicRoute({ component: Component, ...rest }) {
  let redirect = null;
  const context = useContext(RootContext);

  if (context.auth && rest.path === "/login") {
    redirect = "/admin";
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        !redirect ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

export default PublicRoute;
