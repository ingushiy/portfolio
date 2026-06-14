"use client";

import { useEffect, useRef, useState } from "react";
import MessengerModal from "@/components/MessengerModal";
import {
  initParticles, initGlitch, initTilt,
  initMagnetic, initScrollReveal, initCounters, initCursor,
} from "@/animations";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
    if (canvasRef.current) initParticles(canvasRef.current);
    initGlitch();
    initTilt();
    initMagnetic();
    initScrollReveal();
    initCounters();
    initCursor();
  }, []);

  return (
    <div className="flex flex-col bg-black">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Видео фон */}
        <video ref={videoRef} autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Particle canvas поверх видео */}
        <canvas ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none" />

        {/* Тёмный оверлей */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Scanlines */}
        <div className="scanlines absolute inset-0 z-20 pointer-events-none" />

        {/* Контент */}
        <div className="relative z-30 text-center px-4 max-w-2xl mx-auto">
          <span className="inline-block mb-5 text-xs font-medium px-3 py-1 rounded-full border border-blue-400/40 bg-blue-600/20 text-blue-300 tracking-wide animate-badge opacity-0">
            Доступно для новых проектов
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-5 text-white leading-tight">
            <div className="overflow-hidden">
              <span className="block animate-slide-up-1">Создаю сайты</span>
            </div>
            <div className="overflow-hidden">
              <span className="block animate-slide-up-2">
                и <span data-glitch className="text-blue-400">Telegram ботов</span>
              </span>
            </div>
          </h1>

          <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-10 leading-relaxed opacity-0 animate-fade-delayed">
            Помогу вашему бизнесу или проекту выйти в онлайн.
            Современный дизайн, чистый код, быстрый запуск.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center opacity-0 animate-fade-delayed2">
            <a href="/contacts" data-magnetic="0.35"
              className="relative overflow-hidden bg-blue-600 text-white px-7 py-3.5 rounded-xl font-medium group">
              <span className="relative z-10">Связаться</span>
              <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a href="/portfolio" data-magnetic="0.35"
              className="bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-medium hover:bg-white/20 transition-all duration-200">
              Посмотреть работы
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs z-30 animate-bounce-slow">
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
        </div>

        <div className="absolute bottom-0 left-0 w-full z-30 leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60Z" fill="#050510" />
          </svg>
        </div>
      </section>

      {/* ── Статистика ── */}
      <section className="bg-[#050510] py-14 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-3 divide-x divide-white/5">
          {[
            { count: "15", suffix: "+", label: "проектов сдано" },
            { count: "2",  suffix: "–4 дня", label: "средний срок сайта" },
            { count: "100", suffix: "%", label: "клиентов довольны" },
          ].map(({ count, suffix, label }, i) => (
            <div key={label} data-reveal data-delay={`${i * 120}`} className="text-center px-4 py-6">
              <span data-count={count} data-suffix={suffix}
                className="block text-4xl sm:text-5xl font-bold text-white">0</span>
              <p className="text-xs text-white/35 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Услуги ── */}
      <section className="relative py-24 px-4 overflow-hidden bg-[#050510]">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          ref={(el) => { if (el) el.playbackRate = 0.7; }}>
          <source src="/services.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p data-reveal data-delay="0" className="text-xs font-medium uppercase tracking-widest text-white/30 mb-2 text-center">Услуги</p>
          <h2 data-reveal data-delay="80" className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">Что я делаю</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                delay: 160, accent: "blue", tag: "Next.js · Tailwind",
                title: "Веб-страницы",
                items: ["Лендинги и сайты-визитки","Сайты для портфолио","Страницы для мероприятий","Адаптивный дизайн"],
                icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18" /></>
              },
              {
                delay: 260, accent: "violet", tag: "Python · Node.js",
                title: "Telegram боты",
                items: ["Боты для заказов и связи","Уведомления и мониторинг","To-do и напоминалки","Интеграция с API"],
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              },
            ].map(({ delay, accent, title, items, tag, icon }) => (
              <div key={title} data-reveal data-delay={`${delay}`} data-tilt
                className="tilt-card group relative overflow-hidden bg-white/[0.03] rounded-2xl p-7 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] transition-all duration-500">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(59,130,246,0.07)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${accent === "blue" ? "bg-blue-500/15" : "bg-violet-500/15"}`}>
                  <svg className={`w-5 h-5 ${accent === "blue" ? "text-blue-400" : "text-violet-400"}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
                <ul className="text-sm text-white/50 space-y-2 mb-4">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${accent === "blue" ? "bg-blue-400" : "bg-violet-400"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className={`inline-block text-xs px-2.5 py-1 rounded-md font-medium border ${accent === "blue" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : "bg-violet-500/10 text-violet-400 border-violet-500/20"}`}>
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0,15 C480,60 960,0 1440,40 L1440,60 L0,60Z" fill="#000" />
          </svg>
        </div>
      </section>

      {/* ── Почему я ── */}
      <section className="relative py-24 px-4 overflow-hidden bg-black">
        <video autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          ref={(el) => { if (el) el.playbackRate = 0.7; }}>
          <source src="/matrix-mask.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p data-reveal data-delay="0" className="text-xs font-medium uppercase tracking-widest text-white/30 mb-2 text-center">Преимущества</p>
          <h2 data-reveal data-delay="80" className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">Почему я?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { delay:160, bg:"bg-amber-500/10", color:"text-amber-400", title:"Быстро", text:"Сайт за 2–3 дня, бот — за 1–2 дня",
                icon:<path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /> },
              { delay:260, bg:"bg-blue-500/10",  color:"text-blue-400",  title:"Современно", text:"Чистый дизайн, Tailwind CSS, Next.js",
                icon:<path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /> },
              { delay:360, bg:"bg-emerald-500/10", color:"text-emerald-400", title:"Поддержка", text:"Помогаю после сдачи, вношу правки",
                icon:<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /> },
            ].map(({ delay, bg, color, title, text, icon }) => (
              <div key={title} data-reveal data-delay={`${delay}`}
                className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/[0.06] hover:-translate-y-2 hover:border-white/20 transition-all duration-500">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/40">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60Z" fill="#050510" />
          </svg>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#050510] py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-lg mx-auto">
          <h2 data-reveal data-delay="0" className="text-2xl sm:text-3xl font-bold text-white mb-4">Готовы начать?</h2>
          <p data-reveal data-delay="100" className="text-white/40 mb-8 text-sm leading-relaxed">
            Напишите — обсудим проект, сроки и стоимость. Ответ в течение нескольких часов.
          </p>
          <div data-reveal data-delay="200">
            <button onClick={() => setModalOpen(true)} data-magnetic="0.35"
              className="relative inline-block overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-xl font-medium group cursor-pointer">
              <span className="relative z-10">Написать сейчас →</span>
              <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </div>
        </div>
      </section>

      <MessengerModal open={modalOpen} onClose={() => setModalOpen(false)} />

    </div>
  );
}