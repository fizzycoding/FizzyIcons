"use client";

import React, { useState } from "react";
import { Check } from "@fizzyicons/react";

export function Frameworks() {
  const [activeTab, setActiveTab] = useState<"react" | "react-native" | "vue" | "svg">("react");
  const [copied, setCopied] = useState(false);

  const snippets = {
    react: `import { Home, Heart, Settings } from '@fizzyicons/react';

export default function Dashboard() {
  return (
    <div className="flex items-center gap-4">
      {/* 3 Compulsory Styles: outline, solid, colored */}
      <Home variant="outline" size="normal" />
      <Heart variant="solid" color="#EF4444" size={24} />
      <Settings
        variant="colored"
        colors={{ "color-1": "#FFDE59", "color-2": "#3B82F6" }}
      />
    </div>
  );
}`,
    "react-native": `import { Home, Heart, Settings } from '@fizzyicons/react-native';
import { View } from 'react-native';

export function App() {
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Home variant="outline" size="normal" />
      <Heart variant="solid" color="#EF4444" />
      <Settings variant="colored" />
    </View>
  );
}`,
    vue: `<script setup>
import { HomeIcon, HeartIcon } from '@fizzyicons/vue';
</script>

<template>
  <div class="icon-row">
    <HomeIcon variant="outline" :size="24" />
    <HeartIcon variant="solid" color="#EF4444" />
  </div>
</template>`,
    svg: `<!-- Master Source SVGs in icons/ folder -->
<!-- compulsory styles: outline.svg, solid.svg, colored.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="var(--color-1, #FFDE59)"/>
</svg>`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="py-20 bg-brand-bg border-b border-brand-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-brand-border/20 rounded-full text-xs font-bold text-brand-dark mb-4 shadow-sm">
              <span>Multi-Framework Ready</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              One icon engine.<br />Every modern framework.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-dark/70 font-medium leading-relaxed">
              Master SVGs generated into native packages. Zero bloat, fully tree-shakeable, and TypeScript native out of the box.
            </p>

            {/* Framework Features */}
            <div className="mt-8 space-y-4 font-semibold text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-yellow border-2 border-brand-border flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>React & Next.js App Router compatible</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-yellow border-2 border-brand-border flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>React Native SVG support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-yellow border-2 border-brand-border flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>3 Compulsory styles (Outline, Solid, Colored)</span>
              </div>
            </div>
          </div>

          {/* Right Code Tab Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#141416] border-2 border-brand-border rounded-3xl overflow-hidden shadow-brutal-xl">
              
              {/* Header Tabs */}
              <div className="flex items-center justify-between px-4 pt-3 bg-neutral-900 border-b border-neutral-800">
                <div className="flex items-center gap-1 overflow-x-auto">
                  {(
                    [
                      { id: "react", label: "React", icon: "⚛" },
                      { id: "react-native", label: "React Native", icon: "📱" },
                      { id: "vue", label: "Vue", icon: "🟢" },
                      { id: "svg", label: "SVG Raw", icon: "📄" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#141416] text-brand-yellow border-t-2 border-x border-neutral-800"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopy}
                  className="p-2 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  ) : (
                    <span>Copy Code</span>
                  )}
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono text-neutral-200 leading-relaxed">
                <pre>{snippets[activeTab]}</pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
