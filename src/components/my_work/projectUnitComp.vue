<template>
  <div class="container">
    <div class="image">
      <img :src="imgSrc" alt="project picture" @click="goToUrl">
    </div>
    <div class="title" v-on:click="goToUrl">
      <h2>{{ assetSet.title }}</h2>
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
    },
    url() {
      return "/work" + this.assetSet.url
    }
  },
  methods: {
    goToUrl() {
      this.$router.push(this.url)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: grid;
  position: relative;

  &:hover > span {
    width: 1.5rem;
    transform: translateX(.5rem);

  }
}

.image {
  width: 50vw;

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
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
  width: 30rem;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);


  h2 {
    font-size: 2rem;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  }

}

.yellow {
  position: absolute;
  height: 5.5rem;
  background-color: var(--color-yellow);
  width: 1rem;
  right: -5rem;
  bottom: 4rem;
  transition: all .3s ease;


}
</style>
