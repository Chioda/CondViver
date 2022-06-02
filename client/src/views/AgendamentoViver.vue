<template>
  <body>    
    <h1 id="titulo">AGENDAMENTO</h1>
    <div class="main-container">      
      <form @submit.prevent="createAgendamento()">  
        <h2>REALIZE SEU AGENDAMENTO</h2>  
           
        <div class="input-container">
          <label for="local">Selecione o local:</label>
          <select required name="local" id="local" v-model="agendamentoForm.local">
            <option value="">Selecione o local</option>
            <option value="academia">Academia</option>
            <option value="churrasqueira">Churrasqueira</option>
            <option value="sl_beleza">Salão de Beleza</option>
            <option value="sl_festas">Salão de Festas</option>                    
          </select>
          
          <br>  
          <br>   
          <div class="input-container">     
          <form>
            <div>
              <label for="diaa">Selecione a data do agendamento::</label>
              <input type="date" id="diaa" name="diaa" v-model="agendamentoForm.dia">
            </div>
          </form>
          </div>
          
          <br>          
          <div class="input-container">          
            <label for="horario" >Selecione o horário:</label>
            <select required name="horario" id="horario" v-model="agendamentoForm.horario" >
              <option value="">Selecione um horário</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>                                  
            </select>  
          </div>           
        
        
        <br>
        <div class="input-container">
                <a href="/areacomum" class="btn btn-warning">Cancelar</a>
                <button  @click="submitAgendamento" type="submit" class="btn btn-primary">Agendar</button>
            </div> 
          
        </div>      
      </form>
    </div>
    <img id="alerta" src="../../public/img/Alerta.jpg" alt="alerta" width="600"  height="300"> 

  </body>
</template>

<script>
import swal from 'sweetalert';
import AgendamentoService from '../services/AgendamentoService';

export default {

name: 'CadastrarAgendamento',
  data() {
    return {      
      agendamentoForm: {
        local: null,
        dia: null,
        horario: null,  
        status: "Pendente",      
      }, 
        
      isSubmitted: false,
    };
  },

  methods: {
     
    createAgendamento() {},

    async submitAgendamento() {
      try {
        this.isSubmitted = true;          
        await AgendamentoService.registerNewAgendamento(this.agendamentoForm);
        this.$router.push('/check-in');
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


  
 .main-container {
    
    align-items:stretch;  
    flex-direction:row;
    margin-bottom: 20px;
    margin-top: 30px;
    max-width: 400px;
    max-height: 200px;
    margin-left: 5%;
    padding: 10px 5px;    
  }




  #agendamento-form {
    background-color: rgb(150, 150, 150);   
    border-radius: 12px;
    padding: 25px 10px;

  }

  #horario option {
    color: black
  }

  .placeholder {
    color: gray;
  }

  h2 {
    background: white;
    font-weight: bold;
    font-size: 25px;
  }

  label {
    display:inline-block;
    font-weight: bold;
    max-width: 300px;
    margin-bottom: 10px;
    margin-top: 20px;
    color: #222;;
    padding: 3px 10px;
    
  }
  input, select {
    
    padding: 5px 10px;
    width: 300px;
  }

  img {
    background-color: rgb(221, 0, 0);   
    border-radius: 12px;
    padding: 1em;
    position: absolute;
    top: 65%;
    left: 65%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }

  .submit-btn {
    background-color:green; 
    border-radius: 12px;
    padding: 8px 8px;   
    text-align: center; 
    display:inline-block;
    font-size: 12px, bold;
    color: #fff;
  }

   .submit-btn:hover{
    background: darkgreen;
    color: #fff;
    text-decoration: none;
 } 
  
</style>
