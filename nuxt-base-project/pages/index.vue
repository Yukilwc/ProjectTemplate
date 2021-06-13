<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-base-project</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="title">平方字体</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
@font-face {
  font-family: "my-font";
  // src: url("../font/PingFangSC.ttf");
  src: url("../font/PingFangSC-.woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "my-font-min";
  src: url("data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAWoABAAAAAAC8AAAAVRAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbIBxiBmAAgTARCAqDXIMtCxQAATYCJAMcBCAFiz0HbxckGCQbZgrIHoNt6/GY11j1qK8LXGr0uEzwD66V7yeZ4dsi0zFVVRE5QHYkDJFlR6Rbed1BnSrHGQCrRA5TgcigpQrIDo8ZTuDj2e5dGJ5/f3fue/GXJhZBMEUxY6PpiRVrakOoABWtixFRPsbkLwQFYleHlwILVQWqRjDLTlWErlD1VUhGVghZi+LWBGsP/AXwGiAgBQAMQoQIATGdTUfNLq5sBANxANkkACAgZrJy/Ue1Zx6zw4GM9Qojv/VmCRY9Itb6slESJYp1staFo2owEBAgXEYcOn08tJ7F6KP+8iAoQAZhDyO9CmUSn7xFIX8Fs7dqF3CC5226MxnVJpeuXCBHAMYzr4Du5IADLNAbwAG1aAT0RhMDteRMB0gJMTi6zw0dLd0RdDuZhY6bZb9eunLt9uVjZxYBCmhSdIv1eED3hMfCssULD0pWFb6u/FMR6Or+34QDlE1iAIgAaAkQAkeBDwCAAzkVBoOFvqNrpmPz/n7FsCszWx7nDQOZ3GGfc9/nrmlu/pA8LzjYMvR9qKL5U0Gqo9vQkkfTs7GmrsvIB1cMoRJyiN/mNX4slg0hJlasxH4Ys6Jk8NxsrjPEyrk3tOWyqncEeJMLhpGyIx6c/yHZKypVjt4XDJ07Cgw1OaQmtj2VNs1jVZQvSvvnmk5ef9XYBg92q410Dhxw7pzzjK+FiZgsd758Sh6mp35p0TpP9mHeuLims3ThskCh68DykZJKGrDeNOSNAduP3brUqXvr7dm/crNSY5bQ5q4jv5uulB0Z1PHA9ePKzcmV578XjlqwsWPji64X+zrWLSjXXnqqrN1zcg51mYnTuz+Vm/Ydqvy5bSUMjIrT5VdgK19ErKolpUvuVfBzxzcVUfm98/eeKd3TymrcWVvxvmaGlgW4LR1b2nvb13Ss4bi1jAErY615yvkG7q03YE1xqCmvSMoJAgAgwHQ4/Rn/C3pGWP8NzLO/AF7fn3sDAG9L91PJW8nBbit9CwgxAAhc7//nwO0cIbo2B6DIpzweXaAloCR0PkgTpTPQAwiI1A6jkFf//EDUjARaEAkjYQiYAksHhXC01gWPDkLwSdiDgD62IyTXHcR0TwYJLTJ0cnOZJ7fQX9OgkXOItpkDGDIqgaN/ViPkljYjZnqZJjenuVsYajb2joDaWg7OWxaF4bGMrd9ROQR4jOxu8GnbKxCwsL1MF1kUBhJ69l2ml080KbSVgjA4+zoKn5AQ5kFgSKej2Yw9cXrfR33hbML26Qkm2DD6UxDCiEzkRxDtVIuJt5glXtjguXMdz5ZA8xbrAjWjUvZtbEBBvFTOGkW39Ujq128yhjED4bwCCv/60eDijM5UC+5Kn19GeEbJCtjQlwqU0vj7tqdYTIhuvI88rLyRxbUk4ccPEGUNT2XKDP+LjLiQKOQTy/LQHfK2BLUwwqsYW3tIoAYe9RCvmABWeDSlr4YEYRxRgKDQbATLQxSUoCXRJOm+NNXiGIZKePmiEIEFjNWUEuWlKhrjR0w2yqLOj5eAyhA8RiEkAvMiEAHEmc3h6EyQi0QSgDCqCF1YTHCyCsnsaBLbdtuioNN0p6akouOYZKJLAwIgLRnpIM3cSFh8Vozv++zG1U/ARM2TkS1ikaSKmdkpB50FlYshEEgvX8/pDTIoOlOB5CTW8TVYUFQYS4AEscL8INFMX3Gfk3U7RUnMFBQEn2zFS2DwREFrigx5v9mpVLtwBDKyWDl58hUoDNYSrAyEa5JCu17nNtm1xTqNQ+fWGZqKDJrB94+OvJLyHQFUc2S7m57A/srmNy22twAJW8T+sqUlPb3EXTuXporuBAA=")
    format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
* {
  font-family: my-font-min, my-font !important;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: @a;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
