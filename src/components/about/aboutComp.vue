<template>
  <cranes-comp :wide-screen="true"></cranes-comp>

  <section class="container" id="about">
    <div class="yellow-container">
      <div class="yellow-liner"></div>
    </div>
    <div class="about-container">

      <div class="image">
        <div class="portrait">
          <img src="@/assets/images/susaport2.jpg" alt="susa portrait">
        </div>
      </div>

      <div class="text-box">
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
        <p>{{ text3 }}</p>
      </div>

    </div>
  </section>

</template>

<script>

import {API} from "aws-amplify";
import {listAbouts} from "@/graphql/queries";
import CranesComp from "@/components/ui/cranesComp";


export default {
  name: "aboutComp",
  data() {
    return {

      text1: "After my daughter was born, I chose to become a professional chef leaving a communications leader role behind. So far it may sound like an ordinary story of a mom changing careers because of kids, but perhaps my journey is a bit more adventurous.",
      text2: "Up until my daughter’s first birthday I cooked in twenty two yoga camps with only a baby carrier and my brains with me, then I ran an apartment restaurant while working as a private chef for two families as well as an American actor, after which I worked as the chef of a Budapest based bistro. My favourite hashtag and personal philosophy is #foodislove. I love finding out how to make the most out of the most simple ingredients or show the world that you can create fantastic desserts out of cauliflower.",
      text3: "When my daughter turned nearly five, I felt it was time to look around over the border, so we settled down in Berlin to start over. I cooked at dinners of smaller and larger scale. I loved them all and yet I felt something was missing. Here continued my journey to find my path. I started my own little sustainable catering project Daily Love Food, and slowly started my doula carrier too. And now I'm learning to be a equity lover UX Designer to make the user experience of life more enjoyable"
    }
  },
  components: {CranesComp},
  methods: {
    async getAbout() {
      const text = await API.graphql({
        query: listAbouts
      })
      console.log(text)
    }
  },
  created() {
    this.getAbout()
  }
}
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


  p {
    font-size: 1.8rem;
    font-weight: 500;
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
