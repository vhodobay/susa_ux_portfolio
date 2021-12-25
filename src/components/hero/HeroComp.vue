<template>
  <cranes-comp :move-the-bird="inView" :wide-screen="wideScreen"></cranes-comp>

  <div class="container">

    <div class="text-box">

      <div class="text-image">
        <img v-if="introData.image" :src="imageUrlFor(introData.image)" alt="susa portrait">
      </div>
      <div class="text-text">
        <p>{{ introData.body }}</p>
      </div>
    </div>
  </div>
  <div class="quote-cont">
    <div class="yellow-liner"></div>
    <the-quote class="quote" ></the-quote>
  </div>
</template>

<script>
import TheQuote from "@/components/hero/theQuote";
import CranesComp from "@/components/ui/cranesComp";
import sanity from '../../client'
import imageUrlBuilder from '@sanity/image-url'


const imageBuilder = imageUrlBuilder(sanity)
const introQuery = `*[_type == "introText"] {body, "image": mainImage {asset->{_id,url}}}`

export default {
  name: "HeroComp",
  components: {CranesComp, TheQuote},
  props: ["wideScreen", "inView"],
  data() {
    return {
      introData: "",
    }
  },
  methods: {
    async fetchIntroText() {
      try {
        const introData = await sanity.fetch(introQuery)
        this.introData = introData[0]

      } catch (e) {
        console.log(e)
      }
    },
    imageUrlFor(source){
      return imageBuilder.image(source)
    }
  },
  mounted() {
    this.fetchIntroText()
  },
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
