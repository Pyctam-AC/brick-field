import "./Promo.scss";
import { useState } from "react";
import { Alert } from "../Alert/Alert";
import { PatternFormat } from "react-number-format";
import promoImage from "../../pages/PageMain/images/promo-image.jpg";

export const Promo = () => {
  const [infoMessage, setInfoMessage] = useState("");
  const [data, setData] = useState({
    phone: "",
    isChecked: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const checkValidity = () => {
    if (data.phone === "" || data.phone.includes("_")) {
      setInfoMessage("Введите телефон");
      return false;
    }
    setInfoMessage("Заявка принята");
    return true;
  };

  const closeAlert = () => {
    setInfoMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidity()) {
      // Тут будет логика того, что делать с данными
      console.log(data);
    }
  };

  return (
    <section className="section-promo ">
      <div className="promo">
        <Alert message={infoMessage} closeAlert={closeAlert} />
        <div className="promo__layout">
          <h1 className="promo__title">Кирпичный завод Балтымский</h1>
          <p className="promo__subtitle">Производство и продажа кирпича</p>
          <form className="promo__form" onSubmit={(e) => handleSubmit(e)}>
            <PatternFormat
              placeholder="Номер телефона"
              onChange={(e) => onChange(e)}
              value={data.phone}
              name="phone"
              className="promo__input"
              format="+7(###)###-##-##"
              allowEmptyFormatting
              mask="_"
            />
            <button type="submit" className="promo__button">
              Перезвонить
            </button>
          </form>
        </div>
        <img className="promo__image" src={promoImage} alt="Продукция кирпичного завода" />
      </div>
    </section>
  )
}
