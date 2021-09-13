import { useContext } from "react";
import LoginContext from "../store/login-context";
import Card from "./UI/Card";
import classes from "./Login.module.css";

const Login = () => {

    const loginCtx = useContext(LoginContext);

    const onSubmitHandler = event => {
        event.preventDefault();
        loginCtx.onLogin();
    }

  return (
    <div className={classes.header}>
      <Card>
        <p>LOGIN</p>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <input type="text" placeholder="ID" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className={classes.a}>
            <button className={classes.button} type="submit">Login</button>
          </div>
          
        </form>
      </Card>
    </div>
  );
};

export default Login;
