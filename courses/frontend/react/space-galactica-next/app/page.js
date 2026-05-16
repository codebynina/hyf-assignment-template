import Link from "next/link";
import styles from "../pages/HomePage/HomePage.module.css";

const HeroSection = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.heroH5}>SO, YOU WANT TO TRAVEL TO</p>
        <p className={styles.heroJumbo}>SPACE</p>
        <p className={styles.heroContent}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link href="/about_us" className={styles.exploreButton}>
        EXPLORE
      </Link>
    </main>
  );
};

export default function Home() {
  return (
    <div className={styles.app}>
      <HeroSection />
    </div>
  );
}
