<template>
  <div v-if="contactData" class="container" :class="{'slide-in':clicked}">
    <span class="details name">{{ contactData.name }}</span>
    <a href="mailto:contactData.email" class="details">{{ contactData.email }}</a>
    <span class="details">{{ contactData.phone }}</span>
    <br>
    <div @click="$emit('closeContactMe')">
      <span v-for="n in 8" :key="n">
        <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      </span>
    </div>
  </div>
</template>

<script>
import sanity from '../client'


const query = `*[_type == "contact"] {name, email, phone}`
export default {
  name: "contactMe",
  props: ["clicked"],
  emits: ["closeContactMe"],
  data() {
    return {
      contactData: null
    }
  },
  mounted() {
    this.animateYellowLine()

  },
  created() {
    this.fetchData()

  }, methods: {
    async fetchData() {
      try {
        const data = await sanity.fetch(query)
        this.contactData = data[0]

      } catch (e) {
        console.log(e)
      }
    },
    animateYellowLine() {
      setTimeout(() => {
        const elements = document.querySelectorAll('.yellow-horizontal')

        elements.forEach((element, idx) => {

          element.animate([
            {}, {opacity: 0}, {opacity: 1}
          ], {
            duration: 1600, delay: idx * 1400 + idx * 400, iterations: Infinity, easing: 'ease-out'
          })
        })
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  z-index: 6;
  right: -31.5rem;
  top: 6rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  border: .2rem solid var(--color-petrol-blue);
  border-radius: 2rem 0 0 2rem;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .4);
  transition: all 1s ease;

  a {
    text-decoration: none;
    font-weight: bolder;
    color: var(--color-petrol-blue);

  }
}


.name {
  font-weight: 800
}

.details {
  padding: .6rem;
  font-size: 2rem;

}

.slide-in {
  transform: translateX(-35rem);
  transition: all 1s ease;
}

.yellow-horizontal {
  display: inline-block;
  width: 2.5rem;
  height: .95rem;
  background-color: var(--color-yellow);
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  border-radius: 1rem;
  //clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)
}


.white-horizontal {
  display: inline-block;
  width: 1rem;
  height: .92rem;
  background-color: transparent;
}
</style>
