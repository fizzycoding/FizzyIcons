"use client";

import React from "react";

export function TrustedBy() {
  return (
    <section className="w-full border-t border-brand-border/10 pt-8 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label Left */}
          <div className="text-xs font-bold tracking-widest text-brand-dark/50 uppercase select-none whitespace-nowrap">
            TRUSTED BY BUILDERS WORLDWIDE
          </div>

          {/* Partner / Framework Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 font-bold text-brand-dark/80 text-sm sm:text-base">
            
            {/* Vercel */}
            <div className="flex items-center gap-2 hover:text-brand-dark transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 76 65">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span className="font-extrabold tracking-tight text-base">Vercel</span>
            </div>

            {/* React */}
            <div className="flex items-center gap-2 hover:text-brand-dark transition-colors">
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="-11.5 -10.23174 23 20.46348">
                <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                <g stroke="currentColor" strokeWidth="1">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span className="font-extrabold tracking-tight text-base">React</span>
            </div>

            {/* Next.js */}
            <div className="flex items-center gap-2 hover:text-brand-dark transition-colors">
              <div className="w-5 h-5 rounded-full bg-brand-dark text-white font-black text-xs flex items-center justify-center">
                N
              </div>
              <span className="font-extrabold tracking-tight text-base">Next.js</span>
            </div>

            {/* Expo */}
            <div className="flex items-center gap-2 hover:text-brand-dark transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
              </svg>
              <span className="font-extrabold tracking-tight text-base">Expo</span>
            </div>

            {/* Tailwind CSS */}
            <div className="flex items-center gap-2 hover:text-brand-dark transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.667 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <span className="font-extrabold tracking-tight text-base">Tailwind CSS</span>
            </div>

          </div>

          {/* Tagline Right */}
          <div className="text-xs font-bold tracking-widest text-brand-dark/50 uppercase select-none hidden xl:block border-l border-brand-border/20 pl-6 py-1">
            SIMPLE ICONS.<br />BIGGER THINGS.
          </div>

        </div>
      </div>
    </section>
  );
}
