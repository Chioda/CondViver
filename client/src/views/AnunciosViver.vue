<template>
  <div>     
    <div class="main-container">
      <div id="nav-area">      
        <h1 id="titulo">ANÚNCIOS</h1>
        <ul class="navbar-nav mr-auto">         
          <button class="nav-item" type="Submit" @click.prevent="direcionaAnuncio">Crie seu anúncio</button>
        </ul>
      </div>
    </div> 
      <ul>
        <li class="lista-destaques">
          <div>
            <div class="lado-lado" v-for="anuncio in anuncios"           
                  v-bind:key="anuncio._id"  
                  v-on:dblclick="deleteAnuncio(anuncio._id)">                        
              <div class="painel">
                <h2 class="painel-titulo">{{anuncio.title}}</h2>
                <div class="painel-corpo">
                    <p class="description">
                      <b class="bold">Descrição:</b>
                      <br>
                      {{ anuncio.description }}
                    </p> 
                    <p class="contact">
                      <b>Contato:</b>
                      <br>
                      {{ anuncio.author }}
                      <br>
                      {{ anuncio.phone }}
                    </p>                     
                </div>            
                <button type="button" 
                        class="btn btn-light mr-1" v-show="user.name == anuncio.author || user.sindico == true"
                        @click="deleteAnuncio(anuncio._id)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                </button> 
              </div>                  
            </div>
          </div>
        </li>
      </ul>
  </div>     
</template>        


<script>
  import AnuncioService from '../services/AnuncioService';
  import swal from 'sweetalert';
  import Api from '../services/Api'
  import VueJwtDecode from 'vue-jwt-decode';

  export default{
        name: "AnuncioViver",  
        data() {
          return {
            anuncios: [], 
            user: {},           
          }
        },
        mounted(){
              this.getAnuncios();
        },
        methods: { 
          getUser() {
            const token = localStorage.getItem('jwt');
            const tokenDecoded = VueJwtDecode.decode(token);
            this.user = tokenDecoded;            
            console.log(tokenDecoded);
          },    

          async direcionaAnuncio () {            
            this.$router.push({ name: 'cadastroAnuncio'}),
              setTimeout(function() {
                window.location.reload(1);
              }, 1);
           },
                            
          async  getAnuncios(){
            const response = await Api().get('/anuncio');
            console.log(response);
            if (response.status == 200){
              this.anuncios = response.data
            }
          },    
          async deleteAnuncio(id){
              const post = confirm("Deseja realmente excluir este Anúncio?");
              if (post == null || post == "") {
                  alert("Você desistiu de excluir o Anuncio!");
              } else {
                      await swal({
                        title: 'Confirmado!',
                        text: 'Anuncio EXCLUÍDO com sucesso!',
                        icon: 'success',
                      });
                        await AnuncioService.deleteAnuncio(id);
                        this.anuncios = Api().get('/anuncio');
                        setTimeout(function() {
                        window.location.reload(1);
                      }, 1);
              }               
          },
        },
        created() {
          this.getUser();      
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
    list-style: none;
  }

  .lista-destaques{
    list-style: none;
    margin-left: 5%;
  }
  .nav-item-logout{
    background-color:red; 
    border-radius: 12px;
    font: white;
    padding: 8px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px, bold;
    color: #fff;
  }

  .nav-item-logout:hover{
    background: #cc0505;
    color: #fff;
    text-decoration: none;
  }

   .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    list-style: none;
    box-shadow: 5px 5px 10px grey;
    width: 100%;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  .bold {
    font-size: bold;
  }
</style>