function setFullHeight() {
    const e = .01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${e}px`), document.querySelectorAll(".full-height").forEach((t => {
        t.style.height = 100 * e + "px"
    }))
}
setFullHeight(), window.addEventListener("resize", (() => {
    setFullHeight()
}));