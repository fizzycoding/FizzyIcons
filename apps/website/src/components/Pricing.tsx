"use client";

import React from "react";
import { Check, ArrowRight } from "@fizzyicons/react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-yellow/30 border border-brand-border/20 rounded-full text-xs font-bold text-brand-dark mb-4">
            <span>100% Free & Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Free forever for personal & commercial use
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-dark/70 font-medium">
            Licensed under MIT. Build landing pages, SaaS apps, mobile apps, or design systems without restriction.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Open Source */}
          <div className="relative bg-brand-bg border-2 border-brand-border rounded-3xl p-8 shadow-brutal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xl text-brand-dark">Community</span>
                <span className="px-3 py-1 bg-brand-yellow rounded-full text-xs font-extrabold border border-brand-border">
                  Free Forever
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-brand-dark">$0</span>
                <span className="text-brand-dark/60 font-semibold text-sm">/ forever</span>
              </div>
              <p className="mt-4 text-sm text-brand-dark/70 font-medium">
                Everything you need to build stunning websites, web applications, and mobile products.
              </p>

              <div className="mt-8 space-y-3 font-semibold text-sm text-brand-dark/80">
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>Compulsory 3 styles (Outline, Solid, Colored)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>React & React Native packages</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>MIT License (Commercial OK)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>Master SVGs source in icons/ folder</span>
                </div>
              </div>
            </div>

            <a
              href="#docs"
              className="mt-8 w-full py-3.5 px-6 bg-brand-dark text-white rounded-2xl font-bold text-center text-sm shadow-brutal hover:bg-neutral-800 transition-colors block"
            >
              Get Started Now
            </a>
          </div>

          {/* Card 2: Sponsor / Enterprise */}
          <div className="relative bg-white border-2 border-brand-border rounded-3xl p-8 shadow-brutal-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xl text-brand-dark">Sponsor & Support</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-extrabold border border-emerald-300">
                  Open Collective
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-brand-dark">$10</span>
                <span className="text-brand-dark/60 font-semibold text-sm">/ month optional</span>
              </div>
              <p className="mt-4 text-sm text-brand-dark/70 font-medium">
                Help us keep maintaining and adding 50+ new master icons every month to the library.
              </p>

              <div className="mt-8 space-y-3 font-semibold text-sm text-brand-dark/80">
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>Request custom master icon designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>Priority GitHub issue response</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>Sponsor logo on GitHub README</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} color="#10B981" />
                  <span>Supporting open-source tooling</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full py-3.5 px-6 bg-brand-yellow text-brand-dark rounded-2xl font-bold text-center text-sm border-2 border-brand-border shadow-brutal hover:bg-brand-yellowHover transition-colors flex items-center justify-center gap-2"
            >
              <span>Sponsor on GitHub</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
