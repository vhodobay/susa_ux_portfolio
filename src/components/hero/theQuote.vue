<template>
  <div class="quote-text">
    <blockquote>
      &quot;
      {{ introQuote }}
      &quot;
    </blockquote>
    <cite>
      &mdash; {{ quoteAuthor }} &mdash;
    </cite>
  </div>
</template>

<script>
export default {
  name: "theQuote",
  props: ["introQuote", "quoteAuthor"]
}
</script>

<style scoped lang="scss">
.quote-text {

  width: 70%;

  font-family: "Josefin Slab", sans-serif;
  font-size: 3rem;

  line-height: 2;
  font-weight: bold;
}
</style>
