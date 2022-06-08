<template>
    <body class="body">
      <div id="nav-area">      
        <h1 id="titulo">CADASTRAR ANÚNCIOS</h1>          
      </div>
      <div class="main-container">
        <form @submit.prevent="anuncioSubmitForm()">            
            <div class="form-group">
              <label for="title" class="text-white">Título:</label>
              <input type="text" 
                     class="form-control" 
                     placeholder="Título" 
                     name="title" 
                     v-model="anuncioForm.title"
                     required >
            </div> 
            <div class="form-group">
              <label for="author" class="text-white">Autor: 
                <br>
                <p class="name-user">{{ anuncioForm.author }}</p>
              </label>              
            </div>
            <div class="form-group">
              <label for="phone" class="text-white">Contato</label>
              <input type="text" 
                     class="form-control" 
                     placeholder="Telefone de Contato" 
                     name="phone" 
                     v-model="anuncioForm.phone"
                     required>
            </div>
            <div class="form-group">
              <label for="description" class="text-white">Descrição</label>
              <textarea name="description" 
                        placeholder="Descrição" 
                        class="form-control"
                        v-model="anuncioForm.description">
              </textarea>
            </div>            
            <br>
            <div class="form-group">
                <a href="/anuncios" class="btn btn-warning">Cancelar</a>
                <button  @click="submitAnuncio" type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </form>
      </div>    
      <hr>      
    </body> 
</template>

<script>

  import swal from 'sweetalert';
  import AnuncioService from '../services/AnuncioService';
  import VueJwtDecode from 'vue-jwt-decode';

  export default {
    name: 'CadastrarAnuncios',
    data() {
      return {      
        anuncioForm: {
          title: null,
          author: null,
          phone: null,
          description: null,
        }, 
        user: {},
        id: this.$route.params.id,   
        isSubmitted: false,
      };
    },

    methods: {
      getUser() {
        const token = localStorage.getItem('jwt');
        const tokenDecoded = VueJwtDecode.decode(token);
        this.user = tokenDecoded;
        this.anuncioForm.author = this.user.name;
        console.log(tokenDecoded);
      },

      anuncioSubmitForm() {},

      async submitAnuncio() {
        try {
          this.isSubmitted = true;          
          await AnuncioService.registerNewAnuncio(this.anuncioForm);
          this.$router.push('/anuncios');
        } catch (error) {       
          swal({
            title: 'Oops!',
            text: 'Erro ao realizar cadastro!',
            icon: 'error',
          });
        }
      },
    },
    created() {
      this.getUser();      
    },
  };  
</script>




<style scoped>
    
    #titulo {
      text-align: left;
      color: white;
      background: rgb(52, 52, 53);
      margin-left:2%;
      margin-right: 2%;
      margin-top: 20px;
      font-weight: bold;
  }

  .main-container{
    background-color: grey;   
    border-radius: 12px;
    padding: 1em;
    position: center;
    top: 50%;
    left: 50%;
    width: 50%;
    margin-left:25%;
    
  }

    .name-user {
    background: rgb(83, 83, 83);
    font-weight: bold;
    padding: 5px 10px;
    color: white;
  }

  input::placeholder {
  color: rgb(228, 225, 225);
  }

  textarea::placeholder {
  color: rgb(228, 225, 225);
  }
  
</style>    