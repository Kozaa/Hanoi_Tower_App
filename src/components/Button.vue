<template>
  <button class='button'>
      {{ type }}
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            required: true,
        }
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
        padding: 10px;
        font-size: 1em;
    }
</style>