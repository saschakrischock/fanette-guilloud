<script setup lang="ts">
import '~/assets/css/main.css'
import '~/assets/css/medium-zoom.css'
</script>

<template>
  <Html lang="en">
    <Head>
      <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>

    <Body>
      <main class="main">
        <AppHeader />

        <NuxtPage />
      </main>

      <AppFooter />
    </Body>
  </Html>
</template>
