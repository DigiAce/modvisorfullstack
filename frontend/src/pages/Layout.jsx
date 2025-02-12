import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; // Assuming Footer component is located in the same folder structure.

const routes = [
  { name: "Home", path: "/", icon: null },
  { name: "About", path: "/about", icon: null },
  { name: "Services", path: "/services", icon: null },
  { name: "Contact", path: "/contact", icon: null },
];

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div>
      <Navbar brandName="MyApp" routes={routes} />
      <main>{children}</main>
      <Footer /> {/* Footer added here */}
    </div>
  );
}
