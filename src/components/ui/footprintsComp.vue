<template>
  <div class="footprint-container" id="footprints" @mouseenter="animateBigFeet">
    <div class="yellow-container">
      <div class="yellow-line" :class="{ 'go-bigger': seq_1 }"></div>
      <br />
      <div class="yellow-line" :class="{ 'go-bigger': seq_2 }"></div>
      <br />
      <div class="yellow-line" :class="{ 'go-bigger': seq_3 }"></div>
      <br />
      <div class="yellow-line" :class="{ 'go-bigger': seq_4 }"></div>
      <br />
      <div class="yellow-line" :class="{ 'go-bigger': seq_5 }"></div>
      <br />
      <div class="yellow-line" :class="{ 'go-bigger': seq_6 }"></div>
      <br />
    </div>

    <div class="footprints" id="fp_1"></div>
    <div class="footprints" id="fp_2" key="1"></div>
    <div id="last-footprint" class="footprints" key="2"></div>
  </div>
</template>

<script>
export default {
  name: "footprintsComp",
  data() {
    return {
      startFeetBig: false,
      inView: false,
      interval: 550,
      seq_1: false,
      seq_2: false,
      seq_3: false,
      seq_4: false,
      seq_5: false,
      seq_6: false,
    };
  },
  mounted() {
    this.seqStarter();
  },
  beforeUnmount() {},
  watch: {
    startFeetBig() {
      this.animateBigFeet();
    },
    seq_1() {
      if (this.seq_1 === true) {
        setTimeout(() => {
          this.seq_1 = false;
          this.seq_2 = true;
        }, this.interval);
      }
    },
    seq_2() {
      if (this.seq_2 === true) {
        setTimeout(() => {
          this.seq_2 = false;
          this.seq_3 = true;
        }, this.interval);
      }
    },
    seq_3() {
      if (this.seq_3 === true) {
        setTimeout(() => {
          this.seq_3 = false;
          this.seq_4 = true;
        }, this.interval);
      }
    },
    seq_4() {
      if (this.seq_4 === true) {
        setTimeout(() => {
          this.seq_4 = false;
          this.seq_5 = true;
        }, this.interval);
      }
    },
    seq_5() {
      if (this.seq_5 === true) {
        setTimeout(() => {
          this.seq_5 = false;
          this.seq_6 = true;
        }, this.interval);
      }
    },
    seq_6() {
      if (this.seq_6 === true) {
        setTimeout(() => {
          this.seq_6 = false;
          this.seqStarter();
        }, this.interval);
      }
    },
  },
  methods: {
    seqStarter() {
      setTimeout(() => {
        this.seq_1 = true;
      }, 6000);
    },
    animateBigFeet() {
      const foot_1 = document.querySelector("#fp_1");
      const foot_2 = document.querySelector("#fp_2");
      const foot_3 = document.querySelector("#last-footprint");

      const animations = [{}, { transform: "scale(1.5)" }];
      const animationTiming_1 = {
        duration: this.interval,
        fill: "forwards",
        direction: "alternate-reverse",
        easing: "ease-in-out",
      };
      const animationTiming_2 = {
        duration: this.interval,
        fill: "forwards",
        direction: "alternate-reverse",
        easing: "ease-in-out",
        delay: 400,
      };
      const animationTiming_3 = {
        duration: this.interval,
        fill: "forwards",
        direction: "alternate-reverse",
        easing: "ease-in-out",
        delay: 800,
      };
      foot_1.animate(animations, animationTiming_1);
      foot_2.animate(animations, animationTiming_2);
      foot_3.animate(animations, animationTiming_3);
    },
  },
};
</script>

<style scoped lang="scss">
.footprint-container {
  width: 100%;
  position: relative;
}

.yellow-container {
  position: absolute;
  left: 2.6rem;
  top: 3rem;
  width: 1rem;
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
transform: scale(1.2)
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
</style>
