import React from "react";
import style from "./Card.module.css";
import { CardProps } from "./Card.types";
import { Link } from "react-router-dom";

const Card: React.FC<CardProps> = ({ title, body, id }) => {
  return (
    <Link to={`post/${id}`} className={style.card} title={title}>
      <div className={style.img}>
        <span>{id}</span>
      </div>
      <div className={style.content}>
        <p className={style.name}>{title}</p>
        <p className={style.comment}>{body.slice(0, 140)}...</p>
      </div>
    </Link>
  );
};

export default Card;
