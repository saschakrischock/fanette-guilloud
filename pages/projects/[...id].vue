<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'single-project',
  },
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
      <div class="text" v-html="page?.text" />
    </div>

    <div class="column" style="--columns: 8">
      <ul class="album-gallery">
        <li v-for="(image, index) in page?.gallery ?? []" :key="index">
          <img :src="image?.resized?.url" :alt="image.alt" />
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.single-project__text {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 40rem;
}
.album-gallery {
  line-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.1rem;
}

.album-gallery li {
  display: block;
  aspect-ratio: 533/658;
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
