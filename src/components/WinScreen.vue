<template>
    <transition>
        <div class='wrapper'>
            <div class='upperWrapper'>
                <div class='congratulationWrapper'>
                    <h1>Congratulations <br> {{name}}!</h1>
                    <h2>Your <br v-show="mobile"> Time: <br> {{time[1]}} </h2>
                    <h2>Your <br v-show="mobile"> Moves: <br> {{moves}} </h2>
                </div>
                <div class='topWrapper'>
                    <div class='topDisplayGrid'>
                        <h1>TOP</h1>
                        
                        <span>Place</span>
                        <span>Name</span>
                        <span class='clickable' @click="sortBy='time'">Time</span>
                        <span class='clickable' @click="sortBy='moves'">Moves</span>
                    </div>
                    <div class='leaderboardGrid'>
                        <template v-for="(user, i) in sorted">
                            <span v-bind:key="user['.key'].slice(1, user['.key'].length)">{{i+1}}</span>
                            <span v-bind:key="user['.key'].slice(1, user['.key'].length - 1)">{{user.name}}</span>
                            <span v-bind:key="user['.key'].slice(1, user['.key'].length - 2)">{{user.time[1]}}</span>
                            <span v-bind:key="user['.key'].slice(1, user['.key'].length - 3)">{{user.moves}}</span>
                        </template>
                    </div>
                    
                </div>
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

export default {
    name: 'WinScreen',
    data() {
        return {
          documents: [], 
          sortBy: 'time',
          chosen: false,
          added: false, 
        }
    },
    components: {
        Button,
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
      firebase: {
        documents: leaderboard
  },
  computed: {
      sorted: function() {       
          if(this.documents.length !== 0) {
              let sortedDocuments = this.documents;

                switch(this.sortBy) {
                    case 'time': return sortedDocuments.sort((a,b) => a.time[0] - b.time[0]);
                    case 'moves': return sortedDocuments.sort((a,b) => a.moves - b.moves);
                    default: return [{'name': 'N/A', 'time': [0, 'N/A'], 'moves': 'N/A', '.key': 'aDKe302D30' }];
                }
          } else return [{'name': 'N/A', 'time': [0, 'N/A'], 'moves': 'N/A', '.key': 'aDKe302D30' }]
      },
      mobile: function() {
         return window.innerWidth > 768 ?  false : true;
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
        width: 60%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-content: center;
        justify-content: center;
        
        padding-top: 20px;
        border-right: black solid 1px;
    }

    .topWrapper {
        width: 40%;
        padding: 20px;
        height: 100%;
       
    }

    .topDisplayGrid {
        display: grid;
        /* min-height: 40%; */
        
        grid-template-columns: 1fr 2fr 1fr 1fr;
        grid-template-rows: 3fr 1fr;
        grid-auto-rows: 1fr;
        grid-auto-flow: row;
        grid-row-gap: 5px;

    }

    .leaderboardGrid {
        display: grid;
        height: auto;
        max-height: 60%;
        width: calc(100% + 15px);
        grid-template-columns: 1fr 2fr 1fr 1fr;
        grid-auto-rows: 1fr;

        overflow-y: scroll;
        overflow-x: hidden;
    }

    .clickable {
        cursor: pointer;
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

        .topWrapper {
            height: 30%;
            width: 100%;
        }

        .topDisplayGrid {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 2fr 1fr;
        }

        .leaderboardGrid {
            max-height: 10vh;
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr 1fr;
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