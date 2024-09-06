const text = document.querySelector(".h-h2.is-intro"),
    span = document.querySelector(".h-h2.is-intro.is-span"),
    splineElement = document.querySelector(".three-d-element.is-intro"),
    splitType = new SplitType(text),
    splitTypeSpan = new SplitType(span);
document.addEventListener("DOMContentLoaded", (e => {
    gsap.registerPlugin(ScrollTrigger);
    const t = gsap.timeline({
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play pause resume reverse",
                scrub: !0
            }
        }),
        r = gsap.timeline({
            scrollTrigger: {
                trigger: splineElement,
                start: "top 40%",
                end: "bottom bottom",
                toggleActions: "play pause resume reverse",
                scrub: !0
            }
        });
    t.from(splitType.words, {
        duration: 1.5,
        x: -20,
        opacity: 0,
        stagger: .2,
        ease: "power4.inOut"
    }), t.to(splitTypeSpan.words, {
        duration: 1,
        color: "#A1FCCF",
        stagger: .05,
        ease: "power4.inOut"
    }), r.from(splineElement, {
        duration: 1,
        yPercent: -10,
        opacity: 0,
        ease: "power1.out"
    }, "<")
}));