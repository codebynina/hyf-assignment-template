"use client";

import { WishlistProvider } from "../Contexts/WishlistContext";

export default function Providers({ children }) {
  return <WishlistProvider>{children}</WishlistProvider>;
}
