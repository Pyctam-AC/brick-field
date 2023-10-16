import "./CatalogItem.scss";
import { KEYS as keys } from "../../utils/constants";

const CatalogItem = ({ item }) => {
  const values = [
    item.sizes,
    item.endurance,
    item.frostResistance,
    item.voidness,
    item.thermalConductivity,
    item.density,
    item.quantity,
  ];

  const table = (values, keys) => {
    const resVal = [];
    const resKeys = [];
    for (let i = 0; i <= values.length; i++) {
      if (values[i] !== "") {
        resVal.push(values[i]);
        resKeys.push(keys[i]);
      }
    }
    return [resVal, resKeys];
  };

  const renderList = table(values, keys);

  const setClassNamePrise = () => {
    if (renderList[0].length > 1) {
      return "catalog-item__prise-container";
    } else {
      return "catalog-item__prise-container catalog-item__prise-container_prise-only";
    }
  };

  return (
    <li className="catalog-item" id={item.title}>
      <img
        src={item.image}
        className="catalog-item__image"
        alt="фото кирпиича"
      />
      <p className="catalog-item__title">{item.title}</p>
      <ul className="catalog-item__keys">
        {renderList[1].map((el, i) => {
          return (
            <li key={i} className="catalog-item__key">
              {el}
            </li>
          );
        })}
      </ul>
      <ul className="catalog-item__values">
        {renderList[0].map((el, i) => {
          return (
            <li key={i} className="catalog-item__value">
              {el}
            </li>
          );
        })}
      </ul>
      <div className={setClassNamePrise()}>
        <p className="catalog-item__prise">
          {item.praise}{" "}
          <span className="catalog-item__prise_black">р./ед.</span>
        </p>
        <p className="catalog-item__prise-date">Цена на {item.date}</p>
      </div>
      <p className="catalog-item__span">
        Цена указана розничная, в зависимости от условий и объемов поставок с
        каждым покупателем будет обсуждаться индивидуально.
      </p>
    </li>
  );
};

export default CatalogItem;
