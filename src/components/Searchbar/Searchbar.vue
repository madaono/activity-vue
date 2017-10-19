<template>
  <div class="search-container">
    <input type="text" class="search-input" placeholder=" 77968用户正在搜索《金刚狼3》" v-model="searchContext">
    <i class="search-icon" @click="searchMovie"></i>
  </div>
</template>

<script>
  export default {
    name: 'searchBar',
    computed: {
      searchContext: {
        get () {
          return this.$store.state.searchContext
        },
        set (value) {
          this.$store.commit('UPDATE_MESSAGE', value)
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      searchMovie: function () {
        if (this.$store.state.searchContext !== '') {
          this.$store.dispatch('search')
          this.$router.push('search')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-container{
    width: 100%;
    text-align: center;
    line-height: .65rem;
    font-size: 0;
  }
  .search-input{
    display: inline-block;
    height: .65rem;
    width: 90%;
    margin: 0 auto;
    background-color: #160b5b;
    line-height: .65rem;
    border: 2px solid #bbbac1;
    border-radius: .1rem;
    color: #fff;
    font-size:25px;
    padding-left: .3rem;
    margin-left: .25rem;
  }
  .search-input::placeholder{
    color: #bbbac1;
    font-size: 14px;
  }
  .search-icon{
    display: inline-block;
    width: .45rem;
    height: .45rem;
    position: relative;
    margin-bottom: -.1rem;
    right: 10%;
    background: url("../../assets/imgs/sousuo.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
