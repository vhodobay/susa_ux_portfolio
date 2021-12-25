<template>
  <navbar></navbar>
  <amplify-authenticator>
    <div class="container">
      <h2>HeroPage</h2>

      <div>
        <h3 :class="{'too-long': tooLongText}">Introduction text (max {{ textLengthLimit }} character): {{
            text.length
          }}</h3>
        <textarea id="text" rows="5" cols="44" name="text" v-model="text"></textarea>
      </div>
      <br>
      <div>
        <h3 :class="{'too-long' : tooLongQuote}">Quote (max {{ quoteTextLimit }} character): {{ quote.length }}</h3>
        <textarea id="quote" name="quote" rows="3" cols="44" v-model="quote"></textarea>
        <br>
        <label for="author">Author:</label><br>
        <input type="text" v-model="author" id="author">
      </div>
      <button v-on:click="createIntroText">Save</button>
      <br>
      <div>


        <input type="text" placeholder="title" v-model="name">
        <input type="text" placeholder="newSkill" v-model="newSkill">
      </div>
      <button @click="createSkillSet">Submit</button>

    </div>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>


import Navbar from "@/components/navbar/Navbar";


export default {
  name: "Edit",
  components: {Navbar},
  data() {
    return {
      text: '',
      quote: '',
      author: '',
      text1: "",
      text2: "",
      text3: "",
      name: "",
      newSkill: "",
      textLengthLimit: 400,
      quoteTextLimit: 150,
      skillSet_1: null
    }
  },
  computed: {
    tooLongText() {
      return this.text.length > this.textLengthLimit
    },
    tooLongQuote() {
      return this.quote.length > this.quoteTextLimit
    }
  },
  methods: {


  },
  created() {
  }
}
</script>

<style scoped>
label {
  font-size: 1.6rem;
  font-weight: bold;
}


button {
  margin: 1rem;
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 1rem;
}

.container {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.too-long {
  color: red;
}

</style>
