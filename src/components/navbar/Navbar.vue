<template>
  <div>
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
    <div class="line"></div>

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
  text-decoration: none;
  position: relative;
}

.bar-background {
  position: absolute;
  top: 1rem;
  right: 0;
  padding: 0 2rem;
  z-index: -1;
  height: .6rem;
  width: 100%;

}

.name {
  text-transform: uppercase;
  align-self: center;
  margin: 0 4rem;
  font-size: 2rem;
  color: #2c3e50;


  a {
    font-weight: bold;
    color: #2c3e50;

    text-decoration: none;

    &.router-link-exact-active {
      color: black;
      text-decoration: none;
    }
  }
}

.menu-items {
  display: inline;


  ul {
    list-style: none;
    margin: 4rem 5rem 0 0;

    li {
      display: inline;
      margin: 0 1rem;

      a {
        color: #2c3e50;
        font-size: 2rem;
        text-decoration: none;

      }
    }
  }
}

.line {

  display: block;
  background-image: url("../../assets/images/SVG/Asset 5.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1rem;
  width: 100%;
}
</style>
