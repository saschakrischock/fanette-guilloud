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
        <AppMobileProjects v-if="$device.isMobile" />

        <NuxtPage />
      </main>

      <AppFooter class="default-footer" />
    </Body>
  </Html>
</template>
