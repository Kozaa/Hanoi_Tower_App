<template>
<div class='topWrapper'>
    <div class='topDisplayGrid'>
        <h1>TOP</h1>
        
        <span>Place</span>
        <span>Name</span>
        <span class='clickable' @click="sortBy='time'">Time</span>
        <span class='clickable' @click="sortBy='moves'">Moves</span>
    </div>
    <div class='leaderboardGrid' v-bind:class="{ maxHeight: maxHeight }" >
        <template v-for="(user, i) in sorted">
            <span v-bind:key="user['.key'].slice(1, user['.key'].length)">{{i+1}}</span>
            <span v-bind:key="user['.key'].slice(1, user['.key'].length - 1)">{{user.name}}</span>
            <span v-bind:key="user['.key'].slice(1, user['.key'].length - 2)">{{user.time[1]}}</span>
            <span v-bind:key="user['.key'].slice(1, user['.key'].length - 3)">{{user.moves}}</span>
        </template>
    </div>
</div>
</template>

<script>
import { leaderboard } from '../firebase';

export default {
    name: 'Leaderboard',
    data() {
        return {
            documents: [], 
            sortBy: 'time',
        }
    },
    props: {
        maxHeight: {
            required: true,
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
  }
}
</script>

<style scoped>
    .topWrapper {
        width: 50%;
        padding: 20px;
        height: 100%;
    }

    .topDisplayGrid {
        display: grid;
        width: 100%;
        height: 30%;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        grid-template-rows: 3fr 1fr;
        grid-auto-rows: 1fr;
        grid-auto-flow: row;
        grid-row-gap: 5px;

    }

    .leaderboardGrid {
        display: grid;
        height: auto;
        max-height: 70%;
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
        
        .topWrapper {
            height: 30%;
            width: 100%;
        }

        .topDisplayGrid {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 2fr 1fr;
        }

        .leaderboardGrid {
            width: 100%;
            grid-template-columns: repeat(4, minmax(5px, 1fr));
        }

        .maxHeight {
            max-height: 10vh;
        }

        .leaderboardGrid span {
            overflow-x: scroll;
            overflow-y: hidden;
            min-height: calc(1em + 2px);
        }
    }
</style>