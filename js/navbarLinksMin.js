document.addEventListener("DOMContentLoaded", (function() {
    const o = document.querySelector(".global-navbar-link.is-menu"),
        e = document.querySelectorAll(".global-navbar-link:not(.is-menu)"),
        t = {
            frost: ".section.is-hero",
            vibes: ".section.is-intro",
            collections: ".section.is-collections-main",
            tech: ".section.is-frost-tech-intro"
        };

    function n() {
        return "/" === window.location.pathname || "/index.html" === window.location.pathname
    }

    function i(o) {
        const e = document.querySelector(t[o]);
        e && (window.SmoothScroll ? window.SmoothScroll.scrollTo(e) : e.scrollIntoView({
            behavior: "smooth"
        }))
    }
    if (o && o.addEventListener("click", (function(o) {
            o.preventDefault()
        })), e.forEach((o => {
            o.addEventListener("click", (function(o) {
                o.preventDefault();
                const e = this.classList[1].replace("is-", "");
                var t;
                n() ? i(e) : (t = e, sessionStorage.setItem("scrollTarget", t), window.location.href = "/")
            }))
        })), n()) {
        const o = sessionStorage.getItem("scrollTarget");
        o && (sessionStorage.removeItem("scrollTarget"), setTimeout((() => i(o)), 100))
    }
}));