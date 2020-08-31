<template>
    <transition>
        <div class='wrapper'>
            congratulations
        </div>
    </transition>
</template>

<script>
export default {
    name: 'WinScreen'
}
</script>

<style>
    .wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        width: 80vw;
        height: 80vh;
        z-index: 4;
        display: grid;


        background-color: seashell;
        border-radius: 15px;
        padding: 20px;
    }
</style>