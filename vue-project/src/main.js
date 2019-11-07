import Vue from 'vue'
import App from './App.vue'
import List from './List'
Vue.filter('uppercase', value => value.toUpperCase())

Vue.component('app-list', List);

Vue.mixin({
  beforeCreate() {
    console.log('before create');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
});


