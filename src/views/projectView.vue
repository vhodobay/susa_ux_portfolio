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
import {assets} from "@/data/data";
import ProjectUnitComp from "@/components/my_work/projectUnitComp";
import WorkDetailsComp from "@/components/my_work/workDetailsComp";
import Navbar from "@/components/navbar/Navbar";


export default {
  name: "projectView",
  components: {Navbar, WorkDetailsComp, ProjectUnitComp},
  data() {
    return {
      assetsReady: null
    }
  },
  computed: {},
  methods: {
    theData() {
      const assetSetHere = assets.filter(a => a.id.toString() === this.$route.params.slug.toString())
      this.assetsReady = assetSetHere[0]
    }
  },
  mounted() {
    this.theData()
  }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
