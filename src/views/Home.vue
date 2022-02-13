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
        class="navbar-class"
        @scroll-to-top="scrollToTop"
        @contact-me="contactMeStart"
        home="true"
        :wide-screen="wideScreen"
    ></navbar>
    <contact-me :clicked="contactMe" @close-contact-me="contactMeStart"></contact-me>
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

        <footprints-comp></footprints-comp>
        <vonal-gomb-comp @on-clicked="heroButtonClicked" :wide-screen="wideScreen"></vonal-gomb-comp>

        <section id="my-work-comp">
          <my-work-comp
              :in-view="myWorkInView"
              :wide-screen="wideScreen"
          ></my-work-comp>
        </section>

        <footprints-comp></footprints-comp>
        <vonal-gomb-comp @on-clicked="recipesClicked" :wide-screen="wideScreen">my recipes</vonal-gomb-comp>

        <section id="about-comp">
          <about-comp :wide-screen="wideScreen"
                      :in-view="aboutInView"
          ></about-comp>
        </section>

        <footprints-comp></footprints-comp>
        <vonal-gomb-comp @on-clicked="pdfButtonClicked" :wide-screen="wideScreen">
          <a style="text-decoration: none; color: white;" href="/files/Resume_Susa.pdf">my resume</a>
        </vonal-gomb-comp>

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
import {defineAsyncComponent} from 'vue'
import Navbar from "@/components/navbar/Navbar";
import HeroComp from "@/components/hero/HeroComp";
import AboutComp from "@/components/about/aboutComp";
import SetBoard from "@/components/about/setBoard";
import MyWorkComp from "@/components/my_work/myWorkComp";
import BottomBlur from "@/components/ui/bottomBlur";
import sanity from '../client'
import VonalGombComp from "@/components/ui/vonalGombComp";
import FootprintsComp from "@/components/ui/footprintsComp";

// import debounce from "lodash.debounce";

const ContactMe = defineAsyncComponent(() => import("@/components/contactMe"))

const eduQuery = `*[_type == "education"] {skill}`
const skillQuery = `*[_type == "skill"] {skill}`
const toolQuery = `*[_type == "tools"]{skill}`


export default {
  name: "Home",
  components: {
    FootprintsComp,
    VonalGombComp,
    ContactMe,
    BottomBlur,
    MyWorkComp,
    SetBoard,
    AboutComp,
    HeroComp,
    Navbar,
  },
  data() {
    return {
      contactMe: false,
      currentScrollY: 0,
      isUserScrolling: false,
      intersectionObserver: null,
      heroInView: false,
      myWorkInView: false,
      aboutInView: false,
      skillsInView: false,
      education: [],
      skills: [],
      tools: [],
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
    contactMeStart() {
      this.contactMe = !this.contactMe
    },
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
          return
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
          behavior: "smooth", block: "start"
        });
      }, 200);
    },
    handleScroll() {
      this.isUserScrolling = this.currentScrollY > window.scrollY;

      setTimeout(() => {
        this.currentScrollY = window.scrollY;
      }, 200);
    },
    heroButtonClicked(){
      console.log('clicked')
    },
    pdfButtonClicked(){
      console.log('clicked')
    },
    recipesClicked(){
      window.location.href = "https://lilafuge.hu/author/susainthekitchen/";
    }
  },
  mounted() {
    this.fetchEducation()
    this.currentScrollY = window.scrollY;

    // this.handleDebounceScroll = debounce(this.handleScroll, 200);
    window.addEventListener("scroll", this.handleScroll);

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
    scrollToWorkState() {
      return this.$store.state.scrollToWork
    },
    scrollToAboutState() {
      return this.$store.state.scrollToAbout
    },
    wideScreen() {
      return window.innerWidth >= 600;
    },
  },
  watch: {
    scrollToWorkState() {
      this.scrollTo('my-work-comp')
    },
    scrollToAboutState() {
      this.scrollTo('about-comp')
    }
  },
};
</script>

<style lang="scss">


.board-container {
  width: 100%;
  @media only screen and (min-width: 40em) {
    display: flex;
    justify-content: space-around;
  }
}

footer {
  width: 100%;
  height: 3rem;
}
</style>
