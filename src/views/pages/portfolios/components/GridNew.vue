<template>
  <div
      v-if="portfolios"
      class="grid">

    <div class="w-full lg:w-7/10 blex px-8 lg:px-0">

      <!--  main title    -->
      <div class="w-full blex-left">
        <div class="title">
          PORTFOLIO.
        </div>
        <div class="sub-title">
          ELSE PORTFOLIOS
        </div>
      </div>
      <!--  portfolios    -->
      <div class="w-full blex justify-between lg:justify-start">
        <router-link
            v-for="(item, index) in portfolios"
            :to="`/portfolios/${item.id}`"
            class="w-1/2 lg:w-1/3 blex mb-12 lg:mb-20 lg:mr-0 px-2">
          <!--   thumbnail       -->
          <div class="thumbnail">
            <img :src="item.thumbnail_image || require('@/assets/images/1.jpg')" alt="" class="w-full blex">
          </div>
          <!--   title, category       -->
          <div class="blex-left w-full">
            <div class="pf-title">
              {{ item.title || '-' }}
            </div>
            <div class="pf-category">
              {{ item.category || '-' }}
            </div>
          </div>
        </router-link>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name : "GridNew",
  props: {
    portfolios: {
      type   : Array,
      default: () => []
    }
  },
  mounted() {

  },
}
</script>

<style
    scoped
    lang="scss"
>
.grid::v-deep {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 10.417vw; //200px;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }

  .title {
    width: 100%;
    color: #C0C0C0;
    margin-bottom: 2px;
    font-size: 1.042vw; //20px;
    font-weight: 600;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  .sub-title {
    color: #fff;
    padding-bottom: 15px;
    font-size: 2.604vw; //50px;
    font-weight: 500;
    margin-bottom: 44px;
    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }

  .thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 20.990vw; //403px;
    height: 15.625vw; //300px;

    @media (max-width: 1024px) {
      width: 160px;
      height: 112px;
    }
  }

  .pf-title {
    font-size: 1.042vw; //20px;
    font-weight: 600;
    width: 100%;
    color: #ffffff;
  }

  .pf-category {
    font-size: 0.833vw; //16px;
    font-weight: 500;
    width: 100%;
    color: #ffffff;
  }

}
</style>