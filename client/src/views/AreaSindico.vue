<template>
    <div> 
      <h1 id="titulo">ÁREA DO SÍNDICO</h1>   
      <section class="projetos">        
        <table class="table is-fullwidth">
          <tbody>
            <tr class="tabela">              
              <th>Nome</th>              
              <th>Contato</th>
              <th>Email</th>
              <th>Apto</th>
              <th>Inadimplente</th>
              <th></th>
            </tr>           
              <tr class="lado-lado" v-for="user in users"           
                v-bind:key="user._id" >                  
                  <td>{{ user.name }}</td>                  
                  <td>{{ user.telefone }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.apto }}</td>                                  
                  <td class="status-red" v-if="user.inadimplente == true">{{ user.inadimplente }}</td>
                  <td class="status-green" v-else>{{ user.inadimplente }}</td>
                  
                  <td>                    
                    <button type="button" class="btn btn-primary" @click="updateUser(user)">
                      Alterar Status
                    </button>
                  </td>                
              </tr>
            </tbody>
          </table>
        </section>
    </div>
</template>

<script>
    import swal from 'sweetalert';
    import Api from '../services/Api'    
    import VueJwtDecode from 'vue-jwt-decode';

    export default {
        name: "SindicoViver",  
        data() {
            return {
                users: {},
                sindico: [],
                isSubmitted: false,
            };
        },
        mounted(){
            this.getUser();
            this.getSindico();
          },

        /*async mounted(){
             
            await this.direcionaHome ();
        },*/
        methods: {                 
            async  getSindico(){
                  const token = localStorage.getItem('jwt');
                  const tokenDecoded = VueJwtDecode.decode(token);
                  this.sindico = tokenDecoded;        
                  console.log(tokenDecoded);
                  if (this.sindico.sindico == true) {
                       await swal({
                        title: 'BEM VINDO!',
                        text: 'Acesso liberado ao síndico',
                        icon: 'success',
                    });   
                  } else this.direcionaHome(),
                      await swal({
                        title: 'ACESSO RESTRITO!',
                        text: 'Apenas o síndico tem acesso a esse local!',
                        icon: 'warning',
                    });                      
                }, 
            async direcionaHome () {
                await this.$router.push({ name: 'home'})                    
            }, 
            async getUser() {
                const response = await Api().get('/user');
                console.log(response);
                if (response.status == 200){
                    this.users = response.data
                }
            },
            async updateUser(user) {
              try {
                this.user = user  
                if (this.user.inadimplente == false){           
                  this.user.inadimplente = true; 
                }else {
                  this.user.inadimplente = false;
                }

                const req = await Api().patch(`/user/${user._id}`, this.user);
                const res = await req.json()
                console.log(res)                
              } catch (error) {       
                swal({
                  title: 'Confirmado!',
                  text: 'Status ALTERADO com sucesso!',
                  icon: 'success',
                });
              }
            }, 
            
        },        
    }     
    
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

  .status-green {
    color:rgb(1, 219, 1);
    font-weight: bold;  
  }

  .status-red {
    color:red;
    font-weight: bold;  
  }

  .lado-lado {
    background: white;
  }

</style>