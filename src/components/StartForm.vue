<template>
<transition name='fade'>
  <div class='formWrapper' v-show="showForm">
    <label for='name'>Type in your name:</label>
    <input name='name' type="text" v-model='newName'>

    <Button type='Start' v-on:click.native='handleGameStart'/> 
    <Button type='Rules' id='2' @click.native="showRules = !showRules" /> 
    <Rules v-show='showRules'/>
  </div>
</transition>
</template>

<script>
import Button from './Button.vue'; 
import Rules from './Rules.vue';

export default {
    name: 'StartForm',
    components: {
        Button,
        Rules
    },
    props: {
        name: {
            required: false,
        },
    },
    data() {
        return {
            showForm: true,
            showRules: false,
        }
    },
    computed: {
    newName: {
      set(newVal){
            this.$emit('nameChange', newVal)
      },
      get() {
        return this.name;
      },
    },
  },
    methods: {
        handleGameStart: function() {

            if(this.newName) {

                this.showForm = false;
                this.showRules = false;
                this.$emit('gameStart', true);

            } else alert('please enter a valid name');

        }
    }
}
</script>

<style scoped>


    .formWrapper {
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translateX(-50%) translateY(-70%);

        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
        z-index: 4;
        
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>