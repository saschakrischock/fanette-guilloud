<template>
  <div class="header__right">
    <div class="top__column column__clients">
      <div class="top__column__header">
        Selected<br />
        Clients
      </div>

      <div class="top__column__content">
        Act Series, Aeyde Jewelry, Andy Wolf, Kin Dee, Romantico Romantico,
        Weyhe, YUN, Yew Yew
      </div>
    </div>

    <div class="top__column">
      <div class="top__column__header">
        Infos<br />
        Contact
      </div>

      <div class="">
        For enquiries, comissions and<br />portfolio requests email:
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

        Instagram<br />
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
            ></path>
          </svg>
          @fanette_g</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.top {
  &__column {
    max-width: calc(20vw + 0.1rem);
    min-width: calc(20vw - 1.45rem);

    a {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.2rem;
      }
    }

    .email {
      margin-bottom: 1rem;
      display: block;
    }
    &__header {
      margin-bottom: 1rem;
    }

    &__content {
      width: 90%;
    }
  }
}
</style>
