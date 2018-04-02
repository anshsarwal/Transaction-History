<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import transacthistory from './components/transacthistory'

export default {
  components:{
    transacthistory: 'transacthistory'
  },

  data(){
    return{
    }
  } 
}
</script>

<style>
  #app{
    margin-top: 100px;
  }
</style>

