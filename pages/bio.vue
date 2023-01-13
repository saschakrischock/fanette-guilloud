<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bio',
  },
})

const { data: bioData } = await useKql({
  query: 'page("bio")',
  select: {
    id: true,
    biotext: 'page.headline.kirbytext',
  },
})

const bio = computed(() => bioData.value?.result ?? [])
</script>

<template>
  <div class="bio__wrapper">
    <div class="bio__wrapper__top">
      <div class="bio__wrapper__top__headline">Infos<br />Contact</div>
      <div class="bio__wrapper__top__content">
        For enquiries, comissions and portfolio requests email:
        <a class="email" href="mailto:fanette@fanetteg.com"
          ><svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-18576999=""
          >
            <path
              d="M6.62555 9.06729L5.82246 8.29462L8.901 5.0944H3.15763C1.41556 5.09237 0 3.67681 0 1.93473V0.34882H1.11541V1.93473C1.11541 3.06029 2.03208 3.97695 3.15763 3.97695H8.90505L5.83665 0.770649L6.64178 0L10.998 4.55291L10.6005 4.93215L6.62353 9.06527L6.62555 9.06729Z"
              fill="black"
              data-v-18576999=""
            ></path></svg
          >fanette@fanetteg.com</a
        >
      </div>
      <div class="bio__wrapper__top__headline">Instagram</div>
      <div class="bio__wrapper__top__content">
        <a target="_blank" href="https://www.instagram.com/fanette_g/?hl=en"
          ><svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-18576999=""
          >
            <path
              d="M6.62555 9.06729L5.82246 8.29462L8.901 5.0944H3.15763C1.41556 5.09237 0 3.67681 0 1.93473V0.34882H1.11541V1.93473C1.11541 3.06029 2.03208 3.97695 3.15763 3.97695H8.90505L5.83665 0.770649L6.64178 0L10.998 4.55291L10.6005 4.93215L6.62353 9.06527L6.62555 9.06729Z"
              fill="black"
              data-v-18576999=""
            ></path></svg
          >@fanette_g</a
        >
      </div>
      <div class="bio__wrapper__top__headline">Selected<br />Clients</div>
      <div class="bio__wrapper__top__content">
        Act Series, Aeyde Jewelry, Andy Wolf, Kin Dee, Romantico Romantico,
        Weyhe, YUN, Yew Yew
      </div>

      <NuxtLink class="close" to="/">(close)</NuxtLink>
    </div>
    <div class="bio__wrapper__bottom">
      <div class="" v-html="bio.biotext"></div>
      <div class="copyright">
        <span class="year"
          >© {{ new Date().getFullYear() }} Fanette Guilloud<br
        /></span>
        Design:
        <a target="_blank" href="http://justusgelberg.com/">Justus Gelberg</a>
        <span class="code"
          >Code:
          <a target="_blank" href="http://saschakrischock.com/"
            >Sascha Krischock</a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.bio__wrapper {
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.bio__wrapper__top {
  background-color: #f0f0f0;
  padding: 6rem 1.25rem 1.25rem;
}

.bio__wrapper__bottom {
  padding: 1.25rem;
  height: 100%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
}

.close {
  display: block;
  margin-top: 2rem;
}

.copyright {
  width: 100%;
  font-size: 0.7rem;
}

.copyright .year {
  font-weight: bold;
}

.copyright a {
  border-bottom: 1px solid #888;
}

.copyright .code {
  margin-left: 0.5rem;
}

.bio__wrapper__top__headline {
  font-weight: bold;
  margin-bottom: 1rem;
}

.bio__wrapper__top__content {
  margin-bottom: 1.5rem;
}
.bio__wrapper__top__content a {
  display: flex;
  align-items: center;
}

.bio__wrapper__top__content svg {
  margin-right: 0.3rem;
}
.page-enter-from {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
