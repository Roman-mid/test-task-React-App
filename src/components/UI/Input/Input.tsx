import React from "react";
import { FieldProps } from "./Input.types";
import style from "./Input.module.css";

const SearchField: React.FC<FieldProps> = ({
  className,
  value,
  placeholder,
  setValue,
}) => {
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      className={` ${style.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={getValue}
    />
  );
};

export default SearchField;
