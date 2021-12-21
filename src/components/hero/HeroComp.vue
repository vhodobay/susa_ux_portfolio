<template>
  <div class="container">
    <div class="text-box">

      <div class="text-image">
        <img src="../../assets/images/JPG/susaportrait-80.jpg" alt="susa image">
      </div>
      <div class="text-text">
        <p>{{ introText }}</p>
      </div>
    </div>
  </div>

  <cranes-comp :move-the-bird="false" :wide-screen="wideScreen"></cranes-comp>

  <div class="quote-cont">
    <div class="yellow-liner"></div>
    <the-quote class="quote" :intro-quote="introQuote" :quote-author="quoteAuthor"></the-quote>

  </div>





  <div id="hero-bottom"></div>


</template>

<script>
import TheQuote from "@/components/hero/theQuote";
import {API} from "aws-amplify";
import {getIntroductionText} from '@/graphql/queries'
import CranesComp from "@/components/ui/cranesComp";


export default {
  name: "HeroComp",
  components: {CranesComp, TheQuote},
  data() {
    return {

      introText: "",
      introQuote: "",
      quoteAuthor: "",
      bottomInView: false,
      intersectionObserver: null
    }
  },
  methods: {
    onElementIntersects(entries) {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          this.bottomInView = true

        }, 3000)
      }
    },
    async getIntroText() {
      const introTexts = await API.graphql({
        query: getIntroductionText,
        variables: {id: "fe260315-4b54-4230-b4c3-cc46312d2630"}
      })


      this.introText = introTexts.data.getIntroductionText.text
      this.introQuote = introTexts.data.getIntroductionText.quote
      this.quoteAuthor = introTexts.data.getIntroductionText.author
    }
  },
  mounted() {
    this.getIntroText()
    this.intersectionObserver = new IntersectionObserver(this.onElementIntersects, {
      rootMargin: '0px',
      threshold: 1.0
    })
    this.intersectionObserver.observe(document.querySelector('#hero-bottom'))
  },
  beforeUnmount() {
    this.intersectionObserver.unobserve(document.querySelector('#hero-bottom'))
  },
  computed: {
    wideScreen() {
      return window.innerWidth >= 500;
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

.text-box {
  position: relative;
  top: 5vh;
  display: flex;
  justify-content: flex-start;
  text-align: start;

}

.text-image {
  min-width: 20%;


  img {
    width: 20vw;
    margin: 2.6rem;
  }
}

.text-text {
  width: 40%;
  font-size: 2.6rem;
  align-self: center;
}


.quote-cont {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.quote {
  text-align: start;
  position: relative;
  top: 5vh;
}

#hero-bottom {
  height: 1px;
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s 3s;
}

</style>
