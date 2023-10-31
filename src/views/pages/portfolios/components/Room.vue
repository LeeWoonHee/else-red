<template>
  <div
      class="room">
    <div class="title">
      ELSE<br>
      PORTFOLIOS
    </div>

    <!-- container   -->
    <div ref="container" class="container-wrapper"></div>
    <fog class="bg-transparent"/>
    <div class="scroll">
      스크롤을 내려주세요
    </div>

  </div>
</template>

<script>

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Fog from '@/views/pages/components/Fog'
import TrackballControls from "three-trackballcontrols";

let geometry,
    intersects,
    mouse,
    SELECTED,
    camera,
    scene,
    raycaster,
    renderer,
    controls,
    container,
    portfolioItem = [],
    obj           = [],
    light,
    loader,
    gapX,
    gapY,
    box,
    clock,
    t,
    material
export default {
  name      : 'Room',
  components: {
    Fog
  },
  props     : {
    portfolios: {
      type   : Array,
      default: null
    },
  },
  watch     : {
    portfolios: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localPortfolios = val
      },
    }
  },
  data      : () => ({
    localPortfolios: [],
    load           : false,
    portfoliosState: false,
  }),

  methods: {
    // create() {
    //
    //   geometry = new THREE.BoxGeometry(63, 42, .5)
    //   intersects = raycaster.intersectObjects(scene.children)
    //   mouse = new THREE.Vector2()
    //   SELECTED = intersects[0].object
    //   camera = new THREE.PerspectiveCamera(
    //       60,
    //       window.innerWidth / window.innerHeight,
    //       .1,
    //       1000
    //   )
    //   scene = new THREE.Scene()
    //   raycaster = new THREE.Raycaster()
    //   renderer = new THREE.WebGLRenderer(
    //       {
    //         antialias: true,
    //         alpha    : true
    //       }
    //   )
    //   portfolioItem = []
    //   obj = []
    //   light = new THREE.PointLight(0xffffff, 3)
    //   loader = new THREE.TextureLoader()
    //   gapX = event.clientX - event.offsetX
    //   gapY = event.clientY - event.offsetY
    //   box = new THREE.Mesh(geometry, material)
    //   clock = new THREE.Clock()
    //   t = clock.getElapsedTime()
    // },
    init() {
      mouse = new THREE.Vector2()
      scene = new THREE.Scene()
      raycaster = new THREE.Raycaster()
      renderer = new THREE.WebGLRenderer(
          {
            antialias: true,
            alpha    : true
          }
      )
      geometry = new THREE.BoxGeometry(63, 42, .5)

      //container
      container = this.$refs['container']
      if (container) {
        container.appendChild(renderer.domElement)
      }

      //intersects
      intersects = raycaster.intersectObjects(scene.children)

      //camera
      camera = new THREE.PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          0.1,
          10000
      )
      camera.position.set(0, -30, 170)

      //renderer
      renderer.setSize(window.innerWidth, window.innerHeight)

      //light
      light = new THREE.PointLight(0xffffff, 3)
      light.position.set(1, 1, 1)
      scene.add(light)

      //controls
      controls = new TrackballControls(camera, renderer.domElement)
      controls.dynamicDampingFactor = 0.1

      // room 에서 확대 되는 거리는 controls.target.set z 로 변경해서 조절한다
      controls.target.set(0, 0, -150)
      controls.minDistance = 1
      controls.maxDistance = 300
      controls.zoomSpeed = -1.2
      controls.smoothZoom = true

      //scene

      scene.fog = new THREE.FogExp2(0x000000, .002)

      //texture
      loader = new THREE.TextureLoader()
      loader.crossOrigin = ''

      //mesh

      //기존 코드 삭제 금지 !!!!

      // for (let x = 0; x < this.localPortfolios.length; x++) {
      //   material = new THREE.MeshBasicMaterial({
      //                                         // map: loader.load(this.localPortfolios[x].thumbnail_image)
      //                                           map: loader.load(require(`@/assets/images/pages/portfolio/${ x }.png`))
      //                                          })
      //   box = new THREE.Mesh(geometry, material)
      //   scene.add(box)
      //   obj.push(box)
      //   obj[x].userData.URL = `/portfolios/${ this.localPortfolios[x].id }`
      // }

      //임시 추가 코드
      if (container) {
        for (let x = 0; x < this.localPortfolios.length; x++) {
          material = new THREE.MeshBasicMaterial({
                                                   // map: loader.load(this.localPortfolios[x].thumbnail_image)
                                                   map: loader.load(require(`@/assets/images/pages/portfolio/${ x }.png`))
                                                 })
          box = new THREE.Mesh(geometry, material)
          scene.add(box)
          obj.push(box)

        }
        for (let x = 0; x < this.localPortfolios.length; x++) {
          obj[x].userData.URL = `/portfolios/${ this.localPortfolios[x].id }`
        }

      }
      //object postion
      obj.map((item, index) => {
        var Xarray = [ 50, -100, -50 ]
        var Yarray = [ 0, 40, -40 ]

        const positionX = Xarray[index % 3]
        const positionY = Yarray[index % 3]
        const positionZ = index === 0 ? 60 : (index * (120 - 40)) - index * 120

        item.position.set(positionX, positionY, positionZ)

      })

      //clock
      clock = new THREE.Clock()

      for (let i = 0; i < scene.children.length; i++) {
        scene.children[i].type === 'PointLight' ? null : scene.children[i].geometry.type === 'BoxGeometry' ? portfolioItem.push(scene.children[i]) : null
      }

      if (container) {
        container.addEventListener('mousemove', this.onDocumentMouseMove, false)
        container.addEventListener('click', this.onDocumentMouseDown, false)
      }

    },

    onDocumentMouseMove(event) {
      intersects = raycaster.intersectObjects(portfolioItem)
      gapX = event.clientX - event.offsetX
      gapY = event.clientY - event.offsetY
      event.preventDefault()
      raycaster.setFromCamera(mouse, camera)
      intersects = raycaster.intersectObjects(scene.children)

      this.$gsap.to(mouse, 0.5, {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })

      if (intersects.length > 0) {
        if (SELECTED = intersects[0].object.geometry.type === 'BoxGeometry') {

          SELECTED = intersects[0].object
          this.$gsap.to(SELECTED.rotation, {
            x: -mouse.y * 0.3,
            y: mouse.x * (Math.PI / 6)
          })
          this.$gsap.to(SELECTED.scale, {
            x       : 1.15,
            y       : 1.15,
            duration: .5
          })
          container.style.cursor = 'pointer'
        }
      }
      else {
        for (let i = 0; i < scene.children.length; i++) {
          this.$gsap.to(scene.children[i].scale, {
            x       : 1,
            y       : 1,
            duration: .5
          })
          container.style.cursor = 'auto'
        }
      }
    },
    //클릭 이벤트
    onDocumentMouseDown(event) {
      intersects = raycaster.intersectObjects(portfolioItem)
      event.preventDefault()
      //클릭 됐을때
      if (intersects.length > 0) {
        window.location.href = intersects[0].object.userData.URL
      }
    },
    onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    },
    animate() {

      controls.update();
      t = clock.getElapsedTime()
      if (box) {
        box.geometry.vertices.map(v => {
          const waveX1 = .1
          const waveX2 = 3 * Math.sin(v.x * 3 + t * 2)
          const waveY1 = 5
          v.z = (waveX1 + waveX2 + waveY1)
        })
        box.geometry.verticesNeedUpdate = true
      }

      renderer.render(scene, camera);
      requestAnimationFrame(this.animate);

    },
  },
  mounted() {

    this.$nextTick(() => {
      setTimeout(() => {
        this.init()
        this.animate()
        window.addEventListener('resize', this.onWindowResize)
      }, 160)

    })
  },
  beforeDestroy() {
    if (container) {
      window.cancelAnimationFrame(this.animate)
      window.removeEventListener('resize', this.onWindowResize, false)
      container.removeEventListener('mousemove', this.onDocumentMouseMove, false)
      container.removeEventListener('click', this.onDocumentMouseDown, false)
      geometry = null
      intersects = null
      mouse = null
      SELECTED = null
      camera = null,
          scene = null,
          raycaster = null,
          renderer = null,
          controls = null,
          container = null,
          portfolioItem = [],
          obj = [],
          light = null,
          loader = null,
          gapX = null,
          gapY = null,
          box = null,
          material = null
    }
  }
}
</script>

<style scoped lang="scss">

.room::v-deep {
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);

  .title {
    position: absolute;
    width: 100%;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: 5.729vw; //110px
    font-weight: 700;
    line-height: 5.729vw; //110px
    z-index: 3;
  }

  .container-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 2;
  }

  .scroll {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 18%;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
