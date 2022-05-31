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
              <h2 class="painel-titulo">{{ anuncio.title }}
                <p class="author">{{ anuncio.author }}</p>
                <p class="phone">{{ anuncio.phone }}</p>
                <p class="description">{{ anuncio.description }}</p>
              </h2>                         
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
export default{
        name: "AnuncioViver",  
        data() {
          return {
            anuncios: [],            
          }
        },
        mounted(){
              this.getAnuncios();
        },
        methods: {      
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
          direcionaAnuncio () {
            this.$router.push({ name: 'cadastroAnuncio'})                    
          },             
        }       
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