<script setup lang="ts">
const test = true
const route = useRoute()
const site = useSite()
const currentLocation = false
const listedChildren = computed(() =>
  (site.value?.children ?? []).filter((i: Record<string, any>) => i.isListed)
)
</script>

<template>
  <header class="header">
    <AppLogo />
    <AppTop v-if="$device.isDesktop" />
  </header>
  <LazyAppSelector v-if="$device.isDesktop" />
  <AppPrevNext />
</template>

<style scoped>
.hide-nav .latest {
  display: none;
}
</style>
