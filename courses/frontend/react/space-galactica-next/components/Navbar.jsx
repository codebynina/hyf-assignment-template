"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import { NavItem } from "./NavItem";
import { useWishlist } from "../Contexts/WishlistContext";
import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();
  const { wishlistCount } = useWishlist();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </Link>
      </div>

      <div className={styles.decorativeLine} />

      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />

        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              link={item.link}
              isActive={item.link === currentPath}
              number={`0${index + 1}`}
            />
          ))}
        </ul>

        <Badge count={wishlistCount}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
