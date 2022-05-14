<template>
  
  <div class="main-container">
    <h1 id="titulo">Área Comum</h1>
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
import PostService from '../PostService'
// @ is an alias to /src



export default {
  name: 'AreaComum',
  
  mounted () {
    PostService.get('/areacomum')
      .then(response => this.areacomum = response.data)
      .catch(erro => console.log(erro))
},
  
}
</script>

<style scoped>
    
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
    font-size:20px;
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