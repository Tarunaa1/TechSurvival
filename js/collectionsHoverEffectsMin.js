document.addEventListener("DOMContentLoaded", (() => {
    const o = document.querySelector(".collections-main_heading.link.is-clickable.is-apex"),
        e = document.querySelector(".collections-main_heading.link.is-clickable.is-ember"),
        t = document.querySelector(".collections-main_heading.link.is-clickable.is-nebula"),
        step = document.querySelector(".collections-main_heading.link.is-clickable.is-step"),
        game = document.querySelector(".collections-main_heading.link.is-clickable.is-game"),
        r = (document.querySelector(".h-h2.is-collections-main.is-default"), document.querySelector(".h-h5.is-collections-main.is-default"), document.querySelector(".h-h2.is-collections-main.is-default.is-one")),
        a = document.querySelector(".h-h5.is-collections-main.is-default.is-one"),
        s = document.querySelector(".h-h2.is-collections-main.is-default.is-two"),
        i = document.querySelector(".h-h5.is-collections-main.is-default.is-two"),
        p = document.querySelector(".h-h2.is-collections-main.is-default.is-three"),
        u = document.querySelector(".h-h5.is-collections-main.is-default.is-three"),
        n = document.querySelector(".s-s5.is-collections"),
        l = document.querySelectorAll(".global-icon_diamond.is-icon.is-collections"),
        c = "rgba(230, 107,160, 1.0)",
        d = "rgba(230, 107,160, 0.5)",
        w = "rgba(230, 107,160, 0.1)",
        x = "rgba(252, 161, 193, 1.0)",
        k = "rgba(252, 161, 193, 0.5)",
        b = "rgba(252, 161, 193, 0.1)",
        g = "rgba(217, 72, 130, 1.0)",
        $ = "rgba(217, 72, 130, 0.5)",
        h = "rgba(217, 72, 130, 0.1)",
        m = "rgba(253, 206, 216, 1.0)",
        S = "rgba(253, 206, 216, 0.5)",
        f = "rgba(253, 206, 216, 0.1)",
        q = "rgba(235, 13, 109, 1.0)",
        y = "rgba(235, 13, 109, 0.5)",
        E = "rgba(235, 13, 109, 0.1)",
        v = "rgba(203, 127, 149, 1.0)",
        L = "rgba(203, 127, 149, 0.5)",
        C = "rgba(203, 127, 149, 0.1)";
    o.addEventListener("mouseenter", (() => {
        gsap.to(r, {
            color: c,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: x,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), o.addEventListener("mouseleave", (() => {
        gsap.to(r, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), e.addEventListener("mouseenter", (() => {
        gsap.to(r, {
            color: h,
            "-webkit-text-stroke": `1px ${$}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: g,
            "-webkit-text-stroke": `1px ${$}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: h,
            "-webkit-text-stroke": `1px ${$}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: f,
            "-webkit-text-stroke": `1px ${S}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: m,
            "-webkit-text-stroke": `1px ${S}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: f,
            "-webkit-text-stroke": `1px ${S}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: m,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: g,
                boxShadow: `0 0 10px ${g}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), e.addEventListener("mouseleave", (() => {
        gsap.to(r, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), t.addEventListener("mouseenter", (() => {
        gsap.to(r, {
            color: E,
            "-webkit-text-stroke": `1px ${y}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: E,
            "-webkit-text-stroke": `1px ${y}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: q,
            "-webkit-text-stroke": `1px ${y}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: C,
            "-webkit-text-stroke": `1px ${L}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: C,
            "-webkit-text-stroke": `1px ${L}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: v,
            "-webkit-text-stroke": `1px ${L}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: v,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: q,
                boxShadow: `0 0 10px ${q}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), t.addEventListener("mouseleave", (() => {
        gsap.to(r, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })),step.addEventListener("mouseenter", (() => {
        gsap.to(r, {
            color: c,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: x,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), step.addEventListener("mouseleave", (() => {
        gsap.to(r, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })),game.addEventListener("mouseenter", (() => {
        gsap.to(r, {
            color: c,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: x,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    })), game.addEventListener("mouseleave", (() => {
        gsap.to(r, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(s, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(p, {
            color: w,
            "-webkit-text-stroke": `1px ${d}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(a, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(i, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(u, {
            color: b,
            "-webkit-text-stroke": `1px ${k}`,
            duration: .5,
            ease: "power4.out"
        }), gsap.to(n, {
            color: x,
            duration: .5,
            ease: "power4.out"
        }), l.forEach((o => {
            gsap.to(o, {
                borderColor: c,
                boxShadow: `0 0 10px ${c}`,
                duration: .5,
                ease: "power4.out"
            })
        }))
    }))
}));

