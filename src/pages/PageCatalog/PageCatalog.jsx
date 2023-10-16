import "./PageCatalog.scss";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { catalogList } from "../../utils/constants";
import { Layout } from "../../Layout/Layout";
import { NavigationAdress } from "../../components/NavigationAdress/NavigationAdress";
export const PageCatalog = () => {
  return (
    <>
    <Layout theme="orange">
    <section className="page-catalog">
    <NavigationAdress />
      <h2 className="page-catalog__title">Каталог</h2>
      <ul className="page-catalog__list">
        {catalogList.map((el, i) => (
          <CatalogItem item={el} key={i} />
        ))}
      </ul>
    </section>
    </Layout>
    </>
  );
};
