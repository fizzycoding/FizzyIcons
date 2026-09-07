"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { getAllIcons, IconVariant, IconSizeToken } from "@fizzyicons/core";
import { Icon } from "@fizzyicons/react";

export function IconExplorer() {
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>("outline");
  const [selectedSize, setSelectedSize] = useState<IconSizeToken>("normal");

  const allIcons = useMemo(() => getAllIcons(), []);
  // Showcase top icons for landing page preview
  const showcaseIcons = useMemo(() => allIcons.slice(0, 14), [allIcons]);

  return (
    <section id="icons" className="py-20 bg-white border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-yellow/40 border border-brand-border/30 rounded-full text-xs font-black text-brand-dark mb-4">
            <span>Compulsory 3-Style System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight">
            Explore Master Icons
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-gray font-medium">
            Every icon features 3 compulsory styles (Outline, Solid, Colored) with dynamic color slots.
          </p>
        </div>

        {/* Toolbar Controls (Variant & Size only, no search or categories) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          
          {/* Variant Style Switcher */}
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
                  className={`px-5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all border ${
                    selectedVariant === v
                      ? "bg-brand-yellow text-brand-dark border-brand-border"
                      : "border-transparent text-brand-gray hover:text-brand-dark"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Size Token Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase text-brand-gray tracking-wider">
              SIZE
            </span>
            <div className="flex gap-1 bg-white p-1 rounded-xl border border-brand-border/15">
              {(
                [
                  { label: "Normal (24px)", val: "normal" },
                  { label: "Small (20px)", val: "small" },
                  { label: "Micro (16px)", val: "micro" },
                ] as const
              ).map((sz) => (
                <button
                  key={sz.val}
                  type="button"
                  onClick={() => setSelectedSize(sz.val)}
                  className={`px-5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedSize === sz.val
                      ? "bg-brand-yellow text-brand-dark border-brand-border"
                      : "border-transparent text-brand-gray hover:text-brand-dark"
                  }`}
                >
                  {sz.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Clean Icon Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {showcaseIcons.map((icon) => (
            <Link
              key={icon.name}
              href="/icons"
              className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-150 min-h-[95px] border border-brand-border/15 hover:border-brand-border hover:bg-brand-yellow/20 group"
            >
              <Icon
                name={icon.name}
                variant={selectedVariant}
                size={selectedSize}
              />
              <span className="text-xs font-medium text-brand-dark/70 group-hover:text-brand-dark tracking-tight text-center truncate max-w-[90px]">
                {icon.name}
              </span>
            </Link>
          ))}
        </div>

        {/* View All Icons Redirect Button */}
        <div className="mt-12 text-center">
          <Link
            href="/icons"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark rounded-xl font-bold text-sm sm:text-base border border-brand-border transition-all"
          >
            <span>View All {allIcons.length} Master Icons</span>
            <Icon name="arrow-right" variant="outline" size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

