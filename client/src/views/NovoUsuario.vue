<template>
  <body>   
    <div class="main-container">
        <h1>EFETUE SEU CADASTRO</h1>
        <form @submit.prevent="registerSubmitUserForm()">
            <div class="form-group">
                <label for="nome">Nome  </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control mb-2"
                  placeholder="Inclua seu Nome"
                  v-model="registerForm.name"                  
                />
            </div>
            <br>
            <div class="form-group">
                <label for="email">E-mail  </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control mb-2"
                  placeholder="Inclua seu E-mail"
                  v-model="registerForm.email"              
                />
            </div>
            <br>
            <div class="form-group">
                <label for="senha">Senha  </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control mb-2"
                  placeholder="Inclua a Senha"
                  v-model="registerForm.password"              
                />
            </div>
            <br>
            <center>            
            <button
              @click="submitRegisterUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              Cadastrar
            </button>          
            <br>
            <p class="center">
            Já possui um login cadastrado?<router-link class="router" to="/login">
              Faça o Login Aqui</router-link>
            </p>
            </center>
        </form>
    </div>
  </body> 
</template> 

<script>
import swal from 'sweetalert';
import RegisterService from '../services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
      try {
        this.isSubmitted = true;  
        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push('/login');
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
  body {
    background-image: url("../assets/Fundo.jpeg");
    height: 600px;
  }

  .main-container {     
    background-color: grey;   
    border-radius: 12px;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
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

  .center{
    color: white
  }

  .router{
    color: white
  }

  .router:hover {
    color: darkblue;
  }

</style>