<template>
  <transition name="fade1">
    <div class="openedD"></div>
  </transition>
</template>

<script>
  export default {
    name: 'openedDoor',
    computed: {
    },
    mounted: function () {
      setTimeout(() => {
        this.$router.push('/room/asd')
      }, 2000)
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .openedD{
    width: 100%;
    height: 12.8rem;
    position: fixed;
    top:0;
    background: url('../../assets/imgs/openeddoor.jpg') no-repeat;
    background-size: 100% 100%;
  }

  .fade1-enter-active, .fade1-leave-active {
    transition: opacity 1s
  }
  .fade1-enter, .fade1-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
