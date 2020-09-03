<template>
  <div id="app" >
    
    <transition-group name='fade'>
    <div key='1' class='background' v-show='!started'/>
    <WinScreen key='2' v-show='won' :name='name' :moves='moves' :time='time'/>
    </transition-group>

    <StartForm @nameChange='onNameChange' :name='name' @gameStart='onGameStart'/>

    <InfoDisplay :name='name' :moves='moves' :time='time'/>

    <div class='illigal' v-show='illigal'>ILLEGAL MOVE</div>

    <div class='slotsWrapper'>
        <RingSlot :rings='slot0'/>
        
        <RingSlot :rings='slot1'/>

        <RingSlot :rings='slot2'/>

        <div class='handleClickWrapper'>
            <div class='handleClickArea' id='0' @click='handleSlotClick'/>
            <div class='handleClickArea' id='1' @click='handleSlotClick'/>
            <div class='handleClickArea' id='2' @click='handleSlotClick'/>
        </div>
    </div>
    <div class='base' />
  </div>
</template>

<script>
import Vue from 'vue';
import RingSlot from './components/RingSlot.vue';
import InfoDisplay from './components/InfoDisplay.vue';
import StartForm from './components/StartForm.vue';
import WinScreen from './components/WinScreen.vue';
import VueConfetti from 'vue-confetti';

Vue.use(VueConfetti)

export default {
  name: 'App',
  components: {
    RingSlot,
    InfoDisplay,
    StartForm,
    WinScreen,
  },
  data() {
    return {
      name: '',
      time: [0, '00:00'],
      moves: 0,
      started: false,
      won: false,
      selected: null,
      illigal: false,
      previousClick: 'slot2',
      slot0: [],
      slot1: [],
      slot2: [
          {
            id: 0,
            width: '300%',
            color: 'red',
            selected: false,
          },
          {
            id: 1,
            width: '450%',
            color: 'green',
            selected: false,
          },
          {
            id: 2,
            width: '600%',
            color: 'blue',
            selected: false,
          },
          {
            id: 3,
            width: '750%',
            color: 'orange',
            selected: false,
          },
          {
            id: 4,
            width: '900%',
            color: 'magenta',
            selected: false,
          },
          {
            id: 5,
            width: '1050%',
            color: 'cyan',
            selected: false,
          },
  ]
}
  },
    methods: {
        handleSlotClick: function(ev) {

        let slotClicked = `slot${ev.target.id}`

            if(this.selected) {
              if(this[slotClicked].includes(this.selected)) {

                  this.selected = null;
                  this[slotClicked][0].selected = false;
                  this.previousClick = slotClicked;
                  
              }   else {
                    if(this[slotClicked][0]) {
                      if(this[slotClicked][0].id > this.selected.id) {

                        this.handleRingTransfer(slotClicked);

                      } else {
                          this.illigal = true;
                          setTimeout(() => {
                              this.illigal = false;
                          }, 250);
                      }
                  } else this.handleRingTransfer(slotClicked);   
              }
            } 
            else {

              if(this[slotClicked].length === 0) return

                this.selected = this[slotClicked][0];
                this[slotClicked][0].selected = true;
                this.previousClick = slotClicked;
            }

            if(this.slot0.length === 6) {
              // won the game logic
              clearInterval(window.timerInterval)
              this.$confetti.start();
              this.won = true;
            }
        },
        handleRingTransfer(slotClicked) {
          this[slotClicked].unshift(this.selected);
          this[slotClicked][0].selected = false;
          this[this.previousClick].shift();
          this.selected = null;
          this.previousClick = slotClicked; 
          this.moves++;
    },
        timer: function() {
          let newTime = this.time[0] + 1;
          let minutes = Math.floor(newTime / 60);
          let seconds = newTime % 60;

          if(seconds < 10) seconds = `0${seconds}`

          this.time = [newTime, `${minutes}:${seconds}`];
        },
        onNameChange: function(newValue) {
          this.name = newValue;
        },
        onGameStart: function(started) {
          this.started = started;
           window.timerInterval = setInterval(this.timer, 1000);

        }
  },
}
</script>

<style>

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: aliceblue;
    
    font-size: calc(1vw + 1vh + 2px); 
  }

  body, button, input {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    color: rgb(199, 12, 74);
  }

  #app {
    width: 100vw;
    height: 100vh;

  }

   .background {
    width: 100vw;
    height: 100vh;

    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    
    opacity: .9;
    background-color: black;
  } 

  .illigal {
    width: 100vw;

    position: fixed;
    top: 20%;

    text-align: center;
    font-size: 1.2em;
    font-weight: 700;
    color: red;
  }

  .slotsWrapper {
    width: 90%;
    height: 60%; 

    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-around;

  }

  .base {
    width: 90%;
    height: 50px;

    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);

    background-color: brown;
    border-radius: 10px;

  }

  .handleClickWrapper {
    width: 100%;
    height: 100%;

    position: absolute;
    display: flex;
    flex-direction: row;
  }

  .handleClickArea {
    width: 30vw;
    height: 100%;
  }

  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-leave-to {
    opacity: 0;
  }


  @media screen and (max-width: 768px) {
    body {
      font-size: calc(1vw + 1vh + 8px);
    }
  }
</style>
