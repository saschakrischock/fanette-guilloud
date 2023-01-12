<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 700,
    }
  },

  mounted() {
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM)
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false,
    })
    window.addEventListener('touchstart', this.touchStart, { passive: false })
    window.addEventListener('touchend', this.touchMove, { passive: false })

    this.calculateSectionOffsets()
  },

  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false,
    })
    window.removeEventListener('keydown', this.handleMouseWheelDOM)
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM)
    window.removeEventListener('touchstart', this.touchStart)
    window.removeEventListener('touchend', this.touchMove)
  },

  methods: {
    calculateSectionOffsets() {
      const sections = document.querySelectorAll('.section')

      sections.forEach((section) => {
        this.offsets.push(section.offsetTop)
      })

      this.scrollToSection(0, true)
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return

      this.activeSection = parseInt(id)

      document.querySelector('.fullpage').style.transform =
        'translate3d(0px, -' + this.offsets[id] + 'px, 0px)'

      setTimeout(() => {
        this.inMove = false
      }, 400)
    },

    handleMouseWheel(e) {
      const sensitivity = 100

      if (e.wheelDelta < -sensitivity && !this.inMove) {
        this.inMove = true
        this.moveUp()
      } else if (e.wheelDelta > sensitivity && !this.inMove) {
        this.inMove = true
        this.moveDown()
      }

      e.preventDefault()
      return
    },

    moveDown() {
      this.activeSection--

      if (this.activeSection < 0) {
        this.activeSection = 0
        this.inMove = false

        return
      }

      this.scrollToSection(this.activeSection, true)
    },

    moveUp() {
      this.activeSection++

      if (this.activeSection > this.offsets.length)
        this.activeSection = this.offsets.length - 1

      if (this.activeSection > this.offsets.length - 1) {
        this.inMove = false
        return
      }

      this.scrollToSection(this.activeSection, true)
    },

    touchStart(e) {
      e.preventDefault()

      if (e.target.classList.contains('indicator'))
        return this.scrollToSection(e.target.getAttribute('data-index'), true)

      if (e.target.tagName.toLowerCase() === 'a') return e.target.click()

      this.touchStartY = e.changedTouches[0].screenY
    },

    touchMove(e) {
      e.preventDefault()

      if (this.inMove) return

      const touchendY = e.changedTouches[0].screenY
      if (touchendY === this.touchStartY) return

      if (e.target.classList.contains('indicator')) return

      this.inMove = true
      if (this.touchStartY < touchendY) {
        this.moveDown()
      } else {
        this.moveUp()
      }

      this.touchStartY = 0
      return
    },
  },
})
</script>

<template>
  <div class="fullpage">
    <li v-for="(album, index) in albums" :key="index" class="section">
      <NuxtLink :to="`/${album.id}`">
        <img
          :src="album?.cover?.resized?.url ?? album?.images?.[0]?.resized?.url"
          :alt="album?.cover?.alt ?? album?.images?.[0]?.alt"
        />
      </NuxtLink>
    </li>
  </div>
</template>

<style scoped>
.fullpage {
  width: 100%;
  display: none;
  transition: all 0.7s ease-in;
}

.section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

@media screen and (max-width: 768px) {
  .fullpage {
    display: flex;
    flex-direction: column;
  }
}
</style>
