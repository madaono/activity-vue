<template>
  <h1>{{searchResult}}</h1>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'search',
    components: {
    },
    created () {
    },
    computed: mapState({
      searchResult: state => state.searchResult
    }),
    methods: {
    }
  }

</script>

<style scoped>
  h1{
    font-size: 14px;
  }
</style>
