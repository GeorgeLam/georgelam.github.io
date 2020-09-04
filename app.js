//Smooth scroll
$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//GSAP
let socials = document.querySelectorAll(".social-links");
let main = document.querySelectorAll(".main-links");
let name = document.querySelectorAll(".name");

const tl = new TimelineMax();
tl
    .fromTo(name, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
    .fromTo(main, 1, { x: "100vw", opacity: 0 }, { x: "0vw", opacity: 1, ease: Power2.easeInOut}, "-=0.8")
    .fromTo(socials, 1, { x: "-100vw" , opacity: 0}, { x: "0vw", opacity: 1, ease: Power2.easeInOut }, "-=1")
;