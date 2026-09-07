"use client";

import React, { useState } from "react";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-brand-border/15 rounded-full text-xs font-semibold text-brand-dark mb-4 shadow-sm">
              <span>Multi-Framework Ready</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
              Seamless Integration. <br />
              Ready for Your Stack.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-brand-gray font-normal leading-relaxed">
              Import cleanly typed icon components directly into React, React Native, Vue, or export raw optimized SVGs.
            </p>

            {/* Framework Features */}
            <div className="mt-6 space-y-3.5 font-medium text-sm text-brand-dark">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-yellow/50 border border-brand-border/30 flex items-center justify-center text-[10px] font-bold text-brand-dark flex-shrink-0">
                  ✓
                </div>
                <span>React & Next.js App Router compatible</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-yellow/50 border border-brand-border/30 flex items-center justify-center text-[10px] font-bold text-brand-dark flex-shrink-0">
                  ✓
                </div>
                <span>React Native SVG support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-yellow/50 border border-brand-border/30 flex items-center justify-center text-[10px] font-bold text-brand-dark flex-shrink-0">
                  ✓
                </div>
                <span>3 Compulsory styles (Outline, Solid, Colored)</span>
              </div>
            </div>
          </div>

          {/* Right Code Tab Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#141416] border border-brand-border/20 rounded-2xl overflow-hidden shadow-sm">
              
              {/* Header Tabs */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800">
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {(
                    [
                      { id: "react", label: "React" },
                      { id: "react-native", label: "React Native" },
                      { id: "vue", label: "Vue" },
                      { id: "svg", label: "SVG Raw" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-brand-yellow text-brand-dark border border-brand-border/40"
                          : "text-neutral-400 hover:text-white border border-transparent"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold rounded-lg hover:bg-neutral-800"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  ) : (
                    <span>Copy Code</span>
                  )}
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-5 overflow-x-auto text-xs sm:text-sm font-mono text-neutral-200 leading-relaxed bg-[#141416]">
                <pre>{snippets[activeTab]}</pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

