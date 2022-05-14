<template>
    <NavBar />
    <router-view />
    <FooterViver />
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import FooterViver from './components/FooterViver.vue'
  
  export default {        
    components: {
    NavBar,
    FooterViver
},          
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
