import "./PageMain.scss";
import { Promo } from "../../components/Promo/Promo";
import { Product } from "../../components/Product/Product";
import { Production } from "../../components/Production/Production"
import { Offers } from "../../components/Offers/Offers"
import { Layout } from "../../Layout/Layout";
import { Feedback } from "../../components/Feedback/Feedback"

export const PageMain = () => {
  return <Layout theme="orange">
          <Promo />
          <Product />
          <Production />
          <Offers />
          <Feedback />
        </Layout>;
};
