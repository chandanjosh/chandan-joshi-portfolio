/* ==========================================================================
   Chandan Joshi — Portfolio Site — shared app.js
   ========================================================================== */

// ====== EDIT THESE WITH YOUR REAL DETAILS ======
const WHATSAPP_NUMBER = "911234567890"; // country code + number, no + sign, no spaces
const WHATSAPP_MESSAGE = "Hi Chandan, I found your site and I'd like to talk about a project.";
const BOOKING_URL = "https://cal.com/your-username/15min"; // replace with your real Cal.com booking link
// ================================================

const waURL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".wa-link, #floatWa, #navWaBtn").forEach(el => el.setAttribute("href", waURL));
  document.querySelectorAll(".book-link").forEach(el => el.setAttribute("href", BOOKING_URL));

  // mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navlinks = document.getElementById("navlinks");
  if (navToggle && navlinks) {
    navToggle.addEventListener("click", () => navlinks.classList.toggle("open"));
    navlinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navlinks.classList.remove("open")));
  }

  // generic accordion helper (used by FAQ and niche list)
  function wireAccordion(containerSelector, itemSelector, qSelector, aSelector) {
    document.querySelectorAll(containerSelector + " " + itemSelector).forEach(item => {
      const q = item.querySelector(qSelector);
      const a = item.querySelector(aSelector);
      if (!q || !a) return;
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.classList.toggle("open", !isOpen);
        a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
      });
    });
  }
  wireAccordion("#faqList", ".faq-item", ".faq-q", ".faq-a");
  wireAccordion("#svcGrid", ".svc-toggle", ".svc-toggle-q", ".svc-toggle-a");

  // niche marquee (home page teaser)
  const track = document.getElementById("marquee");
  if (track) {
    const teaser = [
      ["cortland.myshopify.com", "Fishing · Shopify Plus"],
      ["teodorvanities.com", "Interior design · Shopify Plus"],
      ["importimageracing.com", "Auto spare parts · Shopify Plus"],
      ["bluntpower.com", "Air freshener · Shopify Plus"],
      ["hanakiniswim.com", "Swimwear"],
      ["saltandsoilsd.com", "Health supplements"],
      ["rossocaffe.com", "Coffee"],
      ["eyecandiprescott.com", "Eyewear"],
      ["sportsorganics.com", "Sports nutrition"],
      ["tryfastwater.com", "Drinks"],
      ["arata.in", "Figma-to-Shopify design build"],
      ["epartsmaster.com", "Auto parts fitment"],
      ["+ 60 more niches — see full portfolio", ""]
    ];
    let html = "";
    for (let i = 0; i < 2; i++) {
      teaser.forEach(([domain, tag]) => {
        html += `<span class="marquee-item"><b>${domain}</b>${tag ? " — " + tag : ""}</span>`;
      });
    }
    track.innerHTML = html;
  }

  // ===================== WORK.HTML ONLY =====================
  initNicheAccordion();
  initQuickNav();
  initViewer();

  // ===================== TESTIMONIALS (index.html) =====================
  initTestimonials();
  initUpworkGrid();
});

/* ---------------- Shopify niche data ----------------
   Pulled directly from Artzen_Shopify_Stores_By_Niche.md.
   Wholesale/B2B category intentionally omitted per NDA scope (agency-profile-only). */
const NICHE_DATA = [
  ["Apparel & Fashion", ["mividaloca.nl","nbdc.de","hanakiniswim.com","eyecandiprescott.com","niathebrand.com","blubellebaby.com","ancapallequestrian.com","thelightblonde.com","comfrt.com","kissprom.com","sweettalkglobal.com","lafort.com.br","thehouseofrare.com","beyoung.in","rebelnice.com","donmorphy.com","mividalocastreetwear.com","thetailorandhislover.com","aallss.com","blisseaston.com","t20vision.com","conceptglobal.co"]],
  ["Kids' Clothing", ["orvi.in","fourline.design","brandandiron.com","thepurpleturtles.com"]],
  ["Swimwear & Activewear", ["hanakiniswim.com","frankiesbikinis.com","stagmi.com","jsculptfitness.com","sknsportswear.com","aquastash.com.au"]],
  ["Footwear & Accessories", ["melissashoes.com.au","shoezero.com","t20vision.com","only-vintage.com","nbdc.de"]],
  ["Custom Embroidery", ["crickandluembroidery.com","casanuccia.com","thehookery.com.au"]],
  ["Health Supplements", ["mavella.com.au","thehealthhorizons.com","meadbery.com","surpresanatural.com","ondermax.store","zeezees.com","mywellness.health","shop.10xhealthsystem.com","saltandsoilsd.com","soildynamics.com.au","shop.smartnutrition.nz"]],
  ["Skincare & Beauty", ["dussl.com","blissworld.com","glamrdip.co.uk","arata.in","melmarieskincare.com","manukadreams.co.nz","sevenminerals.com","scorolash.com","glamrdip.com","shopmanakaya.com","evrland.com.au","panthrix.com","axiologybeauty.com","motcbeauty.com","honeybeauty.co","eyedesignstore.com","probeautygroup.com","glopandglam.com","jevataherman.com"]],
  ["Fitness & Sleep", ["xpeed.com.au","rested.com.au","duroflexworld.com","perfectrest.in","troverr.com.au","boltmug.com"]],
  ["Food, Beverage & Grocery", ["earnesteats.com","mavella.com.au","shinybowl.com","taffytown.com","knuevencreamery.com","tailgatespices.com","wholesale.slowpoursupply.co","rossocaffe.com","blkandbold.com","amalachai.com","tryfastwater.com","drinklmnt.com","northandsouthwines.co.uk","iconicwines.co.uk","wishbeer.com","skarois.dk","munchbakery.com"]],
  ["Home, Kitchen & Décor", ["blubellebaby.com","bubandberry.com","wildbird.co","cozycrewclub.com","jamiekay.com","shop.slean.com","blauke.com","beruru.com","joshuatiles.com.au","baya.life","ashdene.com.au","kindmoose.ca","brandandiron.com","sparkcandles.com","thestoneflooring.co.uk","carrousa.com","lureprofessionals.com","wimpernboutique.de","chinnydipper.co.uk"]],
  ["Baby, Kids & Toys", ["blubellebaby.com","bespokebaby.com.au","adoreubaby.com.au","guildcraftinc.com","mirustoys.com","dam-toys.com","ondermax.store"]],
  ["Pets", ["petidtags.com.au","pupcake.me","petvetproduct.com","crownandpaw.com","pawsindia.com","bullhug.com"]],
  ["Jewelry, Accessories & Bags", ["laurajayne.com","awareness-avenue.com","planetrhinestone.com","merjewelryofficial.com","gallardoblainedesigns.com","johnnybjewelry.com","sovats.com","harlinjones.com","therodeorose.com","mapleandlark.com","aquaquestwaterproof.com"]],
  ["Automotive & Tools", ["j-specperf.ch","bergetools.com","tsperformanceofficial.com","vauxcentre.co.uk","biciemonopattini.it","tinkr.co.nz","ordinarytech.ca","isolarpro.de","undergroundlighting.com"]],
  ["Electronics & Audio", ["electricwheelchairsusa.com","weldwork.com","hearmore4less.com","wraycastle.com","nbdc.de","phantom-sounds.com","isolarpro.de"]],
  ["Sports, Outdoors & Hobbies", ["tischsport.de","escape-watersports.co.uk","guildcraftinc.com","craftymeraki.com","soundingstone.com","flowerscuddles.com","urbanflower.com.au","floralgaragesg.com","spokaneplantfarm.com","eostre.shop","sportsorganics.com"]],
  ["Design-Led & Figma Builds", ["glamrdip.co.uk","weldwork.com","zeezees.com","beruru.com","orvi.in","arata.in","axiologybeauty.com","tryfastwater.com","saltandsoilsd.com","eyecandiprescott.com"]],
  ["One-Product & Niche Stores", ["sparkcandles.com","kindmoose.ca","seealine.com","amalachai.com","perfumeonline.ca","ffergusonbooks.com","familyvalues.myshopify.com","albakireads.com","femmefataleobsession.fr"]]
];

function initNicheAccordion() {
  const container = document.getElementById("nicheAccordion");
  if (!container) return;

  function render(filter) {
    const f = (filter || "").toLowerCase().trim();
    container.innerHTML = "";
    NICHE_DATA.forEach(([name, stores]) => {
      const matchedStores = f
        ? stores.filter(s => s.toLowerCase().includes(f) || name.toLowerCase().includes(f))
        : stores;
      if (f && matchedStores.length === 0 && !name.toLowerCase().includes(f)) return;
      const shown = f ? (matchedStores.length ? matchedStores : stores) : stores;
      const item = document.createElement("div");
      item.className = "niche-item";
      item.innerHTML = `
        <button class="niche-q">
          <span class="n-title">${name} <span class="n-count">${stores.length}</span></span>
          <span class="n-plus">+</span>
        </button>
        <div class="niche-a">
          <div class="niche-a-inner">
            ${shown.map(s => `<a class="store-chip" href="https://${s}" target="_blank" rel="noopener">${s}</a>`).join("")}
          </div>
        </div>`;
      const q = item.querySelector(".niche-q");
      const a = item.querySelector(".niche-a");
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.classList.toggle("open", !isOpen);
        a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
      });
      container.appendChild(item);
    });
  }
  render("");

  const searchInput = document.getElementById("nicheSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => render(e.target.value));
  }

  const expandAll = document.getElementById("expandAllNiches");
  if (expandAll) {
    expandAll.addEventListener("click", () => {
      const items = container.querySelectorAll(".niche-item");
      const anyClosed = Array.from(items).some(i => !i.classList.contains("open"));
      items.forEach(i => {
        i.classList.toggle("open", anyClosed);
        const a = i.querySelector(".niche-a");
        a.style.maxHeight = anyClosed ? a.scrollHeight + "px" : null;
      });
      expandAll.textContent = anyClosed ? "Collapse all" : "Expand all";
    });
  }
}

function initQuickNav() {
  const links = document.querySelectorAll(".quicknav a");
  if (!links.length) return;
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  window.addEventListener("scroll", () => {
    let current = sections[0];
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 140) current = sec; });
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current.id));
  }, { passive: true });
}

/* ---------------- Testimonials ----------------
   HOW TO ADD A NEW ONE: paste a new object at the TOP of TESTIMONIALS (position 0).
   The slider shows only the first 8 — so the moment you add a 9th, the oldest one
   on display drops off automatically. Nothing else to change.
   avatar: path to a photo in assets/clients/ — or null to show initials. */
const TESTIMONIALS = [
  { name: "Sandra Isabel Nist", role: "Virtual Assistant · Multilingual Support, Admin, Marketing & Design", rating: 5, quote: "Great developer to work with. Highly skilled, reliable, and always delivers high-quality results on time. Communication was clear and professional throughout the project. Would definitely recommend.", source: "LinkedIn", avatar: "assets/clients/sandra-nist.jpg" },
  { name: "Oliver Steinle", role: "Performance Marketing · Real Estate Services", rating: 5, quote: "Experienced, technically competent, and always completes tasks very quickly.", source: "LinkedIn", avatar: "assets/clients/oliver-steinle.jpg" },
  { name: "Ben Fisher", role: "AI Product Partner & Engineering", rating: 5, quote: "Good experience working w/ Chandan. I'd hire him again.", source: "LinkedIn", avatar: "assets/clients/ben-fisher.jpg" },
  { name: "Nenad Cvejic", role: "Funnel Builder @ Shopify · eCommerce Manager", rating: 5, quote: "All recommendations for Chandan.", source: "LinkedIn", avatar: "assets/clients/nenad-cvejic.jpg" },
  { name: "Sadip Rahman", role: "Founder, OrdinaryTech", rating: 5, quote: "Chandan has great expertise and would highly recommend!", source: "LinkedIn", avatar: "assets/clients/sadip-rahman.jpg" },
  { name: "Dave Sharma", role: "Co-founder, KiBi", rating: 4.5, quote: "Chandan did his best to serve our request. Communication was smooth.", source: "LinkedIn", avatar: "assets/clients/dave-sharma.jpg" }
];
const TESTIMONIAL_DISPLAY_CAP = 8;

// Upwork contracts with a star rating but no written review — shown as a compact strip.
const UPWORK_CONTRACTS = [
  { client: "Louise Baecke", project: "Shopify Website Improvements — The Velvet Mask", rating: 5 },
  { client: "Samira Masri (Probya)", project: "Full Shopify Store Setup", rating: 5 },
  { client: "Ryan Koptke", project: "Shopify Custom Product UI Integration + Dynamic Pricing", rating: 5 },
  { client: "Harwinder Singh Sandhu", project: "Bub and Berry", rating: 5 },
  { client: "George Bachmann", project: "Website Improvement", rating: 5 },
  { client: "Cheyenne Anderson", project: "Website", rating: 5 }
];

function starsHtml(rating) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return `<span class="stars"><span class="stars-bg">★★★★★</span><span class="stars-fg" style="width:${pct}%">★★★★★</span></span>`;
}
function initialsOf(name) {
  return name.replace(/\(.*?\)/g, "").trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function initTestimonials() {
  const track = document.getElementById("testiTrack");
  if (!track) return;
  const dotsWrap = document.getElementById("testiDots");
  const prevBtn = document.getElementById("testiPrev");
  const nextBtn = document.getElementById("testiNext");

  const shown = TESTIMONIALS.slice(0, TESTIMONIAL_DISPLAY_CAP);
  track.innerHTML = shown.map(t => `
    <article class="testi-slide">
      <div class="testi-top">${starsHtml(t.rating)}<span class="testi-source">${t.source}</span></div>
      <p class="testi-quote">“${t.quote}”</p>
      <div class="testi-person">
        ${t.avatar
          ? `<img class="testi-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy">`
          : `<div class="testi-avatar initials">${initialsOf(t.name)}</div>`}
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </article>
  `).join("");

  function slideStep() {
    const slide = track.querySelector(".testi-slide");
    return slide ? slide.getBoundingClientRect().width + 20 : 340;
  }
  function visibleCount() {
    const slide = track.querySelector(".testi-slide");
    return slide ? Math.max(1, Math.round(track.clientWidth / slideStep())) : 1;
  }
  function pageCount() { return Math.max(1, shown.length - visibleCount() + 1); }
  function renderDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = Array.from({ length: pageCount() }, (_, i) =>
      `<button class="testi-dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Go to review ${i + 1}"></button>`).join("");
  }
  function updateDots() {
    if (!dotsWrap) return;
    const idx = Math.min(pageCount() - 1, Math.round(track.scrollLeft / slideStep()));
    dotsWrap.querySelectorAll(".testi-dot").forEach((d, i) => d.classList.toggle("active", i === idx));
  }
  renderDots();
  window.addEventListener("resize", renderDots);
  if (prevBtn) prevBtn.addEventListener("click", () => track.scrollBy({ left: -slideStep(), behavior: "smooth" }));
  if (nextBtn) nextBtn.addEventListener("click", () => track.scrollBy({ left: slideStep(), behavior: "smooth" }));
  if (dotsWrap) dotsWrap.addEventListener("click", (e) => {
    const dot = e.target.closest(".testi-dot");
    if (dot) track.scrollTo({ left: parseInt(dot.dataset.i, 10) * slideStep(), behavior: "smooth" });
  });
  track.addEventListener("scroll", () => window.requestAnimationFrame(updateDots), { passive: true });
}

function initUpworkGrid() {
  const grid = document.getElementById("upworkGrid");
  if (!grid) return;
  grid.innerHTML = UPWORK_CONTRACTS.map(c => `
    <div class="upwork-item">
      <div class="u-top">${starsHtml(c.rating)}<span class="u-rate">${c.rating.toFixed(1)}</span></div>
      <div class="u-project">${c.project}</div>
      <div class="u-client">${c.client}</div>
    </div>`).join("");
}

/* ---------------- Case study viewer data ----------------
   folder = assets/case-studies/<folder>/1.jpeg .. N.jpeg */
const CASE_STUDIES = {
  "shopify-pdf-app": { title: "Shopify PDF Download App", pages: 3 },
  "rosso-caffe": { title: "Rossocaffe Inventory Sync Engine", pages: 3 },
  "shopify-sample-app": { title: "Try Sample Products", pages: 4 },
  "zone-collection": { title: "Zone Collection — Membership & Loyalty", pages: 4 },
  "bailey-recipe-manager": { title: "Bailey Recipe Manager", pages: 3 },
  "epartmaster": { title: "Epartmaster — YMM Fitment App", pages: 4 },
  "royal-royalty-manager": { title: "Royal — Royalty Manager", pages: 5 },
  "trustpilot-review-automation": { title: "Trustpilot Review Automation", pages: 4 },
  "social-login-hubspot": { title: "Social Login + HubSpot Sync", pages: 3 },
  "level-chart": { title: "Level Chart — Forecasting Engine", pages: 4 },
  "level-chart-square-integration": { title: "Level Chart — Square POS Integration", pages: 3 }
};

let viewerState = { slug: null, page: 1 };

function initViewer() {
  const overlay = document.getElementById("viewerOverlay");
  if (!overlay) return; // not on this page

  const imgEl = document.getElementById("viewerImg");
  const titleEl = document.getElementById("viewerTitle");
  const countEl = document.getElementById("viewerCount");
  const prevBtn = document.getElementById("viewerPrev");
  const nextBtn = document.getElementById("viewerNext");
  const closeBtn = document.getElementById("viewerClose");
  const watermark = document.getElementById("viewerWatermark");

  function renderWatermark() {
    let s = "";
    for (let i = 0; i < 24; i++) s += "<span>CHANDAN JOSHI · PORTFOLIO PREVIEW</span>";
    watermark.innerHTML = s;
  }
  renderWatermark();

  function open(slug) {
    viewerState = { slug, page: 1 };
    titleEl.textContent = CASE_STUDIES[slug].title;
    update();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  function update() {
    const cs = CASE_STUDIES[viewerState.slug];
    imgEl.src = `assets/case-studies/${viewerState.slug}/${viewerState.page}.jpeg`;
    imgEl.alt = cs.title + " — page " + viewerState.page;
    countEl.textContent = `Page ${viewerState.page} of ${cs.pages}`;
    prevBtn.disabled = viewerState.page <= 1;
    nextBtn.disabled = viewerState.page >= cs.pages;
  }

  document.querySelectorAll("[data-view-case]").forEach(btn => {
    btn.addEventListener("click", () => open(btn.getAttribute("data-view-case")));
  });
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  prevBtn.addEventListener("click", () => { if (viewerState.page > 1) { viewerState.page--; update(); } });
  nextBtn.addEventListener("click", () => { const cs = CASE_STUDIES[viewerState.slug]; if (viewerState.page < cs.pages) { viewerState.page++; update(); } });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });

  // Basic copy/download deterrents — not a guarantee against screenshots,
  // just removes the easy paths (right-click save, drag-out, text select).
  overlay.addEventListener("contextmenu", (e) => e.preventDefault());
  overlay.addEventListener("dragstart", (e) => e.preventDefault());
}
