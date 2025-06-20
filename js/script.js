document.addEventListener('DOMContentLoaded', () => {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    // Desplazamiento suave cuando se hace clic en los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica para el carrusel de testimonios
    if (testimonialCarousel && prevArrow && nextArrow) {
        let scrollAmount = 0;
        const scrollStep = 370; // Ancho del testimonial-item (350px) + margen (15px * 2)

        nextArrow.addEventListener('click', () => {
            if (scrollAmount < testimonialCarousel.scrollWidth - testimonialCarousel.clientWidth) {
                scrollAmount += scrollStep;
                testimonialCarousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // Si llega al final, vuelve al principio para un loop infinito
                scrollAmount = 0;
                testimonialCarousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });

        prevArrow.addEventListener('click', () => {
            if (scrollAmount > 0) {
                scrollAmount -= scrollStep;
                testimonialCarousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // Si llega al principio, va al final para un loop infinito
                scrollAmount = testimonialCarousel.scrollWidth - testimonialCarousel.clientWidth;
                testimonialCarousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }
});