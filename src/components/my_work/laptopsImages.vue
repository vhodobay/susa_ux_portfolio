<template>
  <div class="container">
    <div v-for="image in images" :key="image._id" class="image" :style="{ backgroundColor: 'var(--color-yellow)' }">
      <img :src="image.asset.url" alt="phone app"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "laptopsImages",
  props: ["image_1", "image_2"],
  computed: {
    images(){
      return [this.image_1, this.image_2]
    }
  }

}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;


}

.image {

  margin: 2rem;
  @media only screen and (min-width: 40em) {
    margin: 0;
    width: 40vw;
    height: 100%;
    margin: 2rem;
  }
  @media only screen and (min-width: 1300px) {

  }

  img {
    width: 100%;

    transition: all 0.4s ease-in;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
