<template>
  <div v-if="contactData" class="container" :class="{'slide-in':clicked}">
    <span class="details name">{{contactData.name}}</span>
    <a href="mailto:contactData.email" class="details">{{contactData.email}}</a>
    <span class="details">{{contactData.phone}}</span>
    <br>
    <div  @click="$emit('closeContactMe')">
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>
      <span class="white-horizontal"></span>
      <span class="yellow-horizontal"></span>

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
  data(){
    return {
      contactData:null
    }
  },
  created() {
    this.fetchData()

  }, methods: {
    async fetchData(){
      try {
        const data = await sanity.fetch(query)
        this.contactData=data[0]

      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  z-index: 1;
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
  transform: translateX(-31rem);
  transition: all 1s ease;
}

.yellow-horizontal {
  display: inline-block;
  width: 2.5rem;
  height: .95rem;
  background-color: var(--color-yellow);
  //-webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  //clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  //border-radius: 1rem;
}

.white-horizontal {
  display: inline-block;
  width: 1rem;
  height: .92rem;
  background-color: transparent;
}
</style>
