import VueRouter from 'vue-router'
import CarFull from './pages/CarFull'
import ErrorComponent from './pages/Error'
import Home from './pages/Home'


const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(
      require('./pages/Cars.vue')
    )
  })
}

const Car = resolve => {
  require.ensure(['./pages/Car.vue'], () => {
    resolve(
      require('./pages/Car.vue')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cars',
      component: Cars,
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carFull',
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            next()
          }
        },
      ]
    },
    {
      path: '/none',
      redirect: '/'
    },
    {
      path: '*',
      component: ErrorComponent
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
})

