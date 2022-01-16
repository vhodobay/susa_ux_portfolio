<template>
  <div>
    <div class="container">
      <div class="name">
        <span @click="$emit('scrollToTop')"
        ><router-link to="/">Susa Horvath</router-link></span>
      </div>
      <div class="menu-items">
        <transition name="fade">
          <ul >
            <li v-if="wideScreen" @click="menuClicked('my-work-comp')">
              <router-link v-if="!home" to="/">My Work</router-link>
              <span v-else>My Work</span>
            </li>
            <li v-if="wideScreen" @click="menuClicked('about-comp')">
              <router-link to="/" v-if="!home">About</router-link>
              <span v-else>About</span>
            </li>
            <li @click="$emit('contactMe')">
              Contact
            </li>
          </ul>
        </transition>
      </div>
    </div>

    <div class="hamburger-button hamburger-button">
      <button @click.prevent="setVisibleMenu">
        <svg v-if="!visibleMenu" style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#216477" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
        </svg>
        <svg v-else style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#216477"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
        </svg>
      </button>
    </div>


    <div class="mobil-menu">
      <transition name="slide">
        <ul v-show="visibleMenu">
          <li @click="menuClicked('my-work-comp')">
            <router-link v-if="!home" to="/">My Work</router-link>
            <span v-else>My Work</span>
          </li>
          <li @click="menuClicked('about-comp')">
            <router-link to="/" v-if="!home">About</router-link>
            <span v-else>About</span>
          </li>
          <li @click="menuClicked('contactMe')">
            <span >Contact</span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["wideScreen", "home"],
  emits: ["scrollToTop", "contactMe"],
  data() {
    return {
      visibleMenu: false
    }
  },
  methods: {
    setVisibleMenu() {
      this.visibleMenu = !this.visibleMenu
    },
    menuClicked(instruction) {
      this.visibleMenu = false
      switch (instruction) {
        case 'my-work-comp':
          this.$store.commit('setScrollToWork')
          break
        case 'about-comp':
          this.$store.commit('setScrollToAbout')
          break
        case 'contactMe':
          this.$emit('contactMe')
      }
    }
  }
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-18rem);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}

.container {
  display: flex;
  width: 100vw;
  position: relative;
  @media only screen and (min-width: 40em) {
    padding: 1rem 0;
    width: 100vw;
    font-size: 1.6rem;
    font-weight: 600;
    justify-content: space-between;
    text-decoration: none;
    position: relative;

  }
}

.name {
  text-transform: uppercase;
  font-size: 1.6rem;
  align-self: flex-end;
padding: 2rem;
  @media only screen and (min-width: 40em) {
    padding: 0;
    margin: 0 4rem;
    font-size: 2rem;
    cursor: pointer;
    color: #216477;
    transition: all 0.2s linear;
  }

  a {
    color: #216477;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.02);
    //text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  }
}

.menu-items {
  display: inline;
  text-transform: uppercase;


  ul {
    display: none;
    flex-direction: column;
    @media only screen and (min-width: 40em) {
      z-index: 6;
      display: block;
      list-style: none;
      margin: 1rem 5rem 0 0;
    }


    li {
      display: inline;
      margin: 0 1rem;
      color: #216477;
      font-size: 2rem;
      text-decoration: none;
      cursor: pointer;

      a {
        color: #216477;
        font-size: 2rem;
        text-decoration: none;
      }
    }
  }

  input {
    padding: 1rem;
  }
}

.hamburger-button {
  position: absolute;
  z-index: 5;

  right: 1rem;
  top: 2rem;
  @media only screen and (min-width: 40em) {
    display: none;
  }

  button {
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
    border: solid 2px var(--color-petrol-blue);
  }
}

.mobil-menu {
  z-index: 6;
  position: absolute;
  top: -1.5rem;
  left: 0;
  text-transform: uppercase;

  ul {
    list-style: none;
    background-color: white;
    padding: 2rem 4rem;
    border-bottom: solid 2px var(--color-petrol-blue);
    border-radius: 2rem;
  }

  li {
    padding: 1.4rem;
    color: #216477;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;

    a {
      color: #216477;
      font-size: 2rem;
      text-decoration: none;
    }
  }
}

</style>
