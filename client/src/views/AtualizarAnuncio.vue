


<template>
    <body class="body">      
      
        <div id="nav-area">      
          <h1 id="titulo">ATUALIZAR ANÚNCIOS</h1>
          
        </div>
      <div class="main-container">
        
        <form @submit.prevent="anunciosUpDateForm()">            
            <div class="form-group">

                <label for="title" class="text-white">Título</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Título" 
                    name="title" 
                    v-model="anuncioUpDateForm.title"
                    required >
            </div>

            <div class="form-group">

                <label for="author" class="text-white">Autor</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Autor" 
                    name="author" 
                    v-model="anuncioUpDateForm.author"
                    required>
            </div>

            <div class="form-group">

                <label for="phone" class="text-white">Contato</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Telefone de Contato" 
                    name="phone" 
                    v-model="anuncioUpDateForm.phone"
                    required>
            </div>  

            <div class="form-group">

                <label for="description" class="text-white">Descrição</label>
                <textarea 
                    name="description" 
                    placeholder="Descrição" 
                    class="form-control"
                    v-model="anuncioUpDateForm.description">
                </textarea>
            </div>
            
            <br>
            <div class="form-group">
                <a href="/anuncios" class="btn btn-warning">Cancelar</a>
                <button  @click="upDateAnuncioForm" type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </form>
    </div>

    </body> 
</template>

<script>

//import swal from 'sweetalert';
//import AnuncioService from '../services/AnuncioService';
  import Api from '../services/Api'
export default {
  name: 'AtualizarAnuncios',
  data() {
    return {      
      anuncioUpDateForm: {
        title: null,
        author: null,
        phone: null,
        description: null,
      },
      id: this.$route.params.id,
      isSubmitted: false,
    };
  },
  mounted(){
              this.getAnuncios();
        },
        methods: {      
          async  getAnuncios(){
             const response = await Api().get('/anuncio/${{ id }}');
            console.log(response);
            if (response.status == 200){
              this.anuncios = response.data
            }
          },
  
}
}

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


</style>    