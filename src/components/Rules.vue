<template>
    <transition name='fade'>
      <div class='rulesWrapper'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos assumenda consequuntur sequi nobis voluptas. Neque, cumque quibusdam? Quae, natus excepturi laboriosam, nihil odit, numquam ea molestias repellendus praesentium earum nisi!
      </div>
    </transition>
</template>

<script>
export default {
    name: 'Rules',
}
</script>

<style>
    .rulesWrapper {
        position: absolute;
        top:110%;
        width: 50vw;
        left: 50%;
        transform: translateX(-50%);
        

        z-index: 5;
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