<template>
  <div class="container">
    <div class="title">
      <h2>{{ trait.title }}</h2>
    </div>
    <ul>
      <li v-for="(edu,idx) in trait.items" :key="idx">{{ edu }}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: "setBoard",
  props: ["trait"],
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 26vw;

  ul {
    list-style: none;
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;


    li {
      text-align: start;
      font-size: 1.8rem;
      font-weight: 900;
    }
  }

}

.title {
  text-align: center;
  color: var(--color-petrol-blue);
  border-bottom: solid .5rem var(--color-yellow);
  font-size: 2rem;


  h2 {
    line-height: .1rem;
  }
}

</style>
