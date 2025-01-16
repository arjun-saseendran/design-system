import React from "react";

export interface TypographyPropsType {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}
