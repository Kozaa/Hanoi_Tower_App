<template>
    <transition name='fade'>
      <div class='rulesWrapper'>
          The objective of the puzzle is to move the stack of discs to the left peg. Only one disk can be moved at a time. You can only place smaller disc on top of the bigger one. The smallest possible number of moves required to solve the tower of 6 discs is 63. Good luck!
      </div>
    </transition>
</template>

<script>
export default {
    name: 'Rules',
}
</script>

<style>
    .rulesWrapper {
        position: absolute;
        top:105%;
        width: 50vw;
        left: 50%;
        transform: translateX(-50%);
        
        text-align: justify;
        z-index: 5;
        background-color: azure;
        padding: 25px;
        border-radius: 15px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    @media screen and (max-width: 768px) {
        .rulesWrapper {
            width: 95vw;
        }
    }
</style>