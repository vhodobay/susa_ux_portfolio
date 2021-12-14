<template>
  <div class="container">
    <div class="daru-left">
      <img src="../../assets/images/SVG/daru.svg" alt="daru">
    </div>
    <div class="daru-right_1">
      <img src="../../assets/images/SVG/daru.svg" alt="daru">
    </div>
    <div class="daru-right_2">
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

    <div class="qoute-text">
      <blockquote>
        &quot;
        {{ introQuote }}
        &quot;
      </blockquote>
      <cite>
        &mdash; {{ quoteAuthor }} &mdash;
      </cite>
    </div>
    <div class="footprints">
      <img src="../../assets/images/SVG/footprints.svg" alt="footprints">
    </div>

  </div>
</template>

<script>
export default {
  name: "HeroComp",
  data() {
    return {
      introText: "Hi, I'm Susa, Berlin based UX designer life long in training." +
          "As a mother my super skill is emphaty, my must is a good logistic skill and always find a way to reach win-win situations.",
      introQuote: "We should not feel embarrassed by our difficulties, only by our failure to grow anything beautiful from them. \n",
      quoteAuthor: "Alain de Botton"
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  margin-top: 6rem;
  min-height: 100vh;

}

.daru-left {
  width: 15rem;
  position: absolute;
  top: 10rem;
  left: 2rem;

}

.daru-right_1 {
  width: 22rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  transform: scaleX(-1);
}

.daru-right_2 {
  width: 22rem;
  position: absolute;
  top: 40vh;
  right: 2rem;
  transform: scaleX(-1) rotate(40deg);
}

.text-box {
  position: absolute;
  margin-top: 40vh;
  transform: translateY(-50%);
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

.qoute-text {
  position: absolute;
  bottom: 20vh;
  text-align: center;
  width: 100%;
  font-size: 1.6rem;
}

.footprints {
  position: absolute;
  right: 50vw;
  bottom: 3rem;
  width: 5rem;
}

</style>
