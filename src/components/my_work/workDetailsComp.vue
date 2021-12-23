<template>
  <div class="container">
    <div class="background"></div>
    <table>
      <tr>
        <td class="yellow-square">My Role:</td>
        <td>{{ dataSet.role }}</td>
      </tr>
      <tr>
        <td class="yellow-square">Company:</td>
        <td>{{ dataSet.company }}</td>
      </tr>
      <tr>
        <td class="yellow-square">Date:</td>
        <td>{{ dataSet.date }}</td>
      </tr>
      <tr>
        <td class="yellow-square">The Project:</td>
        <td>{{ dataSet.projectType }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "workDetailsComp",
  props: ['dataSet']
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  padding: 3rem;


  table {
    font-size: 2rem;
    font-weight: 900;

    td {
      padding: 1.1rem;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

    }
  }

  .yellow-square {

    border: none;
    color: white;
  }

  .background {
    width: 50%;
    position: absolute;
    background-color: var(--color-yellow);
    left: 0;
    top: 0;
    height: 100%;
    z-index: -1;
  }
}
</style>
