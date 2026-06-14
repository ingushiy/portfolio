"use client";

import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MessengerModal({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  const waPhone = "79888006982";
  const waMsg = encodeURIComponent("Привет! Хочу обсудить проект 👋");

  const messengers = [
    {
      name: "WhatsApp",
      href: `https://wa.me/${waPhone}?text=${waMsg}`,
      color: "#25D366",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="white">
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.39.68 4.63 1.86 6.54L4 29l7.65-1.82A12.9 12.9 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.96 0-3.82-.53-5.43-1.52l-.38-.23-4.54 1.08 1.1-4.4-.25-.4A9.96 9.96 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.49-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.48.71.3 1.26.48 1.69.62.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/ingushiiyy",
      color: "#229ED9",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="white">
          <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm6.87 9.58-2.34 11.02c-.17.77-.63.96-1.27.6l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.7.34l.25-3.56 6.47-5.84c.28-.25-.06-.39-.43-.14l-7.99 5.03-3.44-1.08c-.75-.23-.76-.75.16-1.11l13.43-5.18c.62-.23 1.17.15.05 1.87z"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
    >
      {/* Backdrop */}
      <div ref={ref} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full sm:max-w-sm mx-4 mb-4 sm:mb-0 bg-zinc-900 border border-white/10 rounded-2xl p-6 animate-modal-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-semibold text-lg">Написать нам</h3>
            <p className="text-white/40 text-sm mt-0.5">Выберите удобный мессенджер</p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {messengers.map(({ name, href, color, icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group"
              style={{ background: `${color}15` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                style={{ background: color }}>
                {icon}
              </div>
              <div>
                <div className="text-white font-medium">{name}</div>
                <div className="text-white/40 text-sm">Открыть чат</div>
              </div>
              <svg className="w-4 h-4 text-white/30 ml-auto group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}