// ---------- Datos de ejemplo (reemplazá por tus productos) ----------
const PRODUCTS = [
  {
    id: 1,
    title: "Latex Interior Mate 4L",
    category: "pinturas",
    desc: "Pintura látex interior acabado mate. Excelente cubritivo y fácil aplicación.",
    image: "https://via.placeholder.com/600x380?text=Latex+Interior+4L",
  },
  {
    id: 2,
    title: "Esmalte Sintético Brillante 1L",
    category: "pinturas",
    desc: "Esmalte sintético para madera y metal. Alta resistencia y brillo duradero.",
    image: "https://via.placeholder.com/600x380?text=Esmalte+1L",
  },
  {
    id: 3,
    title: "Aerosol Multiuso Negro",
    category: "aerosoles",
    desc: "Secado rápido. Ideal para pequeñas reparaciones y terminaciones.",
    image: "https://via.placeholder.com/600x380?text=Aerosol+Negro",
  },
  {
    id: 4,
    title: "Rodillo de Lana 23 cm",
    category: "rodillos",
    desc: "Terminación uniforme. Recomendado para látex y superficies amplias.",
    image: "https://via.placeholder.com/600x380?text=Rodillo+23cm",
  },
  {
    id: 5,
    title: "Pincel Recto 1½”",
    category: "accesorios",
    desc: "Cerdas sintéticas. Trazo parejo y buen rendimiento.",
    image: "https://via.placeholder.com/600x380?text=Pincel+1.5",
  },
  {
    id: 6,
    title: "Barniz Marino 1L",
    category: "pinturas",
    desc: "Protección UV y resistencia a la intemperie. Ideal exterior.",
    image: "https://via.placeholder.com/600x380?text=Barniz+Marino",
  },
];

// ---------- Elementos ----------
const yearEl = document.getElementById("year");
const gridEl = document.getElementById("productsGrid");
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCat = document.getElementById("modalCategory");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.querySelector(".modal-close");

// Footer year
yearEl.textContent = new Date().getFullYear();

// Navbar mobile toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navMenu.classList.toggle("show");
});
// Cerrar menú al navegar
navMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navMenu.classList.remove("show"));
});

// ---------- Render categorías ----------
function buildCategories(products) {
  const set = new Set(products.map((p) => p.category));
  [...set].sort().forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat[0].toUpperCase() + cat.slice(1);
    categorySelect.appendChild(opt);
  });
}

// ---------- Render productos ----------
function renderProducts(list) {
  gridEl.innerHTML = "";
  if (list.length === 0) {
    gridEl.innerHTML = `<p style="grid-column:1/-1;color:#6b7280">No se encontraron productos con ese filtro.</p>`;
    return;
  }
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver detalles de ${p.title}`);
    card.innerHTML = `
      <div class="product-media">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="product-body">
        <h3 class="product-title">${p.title}</h3>
        <div class="product-meta">
          <span>·</span>
          <span>${p.category}</span>
        </div>
        <p class="product-desc">${p.desc}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    card.addEventListener("keyup", (e) => {
      if (e.key === "Enter") openModal(p);
    });
    gridEl.appendChild(card);
  });
}

// ---------- Filtros ----------
function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;
  const filtered = PRODUCTS.filter((p) => {
    const okCat = cat === "todas" || p.category === cat;
    const okText =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return okCat && okText;
  });
  renderProducts(filtered);
}

categorySelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

// ---------- Modal ----------
function openModal(product) {
  modalImg.src = product.image;
  modalImg.alt = product.title;
  modalTitle.textContent = product.title;
  modalCat.textContent = `Categoría: ${product.category}`;
  modalDesc.textContent = product.desc;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    // Fallback browsers viejos
    modal.setAttribute("open", "");
  }
}
function closeModal() {
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
}
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  const rect = modal.querySelector(".modal-body").getBoundingClientRect();
  const inDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;
  if (!inDialog) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ---------- Form contacto (demo sin backend) ----------
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validación simple
  let ok = true;
  form.querySelectorAll(".error-msg").forEach((s) => (s.textContent = ""));
  if (!name) {
    ok = false;
    form.querySelector("#name + .error-msg").textContent = "Ingresá tu nombre.";
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    ok = false;
    form.querySelector("#email + .error-msg").textContent =
      "Ingresá un email válido.";
  }
  if (!message) {
    ok = false;
    form.querySelector("#message + .error-msg").textContent =
      "Escribí tu mensaje.";
  }

  if (!ok) return;

  // Simulación de envío
  statusEl.textContent = "¡Gracias! Recibimos tu mensaje.";
  form.reset();
  setTimeout(() => (statusEl.textContent = ""), 4000);
});

// ---------- Init ----------
buildCategories(PRODUCTS);
renderProducts(PRODUCTS);
