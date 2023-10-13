import "./PagePhoto.scss";
import headerImage from "./image/bricks_page-photo.png";
import brick1 from "./image/brick1.png";
import brick2 from "./image/brick2.png";
import brick3 from "./image/brick3.png";
import brick4 from "./image/brick4.png";
import brick5 from "./image/brick5.png";
import brick6 from "./image/brick6.png";
import brick7 from "./image/brick7.png";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";
import { NavigationAdress } from "../../components/NavigationAdress/NavigationAdress";

const imgArr = [brick1, brick2, brick3, brick4, brick5, brick6, brick7];
export const PagePhoto = () => {
  const [imageForModal, setImageForShow] = useState(null);

  return (
    <>
      <section className="page-photo">
        <NavigationAdress />
        <img
          className="page-photo__header-image"
          src={headerImage}
          alt="Кирпичи"
        />
        <h2 className="page-photo__title">Фото</h2>
        <div className="page-photo__gallery">
          {imgArr.map((img, i) => (
            <img
              key={i}
              className="page-photo__gallery-item"
              src={img}
              alt="Кирпичи"
              onClick={() => setImageForShow(img)}
            />
          ))}
        </div>
      </section>

      {imageForModal && (
        <Modal
          onClose={() => {
            setImageForShow(null);
          }}
          img={imageForModal}
        />
      )}
    </>
  );
};
