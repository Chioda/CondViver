<template>
  <div>
    <section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image: url(img/Churrasqueira.jpeg);"></section>
    <div class="main-container">
      <h1 id="titulo">DESTAQUES</h1>
      <ul class="lista">
        <li class="lista-destaques">
          <div>
            <div class="lado-lado">
              <img class="painel-corpo" src="/img/Criancas.jpeg" alt="Criancas">          
              <h2 class="painel-titulo">Colônia de Férias para as crianças do Viver
                <br> 
                <router-link class="router" :to="{ name: 'areacomum' }">
                  Saiba mais...
                </router-link>
              </h2>
              <span>10 de Janeiro de 2022</span>             
            </div>
            <div class="lado-lado">
              <img class="painel-corpo" src="/img/Covid.jpeg" alt="Covid">          
              <h2 class="painel-titulo">Liberada a obrigatoriedade das máscaras no condomínio.   
                <br> 
                <router-link class="router" :to="{ name: 'areacomum' }">
                  Saiba mais...
                </router-link>
              </h2>
              
              <span>02 de Janeiro de 2022</span>   
            </div>
            <div class="lado-lado">
              <img class="painel-corpo" src="/img/Gas.jpeg" alt="Gas">         
              <h2 class="painel-titulo">Nova assembléia para regras dos medidores de Gás
                <br> 
                <router-link class="router" :to="{ name: 'areacomum' }">
                  Saiba mais...
                </router-link>
              </h2>
              <span>10 de Dezembro de 2021</span> 
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
 // import Api from '../services/Api'


  export default {
    name: 'HomeView',
    
 /*   mounted () {
      Api.get('/')
        .then(response => this.home = response.data)
        .catch(erro => console.log(erro))
        
  },*/
    
  }
</script>

<style scoped>
    #main-banner {
        background-size: no-repeat center center;
        display: flex;
        width: 100%;
        height: 250px;
        object-fit: fill;
    }

    #titulo {
      text-align: left;
      color: white;
      background: rgb(52, 52, 53);
      margin-left:2%;
      margin-right: 2%;
      margin-top: 20px;
      font-weight: bold;

    }
    .painel-corpo {
    width: 100%;
    height: 170px;
  }

  .lista-destaques{
    margin-left: 5%;
    list-style: none  ;
  }

    .painel-titulo {
    text-align: left;
    margin: 0 0 15px 0;
    padding: 10px; 
    font-size:medium;
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


</style>