<template>
  <div
      v-if="load"
      class="space-three"

  >

    <!-- room   -->
    <room
        v-if="currentIndex === 0 && $store.state.windowWidth > 1024"
        :portfolios="portfolios"
    />

    <!-- grid   -->
    <grid
        v-else
        :portfolios="portfolios"
    />

    <!-- toggle 버튼   -->
    <div class="toggle-button">

      <div
          @click="currentIndex = 0"
          class="toggle-title"
      >
        ROOM
      </div>

      <div
          @click="handleToggle"
          class="toggle">
        <div
            :class="currentIndex === 1 ? 'checked ' : ''"
            class="onf_btn"></div>
      </div>

      <div
          class="toggle-title"
          @click="currentIndex = 1"
      >
        GRID
      </div>

    </div>


  </div>
</template>

<script>
import Room from '@/views/pages/portfolios/components/Room.vue'
import Grid from '@/views/pages/portfolios/components/Grid.vue'

export default {
  name      : 'SpaceThree',
  components: {
    Room,
    Grid
  },
  watch     : {
    currentIndex() {
      this.$router.push(`/portfolios?index=${ this.currentIndex }`)
          .then(() => {
            if (this.load && this.currentIndex !== null) {
              setTimeout(() => {
                this.$window.location.reload()
              }, 160)
            }
          }).catch(() => {
      })

    }
  },
  data      : () => ({
    portfolios  : null,
    currentIndex: 0,
    load        : true
  }),
  methods   : {
    handleToggle() {
      this.currentIndex = this.currentIndex === 0 ? 1 : 0
    },
    backRefresh() {
      if (this.$router.currentRoute.fullPath === '/portfolios?index=0'
          && this.currentIndex === 0
          && this.load
          && !this.$refs.portfolios) {
        this.$nextTick(() => {
          location.href = document.referrer
        })
      }
    }
  },
  mounted() {
    if (this.$route.query.index) {
      this.currentIndex = parseInt(this.$route.query.index)
    }
    else {
      this.currentIndex = 0
    }
    this.$http.get('https://web.else.blue/api/portfolios')
        .then((res) => {
          this.portfolios = res.data
          this.$emit('router-mounted')
        })
        .finally(() => {
          if (this.load) {
            this.load = true
            this.$emit('router-mounted')
          }
          else {
            this.$nextTick(() => {
              this.$emit('router-mounted')
            })
          }
        })
  }
}
</script>

<style
    scoped
    lang="scss"
>


.space-three::v-deep {
  background: #000;
  width: 100%;
  height: 100vh;
  position: relative;

  .toggle-button {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 240px;
    height: 70px;
    background: #1E1E1E;
    display: flex;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      display: none;
    }

    &:hover {
      opacity: 1;
      transition: 1s;
    }

    .toggle-title {
      display: flex;
      align-items: center;
      align-content: center;
      font-size: 18px;
      font-weight: 400;
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
        transition: all .5s;

        &.checked {
          left: 24px;
          background: #fff;
          transition: all .5s;
        }

      }

    }
  }


  canvas {
    position: absolute !important;
    top: 0 !important;
    left: 0;
    width: 100%;
    height: 100%;

  }
}
</style>
