<template>
  <div id="app">

  <div class='base' />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: aliceblue;
  }

  #app {
    background-color: blue;
  }

  .base {
    width: 70%;
    height: 50px;

    position: fixed;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);

    background-color: brown;
    border-radius: 10px;


  }
</style>
