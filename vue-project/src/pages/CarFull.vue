<template>
  <div>
    <hr>
    <h2>{{ name }}</h2>
    <h3>{{ year }}</h3>

    <div class="scroll" />

    <h4 id="scroll">hello</h4>

    <div class="scroll" />
  </div>
</template>

<script>
  export default {
    computed: {
      name() {
        return this.$route.query.name;
      },
      year() {
        return this.$route.query.year;
      }
    },
    beforeRouteEnter(to, fromR, next) {
      console.log('beforeRouteEnter');
      next();
    }
  }
</script>

<style scoped>
  .scroll {
    width: 100px;
    height: 1000px;
    background-color: #ccc;
  }
</style>
