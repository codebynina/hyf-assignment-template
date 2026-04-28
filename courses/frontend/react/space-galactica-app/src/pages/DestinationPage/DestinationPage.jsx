import { useState } from "react";
import styles from "./DestinationPage.module.css";
import PlanetCard from "./PlanetCard";

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

  const togglePlanetSelection = (name, thumbnail) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist(name, thumbnail);
    }
  };

  const addPlanetToWishlist = (name, thumbnail) => {
    setPlanetsWishlist([...planetsWishlist, { name, thumbnail }]);
  };
  const removePlanetFromWishlist = (name) => {
    const updated = planetsWishlist.filter((planet) => planet.name !== name);
    setPlanetsWishlist(updated);
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
        </section>

        <section className="card">
          <h2>Possible destinations</h2>

          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Use the AddWishlistItem component here. */}

          {/* 🧑🏽‍🚀 Task - Week 3
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            ...
            Use .map() to display the wishlist planets with the PlanetsWishlistItem component. 
          </div> 
          */}

          <PlanetCard
            name="Europa"
            description="Europa is one of Jupiter’s moons."
            thumbnail="/destination/image-europa.png"
            isSelected={isPlanetInWishlist("Europa")}
            togglePlanetSelection={togglePlanetSelection}
          />

          <PlanetCard
            name="Moon"
            description="The Moon is Earth’s closest neighbor."
            thumbnail="/destination/image-moon.png"
            isSelected={isPlanetInWishlist("Moon")}
            togglePlanetSelection={togglePlanetSelection}
          />

          <PlanetCard
            name="Mars"
            description="Mars is known as the Red Planet."
            thumbnail="/destination/image-mars.png"
            isSelected={isPlanetInWishlist("Mars")}
            togglePlanetSelection={togglePlanetSelection}
          />

          <PlanetCard
            name="Titan"
            description="Titan is Saturn’s largest moon."
            thumbnail="/destination/image-titan.png"
            isSelected={isPlanetInWishlist("Titan")}
            togglePlanetSelection={togglePlanetSelection}
          />
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
