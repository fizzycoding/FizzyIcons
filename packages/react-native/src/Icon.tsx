import React from "react";
import Svg from "react-native-svg";
import type { IconVariant, IconSizeToken, IconColors } from "@fizzyicons/core";

export interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: IconSizeToken | number;
  colors?: IconColors;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  variant = "outline",
  size = "normal",
  colors,
  color,
}) => {
  const pixelSize =
    typeof size === "number"
      ? size
      : size === "micro"
      ? 16
      : size === "small"
      ? 20
      : 24;

  return (
    <Svg width={pixelSize} height={pixelSize} viewBox="0 0 24 24">
      {/* React Native Icon stub */}
    </Svg>
  );
};
