import styles from "./AboutUsPage.module.css";

const crewMembers = [
  {
    name: "Captain Sarah Vega",
    image: "/crew/image-anousheh-ansari.png",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    name: "Dr. Leo Redding",
    image: "/crew/image-douglas-hurley.webp",
    description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    name: "Chief Engineer Hana Lee",
    image: "/crew/image-anousheh-ansari.png",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    name: "Mission Specialist Alex Santos",
    image: "/crew/image-victor-glover.png",
    description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    name: "Crew Member Maya Patel",
    image: "/crew/image-anousheh-ansari.png",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];

const OurCrew = () => {
  return (
    <section className={styles.crew}>
      <p className={styles.crewText}>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>

      <div className={styles.crewList}>
        {crewMembers.map((member) => (
          <div className={styles.crewMember} key={member.name}>
            <img
              className={styles.crewImage}
              src={member.image}
              alt={member.name}
            />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCrew;
