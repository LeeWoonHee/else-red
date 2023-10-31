<template>
  <div ref="app" id="app" @keypress="keypress">
    <the-nav ref="nav"/>
    <router-view
        @router-mounted="load"/>
    <!-- mouse cursor   -->
    <div class="custom-cursor"></div>
    <div class="custom-cursor2"></div>
  </div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
import TheNav from '@/views/components/TheNav.vue'
import { EventBus } from './EventBus'
import _ from 'lodash'

export default {
  components: {
    TheNav
  },
  data      : () => ({
    isNavLoaded: false
  }),
  methods   : {
    load() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${ vh }px`)
      document.documentElement.style.setProperty('--vh-raw', `${ vh }`)
      this.handleCursor()
      if (window.locoScroll || !this.isNavLoaded) {
        this.$refs['nav'].handleNav()
      }
      else {
        this.isNavLoaded = true
      }
    },
    keypress(e) {
      EventBus.$emit('keypress', e)
    },
    handleWindowResize() {
      this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
      document.documentElement.style.setProperty('--vh', `${ window.innerHeight * 0.01 }px`)
      document.documentElement.style.setProperty('--vh-raw', `${ window.innerHeight * 0.01 }`)
    },
    handleScroll() {
      this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
    },
    handleCursor() {
      var cursor = document.querySelector('.custom-cursor')
      var cursorinner = document.querySelector('.custom-cursor2')
      document.addEventListener('mousemove', (e) => {
        var x = e.clientX
        var y = e.clientY
        cursor.style.transform = `translate3d(calc(${ e.clientX }px - 50%), calc(${ e.clientY }px - 50%), 0)`
      })
      document.addEventListener('mousemove', (e) => {
        var x = e.clientX
        var y = e.clientY
        cursorinner.style.left = x + 'px'
        cursorinner.style.top = y + 'px'
      })
      document.addEventListener('mousedown', () => {
        cursor.classList.add('click')
        cursorinner.classList.add('cursor-inner-hover')
      })
      document.addEventListener('mouseup', () => {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursor-inner-hover')
      })
    }
  },
  async created() {
    const dir = this.$vs.rtl ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    window.addEventListener('resize', this.handleWindowResize)
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>