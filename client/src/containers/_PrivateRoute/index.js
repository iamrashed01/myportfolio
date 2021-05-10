import { Route, Redirect } from "react-router-dom";
import RootContext from "../../store/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <RootContext.Consumer>
      {({ auth }) => (
        <>
          <Route
            {...rest}
            render={(props) =>
              auth ? <Component {...props} /> : <Redirect to="/login" />
            }
          />
        </>
      )}
    </RootContext.Consumer>
  );
}

export default PrivateRoute;
