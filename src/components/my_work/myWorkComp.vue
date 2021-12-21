<template>
  <cranes-comp :wide-screen="true" :move-the-bird="false"></cranes-comp>

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



export default {
  name: "myWorkComp",
  components: {CranesComp, ProjectUnitComp,},
  computed: {},
  data() {
    return {
      assets: [
        {
          title: "Daily Love Food",
          image: "food-1.jpg",
        },
        {
          title: 'Plantea',
          image: "food-2.jpg"
        },
        {
          title: 'Super U',
          image: "skill-3.jpg"
        }
      ]
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
