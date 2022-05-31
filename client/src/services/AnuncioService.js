
import swal from 'sweetalert';
import Api from './Api'

class AnuncioService {

    

    /**
     * Método responsável por criar um novo Anuncio  (new Register Anuncio)
     * (POST): localhost:3000/api/v1/register
     */
    static async registerNewAnuncio(newAnuncio) {
      try {
        const response = 
        await Api().post('/anuncio', newAnuncio);
        const status = response.status;
  
        if (status) {          
          swal({
            title: 'Excelente!',
            text: 'Anuncio cadastrado com sucesso!',
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
 

  static async deleteAnuncio(id) {
    return  Api().delete(`/anuncio/${id}`);
  }
}


  export default AnuncioService;  