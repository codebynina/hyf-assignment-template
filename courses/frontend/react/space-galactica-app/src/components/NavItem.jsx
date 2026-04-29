import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive, number }) => {
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
