<template>
  <div id="app">
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
import RingSlot from './components/RingSlot.vue';


export default {
  name: 'App',
  components: {
    RingSlot,
  },
  data() {
    return {
      selected: null,
      previousClick: 'slot2',
      slot0: [],
      slot1: [],
      slot2: [
      {
        id: 0,
        width: '150%',
        color: 'red',
        selected: false,
      },
      {
        id: 1,
        width: '300%',
        color: 'green',
        selected: false,
      },
      {
        id: 2,
        width: '450%',
        color: 'blue',
        selected: false,
      },
      {
        id: 3,
        width: '600%',
        color: 'orange',
        selected: false,
      },
      {
        id: 4,
        width: '750%',
        color: 'magenta',
        selected: false,
      },
      {
        id: 5,
        width: '900%',
        color: 'cyan',
        selected: false,
      },
      {
        id: 6,
        width: '1050%',
        color: 'black',
        selected: false,
      },
      {
        id: 7,
        width: '1200%',
        color: 'pink',
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

                        this[slotClicked].unshift(this.selected)
                        this[slotClicked][0].selected = false
                        this[this.previousClick].shift()
                        this.selected = null
                        this.previousClick = slotClicked;

                      } else alert('sorry, illegal move')
                  } else {
                        this[slotClicked].unshift(this.selected)
                        console.log(this[slotClicked])
                        this[slotClicked][0].selected = false
                        this[this.previousClick].shift()
                        this.selected = null
                        this.previousClick = slotClicked;
                  }
                    }

            } 
            else {
              if(this[slotClicked].length === 0) return
                this.selected = this[slotClicked][0];

                this[slotClicked][0].selected = true;
                this.previousClick = slotClicked;
            }

                             console.log(slotClicked, this.selected)
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
  }

  #app {
    background-color: blue;
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
</style>
