document.addEventListener("DOMContentLoaded", (function() {
    var e = document.querySelector(".s-s3.is-loading"),
        o = document.querySelector(".section.is-loading"),
        l = sessionStorage.getItem("lastPage");
    if (["/collection/apex-collection", "/collection/ember-collection", "/collection/nebula-collection", "/frost-tech"].includes(l)) {
        o && (o.style.display = "none", e.style.display = "none"), document.body.classList.remove("no-scroll");
        var t = "scrollPosition-" + window.location.pathname,
            n = parseInt(sessionStorage.getItem(t), 10);
        !isNaN(n) && n > 0 && window.scrollTo(0, n)
    } else o.style.display = "block", document.body.classList.add("no-scroll")
}));