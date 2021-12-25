<template>
  <div class="footprint-container" id="footprints">
    <div class="yellow-container">
      <div class="yellow-line" :class="{'go-bigger' :seq_1}"></div>
      <br>
      <div class="yellow-line" :class="{'go-bigger' :seq_2}"></div>
      <br>
      <div class="yellow-line" :class="{'go-bigger' :seq_3}"></div>
      <br>
      <div class="yellow-line" :class="{'go-bigger' :seq_4}"></div>
      <br>
      <div class="yellow-line" :class="{'go-bigger' :seq_5}"></div>
      <br>
      <div class="yellow-line" :class="{'go-bigger' :seq_6}"></div>
      <br>


    </div>

    <div class="footprints" :class="{'fp_1-scroll': inView, 'fp_1': !inView}"></div>
    <div class="footprints" :class="{'fp_2-scroll': inView, 'fp_2': !inView}" key="1"></div>
    <div id="last-footprint" class="footprints" :class="{'fp_3-scroll': inView, 'fp_3': !inView}" key="2"></div>

  </div>
</template>

<script>
export default {
  name: "footprintsComp",

  data() {
    return {
      intersectionObserver: null,
      inView: false,
      interval: 150,
      seq_1: false,
      seq_2: false,
      seq_3: false,
      seq_4: false,
      seq_5: false,
      seq_6: false,
    }
  },
  mounted() {
    this.seqStarter()
    this.intersectionObserver = new IntersectionObserver(
        this.onElementIntersects, {
          rootMargin: '0px',
          threshold: 0.9
        }
    );
    this.intersectionObserver.observe(document.getElementById('last-footprint'))
  },
  beforeUnmount() {
    this.intersectionObserver.unobserve(document.getElementById('last-footprint'))
  },
  watch: {
    seq_1() {
      if (this.seq_1 === true) {
        setTimeout(() => {
          this.seq_1 = false
          this.seq_2 = true
        }, this.interval)
      }
    },
    seq_2() {
      if (this.seq_2 === true) {
        setTimeout(() => {
          this.seq_2 = false
          this.seq_3 = true
        }, this.interval)
      }
    },
    seq_3() {
      if (this.seq_3 === true) {
        setTimeout(() => {
          this.seq_3 = false
          this.seq_4 = true
        }, this.interval)
      }
    },
    seq_4() {
      if (this.seq_4 === true) {
        setTimeout(() => {
          this.seq_4 = false
          this.seq_5 = true
        }, this.interval)
      }
    },
    seq_5() {
      if (this.seq_5 === true) {
        setTimeout(() => {
          this.seq_5 = false
          this.seq_6 = true
        }, this.interval)
      }
    },
    seq_6() {
      if (this.seq_6 === true) {
        setTimeout(() => {
          this.seq_6 = false
          this.seqStarter()
        }, this.interval)
      }
    },
  },
  methods: {
    onElementIntersects(entries) {
      if (entries[0].isIntersecting) {
        this.inView = true
        setTimeout(() => {
          this.inView = false
        }, 4000)
      }
    },
    seqStarter() {
      setTimeout(() => {
        this.seq_1 = true

      }, 6000)
    }
  }
}
</script>

<style scoped>

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
}

.fp_1 {
  transform: translateX(35vw);
  transition: all .5s ease-in-out;
}

.fp_1-scroll {
  transform: translateX(35vw) scale(1.3);
  transition: .5s ease-in-out;
}


.fp_2 {
  transform: translateX(24vw);
  transition: .5s ease-in-out 1s;

}

.fp_2-scroll {
  transform: translateX(24vw) scale(1.3);
  transition: .5s ease-in-out 1s;
}

.fp_3 {
  transform: translateX(12vw);
  transition: .5s ease-in-out 2s;
}

.fp_3-scroll {
  transform: translateX(12vw) scale(1.3);
  transition: .5s ease-in-out 2s;
}

.go-bigger {
  opacity: 0;
  transition: all .2s ease-in-out;
}
</style>
