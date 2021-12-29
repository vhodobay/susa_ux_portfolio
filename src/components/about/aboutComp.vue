<template>
<section>
  <cranes-comp :wide-screen="wideScreen" :move-the-bird="inView"></cranes-comp>

  <div class="container" id="about">
    <div class="yellow-container">
      <div class="yellow-liner"></div>
    </div>
    <div class="about-container">
      <div class="image">
        <div class="portrait">
          <img v-if="aboutData" :src="imageUrlFor(aboutData.image)" alt="susa portrait"/>
        </div>
      </div>

      <div class="text-box">
  <p v-if="aboutData">{{aboutData.body1}}</p>
  <p v-if="aboutData">{{aboutData.body2}}</p>
  <p v-if="aboutData">{{aboutData.body3}}</p>
      </div>
    </div>
  </div>
</section>
  
</template>

<script>
import CranesComp from "@/components/ui/cranesComp";
import sanity from '../../client'
import imageUrlBuilder from '@sanity/image-url'


const imageBuilder = imageUrlBuilder(sanity)
const aboutQuery = `*[_type == "aboutText"] {body1,body2,body3,"image": mainImage {asset->{_id,url}}}`


export default {
  name: "aboutComp",
  props: ["inView", "wideScreen"], methods: {
    async fetchIntroText() {
      try {
        const aboutData = await sanity.fetch(aboutQuery)
        this.aboutData = aboutData[0]
      } catch (e) {
        console.log(e)
      }
    },
    imageUrlFor(source) {
      return imageBuilder.image(source)
    }
  },
  data() {
    return {
      aboutData:null};
  },
  created() {
this.fetchIntroText()
  },
  components: {CranesComp},
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: auto 1fr;
}

.about-container {
  position: relative;
  display: grid;
  grid-template-columns: 25% auto 35%;
  min-height: 75vh;
  margin-top: 3rem;
  @media only screen and(min-width: 1300px) {
  grid-template-columns: 25% auto 40%;
  }
  p {
    font-size: 1.8rem;
    font-weight: 500;
    @media only screen and (min-width: 1300px) {
      font-size: 2.5rem;
      padding: 0 3rem;
    }
  }
}

.image {
  grid-column: 1/2;
  padding: 2rem;
}

.portrait {
  img {
    max-width: 90%;
  }
}
</style>
