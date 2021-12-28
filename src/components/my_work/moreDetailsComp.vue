<template>
  <div class="container">
    <div class="unit">
      <h2>Overview</h2>
      <p>{{ assetSet.overview }}</p>
    </div>
    <div class="unit">
      <h2>Problem Statement</h2>
      <p>{{ assetSet.problemStatement }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreDetailsComp",
  props: ["assetSet"],
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 3rem;
  widows: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    color: var(--color-petrol-blue);
    padding: 0rem 1rem;
    border-bottom: solid 0.3rem var(--color-yellow);
    font-size: 2.2rem;
  }
  p {
    font-size: 1.8rem;
  }
}
.unit {
  margin: 0 3rem;
}
</style>