"use client";

import React, { useState, useMemo } from "react";
import { getAllIcons, IconVariant, IconSizeToken } from "@fizzyicons/core";
import { Icon, Check } from "@fizzyicons/react";

export function IconExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>("outline");
  const [selectedSize, setSelectedSize] = useState<IconSizeToken>("normal");
  
  // Custom Color Slots state
  const [color1, setColor1] = useState("#FFDE59");
  const [color2, setColor2] = useState("#3B82F6");
  const [color3, setColor3] = useState("#18181B");

  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [selectedIconForModal, setSelectedIconForModal] = useState<any | null>(null);

  const allIcons = useMemo(() => getAllIcons(), []);

  const filteredIcons = useMemo(() => {
    return allIcons.filter((icon) => {
      const matchesSearch =
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === "All" || icon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allIcons, searchQuery, selectedCategory]);

  const customColors = useMemo(() => {
    return {
      1: color1,
      2: color2,
      3: color3,
    };
  }, [color1, color2, color3]);

  const handleCopyCode = (iconName: string, format: "jsx" | "generic" | "svg") => {
    let snippet = "";
    if (format === "jsx") {
      const pascalName = iconName
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("");
      snippet = `<${pascalName} variant="${selectedVariant}" size="${selectedSize}" />`;
    } else if (format === "generic") {
      snippet = `<Icon name="${iconName}" variant="${selectedVariant}" size="${selectedSize}" />`;
    } else {
      snippet = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!-- FizzyIcons ${iconName} ${selectedVariant} --></svg>`;
    }
    navigator.clipboard.writeText(snippet);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <section id="icons" className="py-20 bg-white border-y border-brand-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-yellow/30 border border-brand-border/20 rounded-full text-xs font-bold text-brand-dark mb-4">
            <span>Compulsory 3-Style System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Explore Master Icons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-dark/70 font-medium">
            Every icon features 3 compulsory styles (Outline, Solid, Colored) with dynamic color slots.
          </p>
        </div>

        {/* Toolbar Controls */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 sm:p-6 mb-10 space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search master icons (e.g. home, settings, user)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
            </div>

            {/* Variant Style Switcher (Compulsory 3 styles) */}
            <div className="bg-white border-2 border-black rounded-2xl px-3.5 py-2 flex items-center gap-3">
              <span className="text-[11px] font-black uppercase text-gray-800 tracking-wider">
                VARIANT
              </span>
              <div className="flex gap-1 bg-[#F4F4F5] p-1 rounded-xl">
                {(["outline", "solid", "colored"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
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

            {/* Size Token Switcher */}
            <div className="bg-white border-2 border-black rounded-2xl px-3.5 py-2 flex items-center gap-3">
              <span className="text-[11px] font-black uppercase text-gray-800 tracking-wider">
                SIZE
              </span>
              <div className="flex gap-1 bg-[#F4F4F5] p-1 rounded-xl">
                {(
                  [
                    { label: "Micro (16px)", val: "micro" },
                    { label: "Small (20px)", val: "small" },
                    { label: "Normal (24px)", val: "normal" },
                  ] as const
                ).map((sz) => (
                  <button
                    key={sz.val}
                    onClick={() => setSelectedSize(sz.val)}
                    className={`px-3.5 py-1 rounded-lg text-xs font-extrabold transition-all border-2 ${
                      selectedSize === sz.val
                        ? "bg-[#FDE047] text-black border-black shadow-2xs"
                        : "border-transparent text-gray-700 hover:text-black"
                    }`}
                  >
                    {sz.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Color Slots Customizer Bar (Only shown for Colored or interactive) */}
          {selectedVariant === "colored" && (
            <div className="pt-4 border-t border-gray-200/60 flex flex-wrap items-center gap-6">
              <span className="text-xs font-bold text-gray-700 uppercase">
                Numbered Color Slots:
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Color 1:</span>
                <input
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-7 h-7 rounded-lg cursor-pointer border border-gray-300"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Color 2:</span>
                <input
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-7 h-7 rounded-lg cursor-pointer border border-gray-300"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500">Color 3:</span>
                <input
                  type="color"
                  value={color3}
                  onChange={(e) => setColor3(e.target.value)}
                  className="w-7 h-7 rounded-lg cursor-pointer border border-gray-300"
                />
              </div>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="pt-4 border-t border-gray-200/60 flex flex-wrap gap-2">
            {["All", "Interface", "Media", "Development", "Commerce", "Arrows"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all ${
                  selectedCategory === cat
                    ? "bg-[#FEF08A] text-gray-900"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredIcons.map((icon) => {
            const isJustCopied = copiedIcon === icon.name;

            return (
              <div
                key={icon.name}
                onClick={() => setSelectedIconForModal(icon)}
                className="relative bg-white border border-neutral-200 rounded-3xl p-5 flex flex-col items-center justify-between gap-4 cursor-pointer min-h-[200px]"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-50 mt-1">
                  <Icon
                    name={icon.name}
                    variant={selectedVariant}
                    size={selectedSize}
                    colors={customColors}
                  />
                </div>

                <div className="text-center">
                  <span className="font-extrabold text-sm text-brand-dark block tracking-tight">
                    {icon.title}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 block tracking-tight">
                    {icon.name}
                  </span>
                </div>

                {/* Quick copy button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyCode(icon.name, "jsx");
                  }}
                  className="w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-brand-dark font-bold text-xs rounded-xl border border-neutral-200 transition-colors text-center"
                >
                  {isJustCopied ? "Copied!" : "Copy JSX"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Icon Detail Modal */}
        {selectedIconForModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border-2 border-brand-border rounded-3xl p-8 max-w-lg w-full shadow-brutal-xl space-y-6 relative">
              <button
                onClick={() => setSelectedIconForModal(null)}
                className="absolute top-4 right-4 text-brand-dark/60 hover:text-brand-dark font-black text-xl"
              >
                ✕
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-yellow/30 border-2 border-brand-border rounded-2xl flex items-center justify-center">
                  <Icon name={selectedIconForModal.name} variant={selectedVariant} size={36} colors={customColors} />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-dark">{selectedIconForModal.title}</h3>
                  <span className="font-mono text-xs text-brand-dark/60">icons/{selectedIconForModal.name}/</span>
                </div>
              </div>

              {/* Previews in 3 Compulsory Styles */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-brand-dark/60">3 Compulsory Styles Preview:</span>
                <div className="grid grid-cols-3 gap-3">
                  {(["outline", "solid", "colored"] as const).map((st) => (
                    <div key={st} className="p-3 bg-brand-bg border border-brand-border/20 rounded-2xl flex flex-col items-center gap-2">
                      <Icon name={selectedIconForModal.name} variant={st} size={28} colors={customColors} />
                      <span className="text-xs font-bold capitalize">{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy Code Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => handleCopyCode(selectedIconForModal.name, "jsx")}
                  className="w-full py-3 bg-brand-yellow text-brand-dark rounded-2xl font-extrabold text-sm border-2 border-brand-border shadow-brutal hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-2"
                >
                  <Check size={18} />
                  <span>Copy React Component &lt;{selectedIconForModal.title} /&gt;</span>
                </button>

                <button
                  onClick={() => handleCopyCode(selectedIconForModal.name, "generic")}
                  className="w-full py-3 bg-brand-dark text-white rounded-2xl font-extrabold text-sm border-2 border-black hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Copy Generic &lt;Icon name=&quot;{selectedIconForModal.name}&quot; /&gt;</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
