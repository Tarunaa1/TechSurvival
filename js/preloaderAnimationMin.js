document.addEventListener("DOMContentLoaded", (function() {
    var t = document.querySelector(".s-s3.is-loading"),
        e = document.querySelector(".loading_counter-wrap"),
        n = document.querySelector(".loading_tagline-wrap"),
        o = document.querySelector(".loading_button-container"),
        i = 0,
        r = setInterval((function() {
            i++, t && (t.textContent = i + "%"), i >= 100 && (clearInterval(r), setTimeout((function() {
                t.style.opacity = "0", t.style.transition = "opacity 1s ease-out", t.style.transitionTimingFunction = "cubic-bezier(0.19, 1, 0.22, 1)", setTimeout((function() {
                    e.style.display = "none", n.style.display = "block", requestAnimationFrame((() => {
                        var t;
                        (t = document.querySelector(".s-s4.is-loading.is-tagline")).style.opacity = .2, a(t, t.textContent), Array.from(t.children).forEach(((e, n) => {
                                gsap.fromTo(e, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    duration: .5,
                                    onStart: () => c(e, e.textContent),
                                    ease: "power4.out",
                                    onComplete: () => {
                                        n === t.children.length - 1 && (t.style.opacity = 1)
                                    }
                                })
                            })),
                            function() {
                                const t = document.querySelector(".loading_button-container"),
                                    e = document.querySelector(".s-s4.is-loading.is-tagline"),
                                    n = ["UNVEIL FROST", "CONQUER THE SEASON", "EMBRACE THE CHILL", "RIDE THE STORM", "MASTER THE PEAK"];
                                let o = 0;
                                t && e && t.addEventListener("mouseover", (function() {
                                    e.style.opacity = .2, o = (o + 1) % n.length;
                                    const t = n[o];
                                    a(e, t), Array.from(e.children).forEach(((n, o) => {
                                        c(n, t[o]), o === e.children.length - 1 && gsap.to(n, {
                                            opacity: 1,
                                            duration: .5,
                                            onComplete: () => {
                                                e.style.opacity = 1
                                            }
                                        })
                                    }))
                                }))
                            }()
                    }))
                }), 1e3)
            }), 1e3))
        }), 20);

    function a(t, e) {
        t.innerHTML = "", e.split("").forEach((e => {
            const n = document.createElement("span");
            n.textContent = e, t.appendChild(n)
        }))
    }

    function c(t, e) {
        let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            o = setInterval((() => {
                t.textContent = n.charAt(Math.floor(36 * Math.random()))
            }), 50);
        setTimeout((() => {
            clearInterval(o), t.textContent = e
        }), 500)
    }
    o && o.addEventListener("click", (function() {
        setTimeout((function() {
            document.body.classList.remove("no-scroll"), sessionStorage.setItem("preloaderShown", "true")
        }), 5e3)
    }))
}));