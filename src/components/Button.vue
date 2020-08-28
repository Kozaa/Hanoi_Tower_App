<template>
  <button class='button' @click='showRules=!showRules'>
      {{ type }}
      <transition name='fade'>
      <div class='rulesWrapper' v-if='showRules'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos assumenda consequuntur sequi nobis voluptas. Neque, cumque quibusdam? Quae, natus excepturi laboriosam, nihil odit, numquam ea molestias repellendus praesentium earum nisi!
      </div>
      </transition>
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            required: true,
        }
    },
    data() {
        return {
            showRules: false,
        }
    },
    methods: {

    }
}
</script>

<style>
    .button {
        max-height: 10vh;
        
        
        color: inherit;
        font-family: inherit;
        font-weight: inherit;
        background: none;
        border: none;
        border: 1px solid rgb(199, 12, 74);
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 1em;

    }

    .button:hover {
        background-color: antiquewhite;    
        cursor: pointer;
    }

    .rulesWrapper {
        position: absolute;
        top:100%;
        width: 50vw;
        left: 50%;
        transform: translateX(-50%);

        background-color: azure;
        padding: 25px;
        border-radius: 15px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;  
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>