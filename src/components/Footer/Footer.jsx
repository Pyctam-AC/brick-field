import "./footer.scss";
import { useState } from "react";
const Footer = () => {
  //Футер имеет разный фон, в зависимости  от страницы, пока делаю стейт, потом завязать его на юзЛокейшон
  const [isWhiteFooter, setWhiteFooter] = useState(false);

  return (
    <footer className={isWhiteFooter ? "footer_white footer" : "footer"}>
      <section className="footer__content">
        <div className="footer__item">
          <p
            className={
              isWhiteFooter
                ? "footer__title_white footer__title"
                : "footer__title"
            }
          >
            Балтымский
            <br /> Кирпичный&nbsp;ЗАВОД
          </p>
          <p className="footer__address">
            <b>Екатеринбург,</b> <br /> пос.&nbsp;Садовый,
            <br /> ул.&nbsp;Валимхаматова, д.&nbsp;36{" "}
          </p>
        </div>
        <div className="footer__item">
          <p className="footer__schedule">
            Для заказов:
            <br /> пн-пт
            <br /> с&nbsp;8:00 до&nbsp;17:00
          </p>
          <ul className="footer__contacts">
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
    </footer>
  );
};

export default Footer;
