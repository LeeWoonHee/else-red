<template>
  <section
      v-if="localPortfolios"
      class="portfolio-page" ref="portolioShowPage"
  >

    <div
        class="portfolio-container"
        :key="localPortfolios.id"
    >

      <div class="title-section">
        <img
            class="thumbnail-image"
            :src="localPortfolios.thumbnail_image"
            alt="thumbnail-image"
        />
        <div class="title-section-container">

          <!-- back to list-->
          <div class="back-to-list blex-left w-full ">
            <router-link
                to="/portfolios"
                @click.native="$router.push('/portfolios').then(()=>{$router.go()}).catch(()=>{$window.location.reload()})"
            >
              <img
                  src="@/assets/images/back-to-list-arrow.png"
                  alt="arrow"
              />
              <p>BACK TO LIST.</p>
            </router-link>
          </div>


          <div
              class="text-box"
          >
            <div class="title">{{ localPortfolios.title }}</div>
            <div class="category">{{ localPortfolios.category }}</div>

            <div class="link-box">
              <div class="client-title">Client</div>
              <div class="client-name"> {{ localPortfolios.client_name }}</div>
              <div class="client-link">Link</div>
              <div class="link">
                <a
                    :href="localPortfolios.link"
                    target="_blank"
                >
                  {{ portfolios.link }}
                </a>
              </div>
            </div>

            <div class="overview-box ">
              <div class="overview-title">
                OVERVIEW
              </div>
              <div class="description">
                {{ localPortfolios.description || '-' }}
              </div>
            </div>

          </div>


        </div>
      </div>

      <div class="portfolio-image">
        <div
            class="w-full blex "
            v-html="localPortfolios.content"
        ></div>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  name : "show",
  props: {
    id: {
      type   : [ Array, String ],
      default: null,
    },
  },
  watch: {
    portfolios: {
      deep     : true,
      immediate: true,
      handler(val) {
        this.localPortfolios = val
      },
    },
  },
  data : () => ({
    portfolios     : null,
    localPortfolios: null,
    isChecked      : false,
    loading        : false,
  }),
  mounted() {
    this.$http.get(`https://web.else.blue/api/portfolios/${ this.id }`)
        .then((res) => {
          this.portfolios = res.data
          this.$emit('router-mounted')
        })
        .catch(() => {
        })
  },
}
</script>

<style
    scoped
    lang="scss"
>
.portfolio-page::v-deep {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #000000;

  .portfolio-container {
    width: 100%;
    //height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;

    .title-section {
      width: 100%;
      height: calc(var(--vh, 1vh) * 100);
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;

      .thumbnail-image {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        object-fit: cover;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        z-index: 1;
      }

      .title-section-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        padding: 100px 0;
        width: 80%;
        z-index: 2;

        .back-to-list {
          height: 100%;
          align-items: center;

          a {
            display: flex;
            align-items: center;

            img {
              width: 5px;
              height: 12px;
              margin-right: 12px;
            }

            p {
              line-height: 100%;
              font-size: 20px;
              font-weight: 600;
              align-items: center;
              color: #fff;
            }
          }
        }

        .text-box {
          margin-top: 81px;

          .title {
            font-size: 60px;
            font-weight: 600;
            letter-spacing: -0.02em;
            color: #fff;
            @media (max-width: 768px) {
              font-size: 28px;
            }
          }

          .category {
            color: #fff;
            font-size: 40px;
            font-weight: 500;
            letter-spacing: -0.02em;
            margin-top: 11px;
            @media (max-width: 768px) {
              font-size: 28px;
            }
          }

          .link-box {
            margin-top: 40px;
            font-size: 16px;
            color: #fff;

            .client-title {
              font-weight: 700;
            }

            .client-name {
              margin-top: 4px;
              font-weight: 400;
            }

            .client-link {
              margin-top: 17px;
              font-weight: 700;
            }

            .link {
              margin-top: 4px;
              font-weight: 400;

              a {
                color: #fff;
                transition: all 0.4s ease-in-out;

                &:hover {
                  color: #b20000;
                }
              }
            }
          }

          .overview-box {
            margin-top: 60px;
            color: #fff;
            width: 100%;
            word-break: keep-all;

            .overview-title {
              padding-bottom: 20px;
              letter-spacing: -0.02em;
              font-weight: 600;
              position: relative;

              &::after {
                content: '';
                display: block;
                width: 15%;
                height: 1px;
                background: #D0D0D0;
                bottom: 0;
                position: absolute;
              }

            }

            .description {
              font-weight: 400;
              margin-top: 28px;
            }
          }


        }
      }


    }

    .portfolio-image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;

      p {
        width: 100%;
        height: 100%;

        img {
          height: 100%;
          width: 100%;
        }

      }
    }
  }
}
</style>