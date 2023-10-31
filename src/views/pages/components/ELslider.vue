<template>
  <div class="slide-wrapper"
       ref="slideWrapper"
  >
<!--  기조코드-->
<!--    -->
<!--    -->
    <!-- slider   -->
    <swiper
        class="swiper"
        :options="swiperOption"
        ref="swiper"
        @slideChange="onSwipe"
    >
      <swiper-slide
          v-for="(img, index) in localImages"
          :key="index"
      >
        <router-link
            tag="a"
            :to="`/portfolios/${img.id}`"
        >
          <!--          가운데 박스 이미지-->
          <img :src="img.thumbnail_image"
               alt="img"
               ref="slideImg"
               class="slide-img">
        </router-link>
      </swiper-slide>
    </swiper>


<!--        <div-->
<!--            class="swiper"-->
<!--            :options="swiperOption"-->
<!--            ref="swiper"-->
<!--            @slideChange="onSwipe"-->
<!--        >-->
<!--          <div-->
<!--              v-for="(img, index) in localImages"-->
<!--              :key="index"-->
<!--          >-->
<!--            <router-link-->
<!--                tag="a"-->
<!--                :to="`/portfolios/${img.id}`"-->
<!--            >-->
<!--              가운데 박스 이미지-->
<!--              <img :src="img.thumbnail_image"-->
<!--                   alt="img"-->
<!--                   ref="slideImg"-->
<!--                   class="slide-img">-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->

    <!-- descrition   -->
    <div class="desc">
      <div class="title">
        <div class="length">
          {{ localIndex + 1 }} / {{ localImages.length }}
        </div>
        <div class="w-full blex">
          이미지 클릭 시, 상세 페이지로 이동합니다.
        </div>
      </div>

      <!-- go to the portfolios page btn   -->
      <router-link
          to="/portfolios"
          tag="a"
          class="more-button portfolio">
        MORE +
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name : "ELslider",
  props: {
    images: {
      type   : Array,
      default: () => []
    }
  },
  watch: {
    images: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localImages = val
      }
    },
    currentIndex(val) {
      this.localIndex = val
      this.onMouseHover()
    }
  },
  data : () => ({
    currentIndex: 0,
    localIndex  : 0,
    localImages : [],
    swiperOption: {
      slidesPerView: 1,
      autoHeight   : true,
      speed        : 2500,
    },
    cursor      : null,
    subCursor   : null
  }),
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.onMouseHover()
      }, 200)
    })
  },

  methods: {
    onSwipe() {
      this.currentIndex = this.$refs.swipers.$swiper.activeIndex
      this.$emit("slideChange", this.currentIndex)
      // if (this.currentIndex > 0 && window.innerWidth < 1024) {
      //   window.locoScroll.stop()
      // }
      // else if (this.currentIndex === 0 && window.innerWidth < 1024) {
      //   window.locoScroll.start()
      // }
    },
    onMouseHover() {
      this.cursor = document.querySelector('.custom-cursor')
      this.subCursor = document.querySelector('.custom-cursor2')
      this.$refs.slideImg[this.localIndex].addEventListener('mouseover', () => {
        this.cursor.style.display = 'none'
        this.subCursor.classList.add('hovered')
      })
      this.$refs.slideImg[this.localIndex].addEventListener('mouseleave', () => {
        this.cursor.style.display = 'block'
        this.subCursor.classList.remove('hovered')
      })
    },
  },
  beforeDestroy() {
    this.cursor.style.display = 'block'
    this.subCursor.classList.remove('hovered')
  }
}
</script>

<style scoped lang="scss">
.slide-wrapper::v-deep {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .swiper-container {

    .swiper-wrapper {

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        .slide-img {
          width: 36.458vw; //700px;
          height: 20.833vw; //400px;
          object-fit: cover;
          transition: all .2s;

          @media screen and (max-width: 1024px) {
            width: 360px;
            height: 240px;
          }

          //&:hover {
          //  cursor: url("~@/assets/images/svg/drag.svg"), auto;
          //  transition: all .2s;
          //}

        }
      }
    }
  }

  .desc {
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 7.813vw; //150px;

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