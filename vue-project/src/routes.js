import VueRouter from 'vue-router'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorComponent from './pages/Error'
import Home from './pages/Home'


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
          name: 'carFull'
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

