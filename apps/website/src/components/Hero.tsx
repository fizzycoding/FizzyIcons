"use client";

import React, { useState } from "react";
import {
  Home,
  Search,
  User,
  Settings,
  Heart,
  Bell,
  Folder,
  Send,
  ChartBar,
  Code,
  Monitor,
  Database,
  Zap,
  Check,
} from "@fizzyicons/react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [pm, setPm] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm");

  const getCommand = () => {
    switch (pm) {
      case "npm":
        return "npm i @fizzyicons/icons";
      case "pnpm":
        return "pnpm add @fizzyicons/icons";
      case "yarn":
        return "yarn add @fizzyicons/icons";
      case "bun":
        return "bun add @fizzyicons/icons";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT FLOATING HERO CARD (Visual 1) */}
          <div className="hidden lg:flex lg:col-span-3 order-2 lg:order-1 justify-center relative">
            {/* Tactile Card with Yellow Offset Box */}
            <div className="relative w-full max-w-[245px] transform -rotate-3 translate-y-2">
              
              {/* Yellow Shadow Backdrop */}
              <div className="absolute inset-0 bg-brand-yellow rounded-2xl border-2 border-brand-border translate-x-3 translate-y-3"></div>

              {/* White Top Card */}
              <div className="relative bg-white border-2 border-brand-border rounded-2xl p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Home variant="outline" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Search variant="outline" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <User variant="outline" size={22} />
                  </div>

                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Settings variant="outline" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Heart variant="solid" size={22} color="#EF4444" />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Bell variant="colored" size={22} />
                  </div>

                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Folder variant="colored" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Send variant="colored" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <ChartBar variant="colored" size={22} />
                  </div>
                </div>
              </div>

              {/* Handwritten doodle annotation bottom-left */}
              <div className="absolute -bottom-16 -left-6 z-20 flex flex-col items-start select-none pointer-events-none">
                <svg className="w-6 h-6 text-brand-dark mb-0.5 ml-1 transform -rotate-6" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 42 Q 25 25 40 10 M 24 8 L 42 10 L 38 26" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-handwriting text-xl font-semibold text-brand-dark -rotate-3 tracking-wide leading-tight">
                  Small icons.<br />Big ideas.
                </span>
              </div>
            </div>
          </div>

          {/* CENTER HERO CONTENT */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center flex flex-col items-center">
            
            {/* Version Pill Badge */}
            <div className="inline-flex items-center gap-2 p-1 pl-1.5 pr-4 bg-white border border-brand-border/30 rounded-full shadow-sm text-xs sm:text-sm font-semibold mb-6">
              <span className="px-2.5 py-0.5 bg-brand-yellow rounded-full text-brand-dark font-extrabold border border-brand-border/40">
                v1.0
              </span>
              <span className="text-brand-dark/80">Open Source. Forever.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold text-brand-dark tracking-tight leading-[1.12] max-w-xl">
              A modern icon library for{" "}
              <span className="relative inline-block px-3.5 py-0.5 bg-brand-yellow rounded-2xl border-2 border-brand-border shadow-[3px_3px_0px_0px_rgba(24,24,27,1)] text-brand-dark">
                builders.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-brand-dark/70 max-w-xl font-medium leading-relaxed">
              Clean, consistent and flexible icons for Web, React, React Native and beyond.
            </p>

            {/* Copy Command Terminal Capsule */}
            <div className="mt-7 w-full max-w-md">
              <div className="bg-[#141416] text-white rounded-2xl p-2.5 px-4 flex items-center justify-between border-2 border-black shadow-brutal transition-all">
                <div className="flex items-center gap-2 text-sm sm:text-base font-mono font-medium overflow-x-auto select-all">
                  <span className="text-brand-yellow font-bold">&gt;_</span>
                  <span className="text-neutral-200">{getCommand()}</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="ml-2 p-2 hover:bg-neutral-800 rounded-xl transition-colors text-neutral-300 hover:text-white flex items-center justify-center min-w-[36px]"
                  title="Copy command"
                >
                  {copied ? (
                    <Check size={20} color="#34D399" />
                  ) : (
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Package Manager Quick Selector */}
              <div className="flex items-center justify-center gap-3 mt-3 text-xs font-semibold text-brand-dark/60">
                {(["npm", "pnpm", "yarn", "bun"] as const).map((mgr) => (
                  <button
                    key={mgr}
                    onClick={() => setPm(mgr)}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      pm === mgr
                        ? "text-brand-dark font-bold underline decoration-brand-yellow underline-offset-4"
                        : "hover:text-brand-dark"
                    }`}
                  >
                    {mgr}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT FLOATING HERO CARD (Visual 2) */}
          <div className="hidden lg:flex lg:col-span-3 order-3 justify-center relative">
            {/* Tactile Card with Yellow Offset Box */}
            <div className="relative w-full max-w-[245px] transform rotate-3 translate-y-2">
              
              {/* Yellow Shadow Backdrop */}
              <div className="absolute inset-0 bg-brand-yellow rounded-2xl border-2 border-brand-border translate-x-3 translate-y-3"></div>

              {/* White Top Card */}
              <div className="relative bg-white border-2 border-brand-border rounded-2xl p-4 shadow-sm">
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Code variant="colored" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Monitor variant="colored" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Database variant="colored" size={22} />
                  </div>

                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Zap variant="colored" size={22} />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Home variant="solid" size={22} color="#3B82F6" />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Heart variant="colored" size={22} />
                  </div>

                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Bell variant="solid" size={22} color="#F59E0B" />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Folder variant="solid" size={22} color="#D97706" />
                  </div>
                  <div className="aspect-square rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                    <Send variant="solid" size={22} color="#4338CA" />
                  </div>
                </div>
              </div>

              {/* Handwritten doodle annotation bottom-right */}
              <div className="absolute -bottom-16 -right-6 z-20 flex flex-col items-end select-none pointer-events-none">
                <svg className="w-6 h-6 text-brand-dark mb-0.5 mr-1 transform rotate-6" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M35 42 Q 25 25 10 10 M 26 8 L 8 10 L 12 26" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-handwriting text-xl font-semibold text-brand-dark rotate-2 tracking-wide leading-tight text-right">
                  Ready<br />for anything.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
