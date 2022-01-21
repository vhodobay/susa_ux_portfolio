<template>
  <div class="container">
    <div class="unit">
      <h2>
        {{ title1 }}
      </h2>
      <p>
        {{ text1 }}
      </p>
    </div>
    <div class="unit">
      <h2>
        {{ title2 }}
      </h2>
      <p>
        {{ text2 }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title1: String,
    title2: String,
    text1: String,
    text2: String,
  },
  name: "MoreDetailsComp",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
flex-direction: column;
  margin-top: 3rem;
  @media only screen and (min-width: 40em) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

    h2 {
    color: var(--color-petrol-blue);
    padding: 0 1rem;
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
