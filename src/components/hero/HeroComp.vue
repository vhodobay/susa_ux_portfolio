<template>
  <div class="container">
    <div v-if="wideScreen" class="daru-left">
      <img src="../../assets/images/SVG/daru.svg" alt="daru">
    </div>
    <div v-if="wideScreen" class="daru-right_1">
      <img src="../../assets/images/SVG/daru.svg" alt="daru">
    </div>
    <div v-if="wideScreen" class="daru-right_2" :class="{opt_1: !bottomInView, opt_2:bottomInView}">
      <img src="../../assets/images/SVG/daru.svg" alt="daru">
    </div>

    <div class="text-box">

      <div class="text-image">
        <img src="../../assets/images/susaport.jpg" alt="susa image">
      </div>
      <div class="text-text">
        <p>{{ introText }}</p>
      </div>
    </div>
  </div>

  <the-quote class="quote" :intro-quote="introQuote" :quote-author="quoteAuthor"></the-quote>

  <div class="footprint-container">
    <div class="footprints fp_1"></div>
    <transition-group name="fade">
      <div v-show="bottomInView" class="footprints fp_2" key="1"></div>
      <div v-show="bottomInView" class="footprints fp_3" key="2"></div>
    </transition-group>
  </div>
  <div id="hero-bottom"></div>
</template>

<script>
import TheQuote from "@/components/hero/theQuote";


export default {
  name: "HeroComp",
  components: {TheQuote},
  data() {
    return {
      introText: "Hi, I'm Susa, Berlin based UX designer life long in training." +
          "As a mother my super skill is emphaty, my must is a good logistic skill and always find a way to reach win-win situations.",
      introQuote: "We should not feel embarrassed by our difficulties, only by our failure to grow anything beautiful from them. \n",
      quoteAuthor: "Alain de Botton",
      bottomInView: false,
      intersectionObserver: null
    }
  },
  methods: {
    onElementIntersects(entries) {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          this.bottomInView = true

        }, 3000)
      }
    }
  },
  mounted() {
    this.intersectionObserver = new IntersectionObserver(this.onElementIntersects, {
      rootMargin: '0px',
      threshold: 1.0
    })
    this.intersectionObserver.observe(document.querySelector('#hero-bottom'))
  },
  beforeUnmount() {
    this.intersectionObserver.unobserve(document.querySelector('#hero-bottom'))
  },
  computed: {
    wideScreen() {
      return window.innerWidth >= 500;
    }
  }

}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  margin-top: 7rem;

}

.daru-left {
  width: 15rem;
  position: absolute;
  top: 10%;
  left: 2rem;

}

.daru-right_1 {
  width: 22rem;
  position: absolute;
  top: 3vh;
  right: 2rem;
  transform: scaleX(-1);
}

.daru-right_2 {
  width: 22rem;
  position: absolute;
  top: 40vh;
  right: 2rem;
}

.opt_1 {
  transform: scaleX(-1);
}

.opt_2 {
  transform: scaleX(-1) rotate(40deg);
  transition: all 1s;

}

.text-box {
  position: relative;
  top: 5vh;
  display: flex;
  justify-content: center;
}

.text-image {
  min-width: 20%;

  img {
    width: 20vw;
    margin: 2.6rem;
  }
}

.text-text {
  width: 30%;
  font-size: 2.6rem;
  align-self: center;
}

.footprint-container {
  width: 100%;
}

.footprints {
  background-image: url("../../assets/images/SVG/footprints.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 3rem auto;
  height: 5rem;
  width: 5rem;
}

.fp_1 {
  transform: translateX(25vw);
}

.fp_2 {
  transform: translateX(12vw);
}

.fp_3 {
  transition: .3s ease;

  &:hover {
    transform: scale(1.2);
  }
}

.quote {
  position: relative;
  top: 5vh;
}

#hero-bottom {
  height: 1px;
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s 3s;
}

</style>
