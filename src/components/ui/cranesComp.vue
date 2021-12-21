<template>
  <div v-if="wideScreen" class="daru-left">
    <img src="../../assets/images/SVG/petrolbluebird.svg" alt="crane">
  </div>
  <div v-if="wideScreen" class="daru-right_1">
    <img src="../../assets/images/SVG/petrolbluebird.svg" alt="crane">
  </div>
  <div v-if="wideScreen" class="daru-right_2" :class="{opt_1: !moveTheBird, opt_2:moveTheBird}">
    <img src="../../assets/images/SVG/oceryellowbird.svg" alt="crane">
  </div>
</template>

<script>
export default {
  name: "cranesComp",
  props:["wideScreen", "moveTheBird"]
}
</script>

<style scoped lang="scss">

.daru-left {
  width: 12rem;
  position: absolute;
  top: 30vh;
  right: 24%;
  transform: rotate(30deg);

}

.daru-right_1 {
  width: 22rem;
  position: absolute;
  top: 3vh;
  right: 2rem;
  transform: scaleX(-1) rotate(20deg);
}

.daru-right_2 {
  width: 22rem;
  position: absolute;
  top: 45vh;
  right: 2rem;
}

.opt_1 {
  transform: scaleX(-1);
}

.opt_2 {
  transform: scaleX(-1) rotate(40deg);
  transition: all 1s;

}


</style>
