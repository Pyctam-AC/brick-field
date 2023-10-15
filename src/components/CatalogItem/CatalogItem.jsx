import "./CatalogItem.scss";

const CatalogItem = ({ item }) => {
  const keys = [
    "Габаритные размеры",
    "Марка прочности",
    "Морозостойкость",
    "Пустотность",
    "Теплопроводность",
    "Средняя плотность",
    " Количество в поддоне",
  ];

  const values = [
    item.sizes,
    item.endurance,
    item.frostResistance,
    item.voidness,
    item.thermalConductivity,
    item.density,
    item.quantity,
  ];

  const table = (values) => {

    for (let i=1; i<=values.length; i++){
    console.log(values[i])}
  }

  table(values)

  return (
    <li className="catalog-item">
      <img
        src={item.image}
        className="catalog-item__image"
        alt="фото кирпиича"
      />
      <p className="catalog-item__title">{item.title}</p>
      <ul className="catalog-item__keys">
        <li
          className={
            item.sizes ? "catalog-item__key" : "catalog-item__key_invisible"
          }
        >
          Габаритные размеры
        </li>
        <li
          className={
            item.endurance ? "catalog-item__key" : "catalog-item__key_invisible"
          }
        >
          Марка прочности
        </li>
        <li
          className={
            item.frostResistance
              ? "catalog-item__key"
              : "catalog-item__key_invisible"
          }
        >
          Морозостойкость
        </li>
        <li
          className={
            item.voidness ? "catalog-item__key" : "catalog-item__key_invisible"
          }
        >
          Пустотность
        </li>
        <li
          className={
            item.thermalConductivity
              ? "catalog-item__key"
              : "catalog-item__key_invisible"
          }
        >
          Теплопроводность
        </li>
        <li
          className={
            item.density ? "catalog-item__key" : "catalog-item__key_invisible"
          }
        >
          Средняя плотность
        </li>
        <li
          className={
            item.quantity ? "catalog-item__key" : "catalog-item__key_invisible"
          }
        >
          Количество в поддоне
        </li>
      </ul>
      <ul className="catalog-item__values">
        <li className="catalog-item__value">{item.sizes}</li>
        <li className="catalog-item__value">{item.endurance}</li>
        <li className="catalog-item__value">{item.frostResistance}</li>
        <li className="catalog-item__value">{item.voidness}</li>
        <li className="catalog-item__value">{item.thermalConductivity}</li>
        <li className="catalog-item__value">{item.density}</li>
        <li className="catalog-item__value">{item.quantity}</li>
      </ul>
      <div className="catalog-item__prise-container">
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
