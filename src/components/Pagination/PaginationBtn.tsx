import React from "react";
import { PaginationBtnProps } from "./Pagination.types";
import style from "./Pagination.module.css";

const PaginationBtn: React.FC<PaginationBtnProps> = ({
  className,
  page,
  onClick,
}) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {page}
    </button>
  );
};

export default PaginationBtn;
