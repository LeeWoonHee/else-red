<template>
  <div class="hero">

    <!-- noise bg   -->
    <div class="noise-bg"></div>

    <!-- else 3d text   -->
    <div class="text-model"></div>

    <!-- fog   -->
    <fog/>

    <div class="main-title">
      FIND YOUR DIFFERENCE<br>
      DIGITAL AGENCY
    </div>

    <!-- scroll down desc   -->
    <div
        v-if="$store.state.scrollY <= 0"
        class="scroll">
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
      <div class="w-full blex pt-2">
        SCROLL DOWN
      </div>
    </div>

  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Fog from "@/views/pages/components/Fog.vue";

let container,
    camera,
    scene,
    renderer,
    material,
    mesh,
    geometry,
    loader,
    font,
    cube,
    light,
    currentTimeLine,
    controls,
    aimTimeLine;

export default {
  name      : "Hero",
  components: {
    Fog
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.setGsap();
    })
  },
  beforeDestroy() {
    this.load = false
    this.timeline.kill()
  },
  methods: {
    init() {
      container = document.querySelector(".text-model");
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({
                                           antialias: true
                                         });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      //fog
      scene.fog = new THREE.Fog(0xffffff, 10, 200);
      scene.background = new THREE.Color(0x1e1e1e);

      //fonts
      loader = new THREE.FontLoader()
      font = loader.parse(require('@/assets/fonts/suitHeavy.json'))

      //light
      light = new THREE.PointLight(0xffffff, .5);
      light.position.set(100, 100, 50);
      scene.add(light);

      //cube geometry, material
      geometry = new THREE.TextGeometry('ELSE', {
        font          : font,
        size          : 40,
        bevelEnabled  : true,
        bevelThickness: 1,
        bevelSize     : 2,
        height        : 7,
      });
    
      material = new THREE.MeshPhongMaterial({
                                               color: 0x670000,
                                             });

      cube = new THREE.Mesh(geometry, material);
      cube.position.set(2, -55, 8);
      scene.add(cube);

      //camera
      camera.position.set(76, 0, 70);
      this.animate();

      //controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(75, 0, 0)
      controls.update()
    },
    animate() {
      requestAnimationFrame(this.animate);
      renderer.render(scene, camera);
      window.addEventListener("resize", this.resize)
    },
    resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    initGsap() {
      return this.$gsap.timeline({
                                   scrollTrigger: {
                                     scroller           : "#wrapper",
                                     trigger            : "section.hero",
                                     invalidateOnRefresh: true,
                                     preventOverlaps    : true,
                                     fastScrollEnd      : true,
                                     pin                : true,
                                     scrub              : 7,
                                     start              : "top",
                                     end                : "bottom",
                                     toggleActions      : 'restart none reverse none',
                                   }
                                 })
          .fromTo(camera.position, {
                    x: 76,
                    y: 0,
                    z: 70,
                  },
                  {
                    duration: 15,
                    x       : 10,
                    y       : -30,
                    z       : 50,
                  }, 'a')
          .to(camera.position, {
            duration: 15,
            x       : 40,
            y       : -30,
            z       : 50,
          })
          .to(camera.position, {
            duration: 15,
            x       : 80,
            y       : -30,
            z       : 50,
          })
          .to(camera.position, {
            duration: 15,
            x       : 120,
            y       : -30,
            z       : 50,
          })
          .to(camera.position, {
            duration: 15,
            x       : 76,
            y       : -30,
            z       : 100,
          })
          .to(camera.position, {
            duration: 15,
            x       : 65,
            y       : -30,
            z       : 0,
          })
          .fromTo('.hero', {
                    zIndex : 2,
                    opacity: 1,
                    filter : 'blur(0px)'
                  },
                  {
                    zIndex  : 1,
                    duration: 8,
                    opacity : 0,
                    filter  : 'blur(10px)'
                  }, '-=2');

    },
    initMGsap() {
      return this.$gsap.timeline({
                                   scrollTrigger: {
                                     scroller           : "#wrapper",
                                     trigger            : "section.hero",
                                     invalidateOnRefresh: true,
                                     preventOverlaps    : true,
                                     fastScrollEnd      : true,
                                     pin                : true,
                                     scrub              : 7,
                                     start              : "top",
                                     end                : "bottom",
                                     toggleActions      : 'restart none reverse none',
                                   }
                                 })
          .fromTo(camera.position, {
                    x: 76,
                    y: 0,
                    z: 70,
                  },
                  {
                    duration: 15,
                    x       : 10,
                    y       : -30,
                    z       : 60,
                  }, 'a')
          .to(camera.position, {
            duration: 15,
            x       : 60,
            y       : -30,
            z       : 60,
          })
          .to(camera.position, {
            duration: 15,
            x       : 90,
            y       : -30,
            z       : 60,
          })
          .to(camera.position, {
            duration: 15,
            x       : 130,
            y       : -30,
            z       : 60,
          })
          .to(camera.position, {
            duration: 15,
            x       : 76,
            y       : -30,
            z       : 200,
          })
          .to(camera.position, {
            duration: 15,
            x       : 65,
            y       : -30,
            z       : 0,
          })
          .fromTo('.hero', {
                    zIndex : 2,
                    opacity: 1,
                    filter : 'blur(0px)'
                  },
                  {
                    zIndex  : 1,
                    duration: 8,
                    opacity : 0,
                    filter  : 'blur(10px)'
                  }, '-=2');
    },
    setGsap() {
      let media = this.$gsap.matchMedia()
      media.add('(min-width: 1025px)', () => {
        if (this.timeline) {
          this.timeline.kill()
          this.timeline = null
        }
        this.timeline = this.initGsap()
        return () => {
          if (this.timeline) {
            this.timeline.kill()
            this.timeline = null
          }
        }
      }).add('(max-width: 1024px)', () => {
        if (this.timeline) {
          this.timeline.kill()
          this.timeline = null
        }
        this.timeline = this.initMGsap()
        return () => {
          if (this.timeline) {
            this.timeline.kill()
            this.timeline = null
          }
        }
      })
      this.$scrollTrigger.refresh()
    },
  },
}

</script>

<style scoped lang="scss">
.hero::v-deep {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  .noise-bg {
    z-index: 2;
  }

  .text-model {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .main-title {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: 50px;
    font-size: 7.813vw; //150px;
    mix-blend-mode: difference;
    color: #fff;
    font-weight: 700;
    line-height: 7.813vw; //150px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media screen and(max-width: 1024px) {
      font-size: 50px;
      line-height: 50px;
      padding-top: 0;
    }
  }

  .scroll {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 50px;
    font-size: 1.113vw;
    mix-blend-mode: difference;
    color: #fff;
    font-weight: 500;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-end;
    align-items: flex-end;

    @media screen and(max-width: 1024px) {
      font-size: 12px;
    }

    .scroll-downs {
      width: 34px;
      height: 55px;
    }

    .mousey {
      width: 3px;
      padding: 5px 12px;
      height: 35px;
      border: 2px solid #fff;
      border-radius: 25px;
      opacity: 0.75;
      box-sizing: content-box;
    }

    .scroller {
      width: 3px;
      height: 10px;
      border-radius: 25%;
      background-color: #fff;
      animation-name: scroll;
      animation-duration: 2.2s;
      animation-timing-function: cubic-bezier(.15, .41, .69, .94);
      animation-iteration-count: infinite;
    }
  }

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }

}

</style>