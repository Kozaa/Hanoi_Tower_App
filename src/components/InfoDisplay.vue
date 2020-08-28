<template>
    <div class='displayWrapper'>
        <div>
            <div>
                Name: {{ name }} <br>
                Moves: {{ moves.toString() }} <br>
                Time: {{ timer }}
            </div>
        </div>
        <Button type='Rules' id='2'/>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'InfoDisplay',
    components: {
        Button,
    },
    props: {
        name: {
            required: false,
        },
        moves: {
            required: false,
        },
        timer: {
            required: false,
        },
    }

}
</script>

<style scoped>
    .displayWrapper {
        width: 100%;
        height: 20vh;

        position: fixed;
        padding: 0 50px;
    
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


</style>