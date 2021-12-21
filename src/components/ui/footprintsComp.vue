<template>
  <div class="footprint-container">

    <div class="footprints fp_1"></div>
    <div class="footprints fp_2" key="1"></div>
    <div class="footprints fp_3" key="2"></div>

  </div>
</template>

<script>
export default {
  name: "footprintsComp"
}
</script>

<style scoped>

.footprint-container {
  width: 100%;

}

.footprints {
  background-image: url("../../assets/images/SVG/footprints.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 50%;
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;
}

.fp_1 {
  transform: translateX(35vw);
}

.fp_2 {
  transform: translateX(24vw);
}

.fp_3 {
  transition: .3s ease;
  transform: translateX(12vw);

}
</style>
