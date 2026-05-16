import styles from "./NasaCollaborationPage.module.css";

export const SpaceNameGenerator = () => {
  return (
    <section className="card">
      <h2>Spell your name from space</h2>

      <p>
        NASA created an interactive experience that lets you generate your name
        using real Landsat satellite imagery from Earth.
      </p>

      <a
        href="https://science.nasa.gov/specials/your-name-in-landsat/?mode=kiosk"
        target="_blank"
        rel="noreferrer"
        className={styles.nasaLandsatLink}
      >
        Open NASA Landsat Name Generator
      </a>
    </section>
  );
};
