import { useContext, useState } from "react";
import LoginContext from "../../store/login-context";
import classes from "./HeaderProfileButton.module.css";
import OutsideAlerter from "./OutsideAlerter";

const HeaderProfileButton = () => {
  const loginCtx = useContext(LoginContext);

  const onLogoutClickHandler = () => {
    loginCtx.onLogout();
  };

  const [dropdown, setDropdown] = useState(false);

  const onClickHandler = () => {
    if (dropdown) setDropdown(false);
    else setDropdown(true);
  };

  const outsideClickHandler = () => {
    setDropdown(false);
  };

  return (
    <OutsideAlerter onClick={outsideClickHandler}>
      <div>
        <button className={classes.button} onClick={onClickHandler}>
          Profile
        </button>
        {dropdown && (
          <div className={classes.dropdown}>
            <ul>
              <li>
                <button>Settings</button>
              </li>
              <li>
                <button onClick={onLogoutClickHandler}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </OutsideAlerter>
  );
};

export default HeaderProfileButton;
