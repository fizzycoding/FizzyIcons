import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function Heart({
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
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </g>
      );
    }

    if (variant === "colored") {
      return (
        <g>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={getColor(1, "#EF4444")}/><circle cx="17" cy="7" r="2" fill={getColor(2, "#FFDE59")}/>
        </g>
      );
    }

    // Default: Outline
    return (
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
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
