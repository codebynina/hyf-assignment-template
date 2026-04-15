import styles from "./AboutUsPage.module.css";

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

const OurValues = () => {
  // 🧑🏽‍🚀 Task - Week 1

  return (
    <section className={styles.values}>
      <div className={styles.valueItem}>
        <h3>Exploration </h3>
        <p>
          We are driven by a deep-seated desire to explore the unknown. We
          believe that the pursuit of discovery is at the heart of human nature,
          and we are committed to pushing the boundaries of what is possible.
        </p>
      </div>
      <div className={styles.valueItem}>
        <h3>Innovation </h3>
        <p>
          At Galactica, we prioritize cutting-edge technology and innovation. We
          are constantly evolving our spacecraft, safety protocols, and services
          to ensure that our travelers experience the most advanced and secure
          space journeys available.
        </p>
      </div>
      <div className={styles.valueItem}>
        <h3>Sustainability </h3>
        <p>
          We are committed to making space exploration sustainable for future
          generations. Our space missions are designed to minimize environmental
          impact, both on Earth and in space, and to foster a spirit of
          responsibility towards our universe.
        </p>
      </div>
      <div className={styles.valueItem}>
        <h3>Community</h3>
        <p>
          We believe in the power of collective exploration. Our journeys are
          not just about reaching new destinations; they are about building a
          community of space enthusiasts who share a passion for the stars.
        </p>
      </div>
    </section>
  );
};

const OurCrew = () => {
  return (
    <section className={styles.crew}>
      <p className={styles.crewText}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>

      <div className={styles.crewList}>
        <div className={styles.crewMember}>
          <img
            className={styles.crewImage}
            src="/crew/image-anousheh-ansari.png"
            alt="Captain Sarah Vega"
          />
          <h3>Captain Sarah Vega</h3>
          <p>
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            className={styles.crewImage}
            src="/crew/image-douglas-hurley.webp"
            alt="Dr. Leo Redding"
          />
          <h3>Dr. Leo Redding</h3>
          <p>
            Our chief astrophysicist, Dr. Redding, is a renowned scientist who
            has contributed to major space discoveries. He ensures that every
            journey is as educational as it is exhilarating.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            className={styles.crewImage}
            src="/crew/image-anousheh-ansari.png"
            alt="Chief Engineer Hana Lee"
          />
          <h3>Chief Engineer Hana Lee</h3>
          <p>
            With her extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            className={styles.crewImage}
            src="/crew/image-victor-glover.png"
            alt="Mission Specialist Alex Santos"
          />
          <h3>Mission Specialist Alex Santos</h3>
          <p>
            As a mission specialist, Alex’s job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </div>

        <div className={styles.crewMember}>
          <img
            className={styles.crewImage}
            src="/crew/image-anousheh-ansari.png"
            alt="Crew Member Maya Patel"
          />
          <h3>Crew Member Maya Patel</h3>
          <p>
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She’s always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

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
