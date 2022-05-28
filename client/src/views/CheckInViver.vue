<template>
  <body>    
    <h1 id="titulo">CHECK-IN</h1>

    <div>
    
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name: {{ user.name }}</li>
              <li class="list-group-item">E-mail: {{ user.email }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
      
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
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </section>

  </body>
</template>

<script >
import VueJwtDecode from 'vue-jwt-decode';

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

.projetos {
  padding: 1.25rem;
}
</style>