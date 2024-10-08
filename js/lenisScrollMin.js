class Scroll extends Lenis {
    constructor() {
        super({
            duration: 1.5,
            easing: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
            direction: "vertical",
            smooth: !0,
            smoothTouch: !1,
            touchMultiplier: 1.5
        }), this.time = 0, this.isActive = !0, this.init()
    }
    init() {
        this.config(), this.render(), this.handleEditorView()
    }
    config() {
        const t = [...document.querySelectorAll('[data-scroll="overscroll"]')];
        t.length > 0 && t.forEach((t => t.setAttribute("onwheel", "event.stopPropagation()")));
        const e = [...document.querySelectorAll('[data-scroll="stop"]')];
        e.length > 0 && e.forEach((t => {
            t.onclick = () => {
                this.stop(), this.isActive = !1
            }
        }));
        const o = [...document.querySelectorAll('[data-scroll="start"]')];
        o.length > 0 && o.forEach((t => {
            t.onclick = () => {
                this.start(), this.isActive = !0
            }
        }));
        const i = [...document.querySelectorAll('[data-scroll="toggle"]')];
        i.length > 0 && i.forEach((t => {
            t.onclick = () => {
                this.isActive ? (this.stop(), this.isActive = !1) : (this.start(), this.isActive = !0)
            }
        }));
        const s = [...document.querySelectorAll("[data-scrolllink]")];
        s.length > 0 && s.forEach((t => {
            const e = parseFloat(t.dataset.scrolllink),
                o = document.querySelector(`[data-scrolltarget="${e}"]`);
            o && (t.onclick = () => this.scrollTo(o))
        }))
    }
    render() {
        this.raf(this.time += 10), window.requestAnimationFrame(this.render.bind(this))
    }
    handleEditorView() {
        const t = document.documentElement;
        new MutationObserver(((t, e) => {
            for (const e of t)
                if ("attributes" === e.type) {
                    const t = document.querySelector(".w-editor-bem-EditSiteButton"),
                        e = document.querySelector(".w-editor-bem-EditorMainMenu"),
                        o = t => t.addEventListener("click", (() => this.destroy()));
                    t && o(t), e && o(e)
                }
        })).observe(t, {
            attributes: !0,
            childList: !1,
            subtree: !1
        })
    }
}
window.SmoothScroll = new Scroll;