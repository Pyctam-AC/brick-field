import "./PageDelivery.scss";
import { Layout } from "../../Layout/Layout";

import headerImage from "./image/bricks_page-photo.png";
import { ContactUsLarge } from "../../components/ContactUsLarge/ContactUsLarge";

export const PageDelivery = () => {
  return (
    <Layout theme="white">
      <section className="delivery">
        <img
          className="delivery__header-image"
          src={headerImage}
          alt="Кирпичи"
        />
        <h2 className="delivery__title">Доставка</h2>
        <ul className="delivery__text-area">
          <li className="delivery__text-area">
            Мы доставляем товары в любом количестве до вашего строительного
            объекта или склада в пределах города Екатеринбурга и Свердловской
            области, а также до любого региона России.
          </li>
          <li>
            Существует возможность доставки продукции в отдалённые регионы
            России разными видами транспорта: авто или ж/д.
          </li>
          <li>
            При оформлении заказа Вам необходимо сообщить точный адрес и
            контактный телефон. Эти данные будут использоваться менеджерами для
            подтверждения заказа и согласования времени доставки товаров.
          </li>
          <li>
            Поставка выбранных товаров осуществляется в день заказа. На указаный
            вами адрес эл. почты в процессе работы менеджера с вашим заказом
            приходят сообщения о всех этапах осуществления заказа — от приёмки
            до оплаты и отгрузки товара.
          </li>
        </ul>
        <ContactUsLarge />
      </section>
    </Layout>
  );
};
