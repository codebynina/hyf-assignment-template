import { useState } from "react";
import { AddWishlistItem } from "./AddWishlistItem";
import PlanetCard from "./PlanetCard";
import styles from "./DestinationPage.module.css";

const planets = [
  {
    name: "Europa",
    description: "Europa is one of Jupiter’s moons.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "Moon",
    description: "The Moon is Earth’s closest neighbor.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "Mars",
    description: "Mars is known as the Red Planet.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "Titan",
    description: "Titan is Saturn’s largest moon.",
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const addPlanetToWishlist = ({ name, thumbnail }) => {
    setPlanetsWishlist([...planetsWishlist, { name, thumbnail }]);
  };

  const removePlanetFromWishlist = (name) => {
    const updated = planetsWishlist.filter((planet) => planet.name !== name);
    setPlanetsWishlist(updated);
  };

  const togglePlanetSelection = ({ name, thumbnail }) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist({ name, thumbnail });
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>

          {planetsWishlist.length === 0 ? (
            <p>No planets in your wishlist :(</p>
          ) : (
            <p>You have {planetsWishlist.length} planets in your wishlist</p>
          )}

          <h3>Your current wishlist</h3>

          <div className={styles.wishlistList}>
            {planetsWishlist.map((planet) => (
              <div className={styles.wishlistItem} key={planet.name}>
                <img
                  className={styles.wishlistItemThumbnail}
                  src={planet.thumbnail}
                  alt={planet.name}
                />
                <p>{planet.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Possible destinations</h2>

          <AddWishlistItem onAddWishlistItem={addPlanetToWishlist} />

          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={isPlanetInWishlist(planet.name)}
              togglePlanetSelection={togglePlanetSelection}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
// 🧑🏽‍🚀 Task - Week 4 - part 2
// Hate to break it to you, but you will have to make some changes to the code you already wrote.
// Now that you have context, grab and use the context data in this.
// You will need to replace some of the variables and functions with the ones from the context.
