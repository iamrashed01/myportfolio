import Routes from "../_routes";
import AootContext from "../../store/authContext";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiRequest, resetAuthToken } from "../../utils/request";
import { GET_AUTH_STATUS, WELCOME_VISIT } from "../../utils/urls";

function App() {
  const [auth, setAuth] = useState(null);
  const setUser = (userData) => {
    setAuth(userData);
  };

  useEffect(() => {
    apiRequest(GET_AUTH_STATUS)
      .then((res) => {
        setAuth(res.data.status);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        resetAuthToken(null);
        setAuth(null);
      });

    apiRequest(WELCOME_VISIT);
  }, []);
  return (
    <AootContext.Provider value={{ auth, setUser }} className="App">
      <Routes />
      <ToastContainer position="top-center" />
    </AootContext.Provider>
  );
}

export default App;
