<template>

    <div class="blur-container"></div>
  <div class="overcast"></div>


</template>

<script>
export default {
  name: "bottomBlur"
}
</script>

<style scoped>


.blur-container {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
}
.overcast {
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;

  background-color: rgba(252,252,252,.3);
  filter: blur(2rem);

}
</style>
