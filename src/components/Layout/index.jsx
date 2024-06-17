import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import cn from "./style.module.scss";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
