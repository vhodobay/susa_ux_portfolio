<template>
  <navbar></navbar>
  <div>

    <div class="container">
      <div>
        <project-unit-comp v-if="assetsReady" :asset-set="assetsReady"></project-unit-comp>

      </div>
      <div>
        <work-details-comp v-if="assetsReady" :data-set="assetsReady"></work-details-comp>
      </div>

    </div>

  </div>
</template>

<script>

import ProjectUnitComp from "@/components/my_work/projectUnitComp";
import WorkDetailsComp from "@/components/my_work/workDetailsComp";
import Navbar from "@/components/navbar/Navbar";
import sanity from '../client'
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity)
const assetQuery = `*[slug.current == $slug] {_id, title, url, role, company, date, projectType, "image": mainImage{asset->{_id,url}}}`


export default {
  name: "projectView",
  components: {Navbar, WorkDetailsComp, ProjectUnitComp},
  data() {
    return {
      assetsReady: null,
    }
  },
  computed: {},
  methods: {
    async theData() {
      try {
        const assetsReady = await sanity.fetch(assetQuery, {slug: this.$route.params.slug})
        this.assetsReady = assetsReady[0]

      } catch (e) {
        console.log(e)}
    }
    },
    imageUrlFor(source){
      return imageBuilder.image(source)
    },
  mounted() {
    this.theData()
    this.$route.params.slug
  }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
