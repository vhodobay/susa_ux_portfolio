<template>
  <div class="qoute-text">
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
  props:["introQuote", "quoteAuthor"]
}
</script>

<style scoped lang="scss">
.qoute-text {
  font-size: 2.6rem;
  font-weight: bold;
  width: 70%;
  text-align: center;
}
</style>
