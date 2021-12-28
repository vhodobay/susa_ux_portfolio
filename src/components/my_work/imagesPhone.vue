<template>
  <div class="container">
    <div class="image">
      <img :src="assetSet.imagePhone_1.asset.url" alt="phone app" />
    </div>
    <div class="image">
      <img :src="assetSet.imagePhone_1.asset.url" alt="phone app" />
    </div>
    <div class="image">
      <img :src="assetSet.imagePhone_1.asset.url" alt="phone app" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagesPhone",
  props: ["assetSet"],
  created() {
    console.log(this.assetSet);
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image {
  width: 27vw;
  height: 100%;
  background-color: var(--color-yellow);
  img {
    width: 100%;
    transform: rotate3d(1.2, 1.1, 1, 0.03turn);
  }
}
</style>