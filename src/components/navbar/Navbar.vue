<template>
  <div>
    <div class="container">
      <div class="name">
        <span @click="$emit('scrollToTop')"
        ><router-link to="/">Susa Horvath</router-link></span
        >
      </div>

      <div class="menu-items">
        <transition name="fade">
          <ul v-if="home">
            <li v-if="wideScreen" @click="$emit('scrollToWork')">My Work</li>
            <li v-if="wideScreen" @click="$emit('scrollToAbout')">About</li>
            <li @click="$emit('contactMe')">
              Contact
            </li>
          </ul>
          <ul v-else>
            <li>
              <router-link to="/">Back</router-link>
            </li>
          </ul>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["wideScreen", "home"],
  emits: ["scrollToTop", "scrollToWork", "scrollToAbout", "contactMe"],
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

.container {
  padding: 1rem 0;
  width: 100vw;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  text-decoration: none;
  position: relative;
  @media only screen and (min-width: 40em) {
    padding: 0;
  }
}

.name {
  text-transform: uppercase;
  align-self: flex-end;
  margin: 0 4rem;
  font-size: 2rem;
  cursor: pointer;
  color: #216477;
  transition: all 0.2s linear;

  a {
    color: #216477;
    font-size: 2rem;
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
    list-style: none;
    margin: 1rem 5rem 0 0;

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
}
</style>
