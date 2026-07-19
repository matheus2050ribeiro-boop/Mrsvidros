/* ============================================
   MRS VIDROS — Script principal
   ============================================ */

const WHATSAPP = "5511981303415";
const EMAIL = "mrsvidracaria@gmail.com"; // TODO: substituir pelo e-mail oficial
const WA_MSG_DIRECT = "Olá, vim pelo site da MRS Vidros e gostaria de fazer um orçamento.";
const WA_MSG_HUMAN = "Olá, vim pelo site da MRS Vidros e gostaria de falar com um atendente.";

const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function waDirectHandler(e) {
  if (e && typeof e.preventDefault === "function") e.preventDefault();
  window.open(waLink(WA_MSG_DIRECT), "_blank", "noopener");
}

/* ---------- Catálogo ---------- */
const VIDROS = [
  { id: "box",       tag: "Box",           title: "Box para Banheiro",
    desc: "Modelos personalizados para banheiros residenciais e comerciais.",
    features: ["Correr, canto, pivotante ou piso-teto", "Vidro incolor, fumê, verde ou jateado", "Alumínio em várias cores"],
    images: ["imagens/box-1.jpg","imagens/box-2.jpg","imagens/box-3.jpg"] },
  { id: "espelhos",  tag: "Espelhos",      title: "Espelhos",
    desc: "Espelhos sob medida para banheiros, salas, quartos, academias e comércios.",
    features: ["Lapidado, bisotado ou orgânico", "Redondo ou com iluminação LED", "Fixação com botão ou colado"],
    images: ["imagens/espelho-1.jpg","imagens/espelho-2.jpg","imagens/espelho-3.jpg"] },
  { id: "guarda",    tag: "Guarda-corpo",  title: "Guarda-corpo",
    desc: "Guarda-corpos em vidro para escadas, sacadas e mezaninos.",
    features: ["Fixação com torre, botão ou perfil", "Vidro temperado ou laminado", "Instalação limpa e alinhada"],
    images: ["imagens/guarda-1.jpg","imagens/guarda-2.jpg","imagens/guarda-3.jpg"] },
  { id: "fachadas",  tag: "Fachadas",      title: "Fachadas de Vidro",
    desc: "Fachadas comerciais em vidro temperado com estrutura discreta.",
    features: ["Vidro temperado 10mm", "Estrutura em spider ou perfil", "Aplicação em lojas e escritórios"],
    images: ["imagens/hero.jpg","imagens/guarda-1.jpg","imagens/sacada-1.jpg"] },
  { id: "sacadas",   tag: "Sacadas",       title: "Envidraçamento de Sacada",
    desc: "Sistema deslizante que integra o ambiente à vista externa.",
    features: ["Panorâmico, sem colunas centrais", "Vidro temperado 8 ou 10 mm", "Trilhos com boa vedação"],
    images: ["imagens/sacada-1.jpg","imagens/sacada-2.jpg","imagens/sacada-3.jpg"] },
  { id: "coberturas",tag: "Coberturas",    title: "Coberturas de Vidro",
    desc: "Coberturas para áreas externas, jardins de inverno e passagens.",
    features: ["Vidro laminado de segurança", "Estrutura em alumínio ou aço", "Acabamento com calha e escoamento"],
    images: ["imagens/hero.jpg","imagens/sacada-2.jpg","imagens/guarda-2.jpg"] },
  { id: "fechamento",tag: "Fechamento",    title: "Fechamento de Área",
    desc: "Fechamento de áreas de serviço, varandas e jardins com vidro temperado.",
    features: ["Sistema deslizante ou fixo", "Vidro incolor, fumê ou verde", "Integra sem perder luminosidade"],
    images: ["imagens/sacada-3.jpg","imagens/sacada-1.jpg","imagens/hero.jpg"] },
  { id: "divisorias",tag: "Divisórias",    title: "Divisórias de Vidro",
    desc: "Divisórias para escritórios, lojas e ambientes residenciais.",
    features: ["Vidro temperado incolor ou jateado", "Perfil discreto em alumínio", "Portas de correr ou pivotantes"],
    images: ["imagens/porta-1.jpg","imagens/porta-2.jpg","imagens/guarda-3.jpg"] },
];

const ESQUADRIAS = [
  { id: "janelas",   tag: "Janelas",        title: "Janelas de Alumínio",
    desc: "Janelas nas linhas Suprema e Gold, com diferentes tipos de abertura.",
    features: ["Correr, maxim-ar, pivotante ou basculante", "Perfis reforçados", "Cores sob medida"],
    images: ["imagens/janela-1.jpg","imagens/janela-2.jpg","imagens/janela-3.jpg"] },
  { id: "portas",    tag: "Portas",         title: "Portas de Alumínio",
    desc: "Portas para entradas, ambientes internos e áreas comerciais.",
    features: ["Pivotantes, de correr, camarão ou balcão", "Vidro temperado sob medida", "Ferragens em várias cores"],
    images: ["imagens/porta-1.jpg","imagens/porta-2.jpg","imagens/porta-3.jpg"] },
  { id: "abrigo",    tag: "Abrigo",         title: "Abrigo para Pia",
    desc: "Proteção em vidro para a área da pia, evitando respingos.",
    features: ["Frontal, lateral ou em L", "Vidro incolor, fumê ou jateado", "Fixação com botão ou colado"],
    images: ["imagens/espelho-1.jpg","imagens/espelho-2.jpg","imagens/espelho-3.jpg"] },
];

const ALL = [...VIDROS, ...ESQUADRIAS];

/* ---------- Sub-modelos (Escolha por foto) ---------- */
const MODELS = {
  box: [
    { name: "Box de correr", img: "imagens/box-1.jpg" },
    { name: "Box de canto (em L)", img: "imagens/box-2.jpg" },
    { name: "Box de abrir (pivotante)", img: "imagens/box-3.jpg" },
    { name: "Box fixo (Walk-in)", img: "imagens/box-1.jpg" },
    { name: "Box até o teto (Piso-teto)", img: "imagens/box-2.jpg" },
    { name: "Box minimalista", img: "imagens/box-3.jpg" },
  ],
  espelhos: [
    { name: "Espelho lapidado", img: "imagens/espelho-1.jpg" },
    { name: "Espelho bisotado", img: "imagens/espelho-2.jpg" },
    { name: "Espelho orgânico", img: "imagens/espelho-3.jpg" },
    { name: "Espelho redondo", img: "imagens/espelho-1.jpg" },
    { name: "Espelho com LED", img: "imagens/espelho-2.jpg" },
  ],
  guarda: [
    { name: "Vidro com torre", img: "imagens/guarda-1.jpg" },
    { name: "Fixação com botão", img: "imagens/guarda-2.jpg" },
    { name: "Fixação com perfil U", img: "imagens/guarda-3.jpg" },
  ],
  fachadas: [{ name: "Fachada spider", img: "imagens/hero.jpg" }, { name: "Fachada com perfil", img: "imagens/guarda-1.jpg" }],
  sacadas: [{ name: "Sacada deslizante", img: "imagens/sacada-1.jpg" }, { name: "Sacada panorâmica", img: "imagens/sacada-2.jpg" }, { name: "Sacada retrátil", img: "imagens/sacada-3.jpg" }],
  coberturas: [{ name: "Cobertura fixa", img: "imagens/hero.jpg" }, { name: "Cobertura articulada", img: "imagens/sacada-2.jpg" }],
  fechamento: [{ name: "Fechamento deslizante", img: "imagens/sacada-3.jpg" }, { name: "Fechamento fixo", img: "imagens/sacada-1.jpg" }],
  divisorias: [{ name: "Divisória incolor", img: "imagens/porta-1.jpg" }, { name: "Divisória jateada", img: "imagens/porta-2.jpg" }],
  janelas: [
    { name: "Janela de correr", img: "imagens/janela-1.jpg" },
    { name: "Janela maxim-ar", img: "imagens/janela-2.jpg" },
    { name: "Janela pivotante", img: "imagens/janela-3.jpg" },
    { name: "Janela basculante", img: "imagens/janela-1.jpg" },
    { name: "Janela camarão", img: "imagens/janela-2.jpg" },
  ],
  portas: [
    { name: "Porta pivotante", img: "imagens/porta-1.jpg" },
    { name: "Porta de correr", img: "imagens/porta-2.jpg" },
    { name: "Porta camarão", img: "imagens/porta-3.jpg" },
    { name: "Porta Blindex", img: "imagens/porta-1.jpg" },
    { name: "Porta balcão", img: "imagens/porta-2.jpg" },
  ],
  abrigo: [
    { name: "Abrigo frontal", img: "imagens/espelho-1.jpg" },
    { name: "Abrigo frontal com prateleira", img: "imagens/espelho-2.jpg" },
    { name: "Abrigo em canto (L)", img: "imagens/espelho-3.jpg" },
  ],
};

const LOCAL_OPTS = ["Casa", "Apartamento", "Empresa"];
const COR_ALU = ["Preto", "Branco", "Fosco", "Bronze", "Cinza", "Champagne", "Dourado", "Grafite"];

function briefFor(id) {
  const p = ALL.find(x => x.id === id);
  if (!p) return null;
  const opts = (MODELS[id] || []).map(m => m.name);
  const hasCor = !["espelhos","abrigo"].includes(id);
  const steps = [
    { type: "opts", label: "Modelo", key: "modelo", options: opts },
    ...(hasCor ? [{ type: "opts", label: "Cor do alumínio", key: "cor", options: COR_ALU }] : []),
    { type: "measures" },
    { type: "qty" },
    { type: "contact" },
    { type: "obs" },
    { type: "prefwa" },
  ];
  return { tag: p.tag, title: `Orçamento de ${p.title}`, steps, id };
}

/* ---------- FAQ ---------- */
const FAQ = [
  { q: "Posso cortar um box de vidro para instalar em outro banheiro?",
    a: "Depende do tipo de vidro. Se for vidro temperado, não é possível realizar cortes ou novos furos após a têmpera. Apenas vidros comuns e laminados podem ser cortados, desde que tecnicamente viável." },
  { q: "Qual é o melhor tipo de box para banheiro?",
    a: "O box de correr é o mais procurado por aproveitar melhor o espaço. Para projetos sofisticados, pivotante, minimalista e piso-teto são excelentes opções." },
  { q: "Qual é o prazo para fabricação e instalação?",
    a: "Boxes padrão têm modelos à pronta entrega ou instalação em até 1 dia útil. Boxes sob medida têm prazo médio de 10 a 15 dias úteis." },
  { q: "O vidro do box é seguro?",
    a: "Sim. Trabalhamos com vidro temperado, que oferece alta resistência. Em caso de quebra, ele se fragmenta em pequenos pedaços menos cortantes." },
  { q: "O box pode enferrujar?",
    a: "Não. Usamos perfis de alumínio e ferragens desenvolvidos para resistir à umidade." },
  { q: "Como limpar o box de vidro?",
    a: "Água, detergente neutro e pano macio ou rodo. Evite produtos abrasivos e palha de aço." },
  { q: "Vocês fazem a medição e a instalação?",
    a: "Sim. Fazemos a visita técnica, a fabricação sob medida e a instalação final." },
];

/* ---------- Utils ---------- */
const svgArrow = (dir) => dir === "left"
  ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`
  : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

/* ---------- Card render (categoria) ---------- */
function catCard(p) {
  return `<button type="button" class="cat-card reveal" data-cat="${p.id}" data-cat-filter="${p.id}">
    <div class="cat-img"><img src="${p.images[0]}" alt="${p.title}" loading="lazy"/></div>
    <div class="cat-info">
      <span class="cat-tag">${p.tag}</span>
      <span class="cat-title">${p.title}</span>
      <span class="cat-desc">${p.desc}</span>
      <span class="cat-cta">Ver modelos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </div>
  </button>`;
}

function renderCategories() {
  const v = document.getElementById("vidrosGrid");
  const e = document.getElementById("esquadriasGrid");
  if (v) v.innerHTML = VIDROS.map(catCard).join("");
  if (e) e.innerHTML = ESQUADRIAS.map(catCard).join("");
  document.querySelectorAll("[data-cat]").forEach(b =>
    b.addEventListener("click", () => openPicker(b.dataset.cat))
  );
}

/* ---------- Galeria com filtro + lightbox ---------- */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const bar = document.getElementById("filterBar");
  if (!grid || !bar) return;
  const cats = [{ id: "all", label: "Todos" }, ...ALL.map(p => ({ id: p.id, label: p.tag }))];
  bar.innerHTML = cats.map((c, i) => `<button class="filter${i===0?" active":""}" data-filter="${c.id}">${c.label}</button>`).join("");
  const items = [];
  ALL.forEach(p => p.images.forEach((src, i) => items.push({ src, cat: p.id, alt: `${p.title} ${i+1}`, caption: p.title })));
  grid.innerHTML = items.map((it, i) => `
    <button class="gal-item reveal" data-i="${i}" data-cat="${it.cat}" aria-label="Abrir ${it.alt}">
      <img src="${it.src}" alt="${it.alt}" loading="lazy" />
      <span class="gal-cap">${it.caption}</span>
    </button>`).join("");

  bar.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => {
    bar.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const f = b.dataset.filter;
    grid.querySelectorAll(".gal-item").forEach(el => {
      el.style.display = (f === "all" || el.dataset.cat === f) ? "" : "none";
    });
  }));

  grid.querySelectorAll(".gal-item").forEach(el =>
    el.addEventListener("click", () => openLightbox(items, Number(el.dataset.i)))
  );
}

/* ---------- Lightbox ---------- */
let lbState = { items: [], idx: 0, zoom: 1 };
function openLightbox(items, idx) {
  lbState = { items, idx, zoom: 1 };
  const lb = document.getElementById("lightbox");
  lb.classList.add("open"); lb.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  updateLightbox();
}
function updateLightbox() {
  const it = lbState.items[lbState.idx]; if (!it) return;
  const img = document.getElementById("lbImg");
  img.src = it.src; img.alt = it.alt;
  img.style.transform = `scale(${lbState.zoom})`;
  document.getElementById("lbCaption").textContent = `${it.caption} — ${lbState.idx+1} / ${lbState.items.length}`;
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open"); lb.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
function lbNav(dir) {
  lbState.idx = (lbState.idx + dir + lbState.items.length) % lbState.items.length;
  lbState.zoom = 1; updateLightbox();
}
function setupLightbox() {
  const lb = document.getElementById("lightbox"); if (!lb) return;
  lb.querySelector("[data-lb-close]").addEventListener("click", closeLightbox);
  lb.querySelector("[data-lb-prev]").addEventListener("click", () => lbNav(-1));
  lb.querySelector("[data-lb-next]").addEventListener("click", () => lbNav(1));
  const img = document.getElementById("lbImg");
  img.addEventListener("click", (e) => { e.stopPropagation(); lbState.zoom = lbState.zoom === 1 ? 2 : 1; updateLightbox(); });
  document.getElementById("lbStage").addEventListener("click", (e) => { if (e.target.id === "lbStage") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbNav(-1);
    if (e.key === "ArrowRight") lbNav(1);
  });
  let sx = null;
  lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (sx == null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) lbNav(dx < 0 ? 1 : -1);
    sx = null;
  });
}

/* ---------- Picker ---------- */
function openPicker(catId) {
    const p = ALL.find(x => x.id === catId);
    const models = MODELS[catId] || [];
    if (!p) return;

    const assistant = document.getElementById("assistant");
    if (assistant) {
        assistant.classList.remove("open");
        assistant.setAttribute("aria-hidden", "true");
    }

  const modal = document.getElementById("pickerModal");
  document.getElementById("pickerTag").textContent = p.tag;
  document.getElementById("pickerTitle").textContent = `Escolha o modelo — ${p.title}`;
  const body = document.getElementById("pickerBody");
  body.innerHTML = `
    <p class="picker-hint">Toque em um modelo para abrir o formulário. Ou <a href="#" data-wa-direct>fale direto no WhatsApp</a>.</p>
    <div class="model-grid">
      ${models.map((m, i) => `
        <button type="button" class="model-card" data-model="${m.name}">
          <div class="model-img"><img src="${m.img}" alt="${m.name}" loading="lazy"/></div>
          <div class="model-info">
            <span class="model-num">${String(i+1).padStart(2,"0")}</span>
            <span class="model-name">${m.name}</span>
          </div>
        </button>`).join("")}
    </div>`;
  body.querySelectorAll("[data-model]").forEach(b =>
    b.addEventListener("click", () => { const n = b.dataset.model; closePicker(); openBriefing(catId, n); })
  );
  body.querySelectorAll("[data-wa-direct]").forEach(a => a.addEventListener("click", waDirectHandler));
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closePicker() {
  const modal = document.getElementById("pickerModal");
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

/* ---------- FAQ ---------- */
function renderFAQ() {
  const list = document.getElementById("faqList"); if (!list) return;
  list.innerHTML = FAQ.map((it, i) => `
    <details class="faq-item"${i===0?" open":""}>
      <summary><span>${it.q}</span><span class="faq-ic" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </span></summary>
      <div class="faq-a"><p>${it.a}</p></div>
    </details>`).join("");
}

/* ---------- Menu mobile ---------- */
function setupMenu() {
  const btn = document.getElementById("menuBtn");
  const overlay = document.getElementById("overlay");
  const drawer = document.getElementById("drawer");
  const close = document.getElementById("drawerClose");
  if (!btn || !drawer) return;

 const open = () => {

    drawer.classList.add("open");

    overlay.classList.add("open");

    drawer.setAttribute("aria-hidden", "false");

    btn.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";

}

  const shut = () => {

    drawer.classList.remove("open");

    overlay.classList.remove("open");

    drawer.setAttribute("aria-hidden", "true");

    btn.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";

};

  btn.addEventListener("click", open);
  if (close) close.addEventListener("click", shut);
  if (overlay) overlay.addEventListener("click", shut);
  drawer.querySelectorAll("nav a").forEach(a => a.addEventListener("click", shut));
}

/* ---------- Scroll + mobile bar (esconde ao descer) ---------- */
function setupScroll() {
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  const heroBg = document.querySelector(".hero-bg img");
  const bar = document.getElementById("mobileBar");
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (toTop) toTop.classList.toggle("show", y > 700);
    if (heroBg) heroBg.style.transform = `scale(1.08) translateY(${Math.min(y * 0.08, 60)}px)`;
    if (bar) {
      const goingDown = y > lastY && y > 120;
      bar.classList.toggle("hidden", goingDown);
    }
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- WhatsApp direto ---------- */
function setupDirectLinks() {
  // Normaliza todos os links [data-wa-direct] para SEMPRE enviar a mensagem pré-escrita.
  const normalize = () => {
    document.querySelectorAll("a[data-wa-direct]").forEach(a => {
      a.setAttribute("href", waLink(WA_MSG_DIRECT));
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  };
  normalize();
  // Reaplica após renderizações dinâmicas
  const mo = new MutationObserver(normalize);
  mo.observe(document.body, { childList: true, subtree: true });

  // Delegação: cobre botões ou <a href="#"> criados dinamicamente.
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-wa-direct]");
    if (!el) return;
    
const href = el.getAttribute("href");
    if (el.tagName !== "A" || !href || href === "#") {
      e.preventDefault();
      window.open(waLink(WA_MSG_DIRECT), "_blank", "noopener");
    }
  });
  document.querySelectorAll("[data-email-link]").forEach(el => { el.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Orçamento — MRS Vidros")}`; });
  document.querySelectorAll("[data-email-text]").forEach(el => { el.textContent = EMAIL; });
}

/* ---------- Assistente ---------- */
function setupAssistant() {
  const el = document.getElementById("assistant");
  const body = document.getElementById("assistantBody");
  const closeBtn = document.getElementById("assistantClose");
  const fab = document.getElementById("fabAssistant");

let assistantStarted = false;

if (!el || !fab) return;

const open = () => {
    if (!assistantStarted) {
        renderIntro();
        assistantStarted = true;
    }

    el.classList.add("open");
    el.setAttribute("aria-hidden", "false");
};

  const shut = () => { el.classList.remove("open"); el.setAttribute("aria-hidden","true"); };
  fab.addEventListener("click", () => el.classList.contains("open") ? shut() : open());
  if (closeBtn) closeBtn.addEventListener("click", shut);
  document.querySelectorAll("[data-open-assistant]").forEach(b => b.addEventListener("click", open));

  function bubble(text, who = "bot") {
    const div = document.createElement("div");
    div.className = "bubble" + (who === "user" ? " user" : "");
    div.textContent = text; body.appendChild(div);
    body.scrollTop = body.scrollHeight; return div;
  }
  function chips(options, onPick) {
    const row = document.createElement("div"); row.className = "chip-row";
    options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip" + (opt.human ? " human" : "");
      b.textContent = opt.label;
      b.addEventListener("click", () => { bubble(opt.label, "user"); row.remove(); onPick(opt.value); });
      row.appendChild(b);
    });
    body.appendChild(row); body.scrollTop = body.scrollHeight;
  }
  function renderIntro() {
    body.innerHTML = "";
    bubble("Olá 👋");
    setTimeout(() => bubble("Sou o assistente da MRS Vidros. Como posso ajudar?"), 350);
    setTimeout(() => {
      chips([
        { label: "🪟 Ver produtos", value: "produtos" },
        { label: "💬 Falar diretamente com a MRS Vidros", value: "humano", human: true },
        { label: "📍 Onde atendemos", value: "area" },
        { label: "🕐 Horário de atendimento", value: "horario" },
        { label: "📷 Ver galeria de fotos", value: "galeria" },
        { label: "❓ Perguntas frequentes", value: "faq" },
      ], handleMain);
    }, 800);
  }

  function openWhatsAppNow(msg) {
    window.open(waLink(msg), "_blank", "noopener");
  }

  function quickActions() {
    chips([
      { label: "💬 Falar no WhatsApp", value: "humano", human: true },
      { label: "🪟 Ver produtos", value: "produtos" },
      { label: "⬅️ Voltar ao início", value: "inicio" },
    ], (v) => {
      if (v === "humano") {
        openWhatsAppNow(WA_MSG_HUMAN);
        bubble("Perfeito! Abrindo o WhatsApp agora. 👋");
        setTimeout(() => { shut(); }, 1200);
        return;
      }
      if (v === "inicio") { renderIntro(); return; }
      handleMain(v);
    });
  }

  function handleMain(v) {
    if (v === "humano") {
      // ABRE O WHATSAPP SINCRONAMENTE — evita bloqueio de pop-up do navegador
      openWhatsAppNow(WA_MSG_HUMAN);
      bubble("Perfeito! Estou te levando ao WhatsApp agora. 👋");
      setTimeout(() => { shut(); }, 1200);
      return;
    }
    if (v === "area") {
      bubble("📍 Atendemos São Paulo capital e Grande São Paulo.");
      setTimeout(() => bubble("Vidros, espelhos e esquadrias sob medida — com entrega e instalação."), 500);
      setTimeout(() => quickActions(), 1100);
      return;
    }
    if (v === "horario") {
      bubble("🕐 Segunda a sábado, das 08h às 18h.");
      setTimeout(() => bubble("Fora desse horário? No WhatsApp a gente responde assim que possível."), 500);
      setTimeout(() => quickActions(), 1100);
      return;
    }
    if (v === "galeria") {
      bubble("📷 Abrindo a galeria de projetos...");
      setTimeout(() => { shut(); document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" }); }, 600);
      return;
    }
    if (v === "faq") {
      bubble("❓ Indo para as perguntas frequentes...");
      setTimeout(() => { shut(); document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }); }, 600);
      return;
    }
    // Fluxo de produtos
    setTimeout(() => bubble("Qual produto você procura?"), 300);
    setTimeout(() => {
      chips(ALL.map(p => ({ label: p.title, value: p.id })), (id) => {
        setTimeout(() => bubble("Ótima escolha. Agora escolha o modelo:"), 250);
        setTimeout(() => {
          chips((MODELS[id] || []).map(m => ({ label: m.name, value: m.name })), (modelName) => {
            setTimeout(() => bubble("Abrindo o formulário para você."), 200);
            setTimeout(() => { shut(); openBriefing(id, modelName); }, 500);
          });
        }, 500);
      });
    }, 700);
  }
}

/* ---------- Briefing ---------- */
function openBriefing(productId, preselectModel) {
    const brief = briefFor(productId);
    if (!brief) return;

    const assistant = document.getElementById("assistant");
    if (assistant) {
        assistant.classList.remove("open");
        assistant.setAttribute("aria-hidden", "true");
    }

  const modal = document.getElementById("briefingModal");
  const form = document.getElementById("briefingForm");
  document.getElementById("briefingTag").textContent = brief.tag;
  document.getElementById("briefingTitle").textContent = brief.title;

  const state = {};
  if (preselectModel) state.modelo = preselectModel;

  form.innerHTML = brief.steps.map((s, i) => {
    if (s.type === "opts") {
      return `<div class="field"><label>${s.label}</label>
        <div class="opt-grid" data-optgrid="${s.key}">
          ${s.options.map(o => `<button type="button" class="opt${state[s.key]===o?" selected":""}" data-key="${s.key}" data-val="${o}">${o}</button>`).join("")}
        </div></div>`;
    }
    if (s.type === "measures") {
      const isBox = brief.id === "box";
      const hint = isBox ? `<small class="hint-min">Sugestão para box: altura mín. 1900 mm e largura mín. 1000 mm. Você pode digitar o que preferir.</small>` : "";
      return `<div class="field"><label>Medidas (mm)</label>
        <div class="row-two">
          <input name="altura" placeholder="Altura (mm)" inputmode="numeric" data-min-h="${isBox?1900:""}" />
          <input name="largura" placeholder="Largura (mm)" inputmode="numeric" data-min-w="${isBox?1000:""}" />
        </div>
        ${hint}
        <div class="hint-warn" data-hint-warn></div>
      </div>`;
    }
    if (s.type === "qty") {
      return `<div class="field"><label>Quantidade</label><input name="quantidade" placeholder="Ex: 1" inputmode="numeric" /></div>`;
    }
    if (s.type === "contact") {
      return `<div class="field"><label>Nome</label><input name="nome" placeholder="Seu nome" required maxlength="80" /></div>
        <div class="field"><label>Cidade</label><input name="cidade" placeholder="Cidade" maxlength="40" /></div>
        <div class="field"><label>Local da instalação</label>
          <div class="opt-grid" data-optgrid="local">
            ${LOCAL_OPTS.map(o => `<button type="button" class="opt" data-key="local" data-val="${o}">${o}</button>`).join("")}
          </div>
        </div>`;
    }
    if (s.type === "obs") {
      return `<div class="field"><label>Observações (opcional)</label><textarea name="observacoes" placeholder="Detalhes que ajudem no orçamento" maxlength="600"></textarea></div>`;
    }
    if (s.type === "prefwa") {
      return `<label class="check"><input type="checkbox" name="prefwa" checked /> <span>Prefiro conversar pelo WhatsApp</span></label>`;
    }
    return "";
  }).join("") + `<button type="submit" class="btn btn-primary btn-block btn-halo">Enviar orçamento</button>`;

  // Opt buttons
  form.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      form.querySelectorAll(`.opt[data-key="${key}"]`).forEach(o => o.classList.remove("selected"));
      btn.classList.add("selected"); state[key] = btn.dataset.val;
    });
  });

  // Validação de medidas para Box (sugestão, não bloqueia)
  const warn = form.querySelector("[data-hint-warn]");
  const altura = form.querySelector('[name="altura"]');
  const largura = form.querySelector('[name="largura"]');
  const checkMeasures = () => {
    if (!warn) return;
    const msgs = [];
    const h = parseInt((altura?.value || "").replace(/\D/g,""), 10);
    const w = parseInt((largura?.value || "").replace(/\D/g,""), 10);
    const minH = altura?.dataset.minH ? Number(altura.dataset.minH) : null;
    const minW = largura?.dataset.minW ? Number(largura.dataset.minW) : null;
    if (minH && h && h < minH) msgs.push(`Altura abaixo do sugerido (${minH} mm). Podemos usar ${minH} mm?`);
    if (minW && w && w < minW) msgs.push(`Largura abaixo do sugerido (${minW} mm). Podemos usar ${minW} mm?`);
    warn.textContent = msgs.join(" ");
    warn.classList.toggle("show", msgs.length > 0);
  };
  altura?.addEventListener("input", checkMeasures);
  largura?.addEventListener("input", checkMeasures);

  form.onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const get = (k) => (fd.get(k) || "").toString().trim();
if (!get("nome")) {
    alert("Por favor, informe seu nome.");
    return;
}
    const lines = [`Olá! Gostaria de um orçamento — ${brief.tag}.`, ""];
    if (state.modelo) lines.push(`◆ Modelo: ${state.modelo}`);
    if (state.cor) lines.push(`◆ Cor do alumínio: ${state.cor}`);
    const h = get("altura"), w = get("largura");
    if (h || w) lines.push(`◆ Medidas: ${h || "?"} × ${w || "?"} mm`);
    if (get("quantidade")) lines.push(`◆ Quantidade: ${get("quantidade")}`);
    lines.push(`◆ Nome: ${get("nome")}`);
    if (get("cidade")) lines.push(`◆ Cidade: ${get("cidade")}`);
    if (state.local) lines.push(`◆ Local: ${state.local}`);
    if (get("observacoes")) lines.push(`◆ Observações: ${get("observacoes")}`);
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    closeBriefing();
  };

  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeBriefing() {
  const modal = document.getElementById("briefingModal");
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

/* ---------- Página de contato: submit form ---------- */
function setupContactForm() {
  const form = document.getElementById("contactForm"); if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const get = (k) => (fd.get(k) || "").toString().trim();
    const pref = form.querySelector('[name="prefwa"]')?.checked;
    const lines = ["Olá! Vim pelo site da MRS Vidros.", "",
      `◆ Nome: ${get("nome")}`,
      `◆ Mensagem via site`];
    if (get("cidade")) lines.push(`◆ Cidade: ${get("cidade")}`);
    if (get("msg")) lines.push(`◆ Mensagem: ${get("msg")}`);
    if (pref) {
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
    } else {
      const subject = "Contato pelo site — MRS Vidros";
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    }
  });
}

/* ---------- Boot ---------- */
function __mrsBoot() {
  renderCategories();
  renderGallery();
  renderFAQ();
  setupMenu();
  setupScroll();
  setupAssistant();
  setupLightbox();
  setupDirectLinks();
  setupContactForm();

  document.querySelectorAll("[data-close-modal]").forEach(el =>
    el.addEventListener("click", closeBriefing)
  );

  document.querySelectorAll("[data-close-picker]").forEach(el =>
    el.addEventListener("click", closePicker)
  );

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  closeBriefing();
  closePicker();
});
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", __mrsBoot);
} else {
  __mrsBoot();
}

/* ---------- Reflexo ambiente dinâmico (mouse parallax no hero) ---------- */
(function setupHeroReflex() {
  const bg = document.querySelector(".hero-bg");
  if (!bg) return;
  const onMove = (e) => {
    const r = bg.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    bg.style.setProperty("--mx", `${x}%`);
    bg.style.setProperty("--my", `${y}%`);
  };
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) onMove(e.touches[0]);
  }, { passive: true });
})();
