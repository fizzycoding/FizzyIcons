export type IconVariant = "outline" | "solid" | "colored";

export type IconSizeToken = "micro" | "small" | "normal";

export type ColorSlot = "color-1" | "color-2" | "color-3" | "color-4" | "color-5" | 1 | 2 | 3 | 4 | 5;

export type IconColors = {
  [key in ColorSlot]?: string;
};

export interface ColorSlotMeta {
  slot: number; // 1 to 5
  name: string; // e.g. "Accent", "Background", "Primary"
  defaultColor: string; // HEX or RGB
}

export interface IconMeta {
  name: string;
  title: string;
  category: string;
  tags: string[];
  keywords?: string[];
  addedInVersion?: string;
  author?: string;
  relatedIcons?: string[];
  description?: string;
  variants: IconVariant[];
  colorSlots?: ColorSlotMeta[];
}

export type IconSizeInput = IconSizeToken | number | string;

export function resolveIconSize(size?: IconSizeInput): number {
  if (typeof size === "number") return size;
  if (typeof size === "string" && !isNaN(Number(size))) return Number(size);
  switch (size) {
    case "micro":
      return 16;
    case "small":
      return 20;
    case "normal":
    default:
      return 24;
  }
}
