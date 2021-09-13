import React, { Fragment, useContext } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import LoginContext from "./store/login-context";
import Header from "./Components/Layout/Header";

function App() {
  const loginCtx = useContext(LoginContext);

  return (
    <Fragment>
      {loginCtx.isLoggedIn && <Header />}
      {!loginCtx.isLoggedIn && <Login />}
      {loginCtx.isLoggedIn && <Profile />}
    </Fragment>
  );
}

export default App;
