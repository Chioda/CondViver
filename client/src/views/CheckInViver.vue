<template>
<body>
 
    <h1 id="titulo">CHECK-IN</h1>

   
      <section class="projetos">
        
        <table class="table is-fullwidth">
          <tbody>
            <tr class="tabela">              
              <th>Nome</th>              
              <th>Local</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
           
            <tr class="lado-lado" v-for="agendamento in agendamentos"           
              v-bind:key="agendamento._id" v-show="agendamento.usuario == user.name" >                  
                <td>{{ agendamento.usuario }}</td>              
                <td>{{ agendamento.local }}</td>
                <td>{{ agendamento.dia  }}</td>
                <td>{{ agendamento.horario }}</td>
                
                <td class="status-verde" v-if="agendamento.checkIn == 'Realizado'">{{ agendamento.checkIn  }}</td>
                <td class="status-laranja" v-else>{{ agendamento.checkIn  }}</td>
                <td><button type="button" class="btn btn-danger" @click="deleteAgendamento(agendamento._id)">
                  Remover
                </button></td>
                <td><button type="button" class="btn btn-success" v-if="agendamento.checkIn == 'Realizado'"  @click="submitUpDateStatus(agendamento)" disabled >
                  Check-In
                </button>
                <button type="button" class="btn btn-success" v-else @click="submitUpDateStatus(agendamento)">
                  Check-In
                </button></td>
                
            </tr>
          </tbody>
        </table>
      </section>
</body>
</template>

<script >

import AgendamentoService from '../services/AgendamentoService';
import swal from 'sweetalert';
import Api from '../services/Api'
import VueJwtDecode from 'vue-jwt-decode';

export default{
        name: "CheckInViver",  
        data() {
          return {
            agendamentos: [], 
            user: {},           
          }
        },
        mounted(){
              this.getAgendamentos();
              this.getUser();
        },
        methods: { 
                
          async  getAgendamentos(){
             const response = await Api().get('/agendamento');
            console.log(response);
            if (response.status == 200){
              this.agendamentos = response.data
            }
          },   
          
          getUser() {
            const token = localStorage.getItem('jwt');
            const tokenDecoded = VueJwtDecode.decode(token);
            this.user = tokenDecoded;            
            console.log(tokenDecoded);
            
            
          },
          async deleteAgendamento(id){
              const post = confirm("Deseja realmente excluir este Agendamento?");
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

          async submitUpDateStatus(agendamento) {
            try {
              this.agendamento = agendamento             
              this.agendamento.checkIn = "Realizado";         
              const req = await Api().patch(`/agendamento/${agendamento._id}`, this.agendamento);
              const res = await req.json()
              console.log(res)
              
            } catch (error) {       
              swal({
                title: 'Confirmado!',
                text: 'Check-In REALIZADO com sucesso!',
                icon: 'success',
              });
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

 .tabela {
   background: rgb(196, 195, 195);
   text-decoration: underline;
   font-size: 25px; 
   border: black;
 }


.projetos {
  padding: 2rem;
}

.status-laranja {
  color:darkorange;
  font-weight: bold;  
}

.status-verde {
  color:rgb(7, 207, 7);
  font-weight: bold;  
}

.lado-lado {
  background: white;
}

</style>