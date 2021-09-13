import { useState } from "react";

import LoginContext from "./login-context";

const LoginProvider = (props) => {
  const [logIn, setLogIn] = useState(false);

  const loginHandler = () => {
    setLogIn(true);
  };

  const logoutHandler = () => {
    setLogIn(false);
  };

  const value = {
    isLoggedIn: logIn,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
