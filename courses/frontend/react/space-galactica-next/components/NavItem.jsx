"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export const NavItem = ({ title, link, isActive, number }) => {
  return (
    <li
      className={`${styles.navbarLinks} ${isActive ? styles.isLinkActive : ""}`}
    >
      <Link href={link}>
        <b>{number}</b> {title}
      </Link>
    </li>
  );
};
