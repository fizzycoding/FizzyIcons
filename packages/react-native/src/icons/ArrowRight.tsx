import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function ArrowRight({ variant = "outline", size = "normal" }: IconProps) {
  const numericSize = resolveIconSize(size);
  return null; // React Native SVG bindings
}
