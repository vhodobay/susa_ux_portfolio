<template>
  <div class="container-birds">
    <div v-if="wideScreen" class="daru-left">
      <img src="../../assets/images/SVG/petrolbluebird.svg" alt="crane" />
    </div>
    <div v-if="wideScreen" class="daru-right_1">
      <img src="../../assets/images/SVG/petrolbluebird.svg" alt="crane" />
    </div>
    <div
      v-if="wideScreen"
      class="daru-right_2"
      :class="{ opt_1: !moveTheBird, opt_2: moveTheBird }"
    >
      <img src="../../assets/images/SVG/oceryellowbird.svg" alt="crane" />
    </div>
  </div>
</template>

<script>
export default {
  name: "cranesComp",
  props: ["wideScreen", "moveTheBird"],
};
</script>

<style scoped lang="scss">
.container-birds {
  position: relative;
}

.daru-left {
  width: 12rem;
  position: absolute;
  top: 23vh;
  right: 20%;
  transform: rotate(30deg);

  @media only screen and (min-width: 1300px) {
    width: 18rem;
  }
}

.daru-right_1 {
  width: 22rem;
  position: absolute;
  top: 4vh;
  right: 2rem;
  transform: scaleX(-1) rotate(20deg);
  @media only screen and (min-width: 1300px) {
    width: 28rem;
  }
}

.daru-right_2 {
  width: 22rem;
  position: absolute;
  top: 44vh;
  right: 2rem;
    @media only screen and (min-width: 1300px) {
    width: 28rem;
  }
}

.opt_1 {
  transform: scaleX(-1);
}

.opt_2 {
  transform: scaleX(-1) rotate(40deg);
  transition: all 1s ease-in-out 3s;
}
</style>
