<template>
  <body>    
    <h1 id="titulo">CHECK-IN</h1>

    <div>
    
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name: {{  }}</li>
              <li class="list-group-item">E-mail: {{  }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="lado-lado" v-for="agendamento in agendamentos"           
              v-bind:key="agendamento._id">    
      <section class="projetos">
        
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Apto</th>
              <th>Local</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td><input type="checkbox" name="" id=""></td>  
              <td>{{  }}</td>
              <td>{{  }}</td>
              <td>{{ agendamento.local }}</td>
              <td>{{ agendamento.dia  }}</td>
              <td>{{ agendamento.horario }}</td>
              <td>{{ agendamento.status  }}</td>

            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </body>
</template>

<script >

import AgendamentoService from '../services/AgendamentoService';
import swal from 'sweetalert';
import Api from '../services/Api'
export default{
        name: "CheckInViver",  
        data() {
          return {
            agendamentos: [],            
          }
        },
        mounted(){
              this.getAgendamentos();
        },
        methods: { 
                
          async  getAgendamentos(){
             const response = await Api().get('/agendamento');
            console.log(response);
            if (response.status == 200){
              this.agendamentos = response.data
            }
          },    
          async deleteAgendamento(id){
              const post = confirm("Deseja realmente excluir este Anúncio?");
              if (post == null || post == "") {
                  alert("Você desistiu de excluir o Agendamento!");
              } else {
                      await swal({
                      title: 'Confirmado!',
                      text: 'Agendamento EXCLUÍDO com sucesso!',
                      icon: 'success',
                      });
                      await AgendamentoService.deleteAgendamento(id);
                      this.agendamentos = Api().get('/agendamento');
                        setTimeout(function() {
                        window.location.reload(1);
                      }, 1);
              }               
          },   
                    
                      
        }       
}

/*import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: 'HomeComponent',
  data() {
    return {
      user: {},

    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem('jwt');
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};*/

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

.projetos {
  padding: 1.25rem;
}
</style>