<template>
    <body class="body">
    <div class="main-container">        
        <h1>Efetue seu Login</h1>
        <form @submit.prevent="anuncioSubmitForm()">            
            <div class="form-group">

                <label for="title" class="text-white">Título</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Título" 
                    name="title" 
                    v-model="anuncioForm.title"
                    required >
            </div>

            <div class="form-group">

                <label for="author" class="text-white">Autor</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Autor" 
                    name="author" 
                    v-model="anuncioForm.author"
                    required>
            </div>
            <div class="form-group">

                <label for="description" class="text-white">Descrição</label>
                <textarea 
                    name="description" 
                    placeholder="Descrição" 
                    class="form-control"
                    v-model="anuncioForm.description">
                </textarea>
            </div>
            
            <br>
            <div class="form-group">
                <a href="/" class="btn btn-warning">Cancelar</a>
                <button  @click="submitAnuncio" type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </form>
    </div>
    </body> 
</template>

<script>

import swal from 'sweetalert';
import AnuncioService from '../services/AnuncioService';

export default {
  name: 'AnuncioComponent',
  data() {
    return {
      anuncioForm: {
        title: null,
        author: null,
        description: null,
      },
      isSubmitted: false,
    };
  },
  methods: {
    anuncioSubmitForm() {},

    async submitAnuncio() {
      try {
        this.isSubmitted = true;  
        await AnuncioService.registerNewAnuncio(this.anuncioForm);
        this.$router.push('/');
      } catch (error) {       
        swal({
          title: 'Oops!',
          text: 'Erro ao realizar cadastro!',
          icon: 'error',
        });
      }
    },
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
</style>    