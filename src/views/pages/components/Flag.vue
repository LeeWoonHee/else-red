<template>
  <div
      v-if="localLinks"
      class="flag-wrapper">
    <div class="flag"
    ></div>
  </div>
</template>

<script>
import * as THREE from "three"

export default {
  name : "Flag",
  props: {
    links       : {
      type   : Array,
      default: () => []
    },
    currentIndex: {
      type   : Number,
      default: 0
    }
  },
  watch: {
    links       : {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localLinks = val
      },

    },
    currentIndex: {
      immediate: true,
      handler(val) {
        this.localIndex = val
        if (val > -1 && this.scene && this.material && this.loader && this.renderer) {
          this.material.map = this.loader.load(this.localLinks[this.localIndex].thumbnail_image)
          this.active = false
        }
        setInterval(() => {
          this.active = true
        }, 500)
      }
    }
  },
  data : () => ({
    localLinks : null,
    localIndex : 0,
    active     : false,
    changeIndex: 0,
    scene      : null,
    camera     : null,
    renderer   : null,
    geometry   : null,
    material   : null,
    mesh       : null,
    section    : null,
    flag       : null,
    clock      : null,
    loader     : null,
    WIDTH      : null,
    HEIGHT     : null,
    vFOV       : null,
    targetZ    : null
  }),
  mounted() {

    this.$nextTick(() => {
      setTimeout(() => {
        this.initGl()
      }, 200)
    })

  },
  methods: {
    initGl() {

      this.section = document.querySelector(".flag")
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      )
      this.WIDTH = window.innerWidth
      this.HEIGHT = window.innerHeight
      this.renderer = new THREE.WebGLRenderer()

      this.renderer.setSize(window.innerWidth, window.innerHeight)

      this.section.appendChild(this.renderer.domElement)

      this.loader = new THREE.TextureLoader()

      this.geometry = new THREE.PlaneGeometry(8, 6, 50, 30)

      this.material = new THREE.MeshBasicMaterial({
                                                    map: this.loader.load(this.localLinks[this.localIndex].thumbnail_image)
                                                  })
      this.flag = new THREE.Mesh(this.geometry, this.material)
      this.scene.add(this.flag);
      this.vFOV = this.camera.fov * (Math.PI / 180), // convert VERTICAL fov to radians

          this.targetZ = 4 / (2 * Math.tan(this.vFOV / 2))

      this.camera.position.z = this.targetZ

      this.clock = new THREE.Clock()

      this.animate()
      window.addEventListener("resize", this.resize)
    },
    animate() {
      const t = this.clock.getElapsedTime()

      this.flag.geometry.vertices.map(v => {
        const waveX1 = .1
        const waveX2 = .1 * Math.sin(v.x * 3 + t * 2)
        const waveY1 = .05

        v.z = (waveX1 + waveX2 + waveY1)
      })

      this.flag.geometry.verticesNeedUpdate = true

      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)

    },
    resize() {
      this.camera.aspect = this.WIDTH / this.HEIGHT
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.WIDTH, this.HEIGHT)
    },
  }
}
</script>

<style
    scoped
    lang="scss"
>

.flag-wrapper::v-deep {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .flag {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: screen;
    opacity: 1;

  }

}
</style>
