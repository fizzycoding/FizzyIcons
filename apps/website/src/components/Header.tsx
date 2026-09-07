"use client";

import React, { useState } from "react";
import { ArrowRight } from "@fizzyicons/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#FAF8F5] border-b border-brand-border/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-brand-yellow rounded-xl border-2 border-brand-border flex items-center justify-center shadow-brutal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            {/* Isometric Box Icon */}
            <svg
              className="w-6 h-6 text-brand-dark"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-brand-dark">
            FizzyIcons
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-brand-dark/80">
          <a href="/icons" className="hover:text-brand-dark transition-colors">
            Icons
          </a>
          <a href="#docs" className="hover:text-brand-dark transition-colors">
            Docs
          </a>
          <a href="#pricing" className="hover:text-brand-dark transition-colors">
            Pricing
          </a>
          <a href="#changelog" className="hover:text-brand-dark transition-colors">
            Changelog
          </a>
        </nav>

        {/* Right CTA / GitHub */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold hover:bg-black/5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-brand-dark" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>12.4k</span>
          </a>

          <a
            href="#docs"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-yellow hover:bg-brand-yellowHover text-brand-dark font-bold text-sm rounded-xl border-2 border-brand-border shadow-brutal hover:shadow-brutal-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-dark hover:bg-black/5 rounded-lg"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-brand-border px-4 py-6 space-y-4 shadow-lg">
          <a
            href="/icons"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-semibold text-brand-dark"
          >
            Icons
          </a>
          <a
            href="#docs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-semibold text-brand-dark"
          >
            Docs
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-semibold text-brand-dark"
          >
            Pricing
          </a>
          <a
            href="#changelog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-semibold text-brand-dark"
          >
            Changelog
          </a>
          <div className="pt-4 flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-brand-border rounded-xl font-bold text-sm bg-white"
            >
              <span>12.4k Stars</span>
            </a>
            <a
              href="#docs"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-yellow border-2 border-brand-border rounded-xl font-bold text-sm"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
