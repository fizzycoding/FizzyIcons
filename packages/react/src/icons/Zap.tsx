import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function Zap({
  variant = "outline",
  size = "normal",
  colors = {},
  strokeWidth = 2,
  className = "",
  style = {},
  color = "currentColor",
  ...props
}: IconProps) {
  const numericSize = resolveIconSize(size);

  const getColor = (slot: number, defaultCol: string) => {
    return colors[`color-${slot}` as keyof typeof colors] || colors[slot as keyof typeof colors] || defaultCol;
  };

  const renderContent = () => {
    if (variant === "solid") {
      return (
        <g fill={color}>
          <path d="M11 21h-1l1-7H4.5c-.58 0-.91-.66-.56-1.12l8.5-11C12.8.35 13.5.7 13.5 1.3V8h6.5c.58 0 .91.66.56 1.12l-8.5 11c-.36.47-1.06.12-1.06-.48z"/>
        </g>
      );
    }

    if (variant === "colored") {
      return (
        <g>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={getColor(1, "#FBBF24")} stroke={getColor(2, "#D97706")} strokeWidth="1.5"/>
        </g>
      );
    }

    // Default: Outline
    return (
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </g>
    );
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={numericSize}
      height={numericSize}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      {...props}
    >
      {renderContent()}
    </svg>
  );
}
