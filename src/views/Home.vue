<template>
  <div
      class="home"
      :class="[
      { 'bg-hero-in-view': heroInView },
      { 'bg-my-work-in-view': myWorkInView },
      { 'bg-about-in-view': aboutInView },
    ]"
  >
    <navbar
        id="navbar"
        @scroll-to-about="scrollTo('about-comp')"
        @scroll-to-top="scrollToTop"
        @scroll-to-work="scrollTo('my-work-comp')"
    ></navbar>
    <bottom-blur></bottom-blur>
    <div class="blur-effect"></div>
    <main class="main-container">
      <div class="content-section">
        <section id="hero-comp">
          <hero-comp
              :wide-screen="wideScreen"
              :in-view="heroInView"
          ></hero-comp>
        </section>

        <footprints-comp :in-view="heroInView"></footprints-comp>

        <section id="my-work-comp">
          <my-work-comp
              :in-view="myWorkInView"
              :wide-screen="wideScreen"
          ></my-work-comp>
        </section>
        <footprints-comp></footprints-comp>

        <section id="about-comp">
          <about-comp
              :wide-screen="wideScreen"
              :in-view="aboutInView"
          ></about-comp>
        </section>

        <footprints-comp></footprints-comp>
        <section class="board-container" id="skills">
          <set-board v-if="education"
              :traits="education" title="Education"
          ></set-board>
          <set-board v-if="skills"
              :traits="skills" title="Skills"
          ></set-board>
          <set-board v-if="tools"
              :traits="tools" title="Tools"
          ></set-board>
        </section>
      </div>
    </main>
  </div>
  <footer></footer>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/navbar/Navbar";
import HeroComp from "@/components/hero/HeroComp";
import AboutComp from "@/components/about/aboutComp";
import SetBoard from "@/components/about/setBoard";
import FootprintsComp from "@/components/ui/footprintsComp";
import MyWorkComp from "@/components/my_work/myWorkComp";
import BottomBlur from "@/components/ui/bottomBlur";
import sanity from '../client'
// import debounce from "lodash.debounce";

const eduQuery = `*[_type == "education"] {skill}`
const skillQuery = `*[_type == "skill"] {skill}`
const toolQuery = `*[_type == "tools"]{skill}`


export default {
  name: "Home",
  components: {
    BottomBlur,
    MyWorkComp,
    FootprintsComp,
    SetBoard,
    AboutComp,
    HeroComp,
    Navbar,
  },
  data() {
    return {
      currentScrollY: 0,
      handleDebounceScroll: null,
      isUserScrolling: false,
      intersectionObserver: null,
      heroInView: false,
      myWorkInView: false,
      aboutInView: false,
      skillsInView: false,
      education: [],
      skills:[],
      tools:[],
      skillSections: [
        {
          title: "Education",
          items: ["Google UXDesign Professional Certificate"],
        },
        {
          title: "Skills",
          items: [
            "User Research",
            "Prototyping",
            "Usability testing",
            "Storyboarding",
            "Wireframing",
          ],
        },
        {
          title: "Tools",
          items: ["Figma", "Adobe XD"],
        },
      ],
    };
  },
  methods: {
    async fetchEducation() {
      try {
        this.education = await sanity.fetch(eduQuery)
        this.skills = await sanity.fetch(skillQuery)
        this.tools = await sanity.fetch(toolQuery)

      } catch (e) {
        console.log(e)
      }
    },
    onElementIntersects(entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          this.heroInView = entry.target.id === "hero-comp";
          this.myWorkInView = entry.target.id === "my-work-comp";
          this.aboutInView = entry.target.id === "about-comp";
          this.skillsInView = entry.target.id === "skills";
        }
      });
    },
    scrollToTop() {
      setTimeout(() => {
        let element = document.getElementById("hero-comp");
        element.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    },
    scrollTo(id) {
      setTimeout(() => {
        let element = document.getElementById(id);
        element.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    },
    handleScroll() {
      this.isUserScrolling = this.currentScrollY > window.scrollY;

      setTimeout(() => {
        this.currentScrollY = window.scrollY;
      }, 100);
    },
  },
  mounted() {
    this.fetchEducation()
    this.currentScrollY = window.scrollY;

    // this.handleDebounceScroll = debounce(this.handleScroll, 200);
    // window.addEventListener("scroll", this.handleDebounceScroll);

    this.intersectionObserver = new IntersectionObserver(
        this.onElementIntersects,
        {
          rootMargin: "0px",
          threshold: 0.5,
        }
    );
    this.intersectionObserver.observe(document.querySelector("#hero-comp"));
    this.intersectionObserver.observe(document.querySelector("#my-work-comp"));
    this.intersectionObserver.observe(document.querySelector("#about-comp"));
    this.intersectionObserver.observe(document.querySelector("#skills"));
  },
  computed: {
    wideScreen() {
      return window.innerWidth >= 500;
    },
  },
  watch: {
    isUserScrolling() {
      console.log(
          "scrolled",
          this.isUserScrolling,
          this.currentScrollY,
          window.scrollY
      );
    },
  },
};
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
  transition: all 0.3s linear;
  background: rgba(252, 252, 252, 0.4);

  &:hover {
    background: rgba(252, 252, 252, 1);
  }
}

.board-container {
  display: flex;
  justify-content: space-around;
}

footer {
  width: 100%;
  height: 3rem;
}
</style>
