<template>
  <body>   
    <div class="main-container">
        <h1>EFETUE SEU CADASTRO</h1>
        <form @submit.prevent="enviarFormulario">
            <div class="form-group">
                <label for="nome">Nome  </label>
                <input type="text" class="form-control" v-model="usuario.nome">
            </div>
            <br>
            <div class="form-group">
                <label for="email">E-mail  </label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <br>
            <div class="form-group">
                <label for="senha">Senha  </label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <br>
            <button class="btn-primary" type="submit">Salvar</button>
        </form>
    </div>
  </body> 
</template> 

<script>
  import Api from '../services/Api'
  export default {

    data: function() {
      return {
        usuario: {
          nome: "",
          senha: "",
          email: ""
        }
      }
    },
    methods: {
        enviarFormulario() {
            Api
              .insertPost(this.usuario)
              .then(resposta => { 
                  console.log(resposta)  
                  this.$router.push({ name: 'login' })              
              })
              .catch(erro => console.log(erro))
          }
      }
  };  
</script>

<style scoped>
  body {
    background-image: url("../assets/Fundo.jpeg");
    height: 471px;
  }

  .main-container { 
    background-color: grey;
    position: absolute;
    border-radius: 12px;
    margin-block: 100px;
    left:40%;
    font-size: 15px; 
    color: white, bold;
    
    padding: 50px
  }

  h1{
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
    color: white;
  }

  .cadastro-name {
    font-size: 10px;
    padding: 10px;
    
  }

  label{
    color:white
  }

  .btn-primary{
    padding:5px;
    
    
  }

</style>