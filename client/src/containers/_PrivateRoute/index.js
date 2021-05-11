import { Route, Redirect } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import RootContext from "../../store/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <RootContext.Consumer>
      {({ auth }) => (
        <div className="adminWrapper">
          <Sidebar />
          <main>
            <Route
              {...rest}
              render={(props) =>
                auth ? <Component {...props} /> : <Redirect to="/login" />
              }
            />
          </main>
        </div>
      )}
    </RootContext.Consumer>
  );
}

export default PrivateRoute;
