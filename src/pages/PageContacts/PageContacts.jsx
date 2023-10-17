import "./PageContacts.scss";
import { Layout } from "../../Layout/Layout";
import { ContactUsLarge } from "../../components/ContactUsLarge/ContactUsLarge";

export const PageContacts = () => {
  return (
    <Layout theme="white">
      <section className="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__info-area">
          <div className="info-item">
            <h3 className="info-item__title">Адрес</h3>
            <p className="info-item__text">
              620907, Россия, Свердловская обл.,
              <br /> г. Екатеринбург, <br />
              ул. Валимхаматова, д. 36
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-item__title">Время работы</h3>
            <p className="info-item__text">
              понедельник-пятница
              <br /> с 8:00 до 17:00
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-item__title">Телефон</h3>
            <p className="info-item__text">+7 (343) 382-19-67</p>
            <p className="info-item__text">+7 (902) 444-41-92</p>
          </div>
          <div className="info-item">
            <h3 className="info-item__title">E-mail</h3>
            <p className="info-item__text">2060248@mail.ru</p>
          </div>
        </div>
        <p className="contacts__order">
          Заказать стройматериалы, вы можете по телефону или заполнив форму
        </p>
        <ContactUsLarge />
      </section>
    </Layout>
  );
};
