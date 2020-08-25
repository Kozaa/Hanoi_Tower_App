<template>
  <div id="app">
    <div class='slotsWrapper'>
        <RingSlot>

        </RingSlot>
        <RingSlot v-bind:rings="rings">

        </RingSlot>
        <RingSlot v-bind:rings="rings">

        </RingSlot>

    </div>
    <div class='base' />
  </div>
</template>

<script>
import { rings } from './data.js';
import RingSlot from './components/RingSlot.vue';


export default {
  name: 'App',
  components: {
    RingSlot,
  },
  data() {
    return {
      rings
    }
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

  .slotsWrapper {
    width: 90%;
    height: 60%; 

    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-around;

  }

  .base {
    width: 90%;
    height: 50px;

    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    background-color: brown;
    border-radius: 10px;
  }
</style>
