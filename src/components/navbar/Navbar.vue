<template>
  <div>
    <div class="container">

      <div class="name">

        <router-link to="/">Susa Horváth</router-link>

      </div>

      <div class="menu-items">
        <ul>
          <li>
            <router-link to="/my-work">My Work</router-link>
          </li>
          <li>
<!--            <router-link to="/about">About</router-link>-->
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

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
  text-decoration: none;
  position: relative;
}



.name {
  text-transform: uppercase;
  align-self: flex-end;
  margin: 0 4rem;
  font-size: 2rem;


  a {
    font-weight: bold;
    color: #216477;
    text-decoration: none;

    &.router-link-exact-active {
      color: #216477;
      text-decoration: none;
    }
  }
}

.menu-items {
  display: inline;
  text-transform: uppercase;

  ul {
    list-style: none;
    margin: 4rem 5rem 0 0;

    li {
      display: inline;
      margin: 0 1rem;

      a {
        color: #216477;
        font-size: 2rem;
        text-decoration: none;

      }
    }
  }
}

</style>
