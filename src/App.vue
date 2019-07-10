<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <WelcomeContent v-if="!isTerminal" msg="Welcome to Your Vue.js App" @terminal="updateState"/>
    <Terminal v-if="isTerminal" />
  </div>
</template>

<script>
import WelcomeContent from './components/WelcomeContent.vue';
import Terminal from './components/Terminal';
export default {
  name: 'app',
  components: {
    WelcomeContent,
    Terminal,
  },
  data: function(){
    return{
      isTerminal: false
    }
  },
  methods: {
    updateState: function(){
      this.isTerminal = true;
    },
  }
};
</script>

<style>
@import "assets/styles/tailwind.postcss";

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
