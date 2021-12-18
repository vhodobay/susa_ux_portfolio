<template>
<!--  <amplify-authenticator>-->
  <div class="container">
    <h1>HeroPage</h1>

    <div >
      <h2>Introduction text (max 200 character):</h2>
      <textarea id="text" rows="5" cols="44" name="text" v-model="text" ></textarea>
    </div>
    <br>
    <div >
      <h2>Quote (max 150 character):</h2>
      <textarea id="quote" name="quote" rows="3" cols="44" v-model="quote" ></textarea>
      <br>
      <label for="author">Author:</label><br>
      <input type="text" v-model="author" id="author">
    </div>
    <button v-on:click="createIntroText">Save</button>

  </div>
<!--    <amplify-sign-out></amplify-sign-out>-->
<!--  </amplify-authenticator>-->
</template>

<script>
import {API} from 'aws-amplify'
import {updateIntroductionText,} from '@/graphql/mutations'
import {getIntroductionText} from '@/graphql/queries'


export default {
  name: "Edit",
  data() {
    return {
      text: '',
      quote: '',
      author: ''
    }
  },
  methods: {
    async getIntroText() {
      const introTexts = await API.graphql({
        query: getIntroductionText,
        variables: {id: "fe260315-4b54-4230-b4c3-cc46312d2630"}
      })
      this.text = introTexts.data.getIntroductionText.text
      this.quote = introTexts.data.getIntroductionText.quote
      this.author = introTexts.data.getIntroductionText.author
    },
    async createIntroText() {
      const {text, author, quote} = this
      if (!text || text.length > 200) return
      if (!author) return
      if (!quote || quote.length > 150) return
      const introStuff = {
        id: "fe260315-4b54-4230-b4c3-cc46312d2630",
        text,
        quote,
        author,
      }
      await API.graphql({
        query: updateIntroductionText,
        variables: {input: introStuff},
      });
      this.text = '';
    }
  },
  created() {
    this.getIntroText()
  }
}
</script>

<style scoped>
label{
  font-size: 1.6rem;
  font-weight: bold;
}


button {
  margin: 1rem;
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 1rem;
}


</style>
