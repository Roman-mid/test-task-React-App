import React from "react";
import { PaginationProps } from "./Pagination.types";
import PaginationBtn from "./PaginationBtn";

const Pagination: React.FC<PaginationProps> = ({
  className,
  length,
  onClick,
}) => {
  const btnItems = length.map((post, ind) => (
    <PaginationBtn page={post.id} onClick={onClick} />
  ));

  return <div>{btnItems}</div>;
};

export default Pagination;
