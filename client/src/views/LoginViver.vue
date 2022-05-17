<template>
<body class="body">
    <div class="main-container">        
        <h1>Efetue seu Login</h1>
        <form @submit.prevent="loginSubmitUserForm()">
            <div class="form.group">
                <label for="email">E-mail  </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="form-control mb-5"
                  placeholder="Digite seu E-mail"
                  v-model="loginForm.email"              
                />                
            </div>
            <br>
            <div class="form.group">
                <label for="senha">Senha  </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control mb-5"
                  placeholder="Digite sua Senha"
                  v-model="loginForm.password"              
                />
            </div>
            <br>
            <button @click="submitLoginUser"
              class="btn btn-primary btn-block w-75 my-4"> 
                Logar 
            </button>
            <div class="cadastro-name">
            <router-link :to="{ name: 'novo.usuario' }">
                Cadastre-se aqui!
            </router-link>
            </div>
        </form>
    </div>      
  </body>
</template>

<script>

import swal from 'sweetalert';
import LoginService from '../services/LoginService';

export default {
  name: 'LoginViver',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },      
    };
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;       

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/');
        setTimeout(function() {
          window.location.reload(1);
        }, 1);                 
                 
      } catch (error) {
        swal({
          title: 'password Incorreto!',
          text: 'Digite o password cadastrado!',
          icon: 'error',
        });
      }
    },
  },
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