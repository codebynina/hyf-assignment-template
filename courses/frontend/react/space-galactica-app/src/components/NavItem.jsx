import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive, number }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link to={link}>
        <b>{number}</b> {title}
      </Link>
    </li>
  );
};

export default NavItem;
