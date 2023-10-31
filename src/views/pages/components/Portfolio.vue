<template>
  <div
      ref="elSlider"
      class="portfolio"
  >



<!--    기존코드-->
<!--        &lt;!&ndash; noise-bg   &ndash;&gt;-->
<!--        <div class="noise-bg"></div>-->

<!--        &lt;!&ndash; wave   &ndash;&gt;-->
<!--        <wave/>-->

<!--        &lt;!&ndash; flag &ndash;&gt;-->
<!--    &lt;!&ndash;    뒷배경 이미지&ndash;&gt;-->
<!--        <flag-->
<!--            :current-index="currentIndex"-->
<!--            :links="links"-->
<!--        />-->
<!--        &lt;!&ndash; slider &ndash;&gt;-->
<!--        <e-lslider-->
<!--            :images="links"-->
<!--        />-->
<!--     noise-bg   -->
    <div class="noise-bg"></div>

    <!-- wave   -->

    <wave/>

    <div class="portfolio-slide-wrap" >

      <div
          class="portfolio-slide"
      >

        <div
            v-if="links"
            class="flag-wrapper-a"
        >

          <div
              class="flag"
          >
            <img
                class="flag-image"
                :src="links[0].thumbnail_image"
                alt=""
            />
          </div>
        </div>

        <div
            class="slide-wrapper-a"
        >
          <div
              class="swiper"
          >
            <div
            >
              <router-link
                  tag="a"
                  :to="`/portfolios/${links[0].id}`"
                  @click.native="$router.push(`/portfolios/${links[0].id}`).then(()=>{$router.go()})"
              >
                <!--          가운데 박스 이미지-->
                <img
                    :src="links[0].thumbnail_image"
                    alt="img"
                    ref="slideImg"
                    class="slide-img"
                >
              </router-link>
            </div>
          </div>

        </div>


        <div
            v-if="links"
            class="flag-wrapper-b"
        >

          <div
              class="flag"
          >
            <img
                class="flag-image"
                :src="links[1].thumbnail_image"
                alt=""
            />
          </div>
        </div>

        <div
            class="slide-wrapper-b"
        >
          <div
              class="swiper"
          >
            <div
            >
              <router-link
                  tag="a"
                  :to="`/portfolios/${links[1].id}`"
              >
                <!--          가운데 박스 이미지-->
                <img
                    :src="links[1].thumbnail_image"
                    alt="img"
                    ref="slideImg"
                    class="slide-img"
                >
              </router-link>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- background image -->
    <!-- flag -->
<!--    <div class="portfolio-slide-wrap" >-->

<!--      <div-->
<!--          class="portfolio-slide"-->
<!--          v-for="(img, index) in links"-->
<!--          :key="index"-->
<!--      >-->

<!--        <div-->
<!--            v-if="links"-->
<!--            class="flag-wrapper"-->
<!--        >-->

<!--          <div-->
<!--              class="flag"-->
<!--          >-->
<!--            <img-->
<!--                class="flag-image"-->
<!--                :src="img.thumbnail_image"-->
<!--                alt=""-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->


<!--        &lt;!&ndash;   center image box&ndash;&gt;-->


<!--        <div-->
<!--            class="slide-wrapper"-->
<!--        >-->
<!--          <div-->
<!--              class="swiper"-->
<!--          >-->
<!--            <div-->
<!--            >-->
<!--              <router-link-->
<!--                  tag="a"-->
<!--                  :to="`/portfolios/${img.id}`"-->
<!--              >-->
<!--                &lt;!&ndash;          가운데 박스 이미지&ndash;&gt;-->
<!--                <img-->
<!--                    :src="img.thumbnail_image"-->
<!--                    alt="img"-->
<!--                    ref="slideImg"-->
<!--                    class="slide-img"-->
<!--                >-->
<!--              </router-link>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--      </div>-->
<!--    </div>-->
    <!-- descrition   -->

    <!-- flag -->
    <!--    뒷배경 이미지-->


    <!--        <flag-->
    <!--            :current-index="currentIndex"-->
    <!--            :links="links"-->
    <!--        />-->
    <!--         slider -->
    <!--        <e-lslider-->
    <!--            :images="links"-->
    <!--        />-->

  </div>
</template>

<script>
import Wave from "@/views/pages/components/Wave.vue"
import Flag from "@/views/pages/components/Flag.vue"
import ELslider from "@/views/pages/components/ELslider.vue"

export default {
  name: "Portfolio",
  components: {
    Wave,
    Flag,
    ELslider
  },
  watch: {
    currentIndex( val ) {
      this.localIndex = val
    }
  },
  data: () => ( {
    localIndex: 0,
    currentIndex: 0,
    load: false,
    links: [
      {
        id: 6,
        thumbnail_image: require( '@/assets/images/pages/portfolio/5.png' )
      },
      {
        id: 2,
        thumbnail_image: require( '@/assets/images/pages/portfolio/1.png' )
      },
      {
        id: 1,
        thumbnail_image: require( '@/assets/images/pages/portfolio/6.png' )
      },
      {
        id: 5,
        thumbnail_image: require( '@/assets/images/pages/portfolio/4.png' )
      },
    ]
  } ),
  methods: {
    slideChange( index ) {
      this.currentIndex = index
    },
    initGsap() {
      return this.$gsap.timeline( {
        scrollTrigger: {
          invalidateOnRefresh: true,
          scroller: "#wrapper",
          trigger: "section.portfolio",
          scrub: true,
          start: "bottom",
          end: "2000%",
          pin: true,
          preventOverlaps: true,
          fastScrollEnd: true,
          toggleActions: 'restart none reverse none',
        }
      } )
          .fromTo('.slide-wrapper-b', {
                xPercent:200
              },
              {
                duration:10,
                xPercent:200
              })
          .fromTo('.flag-wrapper-b', {
                xPercent:200
              },
              {
                duration:10,
                xPercent:200
              })
          .fromTo('.slide-wrapper-a', {
            x: 0
          },
              {
            duration:3,
                x:0
          })
          .fromTo('.flag-wrapper-a', {
                x: 0
              },
              {
                duration:3,
                x:-0
              })
          .fromTo('.slide-wrapper-a', {
                xPercent: 0
              },
              {
                duration:10,
                xPercent:-200
              },'-=1')
          .fromTo('.flag-wrapper-a', {
                xPercent: 0
              },
              {
                duration:10,
                xPercent:-200
              },'-=1')
    }
  },

  mounted() {
    this.initGsap()
    this.load = true
  },
  // created() {
  //   this.$http.get('https://web.else.blue/api/portfolios').then((res) => {
  //     this.links = res.data
  //   }).catch(() => {
  //   })
  // },
  beforeDestroy() {
    this.load = false
  },
}
</script>

<style
    scoped
    lang="scss"
>
.portfolio::v-deep {
  position: absolute;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
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
  .noise-bg {
    z-index: 3;
  }
  .portfolio-slide-wrap{
    width:100%;
    height:100%;
  }
  //.portfolio-slide-b {
  //  position:absolute;
  //  width:100%;
  //  height:100%;
  //  right:100%;
  //  top:0;
  //  display: flex;
  //  flex-wrap: wrap;
  //  justify-content: center;
  //  align-items: center;
  //
  //
  //
  //  .slide-wrapper{
  //    position:absolute;
  //    z-index:999;
  //  }
  //  .flag-wrapper{
  //    width:100%;
  //
  //    .flag{
  //      .flag-image{
  //        width:100%;
  //        height:100%;
  //      }
  //    }
  //  }
  //}
  .portfolio-slide {
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;



    .slide-wrapper-a,.slide-wrapper-b{
      position:absolute;
      z-index:999;
    }
    .flag-wrapper-a,.flag-wrapper-b{
      width:100%;

      .flag{
        .flag-image{
          width:100%;
          height:100%;
        }
      }
    }
  }
  .desc {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 7.813vw; //150px;

    z-index:999;

    @media screen and (max-height: 1024px) {
      bottom: 6vw;
    }
    @media screen and (max-height: 840px) {
      bottom: calc(var(--vh, 1vh) * 12);
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
      }
    }

    .more-button {
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

</style>
