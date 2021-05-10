import React from "react";

const initialState = {
  default: "AuthContext rashed",
};
const AuthContext = React.createContext(initialState);
export default AuthContext;
