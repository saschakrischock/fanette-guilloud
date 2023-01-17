<script setup lang="ts">
function hoverlatest() {
  document.querySelector('.selector')?.classList.add('index-active')
}

function leavelatest() {
  document.querySelector('.selector')?.classList.remove('index-active')
}

function hoverindex() {
  document.querySelector('.selector')?.classList.add('home-active')
}

function leaveindex() {
  document.querySelector('.selector')?.classList.remove('home-active')
}
</script>

<template>
  <div class="selector">
    <NuxtLink
      class="home-link"
      to="/"
      @mouseenter="hoverlatest"
      @mouseleave="leavelatest"
    >
      Latest</NuxtLink
    >
    <span class="seperator">—</span>
    <NuxtLink
      class="index-link"
      to="/index"
      @mouseenter="hoverindex"
      @mouseleave="leaveindex"
      >Index
    </NuxtLink>
  </div>
</template>

<style scoped>
.hide-nav .latest {
  display: none;
}

.home-link,
.index-link {
  transition: all 0.2s ease-in;
}

.home-active .home-link {
  filter: blur(1px);
}

.index-active .index-link {
  filter: blur(1px);
}
</style>
