import React from "react";
import { IconProps } from "./types";

import { ArrowRight } from "./icons/ArrowRight";
import { Bell } from "./icons/Bell";
import { ChartBar } from "./icons/ChartBar";
import { Check } from "./icons/Check";
import { Code } from "./icons/Code";
import { Database } from "./icons/Database";
import { Folder } from "./icons/Folder";
import { Heart } from "./icons/Heart";
import { Home } from "./icons/Home";
import { Monitor } from "./icons/Monitor";
import { Search } from "./icons/Search";
import { Send } from "./icons/Send";
import { Settings } from "./icons/Settings";
import { User } from "./icons/User";
import { Zap } from "./icons/Zap";

export interface GenericIconProps extends IconProps {
  name: string;
}

const componentMap: Record<string, React.ComponentType<IconProps>> = {
  "arrow-right": ArrowRight,
  "ArrowRight": ArrowRight,
  "bell": Bell,
  "Bell": Bell,
  "chart-bar": ChartBar,
  "ChartBar": ChartBar,
  "check": Check,
  "Check": Check,
  "code": Code,
  "Code": Code,
  "database": Database,
  "Database": Database,
  "folder": Folder,
  "Folder": Folder,
  "heart": Heart,
  "Heart": Heart,
  "home": Home,
  "Home": Home,
  "monitor": Monitor,
  "Monitor": Monitor,
  "search": Search,
  "Search": Search,
  "send": Send,
  "Send": Send,
  "settings": Settings,
  "Settings": Settings,
  "user": User,
  "User": User,
  "zap": Zap,
  "Zap": Zap,
};

export function Icon({ name, ...props }: GenericIconProps) {
  const Component = componentMap[name] || componentMap[name.toLowerCase()];
  if (!Component) {
    console.warn(`FizzyIcons: Icon "${name}" not found.`);
    return null;
  }
  return <Component {...props} />;
}
