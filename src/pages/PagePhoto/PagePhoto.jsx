import "./PagePhoto.scss";
import headerImage from "./image/bricks_page-photo.png";
import brick1 from "./image/brick1.png";
import brick2 from "./image/brick2.png";
import brick3 from "./image/brick3.png";
import brick4 from "./image/brick4.png";
import brick5 from "./image/brick5.png";
import brick6 from "./image/brick6.png";
import brick7 from "./image/brick7.png";
import { Link } from "react-router-dom";

export const PagePhoto = () => {
  return (
    <section className="page-photo">
      <Link className="page-photo__link" to="/">
        Главная
      </Link>

      <img
        className="page-photo__header-image"
        src={headerImage}
        alt="Кирпичи"
      />
      <h2 className="page-photo__title">Фото</h2>
      <div className="page-photo__gallery">
        <img className="page-photo__gallery-item" src={brick1} alt="Кирпичи" />
        <img className="page-photo__gallery-item" src={brick2} alt="Кирпичи" />
        <img className="page-photo__gallery-item" src={brick3} alt="Кирпичи" />
        <img className="page-photo__gallery-item" src={brick4} alt="Кирпичи" />
        <img className="page-photo__gallery-item" src={brick5} alt="Кирпичи" />
        <img className="page-photo__gallery-item" src={brick6} alt="Кирпичи" />
        <img className="page-photo__gallery-item" src={brick7} alt="Кирпичи" />
      </div>
    </section>
  );
};
