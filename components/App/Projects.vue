<script lang="ts">
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
  <li v-for="(album, index) in albums" :key="index" class="section">
    <NuxtLink :to="`/${album.id}`">
      <img
        :src="album?.cover?.resized?.url ?? album?.images?.[0]?.resized?.url"
        :alt="album?.cover?.alt ?? album?.images?.[0]?.alt"
      />
    </NuxtLink>
  </li>
</template>
