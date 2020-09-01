<template>
    <transition>
        <div class='wrapper'>
            <div class='upperWrapper'>
                <div class='congratulationWrapper'>
                    <h1>Congratulations <br> {{name}}!</h1>
                    <h2>Your Time: <br> {{time[1]}} </h2>
                    <h2>Your Moves: <br> {{moves}} </h2>
                </div>
                <div class='topWrapper'>
                    <div class='topDisplayGrid'>
                        <h1>TOP</h1>
                        
                        <span>Place</span>
                        <span>Name</span>
                        <span>Time</span>
                        <span>Moves</span>
                    </div>
                    <div class='leaderboardGrid'>
                        <template v-for='(user, i) in documents'>
                            <span v-bind:key='i'>{{i+1}}</span>
                            <span v-bind:key='i'>{{user.name}}</span>
                            <span v-bind:key='i'>{{user.time[1]}}</span>
                            <span v-bind:key='i'>{{user.time[0]}}</span>
                        </template>
                    </div>
                    
                </div>
            </div>
            <div class='submitWrapper'>
                Would you like to submit your score?
                <Button type='Yes' @click.native='submitUser'>Yes</Button>
                <Button type='No'>No</Button>

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
            leaderboard.push({'name': 'John', 'time': [20 ,'20:20']})
            setTimeout(() => {
                console.log(this.documents)
            }, 3000);
        }
    },
      firebase: {
        documents: leaderboard
  },
  watched: {
      documents: function(oldDocuments, newDocuments) {       // <-- trying to display something when database is empty
          if(oldDocuments) {
              return newDocuments
          } else this.documents = [{'name': 'N/A', 'time': 'N/A', 'moves': 'N/A' }]
      }
  }
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
        text-align: center;
        background-color: seashell;
        border-radius: 15px;
        
    }

    .upperWrapper {
        height: 80%;
        width: 100%;
        
        display: flex;
        justify-content: space-around;
    }

    .submitWrapper {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: black 1px solid;
    }

    h1 {
        grid-column: 1/5;
    }

    .grid-row {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    } 

    .congratulationWrapper {
        width: 60%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        
        
        border-right: black solid 1px;
    }

    .topWrapper {
        width: 40%;
        padding: 20px;
        height: 80%;
       
    }

    .topDisplayGrid {
        display: grid;
        
        grid-template-columns: 1fr 2fr 1fr 1fr;
        grid-template-rows: 4fr 1fr;
        grid-auto-rows: 1fr;
        grid-auto-flow: row;
        grid-row-gap: 5px;

    }

    .leaderboardGrid {
        display: grid;
        height: auto;
        max-height: 50%;
        width: calc(100% + 15px);
        grid-template-columns: 1fr 2fr 1fr 1fr;
        grid-auto-rows: 1fr;

        overflow-y: scroll;
        overflow-x: hidden;


    }

</style>