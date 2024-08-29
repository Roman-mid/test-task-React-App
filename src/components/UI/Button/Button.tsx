import React from "react";
import { ButtonProps } from "./Button.types";
import style from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  disabled,
  varian,
  onClick,
}) => {
  const variantButton = {
    sm: style.btnSm,
    lg: style.btnLg,
  }[varian];

  return (
    <button
      className={`${variantButton} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
