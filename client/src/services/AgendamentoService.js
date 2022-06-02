import swal from 'sweetalert';
import Api from './Api'

class AgendamentoService {

    

    /**
     * Método responsável por criar um novo Anuncio  (new Register Anuncio)
     * (POST): localhost:3000/api/v1/register
     */
    static async registerNewAgendamento(newAgendamento) {
      try {
        const response = 
        await Api().post('/agendamento', newAgendamento);
        const status = response.status;
  
        if (status) {          
          swal({
            title: 'Excelente!',
            text: 'Agendamento cadastrado com sucesso!',
            icon: 'success',
          });
        }
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        }); 
      }
    }
 

  static async deleteAgendamento(id) {
    return  Api().delete(`/agendamento/${id}`);
  }
  
  static async upDateAgendamento(id) {
    return  Api().patch(`/agendamento/${id}`);
  }


}


  export default AgendamentoService;  