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

function hoverback() {
  document.querySelector('.projects-nav')?.classList.add('active-next')
}

function leaveback() {
  document.querySelector('.projects-nav')?.classList.remove('active-next')
}

function hovernext() {
  document.querySelector('.projects-nav')?.classList.add('active-back')
}

function leavenext() {
  document.querySelector('.projects-nav')?.classList.remove('active-back')
}

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
    <NuxtLink
      to="/"
      class="back-link"
      @mouseenter="hoverback"
      @mouseleave="leaveback"
      >Back</NuxtLink
    >
    <span class="seperator">—</span>
    <AppNote
      v-if="nextPage"
      class="next-link"
      :note="nextPage"
      :excerpt="false"
      @mouseenter="hovernext"
      @mouseleave="leavenext"
    />
    <AppNote
      v-if="!nextPage"
      class="next-link"
      :note="firstPage"
      :excerpt="false"
      @mouseenter="hovernext"
      @mouseleave="leavenext"
    />
  </nav>
</template>
