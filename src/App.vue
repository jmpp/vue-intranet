<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

#app {
  margin-top: 3em;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

/**
 * Style global
 */

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

body {
  margin: 0;
}

a {
  color: #42b983;
}
a:hover {
  color: #128953;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
}

.centered {
  text-align: center;
}

.actions {
  margin-top: 1.4em;
}

/**
 * Styles pour un bouton
 */

.btn {
  display: inline-block;
  padding: 0.5em 1.4em;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  background: linear-gradient(to bottom, #42b983, #128953);
}
.btn:hover {
  color: #fff;
  background: linear-gradient(to bottom, #42b983 50%, #128953);
}
.btn:active {
  background: linear-gradient(to bottom, #128953, #42b983 50%);
}
.btn:disabled {
  background: linear-gradient(to bottom, #eeeeee, #d3d3d3);
  cursor: not-allowed;
}
.btn.btn-small {
  padding: 0.15em 0.5em;
  font-size: 0.9em;
}

/**
 * Style pour les formulaires
 */

form input[type='text'],
form input[type='search'],
form input[type='password'],
form input[type='date'],
form input[type='url'],
form select {
  padding: 0.5em 0.9em;
  border-radius: 2px;
  border: thin solid #c0c0c0;
  background: linear-gradient(to bottom, #e6e6e6 0%, transparent 20%);
}
</style>
