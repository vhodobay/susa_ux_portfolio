import {createStore} from 'vuex'


export default createStore({
  state: {
    scrollToWork: false,
    scrollToAbout: false,
    
  },
  mutations: {
    setScrollToWork(state) {
      state.scrollToWork = !state.scrollToWork
    },
    setScrollToAbout(state) {
      state.scrollToAbout = !state.scrollToAbout
    }
  },
  actions: {},
  modules: {}
})
