import "./Layout.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const Layout = ({ theme, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer theme={theme} />
    </>
  );
};
