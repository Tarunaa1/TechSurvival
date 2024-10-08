! function() {
    const o = document.querySelector(".grid-canvas");
    if (!o) return void console.error("Canvas element not found");
    const t = o.getContext("2d");
    o.width = window.innerWidth, o.height = window.innerHeight;
    const e = [4, 8],
        i = o.height / 32,
        a = o.width / 32,
        r = [],
        n = [];
    for (let t = 0; t < i; t++) r.push({
        y: 32 * t,
        x: -o.width,
        opacity: 0
    });
    for (let t = 0; t < a; t++) n.push({
        x: 32 * t,
        y: o.height,
        opacity: 0
    });

    function h() {
        t.clearRect(0, 0, o.width, o.height), t.strokeStyle = "#fca1aa", r.forEach((i => {
            t.beginPath(), t.setLineDash(e), t.globalAlpha = i.opacity, t.moveTo(i.x, i.y), t.lineTo(i.x + o.width, i.y), t.stroke()
        })), n.forEach((i => {
            t.beginPath(), t.setLineDash(e), t.globalAlpha = i.opacity, t.moveTo(i.x, i.y + o.height), t.lineTo(i.x, i.y), t.stroke()
        })), t.globalAlpha = 1
    }
    gsap.registerPlugin(ScrollTrigger), ScrollTrigger.create({
        trigger: o,
        start: "top 50%",
        end: "bottom bottom",
        scrub: !0,
        onEnter: () => (r.forEach(((t, e) => {
            gsap.fromTo(t, {
                x: -o.width,
                opacity: 0
            }, {
                x: 0,
                opacity: .1,
                duration: 1,
                delay: .02 * e,
                onUpdate: h,
                ease: "power4.out"
            })
        })), void gsap.delayedCall(.2, (() => {
            n.forEach(((t, e) => {
                gsap.fromTo(t, {
                    y: o.height,
                    opacity: 0
                }, {
                    y: -32,
                    opacity: .1,
                    duration: 1,
                    delay: .02 * e,
                    onUpdate: h,
                    ease: "power4.inOut"
                })
            }))
        }))),
        once: !0
    })
}();