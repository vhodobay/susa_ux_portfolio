<template>
  <div class="home">
    <navbar id="navbar"></navbar>
    <hero-comp></hero-comp>
  </div>
</template>

<script>
// @ is an alias to /src


import Navbar from "@/components/navbar/Navbar";
import HeroComp from "@/components/hero/HeroComp";
export default {
  name: 'Home',
  components: {
    HeroComp,
    Navbar

  }
}
</script>

<style lang="scss">
.home {
  position: relative;
}
#navbar{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: white;
}
</style>
