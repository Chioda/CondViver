import swal from 'sweetalert';
import Api from './Api'

export default {
    /**
     * Método responsável por criar um novo Anuncio  (new Register Anuncio)
     * (POST): localhost:3000/api/v1/register
     */
    async registerNewAnuncio(newAnuncio) {
      try {
        //const response = 
        await Api().post('/anuncio', newAnuncio);
        //const { _id } = response.data;
  
        /*if (_id) {          
          swal({
            title: 'Excelente!',
            text: 'Usuário(a) cadastrado com sucesso!',
            icon: 'success',
          });
        }*/
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error',
        }); 
      }
    },
  };