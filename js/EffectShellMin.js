class EffectShell {
    constructor(e = document.querySelector(".section.is-collections-main"), t = null) {
        this.container = e, this.itemsWrapper = t, this.container && this.itemsWrapper && (this.setup(), this.initEffectShell().then((() => {
            this.isLoaded = !0, this.isMouseOver && this.onMouseOver(this.tempItemIndex), this.tempItemIndex = null
        })), this.createEventsListeners())
    }
    setup() {
        window.addEventListener("resize", this.onWindowResize.bind(this), !1), this.renderer = new THREE.WebGLRenderer({
            antialias: !0,
            alpha: !0
        });
        const e = this.container.offsetWidth,
            t = this.container.offsetHeight;
        this.renderer.setSize(e, t), this.renderer.setPixelRatio = window.devicePixelRatio, this.renderer.domElement.classList.add("collections-canvas"), this.container.appendChild(this.renderer.domElement), this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(40, this.viewport.aspectRatio, .1, 100), this.camera.position.set(0, 0, 3), this.mouse = new THREE.Vector2, this.timeSpeed = 2, this.time = 0, this.clock = new THREE.Clock, this.renderer.setAnimationLoop(this.render.bind(this))
    }
    render() {
        this.time += this.clock.getDelta() * this.timeSpeed, this.renderer.render(this.scene, this.camera)
    }
    initEffectShell() {
        let e = [];
        this.items = this.itemsElements;
        const t = new THREE.TextureLoader;
        return this.items.forEach(((i, s) => {
            e.push(this.loadTexture(t, i.img ? i.img.src : null, s))
        })), new Promise(((t, i) => {
            Promise.all(e).then((e => {
                e.forEach(((e, t) => {
                    this.items[t].texture = e.texture
                })), t()
            }))
        }))
    }
    createEventsListeners() {
        this.items.forEach(((e, t) => {
            e.element.addEventListener("mouseover", this._onMouseOver.bind(this, t), !1)
        })), this.container.addEventListener("mousemove", this._onMouseMove.bind(this), !1), this.itemsWrapper.addEventListener("mouseleave", this._onMouseLeave.bind(this), !1)
    }
    _onMouseLeave(e) {
        this.isMouseOver = !1, this.onMouseLeave(e)
    }
    _onMouseMove(e) {
        this.mouse.x = e.clientX / this.viewport.width * 2 - 1, this.mouse.y = -e.clientY / this.viewport.height * 2 + 1, this.onMouseMove(e)
    }
    _onMouseOver(e, t) {
        this.tempItemIndex = e, this.onMouseOver(e, t)
    }
    onWindowResize() {
        const e = this.container.offsetWidth,
            t = this.container.offsetHeight;
        this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t)
    }
    onUpdate() {}
    onMouseEnter(e) {}
    onMouseLeave(e) {}
    onMouseMove(e) {}
    onMouseOver(e, t) {}
    get viewport() {
        let e = this.container.clientWidth,
            t = this.container.clientHeight;
        return {
            width: e,
            height: t,
            aspectRatio: e / t
        }
    }
    get viewSize() {
        let e = this.camera.position.z,
            t = this.camera.fov * Math.PI / 180,
            i = 2 * Math.tan(t / 2) * e;
        return {
            width: i * this.viewport.aspectRatio,
            height: i,
            vFov: t
        }
    }
    get itemsElements() {
        return [...this.itemsWrapper.querySelectorAll(".link")].map(((e, t) => ({
            element: e,
            img: e.querySelector("img") || null,
            index: t
        })))
    }
    loadTexture(e, t, i) {
        return new Promise(((s, n) => {
            t ? e.load(t, (e => {
                s({
                    texture: e,
                    index: i
                })
            }), void 0, (e => {
                console.error("An error happened.", e), n(e)
            })) : s({
                texture: null,
                index: i
            })
        }))
    }
}