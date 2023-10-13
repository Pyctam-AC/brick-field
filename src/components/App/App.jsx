import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { PagePhoto } from "../../pages/PagePhoto/PagePhoto";
import { PageMain } from "../../pages/PageMain/PageMain";
import { PageContacts } from "../../pages/PageContacts/PageContacts";
import { PageDelivery } from "../../pages/PageDelivery/PageDelivery";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/photo" element={<PagePhoto />} />
        <Route path="/contacts" element={<PageContacts />} />
        <Route path="/delivery" element={<PageDelivery />} />
        <Route path="*" element={<h2>Страница не найдена</h2>} />
      </Routes>
    </>
  );
};

export default App;
