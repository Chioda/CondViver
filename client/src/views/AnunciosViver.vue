<template>
    <body class="body">      
      <div class="main-container">
        <div id="nav-area">      
          <h1 id="titulo">ANÚNCIOS</h1>
          <ul class="navbar-nav mr-auto">         
            <button class="nav-item" type="Submit" @click.prevent="direcionaAnuncio">Crie seu anúncio</button>
          </ul>
        </div>
       </div> 
    </body>
</template>        


<script>
export default{
        name: "AnuncioViver",             
        methods:{
                direcionaAnuncio () {
                    this.$router.push({ name: 'cadastroAnuncio'})                    
                },
                
                
        },
        
    }    
</script>

<style scoped>
  #titulo {
      text-align: left;
      color: white;
      background: rgb(52, 52, 53);
      
      margin-right: 2%;
      margin-top: 20px;
      font-weight: bold;
      margin: auto;
      margin-left: 0;
    }

  #nav-area {
    background: rgb(52, 52, 53);
    position:center;
    border-bottom: 4x solid #111;
    margin-left:2%;
    margin-right: 2%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 95%;
    
}

#nav a{
    text-decoration: none;
}

.nav-item{
    background-color: blue; 
    border-radius: 12px;
    padding: 8px 8px;
    margin: 5px;
    text-align: center; 
    display:inline-block;
    font-size: 12px, bold;
    color: #fff;
  }

 .nav-item:hover{
    background: #062486;
    color: #fff;
    text-decoration: none;
 } 


    .painel-corpo {
    width: 100%;
  }

    .painel-titulo {
    text-align: left;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase; 
    font-size:20px;
    font-weight: bold;
  }

.lado-lado {
  background: white;
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 40px;
  box-shadow: 5px 5px 10px grey;
  width: 300px;
  height: 100%;
  vertical-align: top;
  text-align: left;

}

.lista{
  list-style: none;
  margin-left: 5%;
}
</style>