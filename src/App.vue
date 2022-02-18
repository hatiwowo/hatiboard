<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <input ref="input" type="text" @click="openKeyboard" @blur="hideKeyboard"/>
    <!-- <button @click="hideKeyboard">关闭</button> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    openKeyboard() {
      window.ipcRenderer.send("openKeyboard");
    },
    hideKeyboard() {
        window.ipcRenderer.send("hideKeyboard");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
