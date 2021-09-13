import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: true,
  onLogin: () => {},
  onLogout: () => {},
});

export default LoginContext;
