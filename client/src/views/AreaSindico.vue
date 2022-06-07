<template>
    <body>   
        <div class="main-container">
            <h1 id="titulo">ÁREA DO SÍNDICO</h1>
        </div>
    </body> 
</template>

<script>
    import swal from 'sweetalert';

    export default{
        name: "SindicoViver",  
      
        async mounted(){
             this.getSindico();
            await this.direcionaHome ();
        },
        methods: { 
                
            async  getSindico(){
                    await swal({
                        title: 'ACESSO RESTRITO!',
                        text: 'Apenas o síndico tem acesso a esse local!',
                        icon: 'warning',
                    });                      
                }, 
            async direcionaHome () {
                await this.$router.push({ name: 'home'})                    
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

</style>