import "./Layout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";

export const Layout = ({ theme, children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer theme={theme} />
    </>
  );
};
