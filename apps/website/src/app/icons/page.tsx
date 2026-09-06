"use client";

import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { getAllIcons, IconVariant, IconSizeToken, IconMeta } from "@fizzyicons/core";
import { Icon, Check } from "@fizzyicons/react";

export default function IconsPage() {
  const allIcons = useMemo(() => getAllIcons(), []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Icons");
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>("outline");
  const [selectedSize, setSelectedSize] = useState<IconSizeToken>("normal");

  const [activeTab, setActiveTab] = useState<"react" | "react-native" | "vue" | "html" | "svg">("react");
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Default to null so inspector drawer is hidden until an icon is clicked!
  const [selectedIcon, setSelectedIcon] = useState<IconMeta | null>(null);

  // Dynamically calculate unique categories and count per category from master registry
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Icons": allIcons.length };
    for (const icon of allIcons) {
      const cat = icon.category || "General";
      counts[cat] = (counts[cat] || 0) + 1;
    }
    return counts;
  }, [allIcons]);

  const categoriesList = useMemo(() => {
    const set = new Set(allIcons.map((i) => i.category || "General"));
    return ["All Icons", ...Array.from(set).sort()];
  }, [allIcons]);

  // Filter icons based on search query and category
  const filteredIcons = useMemo(() => {
    return allIcons.filter((icon) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        icon.name.toLowerCase().includes(query) ||
        icon.title.toLowerCase().includes(query) ||
        icon.tags?.some((t) => t.toLowerCase().includes(query)) ||
        icon.keywords?.some((k) => k.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "All Icons" || icon.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allIcons, searchQuery, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "all icons":
        return "home";
      case "arrows":
        return "arrow-right";
      case "communication":
        return "bell";
      case "development":
        return "code";
      case "devices":
        return "monitor";
      case "files":
        return "folder";
      case "interface":
        return "settings";
      case "media":
        return "chart-bar";
      case "users":
        return "user";
      default:
        return "zap";
    }
  };

  const handleCopyCode = (format: "jsx" | "generic" | "svg" | "component") => {
    if (!selectedIcon) return;
    let snippet = "";
    const pascalName = selectedIcon.name
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");

    if (format === "jsx" || format === "component") {
      snippet = `<${pascalName} variant="${selectedVariant}" size="${selectedSize}" />`;
    } else if (format === "generic") {
      snippet = `<Icon name="${selectedIcon.name}" variant="${selectedVariant}" size="${selectedSize}" />`;
    } else {
      snippet = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- FizzyIcons ${selectedIcon.name} ${selectedVariant} --></svg>`;
    }

    navigator.clipboard.writeText(snippet);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownloadSvg = () => {
    if (!selectedIcon) return;
    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${selectedIcon.title}</title></svg>`;
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedIcon.name}-${selectedVariant}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getSnippetForTab = () => {
    if (!selectedIcon) return "";
    const pascalName = selectedIcon.name
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");

    switch (activeTab) {
      case "react":
        return `import { ${pascalName} } from '@fizzyicons/react';\n\n<${pascalName} variant="${selectedVariant}" size="${selectedSize}" />`;
      case "react-native":
        return `import { ${pascalName} } from '@fizzyicons/react-native';\n\n<${pascalName} variant="${selectedVariant}" size="${selectedSize}" />`;
      case "vue":
        return `<script setup>\nimport { ${pascalName}Icon } from '@fizzyicons/vue';\n</script>\n\n<${pascalName}Icon variant="${selectedVariant}" size="${selectedSize}" />`;
      case "html":
        return `<i class="fizzy-icon fizzy-${selectedIcon.name} fizzy-${selectedVariant}"></i>`;
      case "svg":
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n  <!-- ${selectedIcon.title} ${selectedVariant} -->\n</svg>`;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FBFBFB] text-gray-900 selection:bg-[#FDE047] selection:text-black">
      {/* Header naturally scrolls */}
      <Header />

      {/* Main Layout Area */}
      <div className="flex flex-1 w-full min-h-[calc(100vh-80px)]">
        
        {/* LEFT SIDEBAR PANEL (Flush left sidebar) */}
        <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200/80 p-4 space-y-4 flex flex-col justify-start">
          
          {/* Search Box inside Sidebar */}
          <div className="relative">
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-300"
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-200 shadow-2xs">
              ⌘K
            </span>
          </div>

          {/* Dynamic Category List */}
          <nav className="space-y-0.5 overflow-y-auto">
            {categoriesList.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              const catIcon = getCategoryIcon(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-[#FEF08A] text-gray-900 font-bold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon name={catIcon} variant="outline" size={16} />
                    <span className="truncate">{cat}</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 font-medium">
                    {count.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* CENTER MAIN GRID CANVAS */}
        <main className="flex-1 p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Top Control Bar matching reference screenshot */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4">
            <div>
              <div className="text-[10px] font-extrabold tracking-widest text-gray-400 uppercase flex items-center gap-2 mb-1">
                <span>BROWSE ICONS</span>
                <span className="w-8 h-[1px] bg-gray-300 inline-block"></span>
              </div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                {selectedCategory}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                A growing collection of {filteredIcons.length} open source icons.
              </p>
            </div>

            {/* Top Cards for Variant & Size */}
            <div className="flex items-center gap-3">
              
              {/* Variant Card */}
              <div className="bg-white border-2 border-black rounded-2xl px-3.5 py-2 flex items-center gap-3">
                <span className="text-[11px] font-black uppercase text-gray-800 tracking-wider">
                  VARIANT
                </span>
                <div className="flex gap-1 bg-[#F4F4F5] p-1 rounded-xl">
                  {(["outline", "solid", "colored"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      aria-pressed={selectedVariant === v}
                      className={`px-3.5 py-1 rounded-lg text-xs font-extrabold capitalize transition-all border-2 ${
                        selectedVariant === v
                          ? "bg-[#FDE047] text-black border-black shadow-2xs"
                          : "border-transparent text-gray-700 hover:text-black"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Card */}
              <div className="bg-white border-2 border-black rounded-2xl px-3.5 py-2 flex items-center gap-3">
                <span className="text-[11px] font-black uppercase text-gray-800 tracking-wider">
                  SIZE
                </span>
                <div className="flex gap-1 bg-[#F4F4F5] p-1 rounded-xl">
                  {(["micro", "small", "normal"] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      aria-pressed={selectedSize === sz}
                      className={`px-3.5 py-1 rounded-lg text-xs font-extrabold capitalize transition-all border-2 ${
                        selectedSize === sz
                          ? "bg-[#FDE047] text-black border-black shadow-2xs"
                          : "border-transparent text-gray-700 hover:text-black"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Icon Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {filteredIcons.map((icon) => {
              const isSelected = selectedIcon?.name === icon.name;

              return (
                <div
                  key={icon.name}
                  onClick={() => setSelectedIcon(icon)}
                  aria-selected={isSelected}
                  className={`rounded-2xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-150 min-h-[90px] border-2 ${
                    isSelected
                      ? "border-black bg-[#FEF08A] shadow-xs"
                      : "border-transparent hover:border-gray-200/90 hover:bg-gray-100/40"
                  }`}
                >
                  <Icon
                    name={icon.name}
                    variant={selectedVariant}
                    size={selectedSize}
                  />
                  <span className="text-xs font-medium text-gray-600 tracking-tight text-center truncate max-w-[90px]">
                    {icon.name}
                  </span>
                </div>
              );
            })}
          </div>

          {filteredIcons.length === 0 && (
            <div className="bg-white border border-gray-200/80 rounded-2xl p-12 text-center text-gray-400 font-medium">
              No icons found matching &quot;{searchQuery}&quot;.
            </div>
          )}

        </main>

      </div>

      {/* OVERLAY INSPECTOR DRAWER (Only appears when an icon is clicked!) */}
      {selectedIcon && (
        <aside className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white border-l border-gray-200 shadow-2xl z-50 p-6 space-y-6 flex flex-col justify-start overflow-y-auto animate-in slide-in-from-right duration-200">
          
          {/* Top Title & Close Button */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-2xl font-black text-gray-900">{selectedIcon.name}</h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5 leading-relaxed">
                {selectedIcon.description || `A ${selectedIcon.name} icon, commonly used for navigation.`}
              </p>
            </div>
            <button
              onClick={() => setSelectedIcon(null)}
              className="text-gray-400 hover:text-gray-700 font-black text-xl p-1"
            >
              ✕
            </button>
          </div>

          {/* Canvas Grid Box */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-gray-50/70 border border-gray-200/60 flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <Icon
              name={selectedIcon.name}
              variant={selectedVariant}
              size={64}
            />
          </div>

          {/* Variant Cards Group */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-gray-500 block">Variant</span>
            <div className="grid grid-cols-3 gap-2">
              {(["outline", "solid", "colored"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  aria-pressed={selectedVariant === v}
                  className={`p-3 rounded-2xl flex flex-col items-center gap-1.5 border transition-all ${
                    selectedVariant === v
                      ? "border-2 border-[#FDE047] bg-[#FEF9C3]/40 font-bold"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <Icon name={selectedIcon.name} variant={v} size={22} />
                  <span className="text-xs font-bold capitalize">{v}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Control Buttons */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-gray-500 block">Size</span>
            <div className="flex gap-1 bg-gray-100/70 p-1 rounded-xl">
              {(["micro", "small", "normal"] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz as IconSizeToken)}
                  aria-pressed={selectedSize === sz}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold capitalize transition-all ${
                    selectedSize === sz
                      ? "bg-[#FDE047] text-gray-900 shadow-2xs font-extrabold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Dark Code Snippet Box */}
          <div className="bg-[#18181B] rounded-2xl overflow-hidden border border-gray-800 shadow-2xs">
            <div className="flex items-center justify-between px-3 pt-2 bg-neutral-900 border-b border-neutral-800 text-[11px] font-bold">
              <div className="flex gap-2">
                {(["react", "react-native", "vue", "html", "svg"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={activeTab === tab}
                    className={`px-2.5 py-1 rounded-t-md capitalize transition-colors ${
                      activeTab === tab
                        ? "bg-[#18181B] text-[#FDE047]"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-3 text-[11px] font-mono text-neutral-200 overflow-x-auto">
              <pre>{getSnippetForTab()}</pre>
            </div>
          </div>

          {/* Copy & Download Action Buttons */}
          <div className="space-y-2 pt-1">
            <button
              onClick={() => handleCopyCode("component")}
              className="w-full py-3 bg-[#FDE047] hover:bg-[#FACC15] text-gray-900 rounded-xl font-bold text-sm border border-yellow-400 shadow-2xs transition-colors flex items-center justify-center gap-2"
            >
              {copiedFormat === "component" ? (
                <>
                  <Check size={18} />
                  <span>Copied Component!</span>
                </>
              ) : (
                <>
                  <Check size={16} />
                  <span>Copy Component</span>
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleCopyCode("svg")}
                className="py-2.5 px-3 bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 rounded-xl font-bold text-xs shadow-2xs transition-colors text-center"
              >
                {copiedFormat === "svg" ? "Copied SVG!" : "</> Copy SVG"}
              </button>
              <button
                onClick={handleDownloadSvg}
                className="py-2.5 px-3 bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 rounded-xl font-bold text-xs shadow-2xs transition-colors text-center"
              >
                ↓ Download SVG
              </button>
            </div>
          </div>

        </aside>
      )}

    </div>
  );
}
