<template>
  <main
      v-if="load"
      class="home"
  >
    <!-- hero section  --->
    <section class="hero">

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
          class="scroll"
      >
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
        <div class="w-full blex pt-2">
          SCROLL DOWN
        </div>
      </div>

    </section>

    <!--  portfolio section  -->
    <section
        v-if="links"
        ref="elSlider"
        class="portfolio">

      <!-- water wave 3d  -->
      <wave class="wave"/>


      <!-- image flag 3d     -->
      <div class="flag-wrapper">
        <flag
            :links="links"
            :current-index="slideIndex"
        />
      </div>


      <!-- portfolio list     -->
      <div class="portfolio-slide-list"
           v-for="(link, index) in links"
           :key="index">

        <div :class="`slide-wrapper-${index + 1}`">
          <!--          <router-link-->
          <!--              tag="a"-->
          <!--              :to="`/portfolios/${links[index].id}`"-->
          <!--              @click.native="$router.push(`/portfolios/${links[index].id}`).then(()=>{$router.go()})">-->
          <!--            <img-->
          <!--                :src="links[index].thumbnail_image"-->
          <!--                alt="img"-->
          <!--                ref="slideImg"-->
          <!--                class="slide-img"-->
          <!--            >-->
          <!--          </router-link>-->
          <!--  !! router-link 이용하여 썸네일 클릭 -> 뒤로 가기 -> 다시 썸네일 클릭 시, show page 안보이는 이슈 임시 방편 !!       -->
          <a :href="`/portfolios/${links[index].id}`">
            <!--          가운데 박스 이미지-->
            <img
                :src="links[index].thumbnail_image"
                alt="img"
                ref="slideImg"
                class="slide-img"
            >
          </a>
        </div>
      </div>


      <!-- descrition / more button   -->
      <div class="desc">
        <div class="title">
          <div class="length">
            {{ slideIndex + 1 }} / {{ links.length }}
          </div>
          <div class="w-full blex">
            이미지 클릭 시, 상세 페이지로 이동합니다.
          </div>
        </div>

        <!-- go to the portfolios page btn   -->
        <router-link
            to="/portfolios"
            tag="a"
            class="more-button portfolio"
            @click.native="$router.push('/portfolios').then(()=>{$router.go()})"
        >
          MORE +
        </router-link>
      </div>

    </section>

  </main>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Fog from "@/views/pages/components/Fog.vue"
import Wave from "@/views/pages/components/Wave.vue"
import Flag from "@/views/pages/components/Flag.vue"

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
    controls
export default {
  name      : 'home',
  components: {
    Fog,
    Wave,
    Flag
  },
  data      : () => ({
    load      : false,
    slideIndex: 0,
    links     : [
      {
        id             : 6,
        thumbnail_image: require('@/assets/images/pages/portfolio/5.png')
      },
      {
        id             : 2,
        thumbnail_image: require('@/assets/images/pages/portfolio/1.png')
      },
      {
        id             : 1,
        thumbnail_image: require('@/assets/images/pages/portfolio/6.png')
      },
      {
        id             : 5,
        thumbnail_image: require('@/assets/images/pages/portfolio/4.png')
      },
    ]
  }),
  beforeDestroy() {
    this.load = false
    this.timeline.kill()
  },
  mounted() {
    this.load = true
    this.$emit('router-mounted')
    this.$nextTick(() => {
      this.init()
      this.setGsap()
      this.onMouseHover()
    })
  },
  methods: {
    init() {
      container = document.querySelector(".text-model")
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({
                                           antialias: true
                                         })
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)

      //fog
      scene.fog = new THREE.Fog(0xffffff, 10, 200)
      scene.background = new THREE.Color(0x1e1e1e)

      //fonts
      loader = new THREE.FontLoader()
      font = loader.parse(require('@/assets/fonts/suitHeavy.json'))

      //light
      light = new THREE.PointLight(0xffffff, .5)
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
                                             })

      cube = new THREE.Mesh(geometry, material)
      cube.position.set(2, -55, 8);
      scene.add(cube);

      //camera
      camera.position.set(76, 0, 70);
      this.animate();

      //controls
      controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(75, 0, 0)
      controls.update()
    },
    animate() {
      requestAnimationFrame(this.animate)
      renderer.render(scene, camera)
      window.addEventListener("resize", this.resize)
    },
    resize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    },
    initGsap() {
      return this.$gsap.timeline({
                                   scrollTrigger: {
                                     scroller       : "#wrapper",
                                     trigger        : "main.home",
                                     pin            : true,
                                     scrub          : true,
                                     start          : "top",
                                     end            : "1000%",
                                     preventOverlaps: true,
                                     fastScrollEnd  : true,
                                     toggleActions  : 'restart none reverse none',
                                   }
                                 })
          .fromTo(camera.position, {
                    x: 76,
                    y: 0,
                    z: 70,
                  },
                  {
                    duration: 7,
                    x       : 10,
                    y       : -30,
                    z       : 50,
                  })
          .to(camera.position, {
            duration: 7,
            x       : 40,
            y       : -30,
            z       : 50,
          })
          .to(camera.position, {
            duration: 7,
            x       : 80,
            y       : -30,
            z       : 50,
          })
          .to(camera.position, {
            duration: 7,
            x       : 120,
            y       : -30,
            z       : 50,
          })
          .to(camera.position, {
            duration: 7,
            x       : 76,
            y       : -30,
            z       : 100,
          })
          .to(camera.position, {
            duration: 7,
            x       : 65,
            y       : -30,
            z       : 0,
          })
          .fromTo('.hero', {
                    zIndex : 2,
                    opacity: 1,
                    filter : 'blur(0px)',
                  },
                  {
                    zIndex  : 1,
                    duration: 10,
                    opacity : 0,
                    filter  : 'blur(10px)',
                  })
          .fromTo('.flag-wrapper', {
                    opacity: 0,
                  },
                  {
                    duration: 5,
                    opacity : 1,
                  }, '-=1')
          .fromTo('.wave', {
                    opacity: 0,
                  },
                  {
                    duration: 5,
                    opacity : 1,
                  }, '-=1')
          .fromTo('.slide-wrapper-1', {
                    opacity: 0,
                  },
                  {
                    duration: 6,
                    opacity : 1,
                  })
          .fromTo('.desc', {
                    opacity: 0,
                  },
                  {
                    duration: 6,
                    opacity : 1
                  }, '-=1')
          .to('.slide-wrapper-1', {
            duration: 6,
            xPercent: -200,
          })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 0,
          })
          .to('.wave', {
            duration: 6,
            opacity : 0,
            onUpdate: () => {
              this.slideIndex = 0
            },
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 0,
          }, '-=2.5')
          .fromTo('.slide-wrapper-2', {
                    xPercent: 300,
                  },
                  {
                    duration: 6,
                    xPercent: 0,
                  })
          .to('.flag-wrapper', {
            onUpdate: () => {
              this.slideIndex = 1
            },
            duration: 6,
            opacity : 1,
          })
          .to('.wave', {
            duration: 6,
            opacity : 1,
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 1,
          }, '-=2.5')
          .to('.slide-wrapper-2', {
            duration: 6,
            xPercent: -300,
          })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 0,
          })
          .to('.wave', {
            duration: 6,
            opacity : 0,
            onUpdate: () => {
              this.slideIndex = 1
            },
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 0,
          }, '-=2.5')
          .fromTo('.slide-wrapper-3', {
                    xPercent: 300,
                  },
                  {
                    duration: 6,
                    xPercent: 0,
                  })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 1,
            onUpdate: () => {
              this.slideIndex = 2
            },
          })
          .to('.wave', {
            duration: 6,
            opacity : 1,
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 1,
          }, '-=2.5')
          .to('.slide-wrapper-3', {
            duration: 6,
            xPercent: -300,
          })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 0,
          })
          .to('.wave', {
            duration: 6,
            opacity : 0,
            onUpdate: () => {
              this.slideIndex = 2
            },
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 0,
          }, '-=2.5')
          .fromTo('.slide-wrapper-4', {
                    xPercent: 300,
                  },
                  {
                    duration: 6,
                    xPercent: 0
                  })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 1,
            onUpdate: () => {
              this.slideIndex = 3
            },
          })
          .to('.wave', {
            duration: 6,
            opacity : 1,
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 1,
          }, '-=2.5')

    },
    initMGsap() {
      return this.$gsap.timeline({
                                   scrollTrigger: {
                                     scroller       : "#wrapper",
                                     trigger        : "main.home",
                                     pin            : true,
                                     scrub          : true,
                                     start          : "top",
                                     end            : "1000%",
                                     preventOverlaps: true,
                                     fastScrollEnd  : true,
                                     toggleActions  : 'restart none reverse none',
                                   }
                                 })
          .fromTo(camera.position, {
                    x: 76,
                    y: 0,
                    z: 70,
                  },
                  {
                    duration: 10,
                    x       : 10,
                    y       : -30,
                    z       : 60,
                  })
          .to(camera.position, {
            duration: 10,
            x       : 60,
            y       : -30,
            z       : 60,
          })
          .to(camera.position, {
            duration: 10,
            x       : 90,
            y       : -30,
            z       : 60,
          })
          .to(camera.position, {
            duration: 10,
            x       : 130,
            y       : -30,
            z       : 60,
          })
          .to(camera.position, {
            duration: 10,
            x       : 76,
            y       : -30,
            z       : 200,
          })
          .to(camera.position, {
            duration: 10,
            x       : 65,
            y       : -30,
            z       : 0,
          })
          .fromTo('.hero', {
                    zIndex : 2,
                    opacity: 1,
                    filter : 'blur(0px)',
                  },
                  {
                    zIndex  : 1,
                    duration: 10,
                    opacity : 0,
                    filter  : 'blur(10px)',
                  })
          .fromTo('.flag-wrapper', {
                    opacity: 0,
                  },
                  {
                    duration: 5,
                    opacity : 1,
                  }, '-=1')
          .fromTo('.wave', {
                    opacity: 0,
                  },
                  {
                    duration: 5,
                    opacity : 1,
                  }, '-=1')
          .fromTo('.slide-wrapper-1', {
                    opacity: 0,
                  },
                  {
                    duration: 6,
                    opacity : 1,
                  })
          .fromTo('.desc', {
                    opacity: 0,
                  },
                  {
                    duration: 6,
                    opacity : 1
                  }, '-=1')
          .to('.slide-wrapper-1', {
            duration: 6,
            xPercent: -200,
          })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 0,
          })
          .to('.wave', {
            duration: 6,
            opacity : 0,
            onUpdate: () => {
              this.slideIndex = 0
            },
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 0,
          }, '-=2.5')
          .fromTo('.slide-wrapper-2', {
                    xPercent: 300,
                  },
                  {
                    duration: 6,
                    xPercent: 0,
                  })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 1,
            onUpdate: () => {
              this.slideIndex = 1
            },
          })
          .to('.wave', {
            duration: 6,
            opacity : 1,
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 1,
          }, '-=2.5')
          .to('.slide-wrapper-2', {
            duration: 6,
            xPercent: -300,
          })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 0,
          })
          .to('.wave', {
            duration: 6,
            opacity : 0,
            onUpdate: () => {
              this.slideIndex = 1
            },
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 0,
          }, '-=2.5')
          .fromTo('.slide-wrapper-3', {
                    xPercent: 300,
                  },
                  {
                    duration: 6,
                    xPercent: 0,
                  })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 1,
            onUpdate: () => {
              this.slideIndex = 2
            },
          })
          .to('.wave', {
            duration: 6,
            opacity : 1,
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 1,
          }, '-=2.5')
          .to('.slide-wrapper-3', {
            duration: 6,
            xPercent: -300,
          })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 0,
          })
          .to('.wave', {
            duration: 6,
            opacity : 0,
            onUpdate: () => {
              this.slideIndex = 2
            },
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 0,
          }, '-=2.5')
          .fromTo('.slide-wrapper-4', {
                    xPercent: 300,
                  },
                  {
                    duration: 6,
                    xPercent: 0
                  })
          .to('.flag-wrapper', {
            duration: 6,
            opacity : 1,
            onUpdate: () => {
              this.slideIndex = 3
            },
          })
          .to('.wave', {
            duration: 6,
            opacity : 1,
          }, '-=1')
          .to('.length', {
            duration: 6,
            opacity : 1,
          }, '-=2.5')

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
    changeIndex() {
      this.slideIndex = this.slideIndex + 1
      if (this.slideIndex > 3) {
        this.slideIndex = 0
      }
    },
    onMouseHover() {
      this.cursor = document.querySelector('.custom-cursor')
      this.subCursor = document.querySelector('.custom-cursor2')
      for (let i = 0; i < this.$refs.slideImg.length; i++) {
        this.$refs.slideImg[i].addEventListener('mouseover', () => {
          this.cursor.style.display = 'none'
          this.subCursor.classList.add('hovered')
        })
        this.$refs.slideImg[i].addEventListener('mouseleave', () => {
          this.cursor.style.display = 'block'
          this.subCursor.classList.remove('hovered')
        })
      }

    },
  }
}
</script>
<style
    scoped
    lang="scss"
>
.home::v-deep {
  width: 100%;
  position: relative;
  background-color: #000;
  overflow: hidden;


  .hero {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    //height:100%;
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

  .portfolio {
    position: absolute;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    //height:100%;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: #000;
    overflow: hidden;
    z-index: 1;

    .portfolio-slide-list {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .slide-wrapper-1,
      .slide-wrapper-2,
      .slide-wrapper-3,
      .slide-wrapper-4 {
        position: absolute;
        z-index: 2;
        width: 38%;
        @media screen and(max-width: 1024px) {
          width: 85%;
        }

        .slide-img {
          object-fit: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          z-index: 2;
        }
      }

      .flag-wrapper {
        position: absolute;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 1;
        overflow: hidden;
        @media screen and(max-width: 1024px) {
          width: calc(var(--vh, 1vh) * 100);
          height: calc(var(--vh, 1vh) * 100);
        }

      }
    }


    .desc {
      width: 100%;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10vh;
      z-index: 30;
      @media screen and (max-width: 1440px) {
        bottom: calc(var(--vh, 1vh) * 10);
      }
      @media screen and (max-width: 1024px) {
        bottom: calc(var(--vh, 1vh) * 20);
      }


      .title {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: #fff;
        padding-bottom: 1.042vw;

        @media screen and (max-width: 1024px) {
          padding-bottom: 1.042vw;
        }

        .length {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          position: absolute;
          top: -17px;
        }
      }

      .more-button {
        top: 100%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        width: 200px;
        height: 50px;
        background: #000;
        mix-blend-mode: difference;
        color: #fff;
        margin: 0 auto;

      }
    }
  }
}
</style>