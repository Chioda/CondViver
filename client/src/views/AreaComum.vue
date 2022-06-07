<template>  
  <div class="main-container">
    <div id="nav-area">      
      <h1 id="titulo">ÁREA COMUM</h1>
      <ul class="navbar-nav mr-auto">         
        <button class="nav-item" type="Submit" href="#" @click.prevent="direcionaAgendamento">Agendamento</button>
      </ul>
    </div>
    <ul class="lista">
      <li class="lista-destaques">
        <div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas">          
            <h1 class="painel-titulo">ACADEMIA</h1>                      
          </div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid">          
            <h1 class="painel-titulo">CHURRASQUEIRA</h1>            
          </div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas">         
            <h1 class="painel-titulo">SALÃO DE BELEZA</h1>           
          </div>
        </div>
        <div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas">          
            <h1 class="painel-titulo">Salão de Festas</h1>                     
          </div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid">          
            <h1 class="painel-titulo">Salão de Jogos</h1>             
          </div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas">         
            <h1 class="painel-titulo">Brinquedoteca</h1>           
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AreaComum',
    methods:{
      direcionaAgendamento () {
        this.$router.push({ name: 'agendamento'}),
          setTimeout(function() {
            window.location.reload(1);
          }, 1);
      },                   
    },
  }
</script>

<style scoped>
    
  #titulo {
    text-align: left;
    color: white;
    background: rgb(52, 52, 53);
    margin-right: 2%;
    margin-top: 20px;
    font-weight: bold;
    margin: auto;
    margin-left: 0;
  }

  #nav-area {
    background: rgb(52, 52, 53);
    position:center;
    border-bottom: 4x solid #111;
    margin-top: 20px;
    margin-left:2%;
    margin-right: 2%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 95%;    
  }

  #nav a{
      text-decoration: none;
  }

  .nav-item{
    background-color: blue; 
    border-radius: 12px;
    padding: 8px 8px;
    margin: 5px;
    text-align: center; 
    display:inline-block;
    font-size: 12px, bold;
    color: #fff;
  }

 .nav-item:hover{
    background: #062486;
    color: #fff;
    text-decoration: none;
  } 


    .painel-corpo {
    width: 100%;
  }

    .painel-titulo {
    text-align: left;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase; 
    font-size:20px;
    font-weight: bold;
  }

  .lado-lado {
    background: white;
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 40px;
    box-shadow: 5px 5px 10px grey;
    width: 300px;
    height: 100%;
    vertical-align: top;
    text-align: left;

  }

  .lista{
    list-style: none;
    margin-left: 5%;
  }

</style>