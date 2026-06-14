// ─── Particle система ─────────────────────────────────────────
export function initParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;
  let W = 0, H = 0;
  const mouse = { x: -999, y: -999 };

  type P = { x:number; y:number; vx:number; vy:number; r:number; a:number; color:string };

  const mkP = (): P => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.5 + 0.5,
    a: Math.random() * 0.5 + 0.1,
    color: Math.random() < 0.7 ? "59,130,246" : "124,58,237",
  });

  let particles: P[] = [];

  const resize = () => {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    particles = Array.from({ length: 120 }, mkP);
  };

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${(1 - d / 110) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    // Particles
    particles.forEach((p) => {
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const f = (100 - dist) / 100;
        p.vx += (dx / dist) * f * 0.5;
        p.vy += (dy / dist) * f * 0.5;
      }
      p.vx *= 0.98; p.vy *= 0.98;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) Object.assign(p, mkP());
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);

  canvas.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.addEventListener("mouseleave", () => { mouse.x = -999; mouse.y = -999; });
}

// ─── Glitch текст ─────────────────────────────────────────────
export function initGlitch() {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
  document.querySelectorAll<HTMLElement>("[data-glitch]").forEach((el) => {
    const original = el.textContent || "";
    let frame = 0, raf: number;
    const run = () => {
      cancelAnimationFrame(raf);
      frame = 0;
      const animate = () => {
        el.textContent = original.split("").map((ch, i) => {
          if (i < frame) return original[i];
          if (ch === " ") return " ";
          return charset[Math.floor(Math.random() * charset.length)];
        }).join("");
        if (frame < original.length) { frame += 0.4; raf = requestAnimationFrame(animate); }
        else el.textContent = original;
      };
      animate();
    };
    el.addEventListener("mouseenter", run);
    setTimeout(run, 900);
  });
}

// ─── 3D Tilt карточки ─────────────────────────────────────────
export function initTilt() {
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)`;
      card.style.transition = "transform .1s";
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition = "transform .7s cubic-bezier(.23,1,.32,1), border-color .4s, box-shadow .4s";
    });
  });
}

// ─── Magnetic кнопки ──────────────────────────────────────────
export function initMagnetic() {
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || "0.35");
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate(${x}px,${y}px) scale(1.04)`;
      el.style.transition = "transform .15s ease";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
      el.style.transition = "transform .5s cubic-bezier(.23,1,.32,1)";
    });
  });
}

// ─── Scroll reveal с stagger ──────────────────────────────────
export function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const delay = parseFloat(el.dataset.delay || "0");
      setTimeout(() => el.classList.add("revealed"), delay);
      obs.unobserve(el);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
}

// ─── Счётчики ─────────────────────────────────────────────────
export function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const to = parseFloat(el.dataset.count || "0");
      const sfx = el.dataset.suffix || "";
      const dur = 1800;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.floor(ease * to) + sfx;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach((el) => obs.observe(el));
}

// ─── Кастомный курсор ─────────────────────────────────────────
export function initCursor() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.id = "cur-dot";
  ring.id = "cur-ring";
  document.body.append(dot, ring);

  let mx = 0, my = 0, rx = 0, ry = 0;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });

  const tick = () => {
    dot.style.transform = `translate(${mx}px,${my}px)`;
    rx = lerp(rx, mx, 0.11);
    ry = lerp(ry, my, 0.11);
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(tick);
  };
  tick();

  document.querySelectorAll("a,button,[data-magnetic],[data-tilt]").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("big"));
    el.addEventListener("mouseleave", () => ring.classList.remove("big"));
  });
}