<template>
    <div class='ringslot'>
        <div class='click' />
        <Ring v-for='(ring, i) in rings' :key='ring.id' v-bind:style="{'background-color': rings[i].color, width: rings[i].width}"/>
    </div>
</template>

<script>
import Ring from './Ring.vue';

export default {
    name: 'RingSlot',
    components: {
        Ring,
    },
    data() {
        return {
        currentRingsOnSlot: [],
        }
    },
    props: {
        rings: {
            default: [],
            required: false,
        }
    }

}
</script>

<style scoped>
    .ringslot {
        height: calc(100% - 50px);
        width: 2vw;


        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        background-color: orange;

        position: relative;
    }

    .click {
        width: 30vw;
        height: 100%;

        position: absolute;
    }

</style>