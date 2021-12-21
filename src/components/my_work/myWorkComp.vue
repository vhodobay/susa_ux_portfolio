<template>
  <div class="container" id="my-work">
    <div class="yellow-container">
      <div class="yellow-liner"></div>
    </div>
    <div class="content-area">


      <div v-for="(asset,idx) in assets" class="work-container" :key="idx">
        <project-unit-comp :asset-set="asset"></project-unit-comp>

      </div>

    </div>
<!--    <div class="graphics">-->
<!--      hey-->
<!--      <cranes-comp :move-the-bird="false" :wide-screen="true"></cranes-comp>-->
<!--    </div>-->
  </div>
</template>

<script>
import ProjectUnitComp from "@/components/my_work/projectUnitComp";
// import asset_1 from '../../assets/images/JPG/food-1.jpg'


export default {
  name: "myWorkComp",
  components: {ProjectUnitComp, },
  computed: {},
  data() {
    return {
      assets: [
        {
          title: "Daily Love Food",
          image: "food-1.jpg",
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
  grid-column: 3/4;
}
</style>
