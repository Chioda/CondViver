<template>
    <body> 
    <h1 id="titulo">ASSEMBLÉIA ONLINE</h1>      
    <div class="main-container">
        <h2>LINK PARA A ASSEMLÉIA ONLINE</h2>        
        <br>
        <p>
            <center>
                <img src="../assets/Logo_Zoom.jpg" width="90"  height="50">            
                <br>
                <br>
                Para acessar a reunião online 
                <br>                
                <a class="link-1" href="https://zoom.us/" target="_blank">Clique Aqui!</a>
                <br>
                <br>
                ID da Reunião: 123 456
            </center>
        </p>  
    </div>
  </body> 
</template> 


<script>

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
    background-color: grey;   
    border-radius: 12px;
    padding: 1em;
    position: absolute;
    top: 60%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
  }

  .link-1 {
      color: white;
  }

  .link-1:hover {
      color: blue;
  }

  </style>