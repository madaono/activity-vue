<template>
  <div class="MCContainer" @click="showRoom">
    <img :src="item.b" class="MCPic">
    <h3 class="MCTitle">《{{item.n}}》</h3>
    <p class="MCDes"> 第{{item.d}}期快牙专题</p>
  </div>
</template>

<script>
  export default {
    name: 'movieItem',
    data () {
      return {
      }
    },
    props: ['item'],
    methods: {
      showRoom: function () {
        this.$store.commit('SHOW_ROOM_CARD1', {showRoomCard1: true})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MCContainer{
    width: 100%;
    margin: 0 auto .2rem auto;
  }
  .MCPic{
    width: 100%;
  }
  .MCTitle{
    font-size: .28rem;
    color: #fff100;
    text-align: left;
    padding-bottom: .05rem;
  }
  .MCDes{
    font-size: .22rem;
    color: #d6d6d6;
    text-align: left;
  }
</style>
