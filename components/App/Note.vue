<script setup lang="ts">
defineProps<{
  note?: Record<string, any>
  excerpt?: boolean
}>()

function formatDateShort(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}
</script>

<template>
  <article class="note-excerpt">
    <NuxtLink :to="`/${note?.id}`">
      <p class="note-excerpt-title">Next</p>
    </NuxtLink>
  </article>
</template>
