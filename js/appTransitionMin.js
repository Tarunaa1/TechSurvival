document.addEventListener("DOMContentLoaded", (function() {
    const e = document.body,
        t = document.querySelector(".app");

    function n(e) {
        const n = e.target.closest("a");
        n && (console.log("Link clicked:", n.href), e.preventDefault(), t && t.classList.add("fade-out"), setTimeout((() => {
            window.location.href = n.href
        }), 1e3))
    }
    setTimeout((function() {
        e.classList.remove("content-hidden")
    }), 50);
    const o = document.querySelectorAll('a[href^="/"]');
    o.length > 0 && o.forEach((e => {
        e.addEventListener("click", n)
    }))
}));