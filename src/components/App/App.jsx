import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { PagePhoto } from "../../pages/PagePhoto/PagePhoto";
import { PageMain } from "../../pages/PageMain/PageMain";
import Supply from "../Supply/Supply";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/photo" element={<PagePhoto />} />
          <Route path="/provision" element={<Supply />} />
          <Route path="*" element={<h2>Страница не найдена</h2>} />
        </Routes>
        <h1>Develop</h1>
      </Layout>
    </>
  );
};

export default App;
