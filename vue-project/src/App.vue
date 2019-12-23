<template>
  <div id="app">
    <div class="container pt-2">

      <div class="form-group">
        <label for="name">Car name</label>
        <input type="text" id="name" class="form-control" autocomplete="off" v-model.trim="carName">
      </div>

      <div class="form-group">
        <label for="year">Car name</label>
        <input type="text" id="year" class="form-control" autocomplete="off" v-model.number="carYear">
      </div>

      <div class="form-group">
        <label for="car">Car</label>
        <select name="car" id="car" class="form-control" v-model="carId">
          <option v-for="car of cars" :value="car.id">{{car.name}}</option>
        </select>
        <button class="btn btn-danger mt-2" @click="deleteCar">delete car</button>
      </div>

      <button class="btn btn-success" @click="createCar">create car</button>
      <button class="btn btn-primary" @click="loadCars">load cars</button>
      <button class="btn btn-primary" @click="changeCar">change car</button>

      <hr>

      <ul class="list-group">
        <li class="list-group-item" v-for="car of cars" :key="car.id">
          {{car.name}} - {{car.year}}

        </li>

      </ul>
    </div>
  </div>
</template>

<script>


  export default {
    data () {
      return {
        resource: null,
        carName: '',
        carYear: 2019,
        carId: '',
        cars: []
      }
    },
    methods: {
      createCar () {
        const car = {
          name: this.carName,
          year: this.carYear
        };

        // this.$http.post('http://localhost:3000/cars', car)
        this.resource.save(car)
          .then(
            response => response.json()
          )
          .then(newCar => {
            console.log(newCar)
            this.loadCars();
          })
      },
      deleteCar () {
        if (this.carId) {
          // this.$http.delete(`http://localhost:3000/cars/${this.carId}`)
          this.resource.remove({id: this.carId})
            .then(
              response => {
                console.log(response);
                this.loadCars();
              }
            )

        }

      },
      changeCar () {
        const car = {
          name: this.carName,
          year: this.carYear
        };
        if (this.carId) {
          // this.$http.put(`http://localhost:3000/cars/${this.carId}`, car)
          this.resource.update({id: this.carId}, car)
            .then(
              response => {
                console.log(response);
                this.loadCars();
              }
            )

        }

      },
      loadCars () {
        // this.$http.get('http://localhost:3000/cars')
        this.resource.get()
          .then(
            response => response.json()
          )
          .then(cars => {
            this.cars = cars
          })
      }
    },
    created () {
      this.resource = this.$resource('cars{/id}')
      this.loadCars();
    }
  }
</script>

<style scoped>

</style>
