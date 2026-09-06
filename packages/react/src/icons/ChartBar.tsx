import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function ChartBar({
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
          <path d="M5 92h3v14H5zm6-8h3v22h-3zm6-5h3v27h-3z"/>
        </g>
      );
    }

    if (variant === "colored") {
      return (
        <g>
          <rect x="4" y="12" width="4" height="9" rx="1" fill={getColor(1, "#3B82F6")}/><rect x="10" y="4" width="4" height="17" rx="1" fill={getColor(2, "#10B981")}/><rect x="16" y="9" width="4" height="12" rx="1" fill={getColor(3, "#F59E0B")}/>
        </g>
      );
    }

    // Default: Outline
    return (
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
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
