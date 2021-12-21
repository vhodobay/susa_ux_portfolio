<template>
  <div class="home">
    <navbar id="navbar"></navbar>
    <main class="main-container">

      <div class="content-section">

        <hero-comp></hero-comp>

        <footprints-comp></footprints-comp>

        <my-work-comp></my-work-comp>
        <footprints-comp></footprints-comp>

        <about-comp></about-comp>
        <footprints-comp></footprints-comp>
        <section class="board-container">
          <set-board v-for="(skillSet, idx) in skillSections" :key="idx" :trait="skillSet"></set-board>
        </section>
      </div>

    </main>
  </div>
</template>

<script>
// @ is an alias to /src


import Navbar from "@/components/navbar/Navbar";
import HeroComp from "@/components/hero/HeroComp";
import AboutComp from "@/components/about/aboutComp";
import SetBoard from "@/components/about/setBoard";
import FootprintsComp from "@/components/ui/footprintsComp";
import MyWorkComp from "@/components/my_work/myWorkComp";


export default {
  name: 'Home',
  components: {
    MyWorkComp,
    FootprintsComp,
    SetBoard,
    AboutComp,
    HeroComp,
    Navbar
  },
  data() {
    return {
      skillSections: [{
        title: 'Education',
        items: ["Google UXDesign Professional Certificate"],
      },
        {
          title: 'Skills',
          items: ["User Research", "Prototyping", "Usability testing", "Storyboarding", "Wireframing"],
        },
        {
          title: 'Tools',
          items: ["Figma", "Adobe XD",],
        }
      ],
    }
  }

}
</script>

<style lang="scss">
.home {
  position: relative;
}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: white;
}

.board-container {
  display: flex;
  justify-content: space-around;
}


</style>
