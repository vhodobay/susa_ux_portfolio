<template>
  <cranes-comp :wide-screen="wideScreen" :move-the-bird="inView"></cranes-comp>

  <div class="container" id="my-work">
    <div class="yellow-container">
      <div class="yellow-liner"></div>
    </div>
    <div class="content-area">
      <div v-for="(asset) in assets" class="work-container" :key="asset._id">
        <project-unit-comp :asset-set="asset"></project-unit-comp>

      </div>

    </div>
  </div>
</template>

<script>
import ProjectUnitComp from "@/components/my_work/projectUnitComp";
import CranesComp from "@/components/ui/cranesComp";

import sanity from '../../client'
import imageUrlBuilder from "@sanity/image-url";


const imageBuilder = imageUrlBuilder(sanity)
const assetQuery = `*[_type == "workProject"] | order(title) {_id,slug, title, "image": mainImage{asset->{_id,url}}}`

export default {
  name: "myWorkComp",
  components: {CranesComp, ProjectUnitComp},
  props: ['inView', "wideScreen"],
  computed: {},
  mounted() {
    this.fetchAssetData()
  },
  data() {
    return {
      assets: [],
      move: null
    }
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source)
    },
    async fetchAssetData() {
      try {
        this.assets = await sanity.fetch(assetQuery)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  @media only screen and (min-width: 40em) {
    display: flex;
    width: 100%;
    min-height: 40vh;
  }
}

.content-area {

}

.work-container {

}

.title {

}

.graphics {
}
</style>
