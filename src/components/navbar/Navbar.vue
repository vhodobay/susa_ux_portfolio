<template>
  <div class="container">
    <div class="name">
      <router-link to="/">Susa Horváth</router-link>

    </div>

    <div class="menu-items">
      <ul>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
  border-bottom: solid .1rem black;
  text-decoration: none;

}

.name {
  text-transform: uppercase;
  align-self: center;
  margin: 0 1rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: black;
      text-decoration: none;
      font-size: 1.6rem;

    }
  }
}

.menu-items {
  display: inline;
  text-transform: uppercase;

  ul {
    list-style: none;

    li {
      display: inline;
      margin: 0 1rem;

      a {
        text-decoration: none;
      }
    }
  }

}
</style>
