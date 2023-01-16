<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'index',
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
          query: 'file.resize(200)',
          select: ['url'],
        },
        link: true,
        width: true,
        height: true,
        url: true,
        raw: true,
        alt: true,
      },
    },
  },
})

// Set the current page data for the global page context
const { data: photographyData } = await useKql({
  query: 'page("projects").children.listed',
  select: {
    id: true,
    title: true,
    cover: {
      query: 'page.content.cover.toFile',
      select: {
        resized: {
          query: 'file.resize(1024, 1024)',
          select: ['url'],
        },
        alt: true,
      },
    },
    image: {
      query: 'page.images.first',
      select: {
        resized: {
          query: 'file.resize(1024, 1024)',
          select: ['url'],
        },
        alt: true,
      },
    },
  },
})

const albums = computed(() => photographyData.value?.result ?? [])
const images = setPage(() => data.value?.result)
</script>

<template>
  <div>
    <!--
    <ul class="home-grid">
      <li v-for="(album, index) in albums" :key="index">
        <NuxtLink :to="`/${album.id}`">
          <img
            :src="
              album?.cover?.resized?.url ?? album?.images?.[0]?.resized?.url
            "
            :alt="album?.cover?.alt ?? album?.images?.[0]?.alt"
          />
        </NuxtLink>
      </li>
    </ul>-->
    <article>
      <div class="single-project__text">
        <div class="text" v-html="images?.text" />
      </div>

      <div class="column" style="--columns: 8">
        <ul class="album-gallery">
          <li v-for="(image, index) in images?.gallery ?? []" :key="index">
            <img
              v-if="!image.raw"
              :src="image?.resized?.url"
              :alt="image.alt"
            />
            <NuxtLink v-if="image.raw" :to="image.raw">
              <img :src="image?.resized?.url" :alt="image.alt" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </article>
    <AppFooter class="index-footer" />
  </div>
</template>

<style scoped>
.single-project__text {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: calc(33vw - 1.35rem);
}
.album-gallery {
  line-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.1rem;
}

.album-gallery li a {
  position: relative;
  display: block;
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
  backdrop-filter: blur(0.15rem);
}

.album-gallery li {
  display: block;
  aspect-ratio: 533/658;
  background-color: #000;
  break-inside: avoid;
}

@media screen and (max-width: 768px) {
  .column {
    background-color: #fff;
    /*  position: absolute;*/
    position: relative;
    z-index: 0;
    top: 0;
    padding: 7rem 0 0;
  }

  .album-gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
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
