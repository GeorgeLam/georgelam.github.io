//Smooth scroll
$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

//GSAP
let socials = document.querySelectorAll(".social-links");
let main = document.querySelectorAll(".main-links");
let topText = document.querySelectorAll(".top-text");
let sub = document.querySelectorAll(".sub");
let conAr = document.querySelector(".content-area");

// const tl = new TimelineMax();

// const anim = () => {
//   console.log("set");
//   tl.from(conAr, 0.1, { autoAlpha: 0 })
//     .fromTo(topText, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
//     .fromTo(
//       main,
//       1,
//       { x: "100vw", opacity: 0 },
//       { x: "0vw", opacity: 1, ease: Power2.easeInOut },
//       "-=0.8"
//     )
//     .fromTo(
//       socials,
//       1,
//       { x: "-100vw", opacity: 0 },
//       { x: "0vw", opacity: 1, ease: Power2.easeInOut },
//       "-=1"
//     );
// };

// window.addEventListener("load", anim);
