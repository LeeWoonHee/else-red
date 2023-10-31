<template>
  <div
      v-if="portfolios"
      class="portfolio-list"
      ref="gridSection"
  >

    <div class="portfolio-list-container">

      <!--  상단 타이틀   -->
      <div class="title-wrap">
        <h3 class="title w-full blex-left">PORFOLIO.</h3>
        <h1 class="sub-title w-full blex-left">ELSE PORTFOLIOS</h1>
      </div>

      <!--         포트폴리오 리스트   -->
      <div class="portfolio-wrapper"
           ref="scrollbar">
        <div class="portfolio-items">
          <div
              class="portfolio-content"
              v-for="(item, index) in portfolios"
          >
            <router-link
                :to="`/portfolios/${item.id}`"
                @click.native="$router.push(`/portfolios/${item.id}`)"
                class="portfolio-box"
            >
              <div class="portfolio-item">

                <div class="image-box">
                  <div class="image">
                    <img
                        :src="item.thumbnail_image || require('@/assets/images/1.jpg')"
                        alt="Portfolio Thumbnail"
                        class="w-full"
                    >
                  </div>
                </div>

                <div class="title-box">
                  <div class="w-full"> {{ item.title || '-' }}</div>
                  <div class="w-full"> {{ item.category || '-' }}</div>
                </div>

              </div>

            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name   : 'Grid',
  props  : {
    portfolios: {
      type   : Array,
      default: () => []
    }
  },
  methods: {
    load() {
      this.$emit('loading', true)
    },
  },
  mounted() {
    this.load()
  }
}
</script>
<style
    scoped
    lang="scss"
>
.portfolio-list::v-deep {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 200px;


  @media screen and (max-width: 1024px) {
    padding-bottom: 0;
  }


  .portfolio-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 67%;
    @media screen and (max-width: 1024px) {
      width: 80%;
      //margin-bottom: 50px;
    }

    .title-wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding-top: 100px; //7.813vw;
      @media screen and (max-width: 1024px) {
        padding-top: 30px;
      }

      .title {
        color: #C0C0C0;
        margin-bottom: 2px;
        font-size: 20px;
        font-weight: 600;
        @media screen and (max-width: 1024px) {
          font-size: 14px;
        }
      }

      .sub-title {
        color: #fff;
        padding-bottom: 15.5px;
        position: relative;
        font-size: 50px;
        font-weight: 500;
        margin-bottom: 44px;
        @media screen and (max-width: 1024px) {
          font-size: 30px;
        }

        &::before {
          content: "";
          display: block;
          width: 221px;
          height: 1px;
          background: #8E8E8E;
          position: absolute;
          bottom: 0;
        }
      }
    }

    .portfolio-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      width: 100%;
      overflow: scroll;
      height: 64vh;

      @media screen and (max-width: 1024px) {
        padding-bottom: 30px;
      }

      &::-webkit-scrollbar {
        width: 0;
      }

      .portfolio-items {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }

      .portfolio-content {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        margin-bottom: 60px;
        //padding-bottom:3%;
        @media screen and(max-width: 1024px) {
          width: 45%;
          margin-bottom: 30px;
        }

        .portfolio-box {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
          //margin-bottom: 30px;
          width: 100%;
          height: 100%;

          .portfolio-item {
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
            width: 100%;
            height: 100%;

            .image-box {
              overflow: hidden;
              width: 100%;
              height: 100%;
              @media screen and (max-width: 400px) {
                width: 90%;
              }

              &:hover {
                img {
                  transform: scale(1.1);
                }
              }

              .image {
                overflow: hidden;
                width: 100%;
                height: 100%;
                //max-width: 430px;
                img {
                  max-width: 430px;
                  max-height: 305px;
                  transition: all 0.6s;
                  //@media screen and (max-width: 1024px) {
                  //  width: 25vh;
                  //  height: 20vh;
                  //}
                  //@media screen and (max-width: 900px) {
                  //  width: 20vh;
                  //  height: 15vh;
                  //}
                }
              }
            }

            .title-box {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              align-content: center;
              color: #ffffff;
              margin-top: 15px;
              @media screen and (max-width: 500px) {
                flex-wrap: wrap;
                margin-top: 0;
              }

              div {
                display: flex;
                font-size: 20px;
                font-weight: 600;
                color: #fff;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                &:first-child {
                  width: 100%;
                }

                @media screen and (max-width: 1024px) {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }

    .toggle-button {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999;
      width: 259px;
      height: 92px;
      background: #1E1E1E;
      display: flex;
      text-align: center;
      align-items: center;
      align-content: center;
      justify-content: center;

      &:hover {
        opacity: 1;
        transition: 1s;
      }

      .toggle-title {
        display: flex;
        align-items: center;
        align-content: center;
        font-size: 18px;
        weight: 400;
        opacity: 0.5;
        color: #fff;
        height: 100%;
        background: #1E1E1E;
        border: none;

        &:hover {
          cursor: pointer;
          opacity: 1;
          transition: 1s;
        }
      }

      .toggle {
        position: relative;
        cursor: pointer;
        display: inline-block;
        background: #1E1E1E;
        border: 1px solid #fff;
        border-radius: 20px;
        width: 45px;
        height: 26px;
        text-align: center;
        align-items: center;
        margin: 0 16px;

        .onf_btn {
          position: absolute;
          top: 4px;
          left: 3px;
          display: inline-block;
          width: 16px;
          height: 16px;
          border-radius: 20px;
          background: #fff;
          transition: 0.4s;

          &.checked {
            left: 24px;
            background: #fff;
          }
        }
      }
    }
  }
}
</style>