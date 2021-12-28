<template>
  <div class="container">
    <div class="image" :style="{ backgroundColor: setColor }">
      <img :src="image_1.asset.url" alt="phone app" />
    </div>
    <div class="image" :style="{ backgroundColor: setColor }">
      <img :src="image_2.asset.url" alt="phone app" />
    </div>
    <div class="image" :style="{ backgroundColor: setColor }">
      <img :src="image_3.asset.url" alt="phone app" />
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 27vw;
  height: 100%;
  margin: 2rem 0;
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