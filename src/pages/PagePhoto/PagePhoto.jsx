import "./PagePhoto.scss";
import { Layout } from "../../Layout/Layout";
import headerImage from "./image/bricks_page-photo.png";
import brick1 from "./image/brick1.png";
import brick2 from "./image/brick2.png";
import brick3 from "./image/brick3.png";
import brick4 from "./image/brick4.png";
import brick5 from "./image/brick5.png";
import brick6 from "./image/brick6.png";
import brick7 from "./image/brick7.png";
import brick8 from "./image/1.jpg";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

const imgArr = [brick1, brick2, brick3, brick4, brick5, brick6, brick7];
export const PagePhoto = () => {
  const [imageForModal, setImageForShow] = useState(null);

  return (
    <Layout theme="white">
      <section className="page-photo">
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
    </Layout>
  );
};
