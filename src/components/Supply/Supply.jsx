//Отдел снабжения
import { Link } from "react-router-dom";
import { ContactUsSmall } from "../ContactUsSmall/ContactUsSmall";
import TwoColumns from "../TwoColumns/TwoColumns";
import './Supply.scss'
import { Layout } from "../../Layout/Layout";

const Supply = () => {

  return (
    <Layout theme="white">
      <div className="supply">
        <nav className="supply__nav">
          <Link to="/" className="supply__nav-text supply__nav-text_link">Главная</Link>
          <p className="supply__nav-text">/Снабжение</p>
        </nav>
        <h2 className="supply__title">Отдел снабжения</h2>
        <TwoColumns>
          <div className="supply__contacts">
            <h4 className="supply__name">Дмитриев Александр Сергеевич</h4>
            <ul className="supply__contacts-container">
              <li className="supply__contacts-data">
                <p className="supply__contacts-key">Телефон/факс</p>
                <p className="supply__contacts-key">E-mail</p>
                <p className="supply__contacts-key_name">&nbsp;</p>
                <p className="supply__contacts-key">График работы</p>
                <p className="supply__contacts-key">пн-пт</p>
                <p className="supply__contacts-key">обед</p>
              </li>
              <li className="supply__contacts-data">

                <p className="supply__contacts-value">+7 (343) 352-67-89</p>
                <p className="supply__contacts-value">bkz_kzb@bk.ru</p>
                <p className="supply__contacts-key_name">(для Дмитриева А. С.)</p>
                <p className="supply__contacts-key">&nbsp;</p>
                <p className="supply__contacts-value">08:00 до 17:00</p>
                <p className="supply__contacts-value">12:00 до 13:00</p>
              </li>
            </ul>
          </div>
          <ContactUsSmall />
        </TwoColumns>
      </div>
    </Layout>
  )
}

export default Supply;
