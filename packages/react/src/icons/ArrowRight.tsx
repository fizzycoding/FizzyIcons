import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function ArrowRight({
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
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </g>
      );
    }

    if (variant === "colored") {
      return (
        <g>
          <path d="M5 12h14m-7-7l7 7-7 7" stroke={getColor(1, "#18181B")} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      );
    }

    // Default: Outline
    return (
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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
