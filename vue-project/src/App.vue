<template>
  <div id="app">
    <Header />
    <div class="pt-3">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

  import Header from './components/Header'

  export default {
    data() {
      return {
        email: '',
        password: '',
        password2: '',
        minL,
      }
    },
    components: {
      Header,
    }
  }
</script>

<style scoped>

</style>
