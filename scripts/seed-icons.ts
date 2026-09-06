import fs from "fs";
import path from "path";

const ICONS_DIR = path.resolve(__dirname, "../icons");

interface IconSeed {
  name: string;
  title: string;
  category: string;
  tags: string[];
  keywords?: string[];
  addedInVersion?: string;
  author?: string;
  relatedIcons?: string[];
  description?: string;
  colorSlots: Array<{ slot: number; name: string; defaultColor: string }>;
  outlineSvg: string;
  solidSvg: string;
  coloredSvg: string;
}

const SEED_ICONS: IconSeed[] = [
  {
    name: "home",
    title: "Home",
    category: "Interface",
    tags: ["house", "main", "dashboard", "building"],
    keywords: ["homepage", "start", "landing", "root"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["dashboard", "user", "settings"],
    description: "A home icon, commonly used for main navigation and dashboards.",
    colorSlots: [
      { slot: 1, name: "Roof & Accent", defaultColor: "#FFDE59" },
      { slot: 2, name: "Walls & Base", defaultColor: "#3B82F6" },
      { slot: 3, name: "Door & Detail", defaultColor: "#18181B" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="var(--color-2, #3B82F6)"/><path d="M3 9l9-7 9 7v4H3V9z" fill="var(--color-1, #FFDE59)"/><path d="M9 22v-8h6v8H9z" fill="var(--color-3, #18181B)"/></svg>`,
  },
  {
    name: "search",
    title: "Search",
    category: "Interface",
    tags: ["magnifier", "find", "zoom", "explore"],
    keywords: ["query", "filter", "lookup"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["filter", "file"],
    description: "A search magnifying lens for querying content.",
    colorSlots: [
      { slot: 1, name: "Lens Fill", defaultColor: "#60A5FA" },
      { slot: 2, name: "Handle & Ring", defaultColor: "#18181B" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" fill="var(--color-1, #60A5FA)" stroke="var(--color-2, #18181B)" stroke-width="2"/><path d="M16 16l4.5 4.5" stroke="var(--color-2, #18181B)" stroke-width="3" stroke-linecap="round"/></svg>`,
  },
  {
    name: "user",
    title: "User Profile",
    category: "Users",
    tags: ["account", "person", "avatar", "member"],
    keywords: ["profile", "login", "auth"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["users", "lock", "settings"],
    description: "User avatar profile component icon.",
    colorSlots: [
      { slot: 1, name: "Avatar Body", defaultColor: "#F43F5E" },
      { slot: 2, name: "Head Accent", defaultColor: "#FFDE59" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 20c0-3.31 3.58-6 8-6s8 2.69 8 6v1H4v-1z" fill="var(--color-1, #F43F5E)"/><circle cx="12" cy="8" r="4.5" fill="var(--color-2, #FFDE59)" stroke="#18181B" stroke-width="1.5"/></svg>`,
  },
  {
    name: "settings",
    title: "Settings",
    category: "Interface",
    tags: ["gear", "options", "cog", "preferences"],
    keywords: ["config", "admin", "setup"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["edit", "user"],
    description: "System gear icon for settings and preferences.",
    colorSlots: [
      { slot: 1, name: "Gear Ring", defaultColor: "#10B981" },
      { slot: 2, name: "Center Hole", defaultColor: "#FFDE59" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zm0 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" fill="var(--color-1, #10B981)"/><circle cx="12" cy="12" r="4" fill="var(--color-2, #FFDE59)"/></svg>`,
  },
  {
    name: "heart",
    title: "Heart",
    category: "Interface",
    tags: ["love", "like", "favorite", "wishlist"],
    keywords: ["save", "bookmark", "react"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["star", "user"],
    description: "Heart icon for likes, favorites, and wishlist features.",
    colorSlots: [
      { slot: 1, name: "Heart Fill", defaultColor: "#EF4444" },
      { slot: 2, name: "Sparkle Accent", defaultColor: "#FFDE59" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--color-1, #EF4444)"/><circle cx="17" cy="7" r="2" fill="var(--color-2, #FFDE59)"/></svg>`,
  },
  {
    name: "bell",
    title: "Notification Bell",
    category: "Communication",
    tags: ["alert", "notification", "ring", "reminder"],
    keywords: ["push", "inbox", "badge"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["mail", "message"],
    description: "Ringing notification bell icon for alerts.",
    colorSlots: [
      { slot: 1, name: "Bell Body", defaultColor: "#F59E0B" },
      { slot: 2, name: "Clapper", defaultColor: "#18181B" },
      { slot: 3, name: "Dot Alert", defaultColor: "#EF4444" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="var(--color-1, #F59E0B)"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="var(--color-2, #18181B)"/><circle cx="18" cy="6" r="3" fill="var(--color-3, #EF4444)"/></svg>`,
  },
  {
    name: "folder",
    title: "Folder",
    category: "Files",
    tags: ["directory", "file", "storage", "archive"],
    keywords: ["document", "collection"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["file", "database"],
    description: "File directory storage folder icon.",
    colorSlots: [
      { slot: 1, name: "Folder Base", defaultColor: "#FBBF24" },
      { slot: 2, name: "Tab & Accent", defaultColor: "#D97706" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 18V6c0-1.1.9-2 2-2h6l2 2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z" fill="var(--color-1, #FBBF24)"/><path d="M2 8h20v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8z" fill="var(--color-2, #D97706)" opacity="0.85"/></svg>`,
  },
  {
    name: "send",
    title: "Send Paper Plane",
    category: "Communication",
    tags: ["paperplane", "mail", "message", "submit"],
    keywords: ["post", "share", "dispatch"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["mail", "arrow-right"],
    description: "Flying paper plane icon for messaging and submission.",
    colorSlots: [
      { slot: 1, name: "Wing Top", defaultColor: "#6366F1" },
      { slot: 2, name: "Wing Under", defaultColor: "#4338CA" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><polygon points="22 2 15 22 11 13" fill="var(--color-2, #4338CA)"/><polygon points="22 2 11 13 2 9" fill="var(--color-1, #6366F1)"/></svg>`,
  },
  {
    name: "chart-bar",
    title: "Bar Chart",
    category: "Media",
    tags: ["stats", "analytics", "graph", "data"],
    keywords: ["metrics", "dashboard", "report"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["database", "monitor"],
    description: "Bar chart graph icon for business metrics.",
    colorSlots: [
      { slot: 1, name: "Bar 1", defaultColor: "#3B82F6" },
      { slot: 2, name: "Bar 2", defaultColor: "#10B981" },
      { slot: 3, name: "Bar 3", defaultColor: "#F59E0B" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 92h3v14H5zm6-8h3v22h-3zm6-5h3v27h-3z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="12" width="4" height="9" rx="1" fill="var(--color-1, #3B82F6)"/><rect x="10" y="4" width="4" height="17" rx="1" fill="var(--color-2, #10B981)"/><rect x="16" y="9" width="4" height="12" rx="1" fill="var(--color-3, #F59E0B)"/></svg>`,
  },
  {
    name: "code",
    title: "Code Brackets",
    category: "Development",
    tags: ["brackets", "developer", "html", "script"],
    keywords: ["programming", "source", "coding"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["monitor", "database"],
    description: "Code angle brackets icon for development tools.",
    colorSlots: [
      { slot: 1, name: "Left Bracket", defaultColor: "#EC4899" },
      { slot: 2, name: "Right Bracket", defaultColor: "#8B5CF6" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M8 6L2 12l6 6" stroke="var(--color-1, #EC4899)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6l6 6-6 6" stroke="var(--color-2, #8B5CF6)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    name: "monitor",
    title: "Monitor Screen",
    category: "Devices",
    tags: ["desktop", "computer", "display", "screen"],
    keywords: ["device", "tv", "hardware"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["code", "database"],
    description: "Computer monitor desktop display icon.",
    colorSlots: [
      { slot: 1, name: "Screen Display", defaultColor: "#0EA5E9" },
      { slot: 2, name: "Stand & Frame", defaultColor: "#18181B" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" fill="var(--color-1, #0EA5E9)"/><path d="M8 21h8m-4-4v4" stroke="var(--color-2, #18181B)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  },
  {
    name: "database",
    title: "Database Stack",
    category: "Development",
    tags: ["storage", "sql", "server", "data"],
    keywords: ["db", "postgres", "redis"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["monitor", "code"],
    description: "Database stack server disk icon.",
    colorSlots: [
      { slot: 1, name: "Top Disk", defaultColor: "#10B981" },
      { slot: 2, name: "Mid Disk", defaultColor: "#3B82F6" },
      { slot: 3, name: "Base Disk", defaultColor: "#6366F1" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2.69c4.08 0 7.4.92 7.4 2s-3.32 2-7.4 2-7.4-.92-7.4-2 3.32-2 7.4-2z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="9" ry="3" fill="var(--color-1, #10B981)"/><path d="M3 5v7c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="var(--color-2, #3B82F6)" opacity="0.9"/><path d="M3 12v7c0 1.66 4 3 9 3s9-1.34 9-3v-7" fill="var(--color-3, #6366F1)" opacity="0.8"/></svg>`,
  },
  {
    name: "zap",
    title: "Lightning Bolt",
    category: "Interface",
    tags: ["energy", "flash", "power", "fast"],
    keywords: ["lightning", "quick", "boost"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["star", "sun"],
    description: "Fast lightning bolt energy icon.",
    colorSlots: [
      { slot: 1, name: "Bolt Primary", defaultColor: "#FBBF24" },
      { slot: 2, name: "Spark Shadow", defaultColor: "#D97706" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H4.5c-.58 0-.91-.66-.56-1.12l8.5-11C12.8.35 13.5.7 13.5 1.3V8h6.5c.58 0 .91.66.56 1.12l-8.5 11c-.36.47-1.06.12-1.06-.48z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--color-1, #FBBF24)" stroke="var(--color-2, #D97706)" stroke-width="1.5"/></svg>`,
  },
  {
    name: "check",
    title: "Checkmark",
    category: "Interface",
    tags: ["tick", "success", "done", "confirm"],
    keywords: ["ok", "complete", "valid"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["arrow-right", "shield"],
    description: "Success checkmark tick icon.",
    colorSlots: [
      { slot: 1, name: "Check Color", defaultColor: "#10B981" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="var(--color-1, #10B981)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    name: "arrow-right",
    title: "Arrow Right",
    category: "Arrows",
    tags: ["forward", "next", "direction", "pointer"],
    keywords: ["navigate", "proceed", "right"],
    addedInVersion: "1.0.0",
    author: "FizzyIcons Team",
    relatedIcons: ["send", "check"],
    description: "Forward arrow right navigation icon.",
    colorSlots: [
      { slot: 1, name: "Arrow Stem", defaultColor: "#18181B" },
    ],
    outlineSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    solidSvg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,
    coloredSvg: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-7-7l7 7-7 7" stroke="var(--color-1, #18181B)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
];

export function seedIcons() {
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }

  for (const icon of SEED_ICONS) {
    const iconFolder = path.join(ICONS_DIR, icon.name);
    if (!fs.existsSync(iconFolder)) {
      fs.mkdirSync(iconFolder, { recursive: true });
    }

    // Write outline.svg
    fs.writeFileSync(path.join(iconFolder, "outline.svg"), icon.outlineSvg.trim());

    // Write solid.svg
    fs.writeFileSync(path.join(iconFolder, "solid.svg"), icon.solidSvg.trim());

    // Write colored.svg
    fs.writeFileSync(path.join(iconFolder, "colored.svg"), icon.coloredSvg.trim());

    // Write metadata.json
    const metadata = {
      name: icon.name,
      title: icon.title,
      category: icon.category,
      tags: icon.tags,
      keywords: icon.keywords || [],
      addedInVersion: icon.addedInVersion || "1.0.0",
      author: icon.author || "FizzyIcons",
      relatedIcons: icon.relatedIcons || [],
      description: icon.description || `${icon.title} icon component.`,
      variants: ["outline", "solid", "colored"],
      colorSlots: icon.colorSlots,
    };
    fs.writeFileSync(
      path.join(iconFolder, "metadata.json"),
      JSON.stringify(metadata, null, 2)
    );
  }

  console.log(`Successfully seeded ${SEED_ICONS.length} master icons with rich metadata into ${ICONS_DIR}`);
}

if (require.main === module) {
  seedIcons();
}
