<template>
  <div class="container">


    <div class="button-container">
      <button @click="$emit('onClicked')">
        <slot></slot>
      </button>
    </div>

    <span class="horizontal-yellow"></span>
    <span class="horizontal-yellow"></span>
    <span v-if="wideScreen" class="horizontal-yellow"></span>
    <span v-if="wideScreen" class="horizontal-yellow"></span>
    <span v-if="wideScreen" class="horizontal-yellow"></span>


  </div>
</template>

<script>
export default {
  name: "vonalGombComp",
  props: ["wideScreen"],
  emits: ['onClicked'],


}
</script>

<style scoped lang="scss">

.container {
  margin: 3rem 0;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: auto;
}

.button-container {
  background-color: var(--color-yellow);
  padding: 1.2rem;
  border-radius: 99rem;
  margin-right: 1rem;

  button {
    background-color: #216477;
    color: white;
    width: 8rem;
    height: 8rem;
    border-radius: 99rem;

    &:hover {
      transform: scale(1.04);
    }
    &:active {
      transform: scale(.98);
      box-shadow: 2px 4px 10px rgba(252,252,252, .5);
    }
  }
}

.horizontal-yellow {
  width: 2.8rem;
  background-color: var(--color-yellow);
  height: 1rem;
  margin: 0 .6rem;
}

</style>
