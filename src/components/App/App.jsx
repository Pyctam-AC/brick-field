import "./App.scss";
import Layout from "../../Layout/Layout";
import { ContactUs } from "../ContactUsSmall/ContactUsSmall";

const App = () => {
  return (
    <>
      <Layout>
        <h1>Develop</h1>
        <ContactUs size="small" />
      </Layout>
    </>
  );
};

export default App;
