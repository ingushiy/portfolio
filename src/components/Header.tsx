"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="text-lg font-bold tracking-tight text-white">
          WebDev<span className="text-blue-400">Studio</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <a href="/" className="text-white/80 hover:text-white transition-colors">Главная</a>
          <a href="/portfolio" className="text-white/80 hover:text-white transition-colors">Портфолио</a>
          <a href="/contacts" className="text-white/80 hover:text-white transition-colors">Контакты</a>
        </div>

        {/* Mobile burger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-black/80 backdrop-blur-md border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-3 text-sm font-medium">
          <a href="/" className="text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>Главная</a>
          <a href="/portfolio" className="text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>Портфолио</a>
          <a href="/contacts" className="text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>Контакты</a>
        </div>
      )}
    </header>
  );
}