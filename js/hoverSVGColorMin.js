document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelectorAll(".collections-main_heading.link.is-clickable.is-ember"),
        n = document.querySelectorAll(".collections-main_heading.link.is-clickable.is-nebula");

    function t(e) {
        document.querySelectorAll(".collections-svg path").forEach((n => {
            n.setAttribute("fill", e)
        }))
    }
    e.forEach((e => {
        e.addEventListener("mouseenter", (() => t("#D97848"))), e.addEventListener("mouseleave", (() => t("#6BE688")))
    })), n.forEach((e => {
        e.addEventListener("mouseenter", (() => t("#580DEB"))), e.addEventListener("mouseleave", (() => t("#6BE688")))
    }))
}));