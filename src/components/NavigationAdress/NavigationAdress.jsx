import { Link } from "react-router-dom";
import "./NavigationAdress.scss";

export const NavigationAdress = () => {
  function translateUrl() {
    const url = window.location.pathname.slice(1);
    switch (url) {
      case "catalog":
        return "Каталог";
      case "delivery":
        return "Доставка";
      case "contacts":
        return "Контакты";
      case "provision":
        return "Снабжение";
      case "photo":
        return "Фото";
    }
  }

  const currentUrl = translateUrl();
  console.log(currentUrl);

  return (
    <div className="navigation-adress">
      <Link to="/" className="navigation-adress__item">
        Главная
      </Link>

      <span className="navigation-adress__item">{` / ${currentUrl}`}</span>
    </div>
  );
};
