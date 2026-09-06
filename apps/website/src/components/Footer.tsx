"use client";

import React from "react";
import { Heart } from "@fizzyicons/react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-brand-yellow rounded-xl border border-black flex items-center justify-center text-brand-dark font-black text-lg">
                F
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                FizzyIcons
              </span>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm font-medium leading-relaxed">
              A unified multi-framework icon system built from master SVGs in icons/ for Web, React, React Native, and design systems worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider">Product</h4>
            <ul className="space-y-2 text-neutral-400 font-medium">
              <li><a href="#icons" className="hover:text-white transition-colors">Icon Library</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & License</a></li>
              <li><a href="#changelog" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider">Packages</h4>
            <ul className="space-y-2 text-neutral-400 font-medium">
              <li><a href="#docs" className="hover:text-white transition-colors">@fizzyicons/core</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">@fizzyicons/react</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">@fizzyicons/react-native</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">icons/ master directory</a></li>
            </ul>
          </div>

          {/* Legal / Community */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider">Community</h4>
            <ul className="space-y-2 text-neutral-400 font-medium">
              <li><a href="https://github.com" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contributing Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MIT License</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-medium gap-4">
          <div>
            © {new Date().getFullYear()} FizzyIcons. Released under the MIT License.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart variant="solid" color="#EF4444" size={14} />
            <span>for web builders worldwide.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
