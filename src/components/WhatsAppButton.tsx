"use client";

import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    const t2 = setTimeout(() => setPulse(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const waPhone = "79888006982";
  const waMsg = encodeURIComponent("Привет! Хочу обсудить проект 👋");

  const base = `fixed right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-out hover:scale-110 active:scale-95 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`;

  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${waPhone}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className={`${base} bottom-24 shadow-green-900/40`}
        style={{ background: "#25D366" }}
      >
        {pulse && (
          <span className="absolute inset-0 rounded-full animate-wa-pulse" style={{ background: "#25D366", opacity: 0.4 }} />
        )}
        <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10" fill="white">
          <path d="M16 3C9.37 3 4 8.37 4 15c0 2.39.68 4.63 1.86 6.54L4 29l7.65-1.82A12.9 12.9 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.96 0-3.82-.53-5.43-1.52l-.38-.23-4.54 1.08 1.1-4.4-.25-.4A9.96 9.96 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.49-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.48.71.3 1.26.48 1.69.62.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/ingushiiyy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className={`${base} bottom-6 shadow-blue-900/40`}
        style={{ background: "#229ED9" }}
      >
        {pulse && (
          <span className="absolute inset-0 rounded-full animate-wa-pulse" style={{ background: "#229ED9", opacity: 0.4 }} />
        )}
        <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10" fill="white">
          <path d="M16 2C8.27 2 2 8.27 2 16s6.27 14 14 14 14-6.27 14-14S23.73 2 16 2zm6.87 9.58-2.34 11.02c-.17.77-.63.96-1.27.6l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.7.34l.25-3.56 6.47-5.84c.28-.25-.06-.39-.43-.14l-7.99 5.03-3.44-1.08c-.75-.23-.76-.75.16-1.11l13.43-5.18c.62-.23 1.17.15.05 1.87z"/>
        </svg>
      </a>
    </>
  );
}