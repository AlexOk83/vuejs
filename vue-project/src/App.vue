<template>
  <div id="app">
    <input type="text" v-model.lazy="name">
    <input type="text" v-model.number="age">
    <p>{{ name }}</p>
    <textarea v-model="textarea">

    </textarea>
    <p>{{ textarea }}</p>

    <hr>

    <label>
      <input type="checkbox" value="instagram" v-model="social"> instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="social"> vk
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> facebook
    </label>

    <ul>
      <li v-for="s in social">{{ s }}</li>
    </ul>

    <hr>
    <h2>radio buttons</h2>

    <label>
      <input type="radio" value="instagram" v-model="rSocial"> instagram
    </label>

    <label>
      <input type="radio" value="vk" v-model="rSocial"> vk
    </label>

    <label>
      <input type="radio" value="facebook" v-model="rSocial"> facebook
    </label>

    <ul>
      <li>{{ rSocial }}</li>
    </ul>

    <hr>

    <h2>select</h2>
    <select v-model="defaultSelect">
      <option v-for="o in selectList" >{{o}}</option>
    </select>
  </div>
</template>

<script>


export default {
  data () {
    return {
      name: '',
      textarea: 'initial text',
      social: [],
      rSocial: '',
      selectList: ['instagram', 'vk', 'facebook'],
      defaultSelect: '',
      age: 20
    }
  },
  watch: {
    age (value) {
      console.log(value);
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  textarea {
    resize: none;
    width: 100%;
    min-height: 100px;
  }
  p {
    white-space: pre;
  }
</style>
