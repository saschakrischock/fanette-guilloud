<script setup lang="ts">
const page = await usePage()
const { data } = await useProject()
const children = computed(() => data.value?.result?.children)

// Get the next page
const nextPage = computed(() => {
  const index = children.value?.findIndex(
    (item: Record<string, any>) => item.id === page.value?.id
  )
  return children.value?.[index + 1]
})

// Get the previous page
const prevPage = computed(() => {
  const index = children.value?.findIndex(
    (item: Record<string, any>) => item.id === page.value?.id
  )
  return children.value?.[index - 1]
})
</script>

<template class="single-project-text">
  <div v-html="page.text"></div>
</template>

<style scoped>
.single-project-text {
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  width: 20rem;
}
</style>
