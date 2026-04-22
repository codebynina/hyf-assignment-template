import styles from "./AboutUsPage.module.css";
import OurValues from "./OurValues";
import OurCrew from "./OurCrew";
import OurPartners from "./OurPartners";

export const Crew = () => {
  return (
    <div className={styles.app}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>About Us</h1>

        <section className={styles.card}>
          <h2>Our Values</h2>
          <OurValues />
        </section>

        <section className={styles.card}>
          <h2>The Crew</h2>
          <OurCrew />
        </section>

        <section className={styles.card}>
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
