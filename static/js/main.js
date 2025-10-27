document.addEventListener("DOMContentLoaded", () => {

  class Artwork {
    #src;
    #title;
    #alt;
    #tags;

    constructor(src, title, alt, tags = []) {
      this.#src = src;
      this.#title = title;
      this.#alt = alt;
      this.#tags = tags;
    }

    get src() {
      return this.#src;
    }

    get title() {
      return this.#title;
    }

    get alt() {
      return this.#alt;
    }

    get tags() {
      return this.#tags;
    }

    toJSON() {
      return {
        src: this.#src,
        title: this.#title,
        alt: this.#alt,
        tags: this.#tags,
      };
    }
  }


  class Gallery {
    constructor(containerSelector) {
      this.container = document.querySelector(containerSelector);
      this.artworks = [];
    }

    addArtwork(artwork) {
      this.artworks.push(artwork);
      this.saveToLocalStorage();
    }

    render(artworks = this.artworks) {
      if (!this.container) return;
      this.container.innerHTML = "";

      artworks.forEach((art) => {
        const card = document.createElement("div");
        card.classList.add("art-card");
        card.innerHTML = `
          <img src="${art.src}" alt="${art.alt}" class="art-img" />
          <h3>${art.title}</h3>
          <p class="tags">${art.tags.join(", ")}</p>
        `;
        this.container.appendChild(card);
      });
    }

    filterByTag(tag) {
      if (!tag || tag === "all") {
        this.render();
        return;
      }
      const filtered = this.artworks.filter((a) => a.tags.includes(tag));
      this.render(filtered);
    }

    saveToLocalStorage() {
      localStorage.setItem("galleryData", JSON.stringify(this.artworks));
    }

    loadFromLocalStorage() {
      const data = JSON.parse(localStorage.getItem("galleryData")) || [];
      this.artworks = data.map(
        (item) => new Artwork(item.src, item.title, item.alt, item.tags)
      );
    }
  }

  localStorage.removeItem("galleryData");

  class Main {
    constructor() {
      this.currentPath = window.location.pathname;
      this.gallery = new Gallery(".gallery-container");
    }

    highlightCurrentPage() {
      const navItems = document.querySelectorAll(".nav-link");
      navItems.forEach((item) => {
        if (item.getAttribute("href") === this.currentPath) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    loadPaintings() {
      const paintings = [
        new Artwork("/static/paintings/glezna1.png", "Glezna 1", "glezna", ["glezna"]),
        new Artwork("/static/paintings/glezna2.jpg", "Glezna 2", "glezna", ["glezna"]),
        new Artwork("/static/paintings/glezna3.png", "Glezna 3", "glezna", ["glezna"]),
        new Artwork("/static/paintings/glezna4.png", "Glezna 4", "glezna", ["glezna"]),
        new Artwork("/static/paintings/glezna5.jpg", "Glezna 5", "glezna", ["glezna"]),
        new Artwork("/static/paintings/glezna6.png", "Glezna 6", "glezna", ["glezna"]),
        new Artwork("/static/paintings/glezna7.jpg", "Glezna 7", "glezna", ["glezna", "foto"]),
        new Artwork("/static/paintings/glezna8.jpg", "Glezna 8", "glezna", ["glezna", "foto"]),
        new Artwork("/static/pieminekli/piem1.jpg", "Piemineklis 1", "piemineklis", ["piemineklis"]),
        new Artwork("/static/pieminekli/piem2.jpg", "Piemineklis 2", "piemineklis", ["piemineklis"]),
        new Artwork("/static/pieminekli/piem3.jpg", "Piemineklis 3", "piemineklis", ["piemineklis"]),
        new Artwork("/static/sculptures/skulp1.jpg", "Piemineklis 4", "piemineklis", ["piemineklis"]),
        new Artwork("/static/sculptures/skulp2.jpg", "Piemineklis 5", "piemineklis", ["piemineklis"]),
        new Artwork("/static/sculptures/skulp3.jpeg", "Piemineklis 6", "piemineklis", ["piemineklis"]),
        new Artwork("/static/sculptures/skulp4.jpeg", "Piemineklis 7", "piemineklis", ["piemineklis"]),
        new Artwork("/static/fotos/foto1.jpg", "Foto 1", "foto", ["foto"]),
        new Artwork("/static/fotos/foto2.jpg", "Foto 2", "foto", ["foto"]),
        new Artwork("/static/fotos/foto3.jpg", "Foto 3", "foto", ["foto"]),
        new Artwork("/static/fotos/foto4.jpg", "Foto 4", "foto", ["foto", "piemineklis"]),
        new Artwork("/static/fotos/foto6.jpg", "Foto 5", "foto", ["foto"]),
        new Artwork("/static/fotos/foto7.jpg", "Foto 6", "foto", ["foto"]),
        new Artwork("/static/fotos/foto8.jpg", "Foto 7", "foto", ["foto"]),
        new Artwork("/static/fotos/foto9.jpg", "Foto 8", "foto", ["foto"]),
        new Artwork("/static/fotos/foto12.jpeg", "Foto 9", "foto", ["foto"]),
        new Artwork("/static/fotos/foto13.jpeg", "Foto 10", "foto", ["foto"]),
      ];

      paintings.forEach((p) => this.gallery.addArtwork(p));
      this.gallery.render();
    }

    addEventListeners() {
      const filterButtons = document.querySelectorAll(".filter-btn");
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const tag = btn.dataset.tag;
          this.gallery.filterByTag(tag);
        });
      });
    }

    init() {
      this.highlightCurrentPage();
      this.gallery.loadFromLocalStorage();
      if (this.gallery.artworks.length === 0) this.loadPaintings();
      this.gallery.render();
      this.addEventListeners();
      this.initSlider();
    }

    initSlider() {
      const images = document.querySelectorAll(".slider_image");
      let current = 0;
      if (images.length > 0) {
        images[current].classList.add("active");
        setInterval(() => {
          images[current].classList.remove("active");
          current = (current + 1) % images.length;
          images[current].classList.add("active");
        }, 4000);
      }
    }
  }


  const mainApp = new Main();
  mainApp.init();
});
