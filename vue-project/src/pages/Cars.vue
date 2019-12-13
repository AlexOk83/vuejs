<template>
  <div class="container">
    <h1>Cars page</h1>
    <ul>
      <router-link
        tag="li"
        v-for="car in 5"
        :to="'/car/' + car"
        :key="car"
      >Car {{car}}</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
