<template>
  <div>
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger"  @click="updateCounter(-1)">Subtract</button>
  </div>
</template>

<script>
  export default {
    methods: {
      updateCounter(val) {
        // this.$store.state.counter += val - изменение стейта напрямую
        // this.$store.commit('changeCounter', val) - изменение через mutations
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: val,
          timeOut: 200,
        }) // изменение через actions
      }
    }
  }
</script>

<style scoped>

</style>
