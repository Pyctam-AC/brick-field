import "./ContactUsLarge.scss";
import { Alert } from "../Alert/Alert";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
import { validateEmail } from "../../utils/utils";

export const ContactUsLarge = () => {
  const [infoMessage, setInfoMessage] = useState("");
  const [data, setData] = useState({ name: "", phone: "", isChecked: false });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const checkValidity = () => {
    if (data.name.trim().length === 0) {
      setInfoMessage("Введите имя");
      return false;
    }
    if (data.phone === "" || data.phone.includes("_")) {
      setInfoMessage("Введите телефон");
      return false;
    }
    if (!validateEmail(data.email)) {
      setInfoMessage("Некорректный e-mail");
      return false;
    }
    if (!data.isChecked) {
      setInfoMessage("Необходимо согласие на обработку");
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
    <div className="contact-us-large" onSubmit={(e) => handleSubmit(e)}>
      <Alert message={infoMessage} closeAlert={closeAlert} />
      <h2 className="contact-us-large__title">Связаться с нами</h2>
      <p className="contact-us-large__subtitle">
        Заполните форму и мы перезвоним Вам в ближайшее время
      </p>
      <form className="contact-us-large__form">
        <input
          onChange={(e) => onChange(e)}
          name="name"
          className="contact-us-large__input"
          type="text"
          placeholder="Имя"
          value={data.name}
        />
        <PatternFormat
          onChange={(e) => onChange(e)}
          value={data.phone}
          name="phone"
          className="contact-us-large__input"
          format="+7(###)###-##-##"
          allowEmptyFormatting
          mask="_"
        />
        <input
          onChange={(e) => onChange(e)}
          name="email"
          className="contact-us-large__input"
          type="text"
          placeholder="E-mail"
          value={data.email}
        />

        <button type="submit" className="contact-us-large__submit-btn">
          Перезвонить
        </button>
      </form>
      <label className="contact-us-large__checkbox-area">
        <input
          type="checkbox"
          checked={data.isChecked}
          onClick={() =>
            setData((prev) => ({ ...prev, isChecked: !prev.isChecked }))
          }
        />{" "}
        <span>Согласие на обработку персональных данных</span>
      </label>
    </div>
  );
};
