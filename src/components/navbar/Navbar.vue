<template>
  <div>
    <div class="container">
      <div class="name">
        <span @click="$emit('scrollToTop')"
          ><router-link to="/">Susa Horvath</router-link></span
        >
      </div>

      <div class="menu-items">
        <ul>
          <li @click="$emit('scrollToWork')">My Work</li>
          <li @click="$emit('scrollToAbout')">About</li>
          <li>
            <a href="mailto:susainthekitchen@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  emits: ["scrollToTop", "scrollToWork", "scrollToAbout"],
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  text-decoration: none;
  position: relative;
}

.name {
  text-transform: uppercase;
  align-self: flex-end;
  margin: 0 4rem;
  font-size: 2rem;
  cursor: pointer;
  color: #216477;
  transition: all 0.3s linear;

  a {
    color: #216477;
    font-size: 2rem;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.04);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
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
