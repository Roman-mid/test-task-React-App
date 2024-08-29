import React from "react";
import style from "./ErrorComponent.module.css";
import { ErrorProps } from "./Error.types";

const defaultText = "Something was wrong! Sorry. Try agin";

const Error: React.FC<ErrorProps> = ({ text = defaultText }) => {
  return (
    <section className={style.section}>
      <div className="container">
        <h1 className={style.text}>{text}</h1>
      </div>
    </section>
  );
};

export default Error;
