<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bio',
  },
  meta: [
    {
      name: 'theme-color',
      content: '#f0f0f0',
    },
  ],
})

function goToPrev() {
  window.history.length > 1 ? useRouter().go(-1) : useRouter().push('/')
}

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
        <a class="email" href="mailto:fanette@ocrestudio.co"
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
          >fanette@ocrestudio.co</a
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

      <div v-if="$device.isMobile" id="mc_embed_signup">
        <form
          id="mc-embedded-subscribe-form"
          action="https://ocrestudio.us18.list-manage.com/subscribe/post?u=88c647895b27dbb7aea767cd6&amp;id=88f4298927&amp;f_id=006a2be7f0"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            latest project and news<br />
            <div class="mc-field-group">
              <!-- <label for="mce-EMAIL">Email Address </label> -->
              <!-- Added placeholder -->
              <input
                id="mce-EMAIL"
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                placeholder="email"
              />
            </div>
            <div id="mce-responses" class="clear">
              <div
                id="mce-error-response"
                class="response"
                style="display: none"
              ></div>

              <div
                id="mce-success-response"
                class="response"
                style="display: none"
              ></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px" aria-hidden="true">
              <input
                type="text"
                name="b_43a795784ca963e25903a0da6_9937fe4fc5"
                tabindex="-1"
                value=""
              />
            </div>
            <svg
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
              ></path>
            </svg>
            <div class="clear">
              <input
                id="mc-embedded-subscribe"
                type="submit"
                value="subscribe"
                name="subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="close" @click="goToPrev">(close)</div>
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
  padding: 5rem 1.25rem 1.25rem;
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

.bio__wrapper__top__headline {
  margin-bottom: 0.8rem;
  font-weight: 600;
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
