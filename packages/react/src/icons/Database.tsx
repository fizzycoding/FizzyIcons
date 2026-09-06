import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function Database({
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
          <path d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2.69c4.08 0 7.4.92 7.4 2s-3.32 2-7.4 2-7.4-.92-7.4-2 3.32-2 7.4-2z"/>
        </g>
      );
    }

    if (variant === "colored") {
      return (
        <g>
          <ellipse cx="12" cy="5" rx="9" ry="3" fill={getColor(1, "#10B981")}/><path d="M3 5v7c0 1.66 4 3 9 3s9-1.34 9-3V5" fill={getColor(2, "#3B82F6")} opacity="0.9"/><path d="M3 12v7c0 1.66 4 3 9 3s9-1.34 9-3v-7" fill={getColor(3, "#6366F1")} opacity="0.8"/>
        </g>
      );
    }

    // Default: Outline
    return (
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
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
