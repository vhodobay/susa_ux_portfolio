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
      <!--      <div>-->
      <!--        <h2>About Section</h2>-->
      <!--        <textarea id="text1" name="text1" placeholder="text1" rows="3" cols="44" v-model="text1"></textarea>-->
      <!--        <textarea id="text2" name="text2" placeholder="text2" rows="3" cols="44" v-model="text2"></textarea>-->
      <!--        <textarea id="text3" name="text3" placeholder="text3" rows="3" cols="44" v-model="text3"></textarea>-->

      <!--        <br>-->
      <!--        <input type="text" placeholder="title" v-model="title">-->
      <!--        <input type="text" placeholder="newSkill" v-model="newSkill">-->
      <!--      </div>-->
      <!--      <button @click="createNewSkillData">Submit</button>-->

    </div>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import {API} from 'aws-amplify'
import {updateIntroductionText, createAbout} from '@/graphql/mutations'
import {getIntroductionText} from '@/graphql/queries'
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
      title: "",
      newSkill: "",
      textLengthLimit: 400,
      quoteTextLimit: 150,
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
    async getIntroText() {
      const introTexts = await API.graphql({
        query: getIntroductionText,
        variables: {id: "fe260315-4b54-4230-b4c3-cc46312d2630"}
      })
      this.text = introTexts.data.getIntroductionText.text
      this.quote = introTexts.data.getIntroductionText.quote
      this.author = introTexts.data.getIntroductionText.author
      console.log(introTexts)
    },
    async createIntroText() {

      const {text, author, quote} = this
      if (!text || text.length > this.textLengthLimit) return
      if (!author) return
      if (!quote || quote.length > this.quoteTextLimit) return
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
      this.text = ""
      this.author = ""
      this.quote = ""

    },
    async createNewSkillData() {
      const {text1, text2, text3} = this

      const data = {text1, text2, text3}
      await API.graphql({
        query: createAbout,
        variables: {input: data}
      })
      console.log(data)
    },
  },
  created() {
    this.getIntroText()
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
