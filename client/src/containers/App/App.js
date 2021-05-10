import Routes from "../_routes";
import AootContext from "../../store/authContext";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiRequest, resetAuthToken } from "../../utils/request";
import { GET_AUTH_STATUS } from "../../utils/urls";

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
  }, []);
  return (
    <AootContext.Provider value={{ auth, setUser }} className="App">
      <Routes />
      <ToastContainer />
    </AootContext.Provider>
  );
}

export default App;
