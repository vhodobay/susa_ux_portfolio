<template>
  <div class="about">

    <navbar id="navbar"></navbar>
  </div>
</template>

<script>


import Navbar from "@/components/navbar/Navbar";
export default {
  name: "About",
  components: {Navbar}
}
</script>

<style lang="scss">
.about{
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
