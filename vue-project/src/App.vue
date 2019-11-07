<template>
  <div id="app">
      <h2>{{ title }}</h2>
      <h2>{{ title | lowercase }}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <app-list></app-list>
  </div>
</template>

<script>

  import ListMixin from './listMixin';

export default {
  data () {
    return {
      title: 'Hello',
      names: ['Sergey', 'Alena', 'Ivan']
    }
  },
  mixins: [ListMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
}
</script>

<style>

</style>
