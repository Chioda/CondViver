<template>
  <section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image: url(img/Churrasqueira.jpeg);"></section>
  <div class="main-container">
    <h1 id="titulo">DESTAQUES</h1>
    <ul class="lista">
      <li class="lista-destaques">
        <div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/Criancas.jpeg" alt="Criancas">          
            <h2 class="painel-titulo">Colônia de Férias para as crianças do Viver</h2>
            <span>10 de Janeiro de 2022</span>             
          </div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/Covid.jpeg" alt="Covid">          
            <h2 class="painel-titulo">Liberada a obrigatoriedade das mascaras no condomínio </h2>
            <span>02 de Janeiro de 2022</span>   
          </div>
          <div class="lado-lado">
            <img class="painel-corpo" src="/img/Gas.jpeg" alt="Gas">         
            <h2 class="painel-titulo">Nova assembléia para regras dos medidores de Gás</h2>
            <span>10 de Dezembro de 2021</span> 
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import http from '@/http'

  // @ is an alias to /src


  export default {
    name: 'HomeView',
    
    mounted () {
      http.get('/')
        .then(response => this.home = response.data)
        .catch(erro => console.log(erro))
        
  },
    
  }
</script>

<style scoped>
    #main-banner {
        background-size: auto;
        display: flex;
        width: 100%;
        height: 250px;
        object-fit: fill;
    }

    #titulo {
      text-align: left;
      color: white;
      background: rgb(52, 52, 53);
      margin-left:145px;
      margin-right: 145px;
      margin-top: 20px;


    }
    .painel-corpo {
    width: 100%;
  }

    .painel-titulo {
    text-align: left;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase; 
  }

.lado-lado {
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