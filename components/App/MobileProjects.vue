<script setup lang="ts">
const { data } = await useKql({
  query: 'page("home")',
  select: {
    id: true,
    title: true,
    // description: true,
    headline: true,
    subheadline: true,
  },
})

// Set the current page data for the global page context
setPage(() => data.value?.result)

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
</script>
<template>
  <div>
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
    </ul>
  </div>
</template>

<style scoped>
.home-grid {
  display: grid;
  list-style: none;
  gap: 0.1rem;
  line-height: 0;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: dense;
}
.home-grid li {
  position: relative;
  --cols: 1;
  --rows: 1;

  overflow: hidden;
  background: #000;
  line-height: 0;
}

.home-grid li:hover a:after {
  backdrop-filter: blur(0.2rem);
}

.home-grid a:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.3s ease-in;
  width: 100%;
  height: 100%;
}

.home-grid a {
  display: block;
  aspect-ratio: 533/658;
}
.home-grid img {
  top: 0;
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}
.home-grid figcaption {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 1;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}

@media screen and (min-width: 45em) {
  .home-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  .home-grid li {
    grid-column-start: span var(--cols);
    grid-row-start: span var(--rows);
  }
  .home-grid a {
  }
}

/* "page" is hardcoded in nuxt3 page transitions atm */
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
