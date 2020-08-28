<template>
    <div class='displayWrapper'>
        <div>
            <div>
                Name <br>
                Moves: 34 <br>
                Time: 12:32
            </div>
        </div>
        <Button type='Rules' />
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'InfoDisplay',
    components: {
        Button,
    }

}
</script>

<style scoped>
    .displayWrapper {
        width: 100%;
        height: 20vh;

        position: fixed;
        padding: 0 50px;
    

        display: flex;
        justify-content: space-between;
        align-items: center;
    }


</style>