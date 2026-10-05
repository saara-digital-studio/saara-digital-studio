/* ===== SAARA DIGITAL STUDIO — scripts ===== */

/* ---------- PRODUITS ----------
   Pour ajouter un produit : copier un bloc { ... } et remplir les champs.
   universe : "life" | "study" | "digital"
   category : doit correspondre EXACTEMENT au nom de la catégorie sur la page
   price    : prix affiché ; oldPrice (facultatif) : ancien prix, affiché barré
   image    : fichier dans assets/images/ (format carré recommandé)
   link     : URL Chariow (remplacer les LIEN-CHARIOW-A-REMPLACER) */
const PRODUCTS = [
  /* ----- SAARA LIFE ----- */
  {
    universe: "life", category: "Organisation",
    name: "MA MAISON ENFIN ORGANISÉE",
    description: "Le workbook de 30 pages pour remettre de l’ordre sans y passer toute la journée.",
    price: "1 $", oldPrice: "3 $",
    image: "assets/images/maison-organisee.jpg",
    link: "https://sxzcectq.mychariow.online/prd_5zaon7mi"
  },
  {
    universe: "life", category: "Organisation",
    name: "30 JOURS DE REPAS SIMPLES",
    description: "Des menus pratiques, des recettes faciles et des listes de courses pour simplifier tes repas.",
    price: "3 $", oldPrice: "5 $",
    image: "assets/images/repas-simples.jpg",
    link: "https://sxzcectq.mychariow.online/prd_ncjs2ypd"
  },
  {
    universe: "life", category: "Fitness",
    name: "60 JOURS POUR TRANSFORMER TON CORPS",
    description: "Programme fitness progressif à la maison : 30 min par séance, 4 séances par semaine, sans matériel.",
    price: "10 $", oldPrice: "15 $",
    image: "assets/images/fitness.jpg",
    link: "https://sxzcectq.mychariow.online/prd_x4etbjkp"
  },

  /* ----- SAARA STUDY ----- */
  {
    universe: "study", category: "Intelligence artificielle",
    name: "L’IA POUR LES DÉBUTANTS",
    description: "50 façons d’utiliser l’intelligence artificielle dans sa vie quotidienne, avec des prompts prêts à copier-coller.",
    price: "2 $", oldPrice: "4 $",
    image: "assets/images/ia-debutants.jpg",
    link: "https://ikfhcvqr.mychariow.online/prd_r57dmimj"
  },
  {
    universe: "study", category: "Premier emploi",
    name: "PREMIER EMPLOI : MODE D’EMPLOI",
    description: "Le guide pratique pour décrocher son premier emploi, même sans expérience.",
    price: "1 $", oldPrice: "2 $",
    image: "assets/images/premier-emploi.jpg",
    link: "https://uenzfbsi.mychariow.com/prd_zmqyn8f0"
  },
  {
    universe: "study", category: "Apprentissage",
    name: "ÉTUDIER SANS S’ÉPUISER",
    description: "Le système simple pour mieux t’organiser, réviser efficacement et garder ton énergie.",
    price: "1 $", oldPrice: "2 $",
    image: "assets/images/etudier-sans-sepuiser.jpg",
    link: "https://uenzfbsi.mychariow.com/prd_9z1jpg1z"
  },

  /* ----- SAARA DIGITAL ----- */
  {
    universe: "digital", category: "HTML & CSS",
    name: "START WEB 01 — GUIDE HTML & CSS",
    description: "Guide de 17 pages en 10 étapes progressives : de la première balise à une page responsive.",
    price: "4 $", oldPrice: "5 $",
    image: "assets/images/start-web-01-guide.jpg",
    link: "https://ikfhcvqr.mychariow.online/prd_mi6y4kbu"
  },
  {
    universe: "digital", category: "HTML & CSS",
    name: "START WEB 01 — CAHIER D’EXERCICES & CORRIGÉS",
    description: "5 exercices + un projet final, avec corrigés commentés et mini-défis, sur 55 pages.",
    price: "4 $", oldPrice: "5 $",
    image: "assets/images/start-web-01-cahier.jpg",
    link: "https://ikfhcvqr.mychariow.online/prd_ppzlb5gn"
  },
  {
    universe: "digital", category: "HTML & CSS",
    name: "START WEB 01 — CHEAT SHEET HTML & CSS",
    description: "Syntaxes essentielles, exemples à copier et adapter, checklist avant de livrer (17 pages).",
    price: "1 $", oldPrice: "2 $",
    image: "assets/images/start-web-01-cheat-sheet.jpg",
    link: "https://ikfhcvqr.mychariow.online/prd_cjm8tgbi"
  },
  {
    universe: "digital", category: "Outils numériques",
    name: "50 OUTILS NUMÉRIQUES UTILES",
    description: "Les outils à connaître pour étudier, travailler, créer et mieux t’organiser.",
    price: "2 $", oldPrice: "4 $",
    image: "assets/images/outils-numeriques.jpg",
    link: "https://ikfhcvqr.mychariow.online/prd_rmxshjp6"
  }
];

/* Fabrique la carte d’un produit */
function productCard(p) {
  const old = p.oldPrice ? ` <s class="old">${p.oldPrice}</s>` : "";
  return `<article class="card">
    <div class="card-media"><img src="${p.image}" alt="Couverture : ${p.name}" loading="lazy"></div>
    <div class="card-body">
      <span class="badge">${p.category}</span>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p class="price">${p.price}${old}</p>
      <a class="btn" href="${p.link}" target="_blank" rel="noopener">Acheter</a>
    </div></article>`;
}

/* Remplit chaque grille [data-universe][data-category] */
function renderProducts() {
  document.querySelectorAll("[data-universe][data-category]").forEach(grid => {
    const items = PRODUCTS.filter(p => p.universe === grid.dataset.universe && p.category === grid.dataset.category);
    grid.innerHTML = items.length
      ? items.map(productCard).join("")
      : `<div class="card empty"><h3>Bientôt disponible</h3><p>De nouvelles ressources arrivent dans cette catégorie.</p></div>`;
  });
}

/* Image manquante : on la retire, le fond dégradé (ou le nom de marque) reste visible */
function handleMissingImages() {
  document.querySelectorAll(".card-media img, .brand-logo").forEach(img => {
    const hide = () => img.remove();
    img.addEventListener("error", hide);
    if (img.complete && img.naturalWidth === 0) hide();
  });
}

/* Menu mobile */
function setupMenu() {
  const btn = document.querySelector(".nav-toggle"), menu = document.getElementById("menu");
  const close = () => { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Ouvrir le menu"); };
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* Apparition progressive des sections */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) return els.forEach(el => el.classList.add("visible"));
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(); handleMissingImages(); setupMenu(); setupReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
