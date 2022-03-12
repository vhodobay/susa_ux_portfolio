<template>
  <div class="container">
    <div class="image">
      <img style="height: 20rem" :src="assetSet.image.asset.url" alt="project picture" @click="goToUrl"/>
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
  computed: {},
  methods: {
    goToUrl() {
      this.$router.push('/work/' + this.assetSet.slug.current);
    },
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.container {

  margin-top: 15vh;
  display: grid;
  position: relative;

  @media only screen and (min-width: 40em) {
    margin-top: 0;

  }

  &:hover > span {
    width: 1.5rem;
    transform: translateX(0.5rem);
  }
}

.image {
  position: relative;
  top: -5vh;
  right: 10vw;
  width: 100%;
  @media only screen and (min-width: 40em) {
    top: 0;
    right: 0;
    width: 50vw;
  }

  img {

    width: 60vw;
    cursor: pointer;
    object-fit: contain;

    @media only screen and (min-width: 40em) {
      object-fit: cover;
      max-width: 100%;
      height: auto;

    }
  }
}

.title {
  display: inline-block;
  position: absolute;
  right: 4rem;
  bottom: 16vh;
  align-self: center;
  text-align: start;
  padding: 1rem 3rem;
  background-color: var(--color-petrol-blue);
  cursor: pointer;
  width: 60vw;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 40em) {
    align-self: flex-end;
    right: -3rem;
    bottom: 4rem;
    padding: 0 3rem;
    width: 30rem;

  }
  @media only screen and (min-width: 1300px) {
    padding: 1rem 5rem;
  }

  h2 {
    font-size: 2.1rem;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    @media only screen and (min-width: 1300px) {
      font-size: 2.6rem;
    }
  }
}

.yellow {
display: none;

  @media only screen and (min-width: 40em) {
    display: block;
    position: absolute;

    background-color: var(--color-yellow);
    width: 1rem;

    transition: all 0.3s ease;
    height: 5.5rem;
    right: -5rem;
    bottom: 4rem;

  }

  @media only screen and (min-width: 1300px) {
    height: 9rem;
  }
}
</style>
