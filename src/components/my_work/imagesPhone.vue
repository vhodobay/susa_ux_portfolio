<template>
  <div class="container">
    <div v-for="image in images" :key="image._id" class="image" :style="{ backgroundColor: setColor }">
      <img :src="image.asset.url" alt="phone app" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ImagesPhone",
  props: ["color", "image_1", "image_2", "image_3"],
  computed: {
    setColor() {
      if (this.color === "yellow") {
        return "var(--color-yellow)";
      } else {
        return "var(--color-petrol-blue)";
      }
    },
    calcInnerWidth() {
      return window.innerWidth > 500;
    },
    images(){
      return [this.image_1, this.image_2, this.image_3]
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 90em){
    justify-content: space-evenly;
  }
}
.image {
  width: 27vw;
  height: 100%;
  margin: 2rem 0;
  @media screen and (min-width: 90em){
    width: 18.8vw;
  }
  img {
    width: 100%;
    transform: rotate3d(1.2, 1.1, 0.9, 0.03turn);
    transition: all 0.4s ease-in;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
