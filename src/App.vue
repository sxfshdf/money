<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color:rgba(255,0,0,0);
  }
  ul, ol {
    list-style: none;
  }
  input {
    background: none;
    outline: none;
    border: 0;
  }
  body {
    line-height: 1.5em;
  }
  #app {
    font-family: PF-R, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
