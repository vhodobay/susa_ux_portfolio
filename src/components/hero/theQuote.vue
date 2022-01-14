<template>
  <div class="quote-text">
    <blockquote>
      &quot;
      {{ introQuote.text }}
      &quot;
    </blockquote>
    <cite>
      &mdash; {{ introQuote.author }} &mdash;
    </cite>
  </div>
</template>

<script>
import sanity from '../../client'


const quoteQuery = `*[_type == "quote"] {text, author}`

export default {
  name: "theQuote",

  data() {
    return {
      introQuote: "",
    }
  },
  methods: {
    async fetchQuote() {
      try {
        const quoteData = await sanity.fetch(quoteQuery)
        this.introQuote = quoteData[0]

      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.fetchQuote()
  }
}
</script>

<style scoped lang="scss">
.quote-text {
  width: 100%;
  font-family: "Josefin Slab", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;

  @media only screen and (min-width: 40em) {
    width: 70%;
    font-size: 3rem;
    line-height: 2;
  }
}
</style>
