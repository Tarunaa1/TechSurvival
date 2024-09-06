class RGBShiftEffect extends EffectShell {
    constructor(e, t = null, i = {}) {
        super(e, t), this.container && this.itemsWrapper && (this.options = i || {
            strength: .25
        }, this.init())
    }
    init() {
        this.position = new THREE.Vector3(0, 0, 0), this.scale = new THREE.Vector3(1, 1, 1), this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32), this.uniforms = {
            uTime: {
                value: 0
            },
            uTexture: {
                value: null
            },
            uOffsetRed: {
                value: new THREE.Vector2(0, 0)
            },
            uOffsetGreen: {
                value: new THREE.Vector2(0, 0)
            },
            uOffsetBlue: {
                value: new THREE.Vector2(0, 0)
            },
            uAlpha: {
                value: 0
            }
        }, this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: "\n        uniform vec2 uOffsetRed;\n\n        varying vec2 vUv;\n\n        vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n          float M_PI = 3.1415926535897932384626433832795;\n          position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n          position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n          return position;\n        }\n\n        void main() {\n          vUv = uv;\n          vec3 newPosition = deformationCurve(position, uv, uOffsetRed);\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\n        }\n      ",
            fragmentShader: "\n        uniform sampler2D uTexture;\n        uniform float uAlpha;\n        uniform vec2 uOffsetRed;\n        uniform vec2 uOffsetGreen;\n        uniform vec2 uOffsetBlue;\n\n        varying vec2 vUv;\n\n        vec3 rgbShift(sampler2D tex, vec2 uv, vec2 offsetRed, vec2 offsetGreen, vec2 offsetBlue) {\n          float r = texture(tex, uv + offsetRed).r;\n          float g = texture(tex, uv + offsetGreen).g;\n          float b = texture(tex, uv + offsetBlue).b;\n          return vec3(r, g, b);\n        }\n\n        void main() {\n          vec3 color = rgbShift(uTexture, vUv, uOffsetRed, uOffsetGreen, uOffsetBlue);\n          gl_FragColor = vec4(color, uAlpha);\n        }\n      ",
            transparent: !0
        }), this.plane = new THREE.Mesh(this.geometry, this.material), this.scene.add(this.plane)
    }
    onMouseEnter() {
        this.currentItem && this.isMouseOver || (this.isMouseOver = !0, gsap.to(this.uniforms.uAlpha, .5, {
            value: 1,
            ease: Power4.easeOut
        }))
    }
    onMouseLeave(e) {
        gsap.to(this.uniforms.uAlpha, .5, {
            value: 0,
            ease: Power4.easeOut
        })
    }
    onMouseMove(e) {
        let t = this.mouse.x.map(-1, 1, -this.viewSize.width / 2, this.viewSize.width / 2),
            i = this.mouse.y.map(-1, 1, -this.viewSize.height / 2, this.viewSize.height / 2);
        this.position = new THREE.Vector3(t, i, 0), gsap.to(this.plane.position, 1, {
            x: t,
            y: i,
            ease: Power4.easeOut,
            onUpdate: this.onPositionUpdate.bind(this)
        })
    }
    onPositionUpdate() {
        let e = this.plane.position.clone().sub(this.position).multiplyScalar(1.5 * -this.options.strength);
        this.uniforms.uOffsetRed.value = e;
        let t = this.plane.position.clone().sub(this.position).multiplyScalar(2 * -this.options.strength);
        this.uniforms.uOffsetGreen.value = t;
        let i = this.plane.position.clone().sub(this.position).multiplyScalar(2.5 * -this.options.strength);
        this.uniforms.uOffsetBlue.value = i
    }
    onMouseOver(e, t) {
        this.isLoaded && (this.onMouseEnter(), this.currentItem && this.currentItem.index === e || this.onTargetChange(e))
    }
    onTargetChange(e) {
        if (this.currentItem = this.items[e], !this.currentItem.texture) return;
        let t = this.currentItem.img.naturalWidth / this.currentItem.img.naturalHeight;
        this.scale = new THREE.Vector3(t, 1, 1), this.uniforms.uTexture.value = this.currentItem.texture, this.plane.scale.copy(this.scale)
    }
}