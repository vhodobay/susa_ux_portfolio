<template>
  <div class="footprint-container" id="footprints" @mouseenter="animateBigFeet">
    <div class="yellow-container">
      <div class="yellow-line" :class="{ 'go-bigger': seq_1 }"></div>
      <br/>
      <div class="yellow-line" :class="{ 'go-bigger': seq_2 }"></div>
      <br/>
      <div class="yellow-line" :class="{ 'go-bigger': seq_3 }"></div>
      <br/>
      <div class="yellow-line" :class="{ 'go-bigger': seq_4 }"></div>
      <br/>
      <div class="yellow-line" :class="{ 'go-bigger': seq_5 }"></div>
      <br/>
      <div class="yellow-line" :class="{ 'go-bigger': seq_6 }"></div>
      <br/>
    </div>

  </div>
</template>

<script>

export default {
  name: "footprintsComp",
  data() {
    return {
      upAndDown: false,
      startFeetBig: false,
      inView: false,
      interval: 550,
      speed: 350,
      seq_1: false,
      seq_2: false,
      seq_3: false,
      seq_4: false,
      seq_5: false,
      seq_6: false,
    };
  },
  props: ['isUserScrolling',],
  mounted() {
    this.seqStarter();
  },
  beforeUnmount() {
  },
  watch: {
    isUserScrolling() {
      this.upAndDown = !this.upAndDown

      const bird = document.querySelector('.birds')
      if (this.upAndDown) {
        bird.animate([{}, {transform: 'rotate(35deg)'}], {delay: 100, duration: 1000, fill: 'forwards'})
      } else {
        bird.animate([{}, {transform: 'rotate(-15deg)'}], {delay: 100, duration: 1000, fill: 'forwards'})

      }
    },
    startFeetBig() {
      this.animateBigFeet();
    },
    seq_1() {
      if (this.seq_1 === true) {
        setTimeout(() => {
          this.seq_1 = false;
          this.seq_2 = true;
        }, this.speed);
      }
    },
    seq_2() {
      if (this.seq_2 === true) {
        setTimeout(() => {
          this.seq_2 = false;
          this.seq_3 = true;
        }, this.speed);
      }
    },
    seq_3() {
      if (this.seq_3 === true) {
        setTimeout(() => {
          this.seq_3 = false;
          this.seq_4 = true;
        }, this.speed);
      }
    },
    seq_4() {
      if (this.seq_4 === true) {
        setTimeout(() => {
          this.seq_4 = false;
          this.seq_5 = true;
        }, this.speed);
      }
    },
    seq_5() {
      if (this.seq_5 === true) {
        setTimeout(() => {
          this.seq_5 = false;
          this.seq_6 = true;
        }, this.speed);
      }
    },
    seq_6() {
      if (this.seq_6 === true) {
        setTimeout(() => {
          this.seq_6 = false;
          this.seqStarter();
        }, this.speed);
      }
    },
  },
  methods: {
    seqStarter() {
      setTimeout(() => {
        this.seq_1 = true;
      }, 6000);
    },

  },
};
</script>

<style scoped lang="scss">
.footprint-container {
  width: 100%;
  height: 12rem;
  position: relative;
}

.yellow-container {
  position: absolute;
  left: -.4rem;
  top: 2.7rem;

  @media only screen and (min-width: 40em) {
    position: absolute;
    left: 2.6rem;
    top: 3.2rem;
  }

  width: 1rem;
}

.birds {
  position: absolute;
  top: 20%;
  left: 10%;
  @media only screen and (min-width: 40em) {
    display: none;
  }
}

.footprints {
  background-image: url("../../assets/images/SVG/footprints.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 50%;
  height: 5rem;
  width: 5rem;
  margin-bottom: 3rem;

  &:hover {
    transform: scale(1.2);
  }
}

#fp_1 {
  position: relative;
  left: 35vw;
}

#fp_2 {
  position: relative;
  left: 18vw;
}

.go-bigger {
  background-color: white;
}
</style>
