import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";

export const RootLayout = ({ children }) => {
  return (
    <div className="inter">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
