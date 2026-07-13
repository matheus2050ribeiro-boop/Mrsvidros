/* ============================================
   MRS VIDROS — Script principal
   ============================================ */

const WHATSAPP = "5511981303415";

/* ---------- Produtos (galeria principal) ---------- */
const PRODUCTS = [
  {
    id: "box", tag: "Box", title: "Box para Banheiro",
    desc: "Modelos personalizados para banheiros residenciais e corporativos, com diversas opções de abertura, vidro e acabamento.",
    features: ["Correr, canto, pivotante ou piso-teto", "Vidro incolor, fumê, verde ou jateado", "Alumínio em várias cores"],
    images: ["imagens/box-1.jpg","imagens/box-2.jpg","imagens/box-3.jpg"],
  },
  {
    id: "espelhos", tag: "Espelhos", title: "Espelhos",
    desc: "Espelhos cortados sob medida para banheiros, salas, quartos, academias e ambientes comerciais.",
    features: ["Lapidado, bisotado ou orgânico", "Redondo ou com iluminação LED", "Fixação com botão ou colado"],
    images: ["imagens/espelho-1.jpg","imagens/espelho-2.jpg","imagens/espelho-3.jpg"],
  },
  {
    id: "guarda", tag: "Guarda-corpo", title: "Guarda-corpo",
    desc: "Guarda-corpos em vidro para escadas, sacadas e mezaninos, com fixação limpa e visual contemporâneo.",
    features: ["Vidro com torre, botão ou perfil", "Alumínio em várias cores", "Instalação alinhada e discreta"],
    images: ["imagens/guarda-1.jpg","imagens/guarda-2.jpg","imagens/guarda-3.jpg"],
  },
  {
    id: "janelas", tag: "Janelas", title: "Janelas",
    desc: "Janelas em alumínio nas linhas Suprema e Gold, com diferentes tipos de abertura e cores.",
    features: ["Correr, maxim-ar ou pivotante", "Perfis reforçados com boa vedação", "Cores sob medida"],
    images: ["imagens/janela-1.jpg","imagens/janela-2.jpg","imagens/janela-3.jpg"],
  },
  {
    id: "portas", tag: "Portas", title: "Portas",
    desc: "Portas de vidro e alumínio para entradas, ambientes internos e áreas comerciais.",
    features: ["Pivotantes, de correr ou blindex", "Vidro temperado sob medida", "Ferragens em várias cores"],
    images: ["imagens/porta-1.jpg","imagens/porta-2.jpg","imagens/porta-3.jpg"],
  },
  {
    id: "sacadas", tag: "Sacadas", title: "Sacadas",
    desc: "Envidraçamento de sacadas com sistema deslizante, integrando ambiente interno e a vista externa.",
    features: ["Sistema panorâmico deslizante", "Vidro temperado 8 ou 10 mm", "Sem colunas centrais"],
    images: ["imagens/sacada-1.jpg","imagens/sacada-2.jpg","imagens/sacada-3.jpg"],
  },
  {
    id: "abrigo", tag: "Abrigo para pia", title: "Abrigo para Pia",
    desc: "Proteção em vidro para a área da pia, evitando respingos e mantendo o ambiente sempre limpo.",
    features: ["Frontal, lateral ou em L", "Vidro incolor, fumê ou jateado", "Fixação com botão ou colado"],
    images: ["imagens/espelho-1.jpg","imagens/espelho-2.jpg","imagens/espelho-3.jpg"],
  },
];

/* ---------- Sub-modelos (Escolha por foto) ---------- */
const MODELS = {
  box: [
    { name: "Box de correr",              img: "imagens/box-1.jpg" },
    { name: "Box de canto (em L)",        img: "imagens/box-2.jpg" },
    { name: "Box de abrir (pivotante)",   img: "imagens/box-3.jpg" },
    { name: "Box fixo (Walk-in)",         img: "imagens/box-1.jpg" },
    { name: "Box até o teto (Piso-teto)", img: "imagens/box-2.jpg" },
    { name: "Box minimalista",            img: "imagens/box-3.jpg" },
    { name: "Box curvo (sob medida)",     img: "imagens/box-1.jpg" },
  ],
  espelhos: [
    { name: "Espelho lapidado",     img: "imagens/espelho-1.jpg" },
    { name: "Espelho bisotado",     img: "imagens/espelho-2.jpg" },
    { name: "Espelho orgânico",     img: "imagens/espelho-3.jpg" },
    { name: "Espelho redondo",      img: "imagens/espelho-1.jpg" },
    { name: "Espelho com LED",      img: "imagens/espelho-2.jpg" },
    { name: "Espelho jateado",      img: "imagens/espelho-3.jpg" },
  ],
  guarda: [
    { name: "Vidro com torre",      img: "imagens/guarda-1.jpg" },
    { name: "Fixação com botão",    img: "imagens/guarda-2.jpg" },
    { name: "Fixação com perfil U", img: "imagens/guarda-3.jpg" },
    { name: "Auto-portante",        img: "imagens/guarda-1.jpg" },
  ],
  janelas: [
    { name: "Janela de correr",     img: "imagens/janela-1.jpg" },
    { name: "Janela maxim-ar",      img: "imagens/janela-2.jpg" },
    { name: "Janela pivotante",     img: "imagens/janela-3.jpg" },
    { name: "Janela basculante",    img: "imagens/janela-1.jpg" },
    { name: "Janela camarão",       img: "imagens/janela-2.jpg" },
  ],
  portas: [
    { name: "Porta pivotante",      img: "imagens/porta-1.jpg" },
    { name: "Porta de correr",      img: "imagens/porta-2.jpg" },
    { name: "Porta camarão",        img: "imagens/porta-3.jpg" },
    { name: "Porta Blindex",        img: "imagens/porta-1.jpg" },
    { name: "Porta balcão",         img: "imagens/porta-2.jpg" },
  ],
  sacadas: [
    { name: "Sacada deslizante",    img: "imagens/sacada-1.jpg" },
    { name: "Sacada panorâmica",    img: "imagens/sacada-2.jpg" },
    { name: "Sacada retrátil",      img: "imagens/sacada-3.jpg" },
  ],
  abrigo: [
    { name: "Abrigo frontal",              img: "imagens/espelho-1.jpg" },
    { name: "Abrigo frontal com prateleira", img: "imagens/espelho-2.jpg" },
    { name: "Abrigo em canto (L)",         img: "imagens/espelho-3.jpg" },
    { name: "Abrigo vidro incolor",        img: "imagens/espelho-1.jpg" },
    { name: "Abrigo vidro fumê",           img: "imagens/espelho-2.jpg" },
  ],
};

/* ---------- Briefings ---------- */
const LOCAL_OPTS = ["Casa", "Apartamento", "Empresa"];
const COR_ALU = ["Preto", "Branco", "Fosco", "Bronze"];

function briefFor(id) {
  const opts = (MODELS[id] || []).map(m => m.name);
  const map = {
    box:      { tag: "Box para Banheiro",   title: "Orçamento de Box",         hasCor: true  },
    espelhos: { tag: "Espelhos",            title: "Orçamento de Espelho",     hasCor: false },
    guarda:   { tag: "Guarda-corpo",        title: "Orçamento de Guarda-corpo",hasCor: true  },
    janelas:  { tag: "Janelas",             title: "Orçamento de Janela",      hasCor: true  },
    portas:   { tag: "Portas",              title: "Orçamento de Porta",       hasCor: true  },
    sacadas:  { tag: "Sacadas",             title: "Orçamento de Sacada",      hasCor: true  },
    abrigo:   { tag: "Abrigo para Pia",     title: "Orçamento de Abrigo para Pia", hasCor: false },
  }[id];
  if (!map) return null;
  const steps = [
    { type: "opts", label: "Modelo", key: "modelo", options: opts },
    ...(map.hasCor ? [{ type: "opts", label: "Cor do alumínio", key: "cor", options: COR_ALU }] : []),
    { type: "measures" },
    { type: "qty" },
    { type: "contact" },
    { type: "obs" },
  ];
  return { tag: map.tag, title: map.title, steps };
}

/* ---------- FAQ ---------- */
const FAQ = [
  { q: "Posso cortar um box de vidro para instalar em outro banheiro?",
    a: "Depende do tipo de vidro. Se for vidro temperado, não é possível realizar cortes ou novos furos após a têmpera — o vidro se quebra completamente. Apenas vidros comuns e laminados podem ser cortados, desde que tecnicamente viável." },
  { q: "Qual é o melhor tipo de box para banheiro?",
    a: "O box de correr é o modelo mais procurado por aproveitar melhor o espaço. Para projetos mais sofisticados, os modelos pivotante, minimalista e piso-teto são excelentes opções." },
  { q: "Qual é o prazo para fabricação e instalação?",
    a: "Para boxes padrão, temos modelos à pronta entrega ou com instalação em até 1 dia útil, conforme disponibilidade. Já os boxes de engenharia, fabricados sob medida, possuem prazo médio de 10 a 15 dias úteis." },
  { q: "O vidro do box é seguro?",
    a: "Sim. Trabalhamos com vidro temperado, que oferece alta resistência e segurança. Em caso de quebra, ele se fragmenta em pequenos pedaços menos cortantes, reduzindo o risco de acidentes." },
  { q: "O box pode enferrujar?",
    a: "Não. Utilizamos perfis de alumínio e ferragens de qualidade, desenvolvidos para resistir à umidade e garantir longa durabilidade quando recebem os cuidados adequados." },
  { q: "Como limpar o box de vidro?",
    a: "Utilize água, detergente neutro e um pano macio ou rodo. Evite produtos abrasivos, esponjas ásperas e palha de aço para preservar o brilho e aumentar a vida útil do vidro." },
  { q: "O box evita que a água saia do banho?",
    a: "Sim. Um box instalado corretamente reduz significativamente a saída de água. Pequenos respingos podem ocorrer dependendo do modelo escolhido e da pressão da água." },
  { q: "É possível instalar um box em qualquer banheiro?",
    a: "Na maioria dos casos, sim. Realizamos a fabricação sob medida para atender diferentes tamanhos, layouts e necessidades do ambiente." },
  { q: "Qual é a espessura do vidro utilizada?",
    a: "O padrão mais utilizado é o vidro temperado de 8 mm, que oferece excelente resistência, segurança e um acabamento sofisticado." },
  { q: "Vocês fazem a medição e a instalação?",
    a: "Sim. Nossa equipe realiza a visita técnica para medição, fabrica o box sob medida e executa a instalação com qualidade, precisão e garantia." },
];

/* ---------- SVG utils ---------- */
const svgArrow = (dir) => dir === "left"
  ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`
  : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

/* ---------- Categorias (escolha por foto) ---------- */
function renderCategories() {
  const grid = document.getElementById("catGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <button type="button" class="cat-card reveal" data-cat="${p.id}">
      <div class="cat-img"><img src="${p.images[0]}" alt="${p.title}" loading="lazy"/></div>
      <div class="cat-info">
        <span class="cat-tag">${p.tag}</span>
        <span class="cat-title">${p.title}</span>
        <span class="cat-cta">Ver modelos <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </button>
  `).join("");
  grid.querySelectorAll("[data-cat]").forEach(b =>
    b.addEventListener("click", () => openPicker(b.dataset.cat))
  );
}

/* ---------- Picker (modelos por foto) ---------- */
function openPicker(catId) {
  const p = PRODUCTS.find(x => x.id === catId);
  const models = MODELS[catId] || [];
  if (!p) return;
  const modal = document.getElementById("pickerModal");
  document.getElementById("pickerTag").textContent = p.tag;
  document.getElementById("pickerTitle").textContent = `Escolha o modelo de ${p.tag.toLowerCase()}`;
  const body = document.getElementById("pickerBody");
  body.innerHTML = `
    <p class="picker-hint">Toque em um modelo para abrir o formulário já preenchido.</p>
    <div class="model-grid">
      ${models.map((m, i) => `
        <button type="button" class="model-card" data-model="${m.name}">
          <div class="model-img"><img src="${m.img}" alt="${m.name}" loading="lazy"/></div>
          <div class="model-info">
            <span class="model-num">${String(i+1).padStart(2,"0")}</span>
            <span class="model-name">${m.name}</span>
          </div>
        </button>
      `).join("")}
    </div>`;
  body.querySelectorAll("[data-model]").forEach(b => {
    b.addEventListener("click", () => {
      const modelName = b.dataset.model;
      closePicker();
      openBriefing(catId, modelName);
    });
  });
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closePicker() {
  const modal = document.getElementById("pickerModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

/* ---------- Render produtos ---------- */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((p, idx) => `
    <article class="product-card glass reveal" data-product="${p.id}">
      <div class="gallery">
        <div class="gallery-main" data-gallery="${idx}">
          ${p.images.map((src, i) => `<img src="${src}" alt="${p.title} ${i+1}" loading="lazy" class="${i===0?"active":""}" />`).join("")}
          <button class="gallery-arrow prev" data-dir="-1" aria-label="Anterior">${svgArrow("left")}</button>
          <button class="gallery-arrow next" data-dir="1" aria-label="Próxima">${svgArrow("right")}</button>
          <span class="gallery-counter"><span class="cur">01</span> / ${String(p.images.length).padStart(2,"0")}</span>
        </div>
        <div class="thumbs">
          ${p.images.map((src, i) => `<button class="thumb ${i===0?"active":""}" data-i="${i}" aria-label="Ver imagem ${i+1}"><img src="${src}" alt="" loading="lazy" /></button>`).join("")}
        </div>
      </div>
      <div class="product-body">
        <span class="tag"><span class="diamond">◆</span>${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <ul class="product-features">
          ${p.features.map(f => `<li><span class="diamond">◆</span>${f}</li>`).join("")}
        </ul>
        <div class="product-actions">
          <button type="button" class="btn btn-primary btn-halo" data-pick="${p.id}">Escolher pela foto</button>
          <button type="button" class="btn btn-ghost btn-halo" data-briefing="${p.id}">Solicitar Orçamento</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".product-card").forEach(setupGallery);
  document.querySelectorAll("[data-briefing]").forEach(b =>
    b.addEventListener("click", () => openBriefing(b.dataset.briefing))
  );
  document.querySelectorAll("[data-pick]").forEach(b =>
    b.addEventListener("click", () => openPicker(b.dataset.pick))
  );
}

function setupGallery(card) {
  const imgs = card.querySelectorAll(".gallery-main img");
  const thumbs = card.querySelectorAll(".thumb");
  const counter = card.querySelector(".cur");
  const main = card.querySelector(".gallery-main");
  let idx = 0;
  const go = (n) => {
    idx = (n + imgs.length) % imgs.length;
    imgs.forEach((img, i) => img.classList.toggle("active", i === idx));
    thumbs.forEach((t, i) => t.classList.toggle("active", i === idx));
    if (counter) counter.textContent = String(idx+1).padStart(2,"0");
  };
  card.querySelectorAll(".gallery-arrow").forEach(btn =>
    btn.addEventListener("click", () => go(idx + Number(btn.dataset.dir)))
  );
  thumbs.forEach(t => t.addEventListener("click", () => go(Number(t.dataset.i))));
  let startX = null;
  main.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  main.addEventListener("touchend", (e) => {
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
    startX = null;
  });
}

/* ---------- FAQ ---------- */
function renderFAQ() {
  const list = document.getElementById("faqList");
  if (!list) return;
  list.innerHTML = FAQ.map((it, i) => `
    <details class="faq-item"${i===0?" open":""}>
      <summary>
        <span>${it.q}</span>
        <span class="faq-ic" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </summary>
      <div class="faq-a"><p>${it.a}</p></div>
    </details>
  `).join("");
}

/* ---------- Menu mobile ---------- */
function setupMenu() {
  const btn = document.getElementById("menuBtn");
  const overlay = document.getElementById("overlay");
  const drawer = document.getElementById("drawer");
  const close = document.getElementById("drawerClose");
  if (!btn || !drawer) return;
  const open = () => { drawer.classList.add("open"); overlay.classList.add("open"); drawer.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; };
  const shut = () => { drawer.classList.remove("open"); overlay.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); document.body.style.overflow=""; };
  btn.addEventListener("click", open);
  close.addEventListener("click", shut);
  overlay.addEventListener("click", shut);
  drawer.querySelectorAll("nav a").forEach(a => a.addEventListener("click", shut));
}

/* ---------- Scroll ---------- */
function setupScroll() {
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  const heroBg = document.querySelector(".hero-bg img");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 700);
    if (heroBg) heroBg.style.transform = `scale(1.08) translateY(${Math.min(y * 0.08, 60)}px)`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- Assistente virtual ---------- */
function setupAssistant() {
  const el = document.getElementById("assistant");
  const body = document.getElementById("assistantBody");
  const closeBtn = document.getElementById("assistantClose");
  const fab = document.getElementById("fabAssistant");

  const open = () => { renderIntro(); el.classList.add("open"); el.setAttribute("aria-hidden","false"); };
  const shut = () => { el.classList.remove("open"); el.setAttribute("aria-hidden","true"); };

  fab.addEventListener("click", () => el.classList.contains("open") ? shut() : open());
  closeBtn.addEventListener("click", shut);
  document.querySelectorAll("[data-open-assistant]").forEach(b => b.addEventListener("click", open));

  function bubble(text, who = "bot") {
    const div = document.createElement("div");
    div.className = "bubble" + (who === "user" ? " user" : "");
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }
  function chips(options, onPick) {
    const row = document.createElement("div");
    row.className = "chip-row";
    options.forEach(opt => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = opt.label;
      b.addEventListener("click", () => { bubble(opt.label, "user"); row.remove(); onPick(opt.value); });
      row.appendChild(b);
    });
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
  }
  function renderIntro() {
    body.innerHTML = "";
    bubble("Olá 👋");
    setTimeout(() => bubble("Sou o assistente da MRS Vidros. Qual produto você procura?"), 400);
    setTimeout(() => {
      chips(PRODUCTS.map(p => ({ label: p.title, value: p.id })), (id) => {
        setTimeout(() => {
          bubble("Perfeito. Agora escolha o modelo:");
          setTimeout(() => {
            chips((MODELS[id] || []).map(m => ({ label: m.name, value: m.name })), (modelName) => {
              setTimeout(() => {
                bubble("Ótima escolha! Abrindo o formulário para você.");
                setTimeout(() => { shut(); openBriefing(id, modelName); }, 600);
              }, 250);
            });
          }, 400);
        }, 300);
      });
    }, 900);
  }
}

/* ---------- Briefing modal ---------- */
function openBriefing(productId, preselectModel) {
  const brief = briefFor(productId);
  if (!brief) return;
  const modal = document.getElementById("briefingModal");
  const form = document.getElementById("briefingForm");
  document.getElementById("briefingTag").textContent = brief.tag;
  document.getElementById("briefingTitle").textContent = brief.title;

  const state = {};
  if (preselectModel) state.modelo = preselectModel;

  form.innerHTML = brief.steps.map((s, i) => {
    if (s.type === "opts") {
      return `<div class="field" data-step="${i}">
        <label>${s.label}</label>
        <div class="opt-grid" data-optgrid="${s.key}">
          ${s.options.map(o => `<button type="button" class="opt${state[s.key]===o?" selected":""}" data-key="${s.key}" data-val="${o}">${o}</button>`).join("")}
        </div>
      </div>`;
    }
    if (s.type === "measures") {
      return `<div class="field"><label>Medidas (cm)</label>
        <div class="row-two">
          <input name="altura" placeholder="Altura" inputmode="numeric" />
          <input name="largura" placeholder="Largura" inputmode="numeric" />
        </div></div>`;
    }
    if (s.type === "qty") {
      return `<div class="field"><label>Quantidade</label>
        <input name="quantidade" placeholder="Ex: 1" inputmode="numeric" /></div>`;
    }
    if (s.type === "contact") {
      return `<div class="field"><label>Nome</label><input name="nome" placeholder="Seu nome" required /></div>
        <div class="row-two">
          <div class="field"><label>Cidade</label><input name="cidade" placeholder="Cidade" required /></div>
          <div class="field"><label>Bairro</label><input name="bairro" placeholder="Bairro" /></div>
        </div>
        <div class="field">
          <label>Local da instalação</label>
          <div class="opt-grid" data-optgrid="local">
            ${LOCAL_OPTS.map(o => `<button type="button" class="opt" data-key="local" data-val="${o}">${o}</button>`).join("")}
          </div>
        </div>`;
    }
    if (s.type === "obs") {
      return `<div class="field"><label>Observações (opcional)</label>
        <textarea name="observacoes" placeholder="Detalhes que ajudem no orçamento"></textarea></div>`;
    }
    return "";
  }).join("") + `<button type="submit" class="btn btn-primary btn-block btn-halo">Enviar no WhatsApp</button>`;

  form.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      form.querySelectorAll(`.opt[data-key="${key}"]`).forEach(o => o.classList.remove("selected"));
      btn.classList.add("selected");
      state[key] = btn.dataset.val;
    });
  });

  form.onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const get = (k) => (fd.get(k) || "").toString().trim();
    const lines = [`Olá! Gostaria de um orçamento — ${brief.tag}.`, ""];
    if (state.modelo) lines.push(`◆ Modelo: ${state.modelo}`);
    if (state.cor) lines.push(`◆ Cor do alumínio: ${state.cor}`);
    const h = get("altura"), w = get("largura");
    if (h || w) lines.push(`◆ Medidas: ${h || "?"} × ${w || "?"} cm`);
    if (get("quantidade")) lines.push(`◆ Quantidade: ${get("quantidade")}`);
    lines.push(`◆ Nome: ${get("nome")}`);
    lines.push(`◆ Cidade: ${get("cidade")}`);
    if (get("bairro")) lines.push(`◆ Bairro: ${get("bairro")}`);
    if (state.local) lines.push(`◆ Local: ${state.local}`);
    if (get("observacoes")) lines.push(`◆ Observações: ${get("observacoes")}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
    closeBriefing();
  };

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeBriefing() {
  const modal = document.getElementById("briefingModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  renderFAQ();
  setupMenu();
  setupScroll();
  setupAssistant();
  document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeBriefing));
  document.querySelectorAll("[data-close-picker]").forEach(el => el.addEventListener("click", closePicker));
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
