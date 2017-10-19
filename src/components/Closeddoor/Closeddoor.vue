<template>
  <transition name="fade">
    <div class="door">
      <div class="roomCard" @click="openDoor"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'closedDoor',
    computed: {
    },
    data () {
      return {
      }
    },
    methods: {
      openDoor: function () {
        this.$store.commit('OPEN_DOOR', {showRoomCard2: true})
        this.$store.commit('SHOW_ROOM_CARD1', {showRoomCard1: false})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .door{
    width: 100%;
    height: 12.8rem;
    position: fixed;
    top:0;
    background: url('../../assets/imgs/door.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .roomCard{
    width: 2.9rem;
    height: 3.07rem;
    position: fixed;
    top:40%;
    left: 30%;
    background: url("../../assets/imgs/roomcard.png") no-repeat;
    background-size: 100% 100%;
    animation-name: movingCard;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes movingCard
  {
    from {transform:translateX(10px);}
    to {transform:translateX(30px);}
  }
  .fade-enter-active{
    transition: opacity 1s
  }
  .fade-leave-active{
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .fade-leave-to{
    opacity: 0
  }
</style>
