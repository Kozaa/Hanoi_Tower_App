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
    }

    .selected {
        justify-self: flex-start;
        transform: translateY(-200%);
        transition: transform .15s ease-in;
    }
</style>