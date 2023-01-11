<script setup lang="ts">
const { data } = await useBio()

// Set the current page data for the global page context
const page = setPage(() => data.value?.result)
</script>

<template>
  <div>
    <header class="h1">
      <h1>
        {{ page?.headline || page?.title }}
      </h1>
      bio two
      <p v-if="page?.subheadline" class="color-grey">{{ page.subheadline }}</p>
    </header>
  </div>
</template>

<style scoped>
.home-grid {
  background-color: red;
  display: grid;
  list-style: none;
  gap: 0.1rem;
  line-height: 0;
  grid-template-columns: repeat(5, 1fr);
}
.home-grid li {
  position: relative;
  --cols: 1;
  --rows: 1;

  overflow: hidden;
  background: #000;
  line-height: 0;
}

.home-grid a {
  display: block;
  height: 10rem;
}
.home-grid img {
  position: absolute;
  top: 0;
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
    padding-bottom: 52.65%;
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
