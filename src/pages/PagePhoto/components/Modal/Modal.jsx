import { useEffect } from "react";
import "./Modal.scss";

export const Modal = ({ onClose, img }) => {
  useEffect(() => {
    if (!img) return;

    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [onClose, img]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${img ? "modal_opened" : ""}`}
      onMouseDown={handleOverlay}
    >
      <div className="modal__container">
        <img className="modal__image" src={img} alt="Кирпичи" />
        <button
          className="modal__btn-close"
          type="button"
          onClick={() => onClose()}
        />
      </div>
    </div>
  );
};
