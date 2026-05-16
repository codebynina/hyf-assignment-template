"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import styles from "./Footer.module.css";

export const Footer = () => {
  const pathname = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destination" },
    { name: "NASA Collaboration", path: "/nasa_collaboration" },
    { name: "About Us", path: "/about_us" },
  ];

  const socialMedia = [
    { title: "Facebook", url: "https://facebook.com", icon: <FaFacebookF /> },
    { title: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
    { title: "X", url: "https://x.com", icon: <FaXTwitter /> },
    { title: "YouTube", url: "https://youtube.com", icon: <FaYoutube /> },
    { title: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>

        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>

        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>

        <ul className={styles.footerList}>
          {pages.map((page) => (
            <li key={page.path}>
              <Link href={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>

        <div className={styles.socialIcons}>
          {socialMedia.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.title}
              className={styles.socialIcon}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
