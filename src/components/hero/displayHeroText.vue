<template>
  <SanityBlocks v-if="blocks" blocks="blocks" serializers />

</template>

<script>
import {SanityBlocks} from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks:{
      type: Array,
      default: ()=>[]
    }
  },
  name: "displayHeroText",
  components: {SanityBlocks}
}
</script>

<style scoped>

</style>
