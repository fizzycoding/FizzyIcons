import React from "react";
import { IconVariant, IconSizeInput, IconColors } from "@fizzyicons/core";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  variant?: IconVariant;
  size?: IconSizeInput;
  colors?: IconColors;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}
