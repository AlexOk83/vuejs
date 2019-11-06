<template>
  <div id="app">
      <h1 v-colored:background="'green'" v-colored:color="'white'" v-if="visible">Parent: {{ carName }}</h1>
      <h1 v-colored:color="'green'" v-if="visible">Parent: {{ carName }}</h1>
      <button @click="visible = !visible">toggle</button>

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
      visible: true
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
