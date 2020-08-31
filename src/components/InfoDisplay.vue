<template>
    <div class='displayWrapper'>
        <div>
            <div>
                Name: {{ name }} <br>
                Moves: {{ moves.toString() }} <br>
                Time: {{ time[1] }}
            </div>
        </div>
        <Button type='Rules' id='2' @click.native='showRules = !showRules'/>
        <Rules v-show='showRules' @click.native='showRules = !showRules'/>
    </div>
</template>

<script>
import Button from './Button.vue';
import Rules from './Rules.vue';

export default {
    name: 'InfoDisplay',
    components: {
        Button,
        Rules,
    },
    data() {
        return {
            showRules: false,
        }
    },
    props: {
        name: {
            required: false,
        },
        moves: {
            required: false,
        },
        time: {
            required: false,
        },
    },
}
</script>

<style scoped>
    .displayWrapper {
        width: 100%;
        height: 20vh;

        position: fixed;
        padding: 0 50px;
    
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


</style>