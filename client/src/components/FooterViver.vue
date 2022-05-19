<template>   
    <div class="footer-absolute">        
		<footer class="footer-distributed">
			<div class="footer-right">                
				<a href="https://pt-br.facebook.com/"><i class="fa fa-facebook"><img src="../assets/facebook_108044.png" alt="face" width="35px" height="35px"></i></a>
				<a href="https://www.instagram.com/"><i class="fa fa-instagran"><img src="../assets/instagram_108043.png" alt="insta" width="35px" height="35px"></i></a>
				<a href="https://www.youtube.com/"><i class="fa fa-youtube"></i><img src="../assets/youtube_108041.png" alt="youtube" width="35px" height="35px"></a>
				<a href="https://github.com/Chioda/viver"><i class="fa fa-github"></i><img src="../assets/circle-github_icon-icons.com_66826.png" alt="face" width="35px" height="35px"></a>
			</div>           
			<div class="footer-left">
				<p class="footer-links"><a class="link-1" href="/">Home</a></p>
                <p>E-mail: thiagochioda@hotmail.com</p>
                <p>Telefone: (11) 4540-9080</p>				
			</div>
            <div class="footer-center">				
				<p>CONDOMÍNIO VIVER &copy; 2022</p>
			</div>            
		</footer>   
    </div>
</template>

<script>
    export default {
        name: "FooterViver"
    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);

    * {
        font-family: Roboto;
    }
    
    .footer-absolute {
        position:-ms-page;
        bottom: 0;
        width: 100%;
    }

    section {
        width: 100%;
        display: inline-block;
        background: #ccc;
        height: 60vh;
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        text-decoration: underline;    
    }

    

    .footer-distributed {
        background-color: #292c2f;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      
        box-sizing: border-box;
        width: 100%;
        line-height: 100px;
        text-align: left;
        font: normal 16px sans-serif;
        padding: 30px 30px;
    }

    .footer-distributed .footer-left p {
        color: #8f9296;
        font-size: 14px;
        margin: 0;
    }
    
    .footer-distributed p.footer-links {
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
        margin: 0px 0px 10px;
        padding: 0;
        transition: ease .25s;
    }

    .footer-distributed p.footer-links a {
        display: inline-block;
        line-height: 1.8;
        text-decoration: none;
        color: inherit;
        transition: ease .25s;
    }

    .footer-distributed .footer-links a:before {
        content: "·";
        font-size: 20px;
        left: 0;
        color: #fff;
        display: inline-block;
        padding-right: 5px;
    }

    .footer-distributed .footer-links .link-1:before {
        content: none;
    }

    .footer-distributed .footer-right {
        float: right;
        margin-top: 6px;
        max-width: 180px;
    }

    .footer-distributed .footer-right a {
        display: inline-block;
        width: 35px;
        height: 35px;
        background-color: #33383b;
        border-radius: 2px;
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 35px;
        margin-left: 3px;
        transition:all .25s;
    }

    .footer-distributed .footer-right a:hover{transform:scale(1.1); -webkit-transform:scale(1.1);}

    .footer-distributed p.footer-links a:hover{text-decoration:underline;}

    @media (max-width: 600px) {
        .footer-distributed .footer-left, .footer-distributed .footer-right {
            text-align: center;
        }
        
        .footer-distributed .footer-right {
            float: none;
            margin: 0 auto 20px;
        }
        .footer-distributed .footer-left p.footer-links {
            line-height: 1.8;
        }
    }

    .footer-distributed .footer-center {
        color: #8f9296;
        font-size: 14px;
        margin: -20px;
        text-align: center;
    }
</style>