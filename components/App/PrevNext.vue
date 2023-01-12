<script setup lang="ts">
const page = usePage()
const { data } = await useProjects()

const children = computed(() => data.value?.result?.children)

// Get the next page
const nextPage = computed(() => {
  const index = children.value?.findIndex(
    (item: Record<string, any>) => item.id === page.value?.id
  )
  return children.value?.[index + 1]
})

// Get the next page
const firstPage = computed(() => {
  const index = children.value?.findIndex(
    (item: Record<string, any>) => item.id === page.value?.id
  )
  return children.value?.[0]
})

// Get the previous page
const prevPage = computed(() => {
  const index = children.value?.findIndex(
    (item: Record<string, any>) => item.id === page.value?.id
  )
  return children.value?.[index - 1]
})
</script>

<template>
  <nav class="projects-nav">
    <NuxtLink to="/">Back</NuxtLink>
    <span>–</span>
    <AppNote v-if="nextPage" :note="nextPage" :excerpt="false" />
    <AppNote v-if="!nextPage" :note="firstPage" :excerpt="false" />
  </nav>
</template>
