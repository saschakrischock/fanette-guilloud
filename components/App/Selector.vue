<template>
  <div class="selector">
    <NuxtLink class="home-link" to="/"> Latest</NuxtLink>
    <span class="seperator">—</span>
    <NuxtLink class="index-link" to="/index">Index </NuxtLink>
  </div>
</template>

<style scoped>
.hide-nav .latest {
  display: none;
}
</style>
