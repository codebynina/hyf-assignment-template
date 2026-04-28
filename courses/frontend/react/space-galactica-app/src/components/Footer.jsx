import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import SocialMediaItem from "./SocialMediaItem";

export const Footer = () => {
  const { pathname } = useLocation();
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Destinations",
      path: "/destinations",
    },
    { name: "About Us", path: "/about-us" },
  ];

  const socialMedia = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: "/socialmedia/linkedin.png",
    },

    {
      title: "Instagram",
      url: "https://instagram.com",
      icon: "/socialmedia/instagram.jpg",
    },
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
        <ul>
          {pages.map((page) => (
            <li key={page.path}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMedia.map((item) => (
            <SocialMediaItem
              key={item.url}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
