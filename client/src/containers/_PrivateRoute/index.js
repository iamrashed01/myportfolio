import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import RootContext from "../../store/authContext";
import Sidebar from "../../components/sidebar";

function PrivateRoute({ component: Component, ...rest }) {
  let redirect = null;
  const context = useContext(RootContext);

  if (context.auth) {
    redirect = null;
  } else if (rest.path !== "/login") {
    redirect = {
      pathname: "/login",
      state: { from: rest.location },
    };
  }

  return (
    <div className="adminWrapper">
      <Sidebar />
      <main>
        <Route
          {...rest}
          render={(props) =>
            !redirect ? <Component {...props} /> : <Redirect to={redirect} />
          }
        />
      </main>
    </div>
  );
}

export default PrivateRoute;
