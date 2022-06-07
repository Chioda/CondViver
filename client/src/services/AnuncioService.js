import swal from 'sweetalert';
import Api from './Api'

class AnuncioService {

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
  
  static async upDateAnuncio(id) {
    return  Api().patch(`/anuncio/${id}`);
  }

}

export default AnuncioService;  