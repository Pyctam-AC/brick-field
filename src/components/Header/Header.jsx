import Logo from "./images/newLogo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import LogoNew from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <section className="header__content">
        <div className="header__item">
          {/* <Link to="/" className="header__link">
            <img
              src={Logo}
              className="header__logo"
              alt="логотип балтымского кирпичного завода"
            />
          </Link> */}
          <LogoNew />
          <h1 className="header__title">
            Кирпичный&nbsp;ЗАВОД
            <br />
            Балтымский
          </h1>
          <p className="header__address">
            <b>Екатеринбург,</b> <br /> пос.&nbsp;Садовый,
            <br /> ул.&nbsp;Валимхаматова, д.&nbsp;36{" "}
          </p>
        </div>
        <div className="header__item">
          <p className="header__schedule">
            Для заказов:
            <br /> пн-пт
            <br /> с&nbsp;8:00 до&nbsp;17:00
          </p>
          <ul className="header__contacts">
            <li className="contacts__landlinePhone contacts__item">
              +7&nbsp;(343)&nbsp;382-19-67
            </li>
            <li className="contacts__mobilePhone contacts__item">
              +7&nbsp;(902)&nbsp;444-41-92
            </li>
            <li className="contacts__email contacts__item">2060248@mail.ru</li>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Header;
