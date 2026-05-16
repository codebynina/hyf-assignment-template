import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const isPlanetInWishlist = (planetName) => {
    return planetsWishlist.some((planet) => planet.name === planetName);
  };

  const addPlanetToWishlist = ({ name, thumbnail }) => {
    if (isPlanetInWishlist(name)) return;

    setPlanetsWishlist((currentWishlist) => [
      ...currentWishlist,
      { name, thumbnail },
    ]);
  };

  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist((currentWishlist) =>
      currentWishlist.filter((planet) => planet.name !== name),
    );
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
