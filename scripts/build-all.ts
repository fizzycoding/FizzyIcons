import fs from "fs";
import path from "path";

const ICONS_DIR = path.resolve(__dirname, "../icons");
const CORE_SRC_DIR = path.resolve(__dirname, "../packages/core/src");
const REACT_SRC_DIR = path.resolve(__dirname, "../packages/react/src");
const RN_SRC_DIR = path.resolve(__dirname, "../packages/react-native/src");

interface IconMetadata {
  name: string;
  title: string;
  category: string;
  tags: string[];
  keywords?: string[];
  addedInVersion?: string;
  author?: string;
  relatedIcons?: string[];
  description?: string;
  variants: string[];
  colorSlots?: Array<{ slot: number; name: string; defaultColor: string }>;
}

function toPascalCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function cleanSvgInner(svgContent: string): string {
  // Extract inner SVG elements (paths, circles, rects, lines, etc.)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!innerMatch) return "";
  return innerMatch[1].trim();
}

function processColoredSvgJsx(svgInner: string): string {
  // Convert fill="var(--color-1, #default)" or stroke="var(--color-1, #default)"
  // to fill={getColor(1, "#default")}
  return svgInner.replace(/(fill|stroke)=(["'])var\(--color-(\d+),\s*([^)]+)\)\2/g, (match, attr, quote, slotNum, defaultCol) => {
    return `${attr}={getColor(${slotNum}, "${defaultCol.trim()}")}`;
  });
}

function buildAll() {
  console.log("Starting FizzyIcons build pipeline...");

  if (!fs.existsSync(ICONS_DIR)) {
    throw new Error(`Icons directory not found at ${ICONS_DIR}`);
  }

  const iconFolders = fs
    .readdirSync(ICONS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log(`Found ${iconFolders.length} icons in source folder.`);

  const registry: Record<string, IconMetadata> = {};
  const reactExports: string[] = [];
  const rnExports: string[] = [];

  // Prepare directories
  fs.mkdirSync(path.join(REACT_SRC_DIR, "icons"), { recursive: true });
  fs.mkdirSync(path.join(RN_SRC_DIR, "icons"), { recursive: true });

  for (const folderName of iconFolders) {
    const iconPath = path.join(ICONS_DIR, folderName);
    const metaPath = path.join(iconPath, "metadata.json");
    const outlinePath = path.join(iconPath, "outline.svg");
    const solidPath = path.join(iconPath, "solid.svg");
    const coloredPath = path.join(iconPath, "colored.svg");

    // Validation
    if (!fs.existsSync(metaPath)) {
      console.warn(`⚠️ Skipping ${folderName}: metadata.json missing.`);
      continue;
    }
    if (!fs.existsSync(outlinePath) || !fs.existsSync(solidPath) || !fs.existsSync(coloredPath)) {
      console.warn(`⚠️ Skipping ${folderName}: one or more compulsory SVGs (outline/solid/colored) missing.`);
      continue;
    }

    const meta: IconMetadata = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    registry[meta.name] = meta;

    const outlineSvg = cleanSvgInner(fs.readFileSync(outlinePath, "utf-8"));
    const solidSvg = cleanSvgInner(fs.readFileSync(solidPath, "utf-8"));
    const coloredSvgRaw = cleanSvgInner(fs.readFileSync(coloredPath, "utf-8"));
    const coloredSvgJsx = processColoredSvgJsx(coloredSvgRaw);

    const pascalName = toPascalCase(meta.name);

    // 1. Generate React Icon Component
    const reactComponentCode = `import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function ${pascalName}({
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
    return colors[\`color-\${slot}\` as keyof typeof colors] || colors[slot as keyof typeof colors] || defaultCol;
  };

  const renderContent = () => {
    if (variant === "solid") {
      return (
        <g fill={color}>
          ${solidSvg}
        </g>
      );
    }

    if (variant === "colored") {
      return (
        <g>
          ${coloredSvgJsx}
        </g>
      );
    }

    // Default: Outline
    return (
      <g stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" strokeLinejoin="round">
        ${outlineSvg}
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
`;

    fs.writeFileSync(path.join(REACT_SRC_DIR, `icons/${pascalName}.tsx`), reactComponentCode);
    reactExports.push(pascalName);

    // 2. Generate React Native Component Stub
    const rnComponentCode = `import React from "react";
import { IconProps } from "../types";
import { resolveIconSize } from "@fizzyicons/core";

export function ${pascalName}({ variant = "outline", size = "normal" }: IconProps) {
  const numericSize = resolveIconSize(size);
  return null; // React Native SVG bindings
}
`;
    fs.writeFileSync(path.join(RN_SRC_DIR, `icons/${pascalName}.tsx`), rnComponentCode);
    rnExports.push(pascalName);
  }

  // Write Core Registry
  const registryTsCode = `import type { IconMeta } from "./types";

export const iconRegistry: Record<string, IconMeta> = ${JSON.stringify(registry, null, 2)};

export function getIcon(name: string): IconMeta | undefined {
  return iconRegistry[name];
}

export function getAllIcons(): IconMeta[] {
  return Object.values(iconRegistry);
}
`;
  fs.writeFileSync(path.join(CORE_SRC_DIR, "registry.ts"), registryTsCode);
  fs.writeFileSync(path.join(CORE_SRC_DIR, "registry.json"), JSON.stringify(registry, null, 2));

  // Write React Component Types
  const reactTypesCode = `import React from "react";
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
`;
  fs.writeFileSync(path.join(REACT_SRC_DIR, "types.ts"), reactTypesCode);
  fs.writeFileSync(path.join(RN_SRC_DIR, "types.ts"), reactTypesCode);

  // Write Generic <Icon /> component for React
  const genericIconCode = `import React from "react";
import { IconProps } from "./types";

${reactExports.map((name) => `import { ${name} } from "./icons/${name}";`).join("\n")}

export interface GenericIconProps extends IconProps {
  name: string;
}

const componentMap: Record<string, React.ComponentType<IconProps>> = {
${reactExports
  .map((name) => {
    // Find kebab-case name
    const kebab = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    return `  "${kebab}": ${name},\n  "${name}": ${name},`;
  })
  .join("\n")}
};

export function Icon({ name, ...props }: GenericIconProps) {
  const Component = componentMap[name] || componentMap[name.toLowerCase()];
  if (!Component) {
    console.warn(\`FizzyIcons: Icon "\${name}" not found.\`);
    return null;
  }
  return <Component {...props} />;
}
`;
  fs.writeFileSync(path.join(REACT_SRC_DIR, "Icon.tsx"), genericIconCode);

  // Write React index.ts
  const reactIndexCode = `export * from "./types";
export * from "./Icon";
${reactExports.map((name) => `export { ${name} } from "./icons/${name}";`).join("\n")}
`;
  fs.writeFileSync(path.join(REACT_SRC_DIR, "index.ts"), reactIndexCode);

  // Write RN index.ts
  const rnIndexCode = `export * from "./types";
${rnExports.map((name) => `export { ${name} } from "./icons/${name}";`).join("\n")}
`;
  fs.writeFileSync(path.join(RN_SRC_DIR, "index.ts"), rnIndexCode);

  console.log(`✅ Successfully built registry & components for ${reactExports.length} icons!`);
}

if (require.main === module) {
  buildAll();
}
