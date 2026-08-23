const photos = window.PORTFOLIO_PHOTOS || [];
const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
let visiblePhotos = photos;
let currentIndex = 0;

function renderGallery(filter = "All") {
  visiblePhotos = filter === "All" ? photos : photos.filter(photo => photo.category === filter);
  gallery.innerHTML = "";
  visiblePhotos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = `photo-card ${photo.orientation || "portrait"}`;
    button.type = "button";
    button.setAttribute("aria-label", `View ${photo.title} full screen`);
    button.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async"><span class="photo-meta"><strong>${photo.title}</strong><em>${photo.category}</em></span>`;
    button.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(button);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.showModal();
  document.body.classList.add("modal-open");
}

function updateLightbox() {
  const photo = visiblePhotos[currentIndex];
  document.querySelector("#lightbox-image").src = photo.src;
  document.querySelector("#lightbox-image").alt = photo.alt;
  document.querySelector("#lightbox-title").textContent = `${photo.title} · ${photo.category}`;
  document.querySelector("#lightbox-count").textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(visiblePhotos.length).padStart(2, "0")}`;
}

function move(direction) {
  currentIndex = (currentIndex + direction + visiblePhotos.length) % visiblePhotos.length;
  updateLightbox();
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => { item.classList.remove("active"); item.setAttribute("aria-pressed", "false"); });
  button.classList.add("active"); button.setAttribute("aria-pressed", "true");
  renderGallery(button.dataset.filter);
}));

document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector(".prev").addEventListener("click", () => move(-1));
document.querySelector(".next").addEventListener("click", () => move(1));
lightbox.addEventListener("close", () => document.body.classList.remove("modal-open"));
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

const menuButton = document.querySelector(".menu-toggle");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  document.querySelector("#site-nav").classList.toggle("open", !open);
});
document.querySelectorAll("#site-nav a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  document.querySelector("#site-nav").classList.remove("open");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
renderGallery();
