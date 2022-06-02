<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ anuncioForm.title }}</h2>

    <h2 v-if="anuncioForm._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>
    
    <form @submit.prevent="anuncioAtualizaForm()">

      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="anuncioForm.title">
      </div>

      <div class="controle">
        <label for="author">AUTOR</label>
        <input id="author" autocomplete="off" v-model.lazy="anuncioForm.author">
        
      </div>

      <div class="controle">
        <label for="phone">CONTATO</label>
        <textarea id="phone" autocomplete="off" v-model="anuncioForm.phone">
        </textarea>
      </div>

      <div class="controle">
        <label for="description">DESCRIÇÃO</label>
        <textarea id="description" autocomplete="off" v-model="anuncioForm.description">
        </textarea>
      </div>

      <div class="centralizado">
        <div class="form-group">
                <a href="/anuncios" class="btn btn-warning">Cancelar</a>
                <button  @click="anuncioAtualizaForm" type="submit" class="btn btn-primary">Salvar</button>
            </div>
      </div>

    </form>
  </div>
</template>

<script>

import AnuncioService from '../services/AnuncioService';



export default {

  data() {

      return {

        anuncioForm: {
          title: null,
          author: null,
          phone: null,
          description: null,
        }, 
          id: this.$route.params.id
      }
  },

  methods: {

      anuncioAtualizaForm() {

          this.service
            .upDateAnuncio(this.anuncioForm)
            .then(() => {
              this.$router.push('/anuncios');
              //this.foto = new Foto();
            }, err => console.log(err));
      }
  },

  created() {

      this.service = new AnuncioService(this.$resource);

      if(this.id) {
        this.service
          .busca(this.id)
          .then(anuncio => this.anuncio = anuncio);
      }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }
</style>