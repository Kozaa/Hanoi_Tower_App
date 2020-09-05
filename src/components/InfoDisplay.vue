<template>
    <div class='displayWrapper'>

        <div>
            Name: {{ name }} <br>
            Moves: {{ moves.toString() }} <br>
            Time: {{ time[1] }}
        </div>

        <div>
            <Button type='Rules' @click.native='showRules = !showRules'/>
            <Button type='Top' class='margin' @click.native='showLeaderbaord = !showLeaderbaord'/>
        </div>
            <Rules v-show='showRules' @click.native='showRules = !showRules'/>
        <transition name='fade'>
            <Leaderboard id='leaderboardPosition' :maxHeight='false' v-show='showLeaderbaord' />
        </transition>
    </div>
</template>

<script>
import Button from './Button.vue';
import Rules from './Rules.vue';
import Leaderboard from './Leaderboard.vue';

export default {
    name: 'InfoDisplay',
    components: {
        Button,
        Rules,
        Leaderboard,
    },
    data() {
        return {
            showRules: false,
            showLeaderbaord: false,
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
        padding: 0 2vw;
    
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .margin {
        margin-left: 10px;
    }

    #leaderboardPosition {
        position: fixed;
        top: 50%;
        left: 50%;

        width: 40vw;
        height: 70vh;
        transform: translateX(-50%) translateY(-50%);

        text-align: center;
        background-color: seashell;
        border-radius: 15px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    @media screen and (max-width: 768px) {
        #leaderboardPosition {
            width: 90vw;
        }
    }
</style>