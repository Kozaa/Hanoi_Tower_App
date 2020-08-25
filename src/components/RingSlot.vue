<template>
    <div class='ringslot'>
        <Ring 
        v-for='(ring) in rings' 
        :key='ring.id' 
        :id='ring.id' 
        :style="{'background-color': ring.color, width: ring.width}"
        :class='{selected: ring.selected}'
        />
    </div>
</template>

<script>
import Ring from './Ring.vue';


export default {
    name: 'RingSlot',
    components: {
        Ring,
    },
    
    props: {
        rings: {
            required: false,
        }
    },
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


</style>