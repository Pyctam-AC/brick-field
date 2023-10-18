import "./ContactUsSmall.scss";
import { Alert } from "../Alert/Alert";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

export const ContactUsSmall = () => {
  const [infoMessage, setInfoMessage] = useState("");
  const [data, setData] = useState({ name: "", phone: "" });

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
    <form className="contact-us-small" onSubmit={(e) => handleSubmit(e)}>
      <Alert message={infoMessage} closeAlert={closeAlert} />
      <h2 className="contact-us-small__title">Связаться с нами</h2>
      <input
        onChange={(e) => onChange(e)}
        name="name"
        className="contact-us-small__input"
        type="text"
        placeholder="Имя"
        value={data.name}
      />
      <PatternFormat
        onChange={(e) => onChange(e)}
        value={data.phone}
        name="phone"
        className="contact-us-small__input"
        format="+7(###)###-##-##"
        allowEmptyFormatting
        mask="_"
      />

      <button type="submit" className="contact-us-small__submit-btn">
        <div className="animation"><span className="text">Перезвонить</span><div className="iqon" /></div>
      </button>
    </form>
  );
};
