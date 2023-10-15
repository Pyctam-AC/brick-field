import "./PageCatalog.scss";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { catalogList } from "../../utils/constants";
export const PageCatalog = () => {
  return (
    <section className="page-catalog">
      <h2 className="page-catalog__title">Каталог</h2>
      <ul className="page-catalog__list">
        {catalogList.map((el, i) => (
          <CatalogItem item={el} key={i} />
        ))}
      </ul>
    </section>
  );
};
