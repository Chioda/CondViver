<template>  
  <div>
    <NavBar />
    <div class="body">
      <router-view />
      <div class="footer"><FooterViver /></div>
    </div>
    
       
  </div>

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
.footer{
    position:relative;
    bottom: 0;  
    width: 100%;
    height: 100px;    
    text-align: center;
    line-height: 100px;
}
body {
    background-image: url("../src/assets/Fundo.jpeg");
    height: 600px;
  }

</style>
