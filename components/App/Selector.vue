<template>
  <div class="selector">
    <NuxtLink class="latest" to="/"> Latest </NuxtLink>
    –
    <NuxtLink to="/index"> Index </NuxtLink>
  </div>
</template>

<style scoped>
.hide-nav .latest {
  display: none;
}
</style>
