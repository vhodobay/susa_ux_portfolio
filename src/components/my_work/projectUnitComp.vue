<template>
  <div class="container">
    <div class="image">
      <img :src="imgSrc" alt="project picture">
    </div>
    <div class="title">
      <h2>{{ assetSet.title }} </h2>
    </div>
    <span class="yellow"></span>

  </div>
</template>

<script>
export default {
  name: "projectUnitComp",
  props: ["assetSet"],
  computed: {
    imgSrc() {
      return require(`@/assets/images/JPG/${this.assetSet.image}`)

    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: grid;
  position: relative;
}

.image {
  width: 50vw;

  img {
    max-width: 100%;
    height: auto;

    object-fit: cover;
  }
}

.title {
  display: inline-block;
  position: absolute;
  right: -3rem;
  bottom: 4rem;
  align-self: flex-end;
  text-align: start;
  padding: 0 3rem;
  background-color: var(--color-petrol-blue);
  color: white;
  width: 30rem;

  h2 {
    font-size: 2rem;
  }
}

.yellow {
  position: absolute;

  height: 5.5rem;
  background-color: var(--color-yellow);
  width: 1rem;
  right: -5rem;
  bottom: 4rem;

}
</style>
