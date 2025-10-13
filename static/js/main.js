// main.js

class Main {
    // Konstruktors, kurā varam iestatīt sākotnējās vērtības
    constructor() {
        this.currentPath = window.location.pathname; // Pašreizējā lapa
    }

    // 1. Funkcija izceļ pašreizējo lapu navigācijas joslā
    highlightCurrentPage() {
        const navItems = document.querySelectorAll('.nav-link');

        navItems.forEach(item => {
            if (item.getAttribute('href') === this.currentPath) {
                item.classList.add('active');  // Pievienot "active" klasi
            } else {
                item.classList.remove('active'); // Noņemt "active" klasi
            }
        });
    }

    // 2. Funkcija, kas uzlabo mobilās navigācijas pogu
    toggleNavbar() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('collapse');
        });
    }

    // 3. Funkcija attēlu maiņai, kad lietotājs noklikšķina uz sīkattēliem
    setupImageChange() {
        const imageThumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.getElementById('mainImage');

        imageThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                mainImage.src = thumbnail.src; // Mainām galveno attēlu
            });
        });
    }

    // 4. Funkcija, kas apstrādā galeriju (modāls logi attēliem)
    setupGallery() {
        const images = document.querySelectorAll('.gallery-item');
        const galleryModal = document.getElementById('galleryModal');
        const galleryModalImg = galleryModal.querySelector('.modal-body img');

        images.forEach(image => {
            image.addEventListener('click', function() {
                galleryModal.style.display = 'block'; // Parādīt modālo logu
                galleryModalImg.src = image.src;
            });
        });

        const closeModal = galleryModal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            galleryModal.style.display = 'none'; // Slēgt modālo logu
        });
    }

    // 5. Metode, lai inicializētu visas funkcijas, kad lapa tiek pilnībā ielādēta
    init() {
        this.highlightCurrentPage();  // Pārbaudām pašreizējo lapu un izceļam navigācijā
        this.toggleNavbar();          // Pievienojam pogu darbību mobilajā versijā
        this.setupImageChange();      // Attēlu maiņa, ja ir galerijas attēli
        this.setupGallery();          // Modālais logs galerijai, ja nepieciešams
    }
}

// Izveidojam instanci no Main klases un inicializējam funkcijas
document.addEventListener('DOMContentLoaded', () => {
    const mainApp = new Main();
    mainApp.init();  // Inicializējam visas funkcijas
});
