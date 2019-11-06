<template>
  <div id="app">
      <h1>Parent: {{ carName }}</h1>


      <app-car
        :carName="carName"
        :carYear="carYear"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName = $event"
        @counterUpdated="counter = $event"
      />

      <app-counter
        :counter="counter"
      />
  </div>
</template>

<script>

  import Car from './car'
  import Counter from './Counter'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018,

    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
