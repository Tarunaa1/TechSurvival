const PARTICLES_X = 250,
    PARTICLES_Y = 150,
    TOTAL_PARTICLES = 37500,
    TWO_PI = 6.283185307179586,
    T = THREE;
let s, c, r, p, a, m, y;

function i() {
    if (typeof T == "undefined") return void console.error("THREE.js is not loaded. Please ensure it is included before this script.");
    d(), s = new T.Scene, c = new T.PerspectiveCamera(75, innerWidth / innerHeight, .1, 1e3), s.background = new T.Color(396808);
    const e = document.querySelector(".hero_webgl-element");
    if (!e) return void console.error("Canvas element not found");
    r = new T.WebGLRenderer({
        canvas: e
    }), r.setSize(innerWidth, innerHeight), addEventListener("resize", n);
    const t = l(128, "#6BE688");
    p = f(s, t), c.position.z = 120, m = new T.Vector2, y = new T.Raycaster, addEventListener("mousemove", o), u(), ScrollTrigger.create({
        trigger: ".section.is-collections-main",
        start: "bottom bottom",
        end: "bottom 80%",
        onLeave: () => {
            h(), e.style.display = "none"
        },
        onEnterBack: () => {
            e.style.display = "block", g()
        }
    })
}

function d() {
    a && (cancelAnimationFrame(a), a = null), r && r.dispose(), s && s.clear(), removeEventListener("resize", n), removeEventListener("mousemove", o)
}

function n() {
    c.aspect = innerWidth / innerHeight, c.updateProjectionMatrix(), r.setSize(innerWidth, innerHeight)
}

function o(e) {
    m.x = e.clientX / innerWidth * 2 - 1, m.y = -(e.clientY / innerHeight) * 2 + 1
}

function u() {
    a = requestAnimationFrame(u), v(p, y, m, c), r.render(s, c)
}

function h() {
    a && (cancelAnimationFrame(a), a = null)
}

function g() {
    a || u()
}

function l(e, t) {
    const n = 2 * e,
        i = document.createElement("canvas");
    i.width = i.height = n;
    const o = i.getContext("2d");
    o.beginPath(), o.arc(e, e, e, 0, TWO_PI, !1), o.fillStyle = t, o.fill();
    const u = new T.Texture(i);
    return u.needsUpdate = !0, u
}

function f(e, t) {
    const n = new T.BufferGeometry,
        i = new Float32Array(3 * TOTAL_PARTICLES),
        o = new Float32Array(TOTAL_PARTICLES),
        u = new Float32Array(TOTAL_PARTICLES);
    for (let e = 0; e < PARTICLES_X; e++)
        for (let t = 0; t < PARTICLES_Y; t++) {
            const n = e * PARTICLES_Y + t,
                r = 2 * (e - PARTICLES_X / 2),
                a = 2 * (t - PARTICLES_Y / 2);
            i[3 * n] = r, i[3 * n + 1] = a, i[3 * n + 2] = 0, o[n] = 1, u[n] = .5
        }
    n.setAttribute("position", new T.BufferAttribute(i, 3)), n.setAttribute("scale", new T.BufferAttribute(o, 1)), n.setAttribute("opacity", new T.BufferAttribute(u, 1));
    const r = new T.ShaderMaterial({
            uniforms: {
                color: {
                    value: new T.Color(16777215)
                },
                pointTexture: {
                    value: t
                }
            },
            vertexShader: "attribute float scale;attribute float opacity;varying vec2 vUv;varying float vOpacity;void main(){vUv=uv;vOpacity=opacity;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_PointSize=scale*(300.0/-mvPosition.z);gl_Position=projectionMatrix*mvPosition;}",
            fragmentShader: "uniform vec3 color;uniform sampler2D pointTexture;varying vec2 vUv;varying float vOpacity;void main(){gl_FragColor=vec4(color,vOpacity)*texture2D(pointTexture,gl_PointCoord);}",
            depthTest: !1,
            transparent: !0
        }),
        a = new T.Points(n, r);
    return e.add(a), a
}

function v(e, t, n, i) {
    const o = e.geometry.attributes.position.array,
        r = e.geometry.attributes.scale.array,
        a = e.geometry.attributes.opacity.array;
    t.setFromCamera(n, i);
    const s = t.intersectObject(e),
        c = .005 * Date.now();
    for (let e = 0; e < TOTAL_PARTICLES; e++) {
        const t = 3 * e,
            n = o[t],
            i = o[t + 1];
        o[t + 2] = 10 * Math.sin(.1 * c + .07 * n) + 30 * Math.sin(.1 * c + .01 * i) + 7 * Math.cos(.5 * c + .01 * n);
        let u = 1,
            l = .5;
        if (s.length > 0) {
            const e = Math.hypot(n - s[0].point.x, i - s[0].point.y);
            e < 10 && (u = 1 + (10 - e) / 10 * 1.5, l = 1 - e / 10 * .5)
        }
        r[e] = u, a[e] = l
    }
    e.geometry.attributes.position.needsUpdate = !0, e.geometry.attributes.scale.needsUpdate = !0, e.geometry.attributes.opacity.needsUpdate = !0
}

function x() {
    console.log("Reinitializing particle system"), d(), i()
}
gsap.registerPlugin(ScrollTrigger), "loading" === document.readyState ? addEventListener("DOMContentLoaded", i) : i(), addEventListener("popstate", e => "/" === location.pathname && x());