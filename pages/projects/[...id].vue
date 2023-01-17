<script setup lang="ts">
const checked = ref(false)

function goToPrev() {
  window.history.length > 1 ? useRouter().go(-1) : useRouter().push('/')
}

function checkFunction(value: any) {
  checked.value = !checked.value
}

useHead({
  bodyAttrs: {
    class: 'single-project',
  },
  meta: [
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
})

const { data } = await useKql({
  query: `page("${useRoute().path}")`,
  isProject: true,
  select: {
    id: true,
    title: true,
    // description: true,
    subheadline: true,
    text: true,
    description: true,
    isProject: true,
    gallery: {
      query: 'page.images.sortBy("sort", "filename")',
      select: {
        resized: {
          query: 'file.resize(800)',
          select: ['url'],
        },
        width: true,
        height: true,
        url: true,
        alt: true,
      },
    },
  },
})

// Set the current page data for the global page context
const page = setPage(() => data.value?.result)
</script>

<template>
  <article>
    <div class="single-project__text">
      <h1>
        {{ page.title
        }}<span v-if="page.subheadline">, {{ page.subheadline }}</span>
      </h1>
      <div v-html="page?.text" />

      <div class="credits">
        <div
          v-if="page?.description"
          :class="{ active: checked }"
          class="credits__toogle"
          @click="checkFunction"
        >
          <span class="plus">+</span><span class="minus">—</span> credits
        </div>
        <div v-if="checked" class="credits__content">
          Producer Raoul Winter<br />
          Art Director Max Mustermann<br />
          Producer Miriam Jakobi
        </div>
      </div>
    </div>

    <div class="column" style="--columns: 8">
      <Swiper
        v-if="$device.isMobile"
        :modules="[SwiperNavigation]"
        :slides-per-view="1"
        :loop="true"
        :touch-events-target="'container'"
        navigation
      >
        <SwiperSlide v-for="(image, index) in page?.gallery ?? []" :key="index">
          <img :src="image?.resized?.url" :alt="image.alt" />
        </SwiperSlide>
      </Swiper>
      <ul v-if="$device.isDesktop" class="album-gallery">
        <li v-for="(image, index) in page?.gallery ?? []" :key="index">
          <img :src="image?.resized?.url" :alt="image.alt" />
        </li>
      </ul>
    </div>
    <div v-if="$device.isMobile" class="close" @click="goToPrev">close</div>
  </article>
</template>

<style scoped>
h1 {
  font-weight: bold;
  margin-bottom: 1rem;
}

h1 span {
  font-weight: 400 !important;
}

.swiper,
.swiper-container {
  height: 100%;
}

.swiper-slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide img {
  width: calc(100vw - 2.5rem);
}

.swiper-button-next {
  width: 50vw;
  position: absolute;
  top: 0;
  height: 100%;
}

.swiper-button-next:after {
  display: none;
}

.swiper-button-prev {
  width: 50vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.swiper-button-prev:after {
  display: none;
}
.credits {
  margin-top: 1rem;
}

.credits__content {
  margin-left: 1rem;
}

.credits__toogle {
  cursor: pointer;
  display: flex;
}

.credits__no__toogle {
  display: flex;
}

.credits__toogle.active {
  filter: blur(1px);
}

.single-project__text {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36rem;
  background-color: #fff;
}
.album-gallery {
  line-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.1rem;
}

.album-gallery li {
  position: relative;
}

.album-gallery li a {
  position: relative;
}

.close {
  position: absolute;
  padding-bottom: 1.25rem;
  bottom: 0;
  width: 100vw;
  z-index: 2;
  text-align: center;
}
.album-gallery a:after {
  content: '';
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
  z-index: 1;
}

.album-gallery a:hover:after {
  backdrop-filter: blur(0.2rem);
}

.album-gallery li {
  display: block;
  aspect-ratio: 534/658;
  background-color: #000;
  break-inside: avoid;
}
@media screen and (min-width: 60rem) {
  .album-gallery {
    columns: 2;
  }
}
.page-enter-from {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
