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
    <div className="relative h-screen flex flex-col bg-brand-bg text-brand-dark selection:bg-brand-yellow selection:text-black overflow-hidden">
      <Header />
      <div className="flex flex-1 w-full h-[calc(100vh-80px)] overflow-hidden">        
        <aside className="hidden md:flex w-64 flex-shrink-0 border-r border-brand-border/15 p-4 space-y-4 flex-col justify-start h-full overflow-y-auto z-10">
          <div className="relative">
            <svg
              className="w-4 h-4 text-brand-gray absolute left-3 top-1/2 -translate-y-1/2"
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
              className="w-full pl-9 pr-9 py-2  border border-brand-border/20 rounded-lg text-xs font-medium text-brand-dark placeholder:text-brand-gray focus:outline-none focus:bg-white focus:border-brand-border/40"
            />
          </div>

          {/* Dynamic Category List (Scrolls independently) */}
          <nav className="space-y-0.5 overflow-y-auto flex-1 pr-1">
            {categoriesList.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              const catIcon = getCategoryIcon(cat);

              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all border ${isSelected
                    ? "bg-brand-yellow text-brand-dark border-brand-border font-bold"
                    : "border-transparent text-brand-gray hover:text-brand-dark hover:bg-neutral-100/60"
                    }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Icon name={catIcon} variant="outline" size={16} />
                    <span className="truncate">{cat}</span>
                  </div>
                  <span className={`text-[11px] font-mono font-medium ${isSelected ? "text-brand-dark" : "text-brand-gray"}`}>
                    {count.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 h-full p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto">
          <div className="md:hidden space-y-3 pb-2 border-b border-brand-border/10">
            <div className="relative">
              <svg
                className="w-4 h-4 text-brand-gray absolute left-3 top-1/2 -translate-y-1/2"
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
                className="w-full pl-9 pr-4 py-2.5  border border-brand-border/20 rounded-xl text-xs font-medium text-brand-dark placeholder:text-brand-gray"
              />
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categoriesList.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${selectedCategory === cat
                    ? "bg-brand-yellow text-brand-dark border-brand-border"
                    : "bg-white text-brand-gray border-transparent"
                    }`}
                >
                  {cat} ({categoryCounts[cat] || 0})
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4">
            <div>

              <h1 className="text-3xl font-extrabold text-brand-dark tracking-tight">
                {selectedCategory}
              </h1>
              <p className="text-xs sm:text-sm text-brand-gray font-medium mt-1">
                A growing collection of {filteredIcons.length} icons.
              </p>
            </div>
            <div className="flex items-center gap-4">

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase text-brand-gray tracking-wider">
                  Variant
                </span>
                <div className="flex gap-1 bg-white p-1 rounded-xl border border-brand-border/15">
                  {(["outline", "solid", "colored"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      aria-pressed={selectedVariant === v}
                      className={`px-5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all border ${selectedVariant === v
                        ? "bg-brand-yellow text-brand-dark border-brand-border"
                        : "border-transparent text-brand-gray hover:text-brand-dark"
                        }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase text-brand-gray tracking-wider">
                  SIZE
                </span>
                <div className="flex gap-1 bg-white p-1 rounded-xl border border-brand-border/15">
                  {(["normal", "small", "micro"] as const).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      aria-pressed={selectedSize === sz}
                      className={`px-5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all border ${selectedSize === sz
                        ? "bg-brand-yellow text-brand-dark border-brand-border"
                        : "border-transparent text-brand-gray hover:text-brand-dark"
                        }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {filteredIcons.map((icon) => {
              const isSelected = selectedIcon?.name === icon.name;

              return (
                <div
                  key={icon.name}
                  onClick={() => setSelectedIcon(icon)}
                  aria-selected={isSelected}
                  className={`rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-150 min-h-[95px] border ${isSelected
                    ? "bg-brand-yellow border-brand-border font-bold"
                    : "border-brand-border/15 hover:border-brand-border/40 hover:bg-neutral-50"
                    }`}
                >
                  <Icon
                    name={icon.name}
                    variant={selectedVariant}
                    size={selectedSize}
                  />
                  <span className={`text-xs font-medium tracking-tight text-center truncate max-w-[90px] ${isSelected ? "text-brand-dark" : "text-brand-dark/70"}`}>
                    {icon.name}
                  </span>
                </div>
              );
            })}
          </div>

          {filteredIcons.length === 0 && (
            <div className="py-16 text-center text-brand-gray font-medium text-sm">
              No icons found matching &quot;{searchQuery}&quot;.
            </div>
          )}

        </main>

      </div>

      {/* Dark Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300 ease-in-out ${selectedIcon ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setSelectedIcon(null)}
        aria-hidden="true"
      />

      {/* OVERLAY INSPECTOR DRAWER (Slide in from right animation) */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white border-l border-brand-border/20 shadow-2xl z-50 p-5 space-y-4 flex flex-col justify-start overflow-y-auto transition-transform duration-300 ease-in-out transform ${selectedIcon ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {selectedIcon && (
          <>
            {/* Top Title & Close Button */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-brand-dark">{selectedIcon.name}</h3>
              <button
                type="button"
                onClick={() => setSelectedIcon(null)}
                className="text-brand-gray hover:text-brand-dark font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            {/* Canvas Grid Box */}
            <div className="w-full h-32 sm:h-36 rounded-xl bg-brand-bg border border-brand-border/20 flex items-center justify-center relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              <Icon
                name={selectedIcon.name}
                variant={selectedVariant}
                size={52}
              />
            </div>

            {/* Variant Cards Group */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-brand-gray block">Variant</span>
              <div className="grid grid-cols-3 gap-1.5">
                {(["outline", "solid", "colored"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    aria-pressed={selectedVariant === v}
                    className={`p-2 rounded-xl flex flex-col items-center gap-1 border transition-all ${selectedVariant === v
                      ? "border-brand-border bg-brand-yellow font-semibold"
                      : "bg-white border-transparent text-brand-gray hover:text-brand-dark"
                      }`}
                  >
                    <Icon name={selectedIcon.name} variant={v} size={20} />
                    <span className="text-[11px] font-semibold capitalize">{v}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Control Buttons */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-brand-gray block">Size</span>
              <div className="flex gap-1 bg-brand-bg p-1 rounded-xl border border-brand-border/15">
                {(["micro", "small", "normal"] as const).map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz as IconSizeToken)}
                    aria-pressed={selectedSize === sz}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all border ${selectedSize === sz
                      ? "bg-brand-yellow text-brand-dark border-brand-border font-bold"
                      : "border-transparent text-brand-gray hover:text-brand-dark"
                      }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Code Snippet Box */}
            <div className="bg-[#121316] rounded-xl overflow-hidden border border-neutral-800 shadow-lg flex flex-col">
              {/* Tab Header - 5 equal columns, 100% fitting, zero scrollbars */}
              <div className="grid grid-cols-5 bg-[#0a0a0c] border-b border-neutral-800/80 p-1 gap-0.5 text-center">
                {(
                  [
                    { id: "react", label: "React" },
                    { id: "react-native", label: "RN" },
                    { id: "vue", label: "Vue" },
                    { id: "html", label: "HTML" },
                    { id: "svg", label: "SVG" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                    className={`py-1.5 rounded-lg transition-all text-[11px] font-bold ${activeTab === tab.id
                      ? "bg-[#1f2024] text-brand-yellow shadow-sm"
                      : "text-neutral-400 hover:text-neutral-200"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code Content Box with Smooth Scrollbar */}
              <div className="p-3 bg-[#121316] font-mono text-[11px] leading-relaxed text-amber-200/90 max-h-36 overflow-y-auto flex items-start">
                <code className="whitespace-pre-wrap break-all block w-full select-all font-mono">
                  {getSnippetForTab()}
                </code>
              </div>
            </div>

            {/* Copy & Download Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => handleCopyCode("component")}
                className="w-full py-2.5 bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark rounded-xl font-bold text-xs sm:text-sm border border-brand-border transition-colors flex items-center justify-center gap-2"
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
                  className="py-2 px-2.5 bg-white text-brand-dark border border-brand-border rounded-xl font-bold text-xs hover:bg-neutral-50 transition-colors text-center"
                >
                  {copiedFormat === "svg" ? "Copied SVG!" : "</> Copy SVG"}
                </button>
                <button
                  onClick={handleDownloadSvg}
                  className="py-2 px-2.5 bg-white text-brand-dark border border-brand-border rounded-xl font-bold text-xs hover:bg-neutral-50 transition-colors text-center"
                >
                  ↓ Download SVG
                </button>
              </div>
            </div>
          </>
        )}
      </aside>

    </div>
  );
}
