document.addEventListener("DOMContentLoaded", (() => {
    const e = document.querySelector(".cta-button.is-clickable.is-frost-tech-intro"),
        t = document.querySelectorAll(".h-h6.is-cta.is-frost-tech"),
        o = document.querySelector(".cta-svg.is-frost-tech");
    e.addEventListener("mouseenter", (() => {
        gsap.to(t, {
            duration: .5,
            color: "rgba(230, 107, 160, 1)",
            stagger: .03,
            ease: "power4.out"
        }), gsap.to(o, {
            duration: .5,
            delay: .03 * t.length,
            x: "20%",
            scale: 1.5,
            ease: "power4.out"
        })
    })), e.addEventListener("mouseleave", (() => {
        gsap.to(t, {
            duration: .2,
            color: "rgba(230, 107, 160, 0.1)",
            stagger: .01,
            ease: "power4.out"
        }), gsap.to(o, {
            duration: .2,
            delay: .01 * t.length,
            x: "0%",
            scale: 1,
            ease: "power4.out"
        })
    }))
}));