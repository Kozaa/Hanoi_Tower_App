<template>
  <div class='ring' />
</template>

<script>
export default {
    name: 'Ring',
}
</script>

<style scoped>

    .ring {
        height: 30px;
        border-radius: 15px;
        transition: transform .15s ease-in;
        box-shadow: inset 0 0 10px #000000;
    }

    .selected {

       transform: translateY(-30vh);
    }

</style>