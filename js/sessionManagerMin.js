document.addEventListener("DOMContentLoaded", (function() {
    "scrollRestoration" in history && (history.scrollRestoration = "manual");
    var e = "scrollPosition-" + window.location.pathname,
        o = "preloaderShown",
        t = "lastPage";
    if (sessionStorage.getItem(o)) {
        var n = parseInt(sessionStorage.getItem(e), 10);
        !isNaN(n) && n > 0 && window.scrollTo(0, n);
        var s = document.querySelector(".section.is-loading");
        s && (s.style.display = "none"), document.body.classList.remove("no-scroll")
    }
    document.querySelectorAll("a").forEach((function(o) {
        o.addEventListener("click", (function() {
            sessionStorage.setItem(e, window.scrollY || window.pageYOffset), sessionStorage.setItem(t, window.location.pathname)
        }))
    }));
    var i = document.querySelector(".loading_button-container");
    i && i.addEventListener("click", (function() {
        setTimeout((() => {
            let o = parseInt(sessionStorage.getItem(e), 10);
            !isNaN(o) && o > 0 && window.scrollTo(0, o)
        }), 500)
    })), window.addEventListener("beforeunload", (function() {
        sessionStorage.setItem(e, window.scrollY || window.pageYOffset), sessionStorage.setItem(o, "true"), sessionStorage.setItem(t, window.location.pathname), history.replaceState({
            fromSubdomain: !0
        }, "", location.href)
    })), window.addEventListener("popstate", (function(o) {
        if (o.state && o.state.fromSubdomain) {
            let o = parseInt(sessionStorage.getItem(e), 10);
            !isNaN(o) && o > 0 && window.scrollTo(0, o)
        } else window.scrollTo(0, 0), sessionStorage.removeItem(e)
    }))
}));