<template>
<transition name='fade'>
  <div class='formWrapper' v-if="showForm">
        <label for='name'>Type in your name:</label>
        <input name='name' type="text" v-model='newName'>

      <Button type='Start' v-on:click.native='handleGameStart'/> 
      <Button type='Rules' id='2'/> 
  </div>
</transition>
</template>

<script>
import Button from './Button.vue'; 

export default {
    name: 'StartForm',
    components: {
        Button,
    },
    props: {

    },
    data() {
        return {
            showForm: true,
        }
    },
    computed: {
    newName: {
      set(newVal){
            this.$emit('nameChange', newVal)
      },
      get() {
        return this.value
      },
    },
  },
    methods: {
        handleGameStart: function() {
            this.showForm = false;
            this.$emit('gameStart', true);

        }
    }
}
</script>

<style scoped>


    .formWrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-70%);

        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
        z-index: 1;
        
        background-color: seashell;
        border-radius: 15px;
        padding: 30px;
    }


    label {
        grid-column: 1/3;
    }

    input {
        grid-column: 1/3;

        border: none;
        border: 1px solid pink;
        font-size: 1em;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-leave-to {
        opacity: 0;
    }

</style>