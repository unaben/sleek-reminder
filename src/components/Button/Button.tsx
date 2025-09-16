import React from "react";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled,
  variant = "primary",
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;