import HeaderProfileButton from "./HeaderProfileButton";
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <p>Rally Health India</p>
      <span>
      <HeaderProfileButton />
      </span>
    </header>
  );
};

export default Header;
