<template>
    <div>
        <div id="nav">      
            <router-link to="/" id="logo-url">
                <img src="../assets/Logo.jpeg" width="100"  height="40">
            </router-link>
            <h1 id="mensagem-provisoria"> SEU CONDOMÍNIO ON-LINE</h1>
            <ul class="navbar-nav mr-auto" v-if="usuarioestaLogado">         
                <button class="nav-item-logout" type="Submit" href="#" @click.prevent="efetuarLogout">Logout</button>
            </ul>
            <div class="navbar-nav mr-auto" v-else>
                <table>
                    <tr>
                        <td>
                            <div>
                                <button class="nav-item" type="Submit" href="#" @click.prevent="direcionaLogin">Login</button>
                            </div>
                        </td>
                        <td>
                            <div>
                                <button class="nav-item" type="Submit" href="#" @click.prevent="direcionaRegistrar">Registre-se </button>
                            </div>
                        </td>       
                    </tr>
                </table>                       
            </div>   
        </div> 
        <ul class="navbar-nav mr-auto" v-if="usuarioestaLogado">
            <nav>
                <a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a>    
                <ul class="menu">        
                    <li><a  href="/"><i class="fa fa-user"></i> DESTAQUES</a></li>
                    <li><a  href="/anuncios"><i class="fa fa-anuncios"></i> ANÚNCIOS</a></li>
                    <li><a  href="/financ"><i class="fa fa-financas"></i> FINANÇAS</a></li>
                    <li><a  href="/convencao"><i class="fa fa-concencao"></i> CONVENÇÃO</a></li>
                    <li><a  href="/assembleia"><i class="fa fa-assembleia"></i> ASSEMBLÉIA ONLINE</a></li>
                    <li><a  href="/areacomum"><i class="fa fa-area"></i> ÁREA COMUM</a></li>
                    <li><a  href="/check-in"><i class="fa fa-check"></i> CHECK-IN</a></li>
                    <li><a  href="/area-sindico"><i class="fa fa-sindico"></i> ÁREA DO SÍNDICO</a></li>
                </ul>
            </nav> 
        </ul>
    </div>
</template>

<script>
    export default{
        name: "NavBar",             
        methods:{
                direcionaLogin () {
                    this.$router.push({ name: 'login'}),
                    setTimeout(function() {
                        window.location.reload(1);
                    }, 1);
                },
                direcionaRegistrar () {
                    this.$router.push({ name: 'novo.usuario'}),
                    setTimeout(function() {
                        window.location.reload(1);
                    }, 1);
                },
                efetuarLogout () {
                    localStorage.removeItem('jwt');                                      
                    this.$router.push({ name: 'login'})
                    setTimeout(function() {
                        window.location.reload(1);
                    }, 1);
                }
        },
        computed: {
            usuarioestaLogado() {
                return Boolean(localStorage.getItem('jwt'))                   
            }
        }
    }    
</script>

<style>

    #nav {
        background-image: linear-gradient(black, #024772);
        position:center;
        border-bottom: 4x solid #111;
        padding: 10px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        
    }

    #nav a{
        text-decoration: none;
    }

    #logo-url{
        margin: auto;
        margin-left: 0;    
    }

    #mensagem-provisoria{
        margin: auto;
        margin-left: 0;
        color:rgb(123, 124, 121);    
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

    .nav-item-logout{
        background-color:red; 
        border-radius: 12px;
        font: white;
        padding: 8px 8px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px, bold;
        color: #fff;
    }

    .nav-item-logout:hover{
        background: #cc0505;
        color: #fff;
        text-decoration: none;
    }
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,700,800);

    *,html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,label,fieldset,input,p,blockquote,th,td {
        margin: 0;
        padding: 0;
    }

    article,aside,figure,footer,header,hgroup,nav,section {
        display: block;
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    html {
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: #1307ba;
    }

    body {
        background: #e5e5e5;
        color: #374147;
        font: 14px "Open Sans",Helvetica,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        line-height: 1;
        width: 100%;
        text-align: center;
    }

    nav {
        display: block;
        background: #024772;
    }

    .menu {
        display: block;
        position: center;
    }

    .menu li {
        display: inline-block;
        position: center;
        z-index: 100;
    }

    .menu li:first-child {
        margin-left: 100px;
        
    }

    .menu li a {
        font-weight: 600;
        text-decoration: none;
        padding: 20px 15px;
        display: block;
        color: #fff;
        transition: all 0.2s ease-in-out 0s;
    }

    .menu li a:hover,.menu li:hover>a {
        color: #fff;
        background: #9ca3da;
    }

    .menu ul {
        visibility:visible;
        opacity: 0;
        margin: 0;
        padding: 0;
        width: 170px;
        position: center;
        left: 0px;
        background: #fff;
        z-index: 99;
        transform: translate(0,20px);
        transition: all 0.2s ease-out;
    }

    .menu ul:after {
        bottom: 100%;
        left: 40%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #fff;
        border-width: 6px;
        margin-left: -6px;
    }

    .menu ul li {
        display: block;
        float: none;
        background: none;
        margin: 0;
        padding: 0;
    }

    .menu ul li a {
        font-size: 12px;
        font-weight: normal;
        display: block;
        color: #797979;
        background: #fff;
    }

    .menu ul li a:hover,.menu ul li:hover>a {
        background: #9ca3da;
        color: #fff;
    }

    .menu li:hover>ul {
        visibility: visible;
        opacity: 1;
        transform: translate(0,0);
    }

    .menu ul ul {
        left: 169px;
        top: 0px;
        visibility: hidden;
        opacity: 0;
        transform: translate(20px,20px);
        transition: all 0.2s ease-out;
    }

    .menu ul ul:after {
        left: -6px;
        top: 10%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(255, 255, 255, 0);
        border-right-color: #fff;
        border-width: 6px;
        margin-top: -6px;
    }

    .menu li>ul ul:hover {
        visibility: visible;
        opacity: 1;
        transform: translate(0,0);
    }

    .responsive-menu {
        display: none;
        width: 100%;
        padding: 20px 15px;
        background: #374147;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
    }

    .responsive-menu:hover {
        background: #374147;
        color: #fff;
        text-decoration: none;
    }

    a.homer {
        background: #9ca3da;
    } 
   
</style>
