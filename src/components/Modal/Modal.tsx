import { createPortal } from "react-dom";
import scss from "./Modal.module.scss";
import { FC, MouseEvent, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "../Menu/Menu";
const modalRoot = document.getElementById("modal-root");

interface IModal {
  onClose: (newValue: boolean) => void;
}

const Modal: FC<IModal> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", addKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", addKeyDown);
    };
  });

  const addKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === "Escape") {
      onClose(false);
    }
  };

  const addOverlay = (evt: MouseEvent<HTMLDivElement>) => {
    if (evt.currentTarget === evt.target) {
      onClose(false);
    }
  };

  return createPortal(
    <div className={scss.overlay} onClick={addOverlay}>
      <div className={scss.modal_container}>
        <button
          className={scss.close_btn}
          type="button"
          onClick={() => {
            onClose(false);
          }}
        >
          <IoCloseOutline />
          close
        </button>
        <hr className={scss.line} />
        <Menu onClose={onClose} />
      </div>
    </div>,
    modalRoot as HTMLElement
  );
};

export default Modal;
