import React from "react";
import { createPortal } from "react-dom";
import ClipLoader from "react-spinners/ClipLoader";
import style from "./Loading.module.css";

const overlay = document.querySelector("#modal-root");

const Loading: React.FC = () => {
  return createPortal(
    <div className={style.overlay}>
      <ClipLoader color="lightgrey" />
    </div>,
    overlay as Element
  );
};

export default Loading;
