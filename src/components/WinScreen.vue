<template>
    <transition>
        <div class='wrapper'>
            <div class='upperWrapper'>
                <div class='congratulationWrapper'>
                    <h1>Congratulations <br> {{name}}!</h1>
                    <h2>Your Time: <br> {{time[1]}} </h2>
                    <h2>Your Moves: <br> {{moves}} </h2>
                </div>
                <Leaderboard :maxHeight='true'/>
            </div>
            <div class='submitWrapper' v-show='!chosen'>
                Would you like to submit your score?
                <Button type='Yes' @click.native.once='submitUser'>Yes</Button>
                <Button type='No' @click.native='chosen = !chosen'>No</Button>
            </div>
            <div class='submitWrapper' v-show='chosen'>
                <h3 v-show='added'>Your score has been added!</h3>
                <h3 v-show='!added'>Thanks for playing!</h3>
                <Button type='Restart' @click.native='restart'>No</Button>
            </div>


        </div>
    </transition>
</template>

<script>
import { leaderboard } from '../firebase';
import Button from './Button.vue';
import Leaderboard from './Leaderboard.vue';

export default {
    name: 'WinScreen',
    data() {
        return {
          chosen: false,
          added: false, 
        }
    },
    components: {
        Button,
        Leaderboard,
    },
    props: {
        name: {
            required: true,
        },
        moves: {
            required: true,
        },
        time: {
            required: true,
        }
    },
    methods: {
        submitUser: function() {
            leaderboard.push({'name': this.name, 'time': this.time, 'moves': this.moves});
            this.added = !this.added;
            this.chosen = !this.chosen;
        },
        restart: function() {
            window.location.reload();
        }
    },
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

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background-color: seashell;
        border-radius: 15px;
        border: 1px black solid;
        
    }

    .upperWrapper {
        height: 80%;
        width: 100%;
        
        display: flex;
        justify-content: space-around;

        border-bottom: black 1px solid;
    }

    .submitWrapper {
        height: 20%;
        width: 50%;
        padding: 20px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h1, h2, h3 {
        margin: 0;
    }

    h1 {
        grid-column: 1/5;
    }

    .congratulationWrapper {
        width: 50%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-content: center;
        justify-content: center;
        
        padding-top: 20px;
        border-right: black solid 1px;
    }

    
    @media screen and (max-width: 768px) {
        .wrapper {
            height: auto;
            max-height: 95vh;
            width: 90vw;
            padding: 10px;
        }

        .upperWrapper {
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

        }

        .congratulationWrapper {
            width: 100%;
            border-right: none;
            border-bottom: solid black 1px;
            height: 30%;
        }

        .submitWrapper {
            width: 100%;
        }

        h1 {
            font-size: 1.8em;
        }

    }

</style>