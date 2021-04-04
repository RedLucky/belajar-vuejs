<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="title">
    <p><b>Hasil: </b> {{ title }}</p>
    <h1>Directive V-show</h1>
    <input type="text" v-model="activeColor">
      <br>
    <div v-bind:style="{ 'background-color': activeColor, height: '10px', width: '30px', border: '2px solid black' }" v-show="activeColor"></div>
    <h1>Directive V-if</h1>
    <input type="text" v-model="gender">
    <br>
    <h3 v-if="gender == 'male' || gender == 'female'">I am a {{ gender }}</h3>
    <h1>Directive V-for</h1>
    <ol class="list-group">
        <li v-for="todo in todos" :key="todo.name">
            Saya Belajar Bahasa pemrograman <b>"{{ todo.name }}"</b> dengan pengalaman <b>{{ todo.experience }}</b>
        </li>
    </ol>
    <!-- <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Fundamentals',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Vue.js Data biding',
      activeColor: 'red',
      gender: 'male',
      todos: [
        {
          name: 'php',
          experience: '2 tahun'
        },
        {
          name: 'javascript',
          experience: '1 tahun'
        },
        {
          name: 'python',
          experience: '3 tahun'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
