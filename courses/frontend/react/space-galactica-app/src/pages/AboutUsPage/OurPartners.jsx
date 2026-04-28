import styles from "./AboutUsPage.module.css";

const OurPartners = () => {
  return (
    <section className={styles.collaborator}>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <img
        className={styles.partnerImage}
        src="/data/inspiration_about_us/our_partners.png"
        alt="Our Partners"
      />
    </section>
  );
};

export default OurPartners;
