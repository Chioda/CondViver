(function(){"use strict";var a={486:function(a,e,o){var t=o(963),i=o(252);function n(a,e,o,t,n,r){const s=(0,i.up)("NavBar"),l=(0,i.up)("router-view"),d=(0,i.up)("FooterViver");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s),(0,i.Wm)(l),(0,i.Wm)(d)])}var r=o.p+"img/Logo.39797c50.jpeg",s=o.p+"img/Icon_Cons.4f2252fa.jpg";const l={id:"nav"},d=(0,i._)("img",{src:r,width:"100",height:"40"},null,-1),c=(0,i._)("h1",{id:"mensagem-provisoria"},[(0,i._)("img",{src:s,width:"50",height:"50"}),(0,i.Uk)(" SITE EM CONSTRUÇÃO!!!")],-1),u={key:0,class:"navbar-nav mr-auto"},m={key:1,class:"navbar-nav mr-auto"},v={key:0,class:"navbar-nav mr-auto"},p=(0,i.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="#"><i class="fa fa-camera"></i> ANÚNCIOS</a></li><li><a href="#"><i class="fa fa-bullhorn"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-tags"></i> CONVENÇÃO</a></li><li><a href="#"><i class="fa fa-envelope"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-sitemap"></i> ÁREA COMUM</a></li><li><a href="#"><i class="fa fa-exclamation-triangle"></i> CHECK-IN</a></li><li><a href="#"><i class="fa fa-exclamation-triangle"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),f=[p];function g(a,e,o,n,r,s){const p=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",l,[(0,i.Wm)(p,{to:"/",id:"logo-url"},{default:(0,i.w5)((()=>[d])),_:1}),c,s.usuarioestaLogado?((0,i.wg)(),(0,i.iD)("ul",u,[(0,i._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,t.iM)(((...a)=>s.efetuarLogout&&s.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[1]||(e[1]=(0,t.iM)(((...a)=>s.direcionaLogin&&s.direcionaLogin(...a)),["prevent"]))},"Login"),(0,i._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[2]||(e[2]=(0,t.iM)(((...a)=>s.direcionaRegistrar&&s.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")]))]),s.usuarioestaLogado?((0,i.wg)(),(0,i.iD)("ul",v,f)):(0,i.kq)("",!0)])}var h={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"})},direcionaRegistrar(){this.$router.push({name:"novo.usuario"})},efetuarLogout(){localStorage.removeItem("jwt"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("jwt"))}}},b=o(744);const w=(0,b.Z)(h,[["render",g]]);var _=w,y=o.p+"img/facebook_108044.72123f49.png",S=o.p+"img/instagram_108043.3c7d5e22.png",C=o.p+"img/youtube_108041.865a1c7f.png",E=o.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const L={class:"footer-absolute"},O=(0,i.uE)('<footer class="footer-distributed" data-v-61f65dba><div class="footer-right" data-v-61f65dba><a href="https://pt-br.facebook.com/" data-v-61f65dba><i class="fa fa-facebook" data-v-61f65dba><img src="'+y+'" alt="face" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.instagram.com/" data-v-61f65dba><i class="fa fa-instagran" data-v-61f65dba><img src="'+S+'" alt="insta" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.youtube.com/" data-v-61f65dba><i class="fa fa-youtube" data-v-61f65dba></i><img src="'+C+'" alt="youtube" width="35px" height="35px" data-v-61f65dba></a><a href="https://github.com/Chioda/viver" data-v-61f65dba><i class="fa fa-github" data-v-61f65dba></i><img src="'+E+'" alt="face" width="35px" height="35px" data-v-61f65dba></a></div><div class="footer-left" data-v-61f65dba><p class="footer-links" data-v-61f65dba><a class="link-1" href="/" data-v-61f65dba>Home</a></p><p data-v-61f65dba>E-mail: thiagochioda@hotmail.com</p><p data-v-61f65dba>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-61f65dba><p data-v-61f65dba>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),k=[O];function D(a,e,o,t,n,r){return(0,i.wg)(),(0,i.iD)("div",L,k)}var U={name:"FooterViver"};const j=(0,b.Z)(U,[["render",D],["__scopeId","data-v-61f65dba"]]);var A=j,I={components:{NavBar:_,FooterViver:A}};const x=(0,b.Z)(I,[["render",n]]);var F=x,N=o(119);const V=(0,i.uE)('<section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image:url(img/Churrasqueira.jpeg);" data-v-679179e9></section><div class="main-container" data-v-679179e9><h1 id="titulo" data-v-679179e9>DESTAQUES</h1><ul class="lista" data-v-679179e9><li class="lista-destaques" data-v-679179e9><div data-v-679179e9><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Criancas.jpeg" alt="Criancas" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Colônia de Férias para as crianças do Viver</h2><span data-v-679179e9>10 de Janeiro de 2022</span></div><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Covid.jpeg" alt="Covid" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Liberada a obrigatoriedade das mascaras no condomínio </h2><span data-v-679179e9>02 de Janeiro de 2022</span></div><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Gas.jpeg" alt="Gas" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Nova assembléia para regras dos medidores de Gás</h2><span data-v-679179e9>10 de Dezembro de 2021</span></div></div></li></ul></div>',2),M=[V];function R(a,e,o,t,n,r){return(0,i.wg)(),(0,i.iD)("div",null,M)}var T=o(669),q=o.n(T),B=()=>q().create({baseURL:"api/v1/"}),Z={name:"HomeView",mounted(){B.get("/").then((a=>this.home=a.data)).catch((a=>console.log(a)))}};const $=(0,b.Z)(Z,[["render",R],["__scopeId","data-v-679179e9"]]);var G=$;const W=a=>((0,i.dD)("data-v-e2a6513e"),a=a(),(0,i.Cn)(),a),H={class:"main-container"},J=W((()=>(0,i._)("h1",null,"EFETUE SEU CADASTRO",-1))),P={class:"form-group"},Q=W((()=>(0,i._)("label",{for:"nome"},"Nome ",-1))),z=W((()=>(0,i._)("br",null,null,-1))),K={class:"form-group"},X=W((()=>(0,i._)("label",{for:"email"},"E-mail ",-1))),Y=W((()=>(0,i._)("br",null,null,-1))),aa={class:"form-group"},ea=W((()=>(0,i._)("label",{for:"senha"},"Senha ",-1))),oa=W((()=>(0,i._)("br",null,null,-1))),ta=W((()=>(0,i._)("button",{class:"btn-primary",type:"submit"},"Salvar",-1)));function ia(a,e,o,n,r,s){return(0,i.wg)(),(0,i.iD)("body",null,[(0,i._)("div",H,[J,(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,t.iM)(((...a)=>s.enviarFormulario&&s.enviarFormulario(...a)),["prevent"]))},[(0,i._)("div",P,[Q,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=e=>a.usuario.nome=e)},null,512),[[t.nr,a.usuario.nome]])]),z,(0,i._)("div",K,[X,(0,i.wy)((0,i._)("input",{type:"email",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=e=>a.usuario.email=e)},null,512),[[t.nr,a.usuario.email]])]),Y,(0,i._)("div",aa,[ea,(0,i.wy)((0,i._)("input",{type:"password",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=e=>a.usuario.senha=e)},null,512),[[t.nr,a.usuario.senha]])]),oa,ta],32)])])}var na={data:function(){return{usuario:{nome:"",senha:"",email:""}}},methods:{enviarFormulario(){B.insertPost(this.usuario).then((a=>{console.log(a),this.$router.push({name:"login"})})).catch((a=>console.log(a)))}}};const ra=(0,b.Z)(na,[["render",ia],["__scopeId","data-v-e2a6513e"]]);var sa=ra;const la=(0,i._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),da=(0,i._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),ca=[la,da];function ua(a,e){return(0,i.wg)(),(0,i.iD)("div",null,ca)}const ma={},va=(0,b.Z)(ma,[["render",ua]]);var pa=va;const fa=a=>((0,i.dD)("data-v-66fdfd24"),a=a(),(0,i.Cn)(),a),ga={class:"body"},ha={class:"main-container"},ba=fa((()=>(0,i._)("h1",null,"Efetue seu Login",-1))),wa={class:"form.group"},_a=fa((()=>(0,i._)("label",{for:"email"},"E-mail ",-1))),ya=fa((()=>(0,i._)("br",null,null,-1))),Sa={class:"form.group"},Ca=fa((()=>(0,i._)("label",{for:"senha"},"Senha ",-1))),Ea=fa((()=>(0,i._)("br",null,null,-1))),La={class:"cadastro-name"},Oa=(0,i.Uk)(" Cadastre-se aqui! ");function ka(a,e,o,n,r,s){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("body",ga,[(0,i._)("div",ha,[ba,(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,t.iM)((a=>s.loginSubmitUserForm()),["prevent"]))},[(0,i._)("div",wa,[_a,(0,i.wy)((0,i._)("input",{type:"text",id:"email",name:"email",class:"form-control mb-5",placeholder:"Digite seu E-mail","onUpdate:modelValue":e[0]||(e[0]=a=>r.loginForm.email=a)},null,512),[[t.nr,r.loginForm.email]])]),ya,(0,i._)("div",Sa,[Ca,(0,i.wy)((0,i._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-5",placeholder:"Digite sua Senha","onUpdate:modelValue":e[1]||(e[1]=a=>r.loginForm.password=a)},null,512),[[t.nr,r.loginForm.password]])]),Ea,(0,i._)("button",{onClick:e[2]||(e[2]=(...a)=>s.submitLoginUser&&s.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Logar "),(0,i._)("div",La,[(0,i.Wm)(l,{to:{name:"novo.usuario"}},{default:(0,i.w5)((()=>[Oa])),_:1},8,["to"])])],32)])])}var Da=o(737),Ua=o.n(Da),ja={async loginUser(a){try{const e=await B().post("/login",a),{token:o}=e.data;localStorage.setItem("jwt",o),o&&Ua()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(e){Ua()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},Aa={name:"LoginViver",data(){return{loginForm:{email:null,password:null}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{this.isSubmitted=!0,await ja.loginUser(this.loginForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),3)}catch(a){Ua()({title:"password Incorreto!",text:"Digite o password cadastrado!",icon:"error"})}}}};const Ia=(0,b.Z)(Aa,[["render",ka],["__scopeId","data-v-66fdfd24"]]);var xa=Ia;const Fa={class:"main-container"},Na=(0,i.uE)('<h1 id="titulo" data-v-61589da8>Área Comum</h1><ul class="lista" data-v-61589da8><li class="lista-destaques" data-v-61589da8><div data-v-61589da8><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>ACADEMIA</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>SALÃO DE BELEZA</h1></div></div><div data-v-61589da8><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Salão de Festas</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Salão de Jogos</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Brinquedoteca</h1></div></div></li></ul>',2),Va=[Na];function Ma(a,e,o,t,n,r){return(0,i.wg)(),(0,i.iD)("div",Fa,Va)}var Ra={name:"AreaComum",mounted(){B.get("/areacomum").then((a=>this.areacomum=a.data)).catch((a=>console.log(a)))}};const Ta=(0,b.Z)(Ra,[["render",Ma],["__scopeId","data-v-61589da8"]]);var qa=Ta;const Ba=[{path:"/",name:"home",component:G},{path:"/convencao",name:"convencao",component:pa},{path:"/cadastre-se",name:"novo.usuario",component:sa},{path:"/login",name:"login",component:xa},{path:"/areacomum",name:"areacomum",component:qa}],Za=(0,N.p7)({history:(0,N.PO)("/"),routes:Ba});var $a=Za;(0,t.ri)(F).use($a).mount("#app")}},e={};function o(t){var i=e[t];if(void 0!==i)return i.exports;var n=e[t]={exports:{}};return a[t].call(n.exports,n,n.exports,o),n.exports}o.m=a,function(){var a=[];o.O=function(e,t,i,n){if(!t){var r=1/0;for(c=0;c<a.length;c++){t=a[c][0],i=a[c][1],n=a[c][2];for(var s=!0,l=0;l<t.length;l++)(!1&n||r>=n)&&Object.keys(o.O).every((function(a){return o.O[a](t[l])}))?t.splice(l--,1):(s=!1,n<r&&(r=n));if(s){a.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}n=n||0;for(var c=a.length;c>0&&a[c-1][2]>n;c--)a[c]=a[c-1];a[c]=[t,i,n]}}(),function(){o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,{a:e}),e}}(),function(){o.d=function(a,e){for(var t in e)o.o(e,t)&&!o.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){o.p="/"}(),function(){var a={143:0};o.O.j=function(e){return 0===a[e]};var e=function(e,t){var i,n,r=t[0],s=t[1],l=t[2],d=0;if(r.some((function(e){return 0!==a[e]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var c=l(o)}for(e&&e(t);d<r.length;d++)n=r[d],o.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return o.O(c)},t=self["webpackChunkclient"]=self["webpackChunkclient"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(486)}));t=o.O(t)})();
//# sourceMappingURL=app.d2eaeced.js.map