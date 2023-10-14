import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { PagePhoto } from "../../pages/PagePhoto/PagePhoto";
import { PageMain } from "../../pages/PageMain/PageMain";
import { PageCatalog } from "../../pages/PageCatalog/PageCatalog";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/photo" element={<PagePhoto />} />
          <Route path="/catalog" element={<PageCatalog />} />
          <Route path="*" element={<h2>Страница не найдена</h2>} />
        </Routes>
        <h1>Develop</h1>
      </Layout>
    </>
  );
};

export default App;
