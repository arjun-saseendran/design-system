import React from "react";
import { TypographyPropsType } from "./type";

export const Typography:React.FC<TypographyPropsType> = ({
  tag = "p",
  className,
  text = "Text not provided",
  children,
  style,
  ariaLabel,
  ariaLabelledBy,
} ) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    <>
      {text}, {children}
    </>
  );
};
