import "./App.scss";
import Layout from "../../Layout/Layout";
import { ContactUsSmall } from "../ContactUsSmall/ContactUsSmall";
import { ContactUsLarge } from "../ContactUsLarge/ContactUsLarge";

const App = () => {
  return (
    <>
      <Layout>
        <h1>Develop</h1>
        <ContactUsLarge />
        {/* <ContactUsSmall /> */}
      </Layout>
    </>
  );
};

export default App;
