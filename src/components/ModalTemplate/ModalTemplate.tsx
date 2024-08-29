import React from "react";
import { createPortal } from "react-dom";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ModalTemplateProps } from "./ModalTemplate.types";
import Button from "../UI/Button/Button";
import styleOverlay from "../Loading/Loading.module.css";
import style from "./ModalTemplate.module.css";

const modalRoot = document.getElementById("modal-root");

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  text,
  setOpenModal,
  onClick,
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const closeModal = () => {
    setOpenModal(false);
    document.body.classList.remove("lock");
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains(styleOverlay.overlay)) {
      closeModal();
    }
  };

  return createPortal(
    <div className={styleOverlay.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <button className={style.closeBtn} onClick={closeModal}>
          <CloseIcon width={12} height={12} />
        </button>
        <h2 className={style.title}>{text}</h2>
        <div className={style.btnWrap}>
          <Button onClick={onClick} varian="sm">
            Yes
          </Button>
          <Button onClick={closeModal} varian="sm">
            NO
          </Button>
        </div>
      </div>
    </div>,
    modalRoot as Element
  );
};

export default ModalTemplate;
