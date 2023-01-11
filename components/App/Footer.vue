<script setup lang="ts">
const { data } = await useBio()

// Set the current page data for the global page context
const page = setPage(() => data.value?.result)
</script>

<template>
  <footer class="footer">
    <div v-html="page.biotext"></div>

    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form
        action="https://github.us2.list-manage.com/subscribe/post?u=43a795784ca963e25903a0da6&amp;id=9937fe4fc5"
        method="post"
        id="mc-embedded-subscribe-form"
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
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              placeholder="email"
            />
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
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
              type="submit"
              value="subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>

      <div class="copyright">
        © 2023 Fanette Guilloud<br />
        Design:
        <a target="_blank" href="http://justusgelberg.com/">Justus Gelberg</a>
      </div>
    </div>

    <!--End mc_embed_signup-->
  </footer>
</template>
