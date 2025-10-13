document.addEventListener("DOMContentLoaded", () => {

    class Main {
        constructor() {
            this.currentPath = window.location.pathname;
        }

        highlightCurrentPage() {
            const navItems = document.querySelectorAll('.nav-link');

            navItems.forEach(item => {
                if (item.getAttribute('href') === this.currentPath) {
                    item.classList.add('active'); 
                } else {
                    item.classList.remove('active'); 
                }
            });
        }

        init() {
            this.highlightCurrentPage();
        }
    }

    const mainApp = new Main();
    mainApp.init();


    const images = document.querySelectorAll('.slider_image');
    let current = 0;

    if (images.length > 0) {
        images[current].classList.add('active'); 

        setInterval(() => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        }, 4000); 
    }

});
