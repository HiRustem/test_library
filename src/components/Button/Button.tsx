import React from "react";

import "./Button.scss";

import cn from "classnames";

export interface ButtonProps {
  label: string;
  appearance?: "primary" | "secondary" | "tertiary" | "stroked";
  size?: "large" | "medium" | "small";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  label,
  appearance = "primary",
  size = "medium",
  isLoading = false,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      className={cn("button", `${size}`, {
        primary: appearance === "primary",
        secondary: appearance === "secondary",
        tertiary: appearance === "tertiary",
        stroked: appearance === "stroked",
        fullWidth: fullWidth,
      })}
    >
      {isLoading ? <div className="btn-ring" /> : label}
    </button>
  );
};

export default Button;
