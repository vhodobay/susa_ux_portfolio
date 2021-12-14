<template>
  <div class="container">
    <div class="name">
      Susa Horvath
    </div>

    <div class="menu-items">
      <ul>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          <a href="#">About</a>
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
}

.name {
  text-transform: uppercase;
  align-self: center;
  margin: 0 1rem;
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
