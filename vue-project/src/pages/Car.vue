<template>
  <div class="container">
    <h1>Car №{{ id }}</h1>
    <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
    <br>
    <div class="pt-3">
      <router-link
        tag="button"
        :to="{name: 'carFull', params: {id: id}, query: {name:'Mazda', year: '2019'}, hash: '#scroll'}"
        class="btn btn-sm btn-primary "
      >
        Full info
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        // id: this.$router.currentRoute.params['id']
        id: this.$route.params['id']
      }
    },
    watch: {
      $route(toR) {
        this.id = toR.params['id']
      }
    },
    methods: {
      goBackToCars() {
        this.$router.push('/cars')
      },
    },
    beforeRouteLeave (to, fromR, next) {
      console.log('beforeRouteLeave');
      next();
    }

  }
</script>

<style scoped>

</style>
