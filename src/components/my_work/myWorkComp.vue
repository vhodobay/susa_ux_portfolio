<template>
  <cranes-comp :wide-screen="wideScreen" :move-the-bird="inView"></cranes-comp>

  <div class="container" id="my-work">
    <div class="yellow-container">
      <div class="yellow-liner"></div>
    </div>
    <div class="content-area">
      <div v-for="(asset,idx) in assets" class="work-container" :key="idx">
        <project-unit-comp :asset-set="asset"></project-unit-comp>

      </div>

    </div>
  </div>
</template>

<script>
import ProjectUnitComp from "@/components/my_work/projectUnitComp";
import CranesComp from "@/components/ui/cranesComp";
import {assets} from "@/data/data";


export default {
  name: "myWorkComp",
  components: {CranesComp, ProjectUnitComp},
  props: ['inView', "wideScreen"],
  computed: {},
  data() {
    return {
      assets: assets,
      move: null
    }
  },
}
</script>

<style scoped lang="scss">
.container {

  display: flex;
  width: 100%;
  min-height: 40vh;

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
