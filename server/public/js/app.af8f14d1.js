(function(){"use strict";var a={520:function(a,e,t){var o=t(963),i=t(252);function r(a,e,t,o,r,n){const s=(0,i.up)("NavBar"),l=(0,i.up)("router-view"),d=(0,i.up)("FooterViver");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s),(0,i.Wm)(l),(0,i.Wm)(d)])}var n=t.p+"img/Logo.39797c50.jpeg",s=t.p+"img/Icon_Cons.4f2252fa.jpg";const l={id:"nav"},d=(0,i._)("img",{src:n,width:"100",height:"40"},null,-1),c=(0,i._)("h1",{id:"mensagem-provisoria"},[(0,i._)("img",{src:s,width:"50",height:"50"}),(0,i.Uk)(" SITE EM CONSTRUÇÃO!!!")],-1),u={key:0,class:"navbar-nav mr-auto"},m={key:1,class:"navbar-nav mr-auto"},v={key:0,class:"navbar-nav mr-auto"},p=(0,i.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="#"><i class="fa fa-camera"></i> ANÚNCIOS</a></li><li><a href="#"><i class="fa fa-bullhorn"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-tags"></i> CONVENÇÃO</a></li><li><a href="#"><i class="fa fa-envelope"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-sitemap"></i> ÁREA COMUM</a></li><li><a href="#"><i class="fa fa-exclamation-triangle"></i> CHECK-IN</a></li><li><a href="#"><i class="fa fa-exclamation-triangle"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),g=[p];function f(a,e,t,r,n,s){const p=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",l,[(0,i.Wm)(p,{to:"/",id:"logo-url"},{default:(0,i.w5)((()=>[d])),_:1}),c,s.usuarioestaLogado?((0,i.wg)(),(0,i.iD)("ul",u,[(0,i._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,o.iM)(((...a)=>s.efetuarLogout&&s.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[1]||(e[1]=(0,o.iM)(((...a)=>s.direcionaLogin&&s.direcionaLogin(...a)),["prevent"]))},"Login"),(0,i._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[2]||(e[2]=(0,o.iM)(((...a)=>s.direcionaRegistrar&&s.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")]))]),s.usuarioestaLogado?((0,i.wg)(),(0,i.iD)("ul",v,g)):(0,i.kq)("",!0)])}var h={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"})},direcionaRegistrar(){this.$router.push({name:"novo.usuario"})},efetuarLogout(){localStorage.removeItem("jwt"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("jwt"))}}},b=t(744);const w=(0,b.Z)(h,[["render",f]]);var _=w,y=t.p+"img/facebook_108044.72123f49.png",S=t.p+"img/instagram_108043.3c7d5e22.png",C=t.p+"img/youtube_108041.865a1c7f.png",E=t.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const U={class:"footer-absolute"},k=(0,i.uE)('<footer class="footer-distributed" data-v-61f65dba><div class="footer-right" data-v-61f65dba><a href="https://pt-br.facebook.com/" data-v-61f65dba><i class="fa fa-facebook" data-v-61f65dba><img src="'+y+'" alt="face" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.instagram.com/" data-v-61f65dba><i class="fa fa-instagran" data-v-61f65dba><img src="'+S+'" alt="insta" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.youtube.com/" data-v-61f65dba><i class="fa fa-youtube" data-v-61f65dba></i><img src="'+C+'" alt="youtube" width="35px" height="35px" data-v-61f65dba></a><a href="https://github.com/Chioda/viver" data-v-61f65dba><i class="fa fa-github" data-v-61f65dba></i><img src="'+E+'" alt="face" width="35px" height="35px" data-v-61f65dba></a></div><div class="footer-left" data-v-61f65dba><p class="footer-links" data-v-61f65dba><a class="link-1" href="/" data-v-61f65dba>Home</a></p><p data-v-61f65dba>E-mail: thiagochioda@hotmail.com</p><p data-v-61f65dba>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-61f65dba><p data-v-61f65dba>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),O=[k];function F(a,e,t,o,r,n){return(0,i.wg)(),(0,i.iD)("div",U,O)}var L={name:"FooterViver"};const D=(0,b.Z)(L,[["render",F],["__scopeId","data-v-61f65dba"]]);var I=D,x={components:{NavBar:_,FooterViver:I}};const A=(0,b.Z)(x,[["render",r]]);var j=A,N=t(119);const R=(0,i.uE)('<section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image:url(img/Churrasqueira.jpeg);" data-v-679179e9></section><div class="main-container" data-v-679179e9><h1 id="titulo" data-v-679179e9>DESTAQUES</h1><ul class="lista" data-v-679179e9><li class="lista-destaques" data-v-679179e9><div data-v-679179e9><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Criancas.jpeg" alt="Criancas" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Colônia de Férias para as crianças do Viver</h2><span data-v-679179e9>10 de Janeiro de 2022</span></div><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Covid.jpeg" alt="Covid" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Liberada a obrigatoriedade das mascaras no condomínio </h2><span data-v-679179e9>02 de Janeiro de 2022</span></div><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Gas.jpeg" alt="Gas" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Nova assembléia para regras dos medidores de Gás</h2><span data-v-679179e9>10 de Dezembro de 2021</span></div></div></li></ul></div>',2),V=[R];function M(a,e,t,o,r,n){return(0,i.wg)(),(0,i.iD)("div",null,V)}var q=t(669),T=t.n(q),B=()=>T().create({baseURL:"api/v1/"}),Z={name:"HomeView",mounted(){B.get("/").then((a=>this.home=a.data)).catch((a=>console.log(a)))}};const W=(0,b.Z)(Z,[["render",M],["__scopeId","data-v-679179e9"]]);var $=W;const G=a=>((0,i.dD)("data-v-305409ce"),a=a(),(0,i.Cn)(),a),J={class:"main-container"},H=G((()=>(0,i._)("h1",null,"EFETUE SEU CADASTRO",-1))),P={class:"form-group"},Q=G((()=>(0,i._)("label",{for:"nome"},"Nome ",-1))),z=G((()=>(0,i._)("br",null,null,-1))),K={class:"form-group"},X=G((()=>(0,i._)("label",{for:"email"},"E-mail ",-1))),Y=G((()=>(0,i._)("br",null,null,-1))),aa={class:"form-group"},ea=G((()=>(0,i._)("label",{for:"senha"},"Senha ",-1))),ta=G((()=>(0,i._)("br",null,null,-1))),oa=G((()=>(0,i._)("br",null,null,-1))),ia={class:"center"},ra=(0,i.Uk)(" Já possui um login cadastrado?"),na=(0,i.Uk)(" Faça o Login Aqui");function sa(a,e,t,r,n,s){const l=(0,i.up)("center"),d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("body",null,[(0,i._)("div",J,[H,(0,i._)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)((a=>s.registerSubmitUserForm()),["prevent"]))},[(0,i._)("div",P,[Q,(0,i.wy)((0,i._)("input",{type:"text",id:"name",name:"name",class:"form-control mb-5",placeholder:"Inclua seu Nome","onUpdate:modelValue":e[0]||(e[0]=a=>n.registerForm.name=a)},null,512),[[o.nr,n.registerForm.name]])]),z,(0,i._)("div",K,[X,(0,i.wy)((0,i._)("input",{type:"email",id:"email",name:"email",class:"form-control mb-5",placeholder:"Inclua seu E-mail","onUpdate:modelValue":e[1]||(e[1]=a=>n.registerForm.email=a)},null,512),[[o.nr,n.registerForm.email]])]),Y,(0,i._)("div",aa,[ea,(0,i.wy)((0,i._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-5",placeholder:"Inclua a Senha","onUpdate:modelValue":e[2]||(e[2]=a=>n.registerForm.password=a)},null,512),[[o.nr,n.registerForm.password]])]),ta,(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i._)("button",{onClick:e[3]||(e[3]=(...a)=>s.submitRegisterUser&&s.submitRegisterUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Cadastrar ")])),_:1}),oa,(0,i._)("p",ia,[ra,(0,i.Wm)(d,{to:"/login"},{default:(0,i.w5)((()=>[na])),_:1})])],32)])])}var la=t(737),da=t.n(la),ca={async registerNewUser(a){try{const e=await B().post("/register",a),{token:t}=e.data;t&&(localStorage.setItem("jwt",t),da()({title:"Excelente!",text:"Usuário(a) cadastrado com sucesso!",icon:"success"}))}catch(e){da()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}},ua={name:"RegisterComponent",data(){return{registerForm:{name:null,email:null,password:null},isSubmitted:!1}},methods:{registerSubmitUserForm(){},async submitRegisterUser(){try{this.isSubmitted=!0,await ca.registerNewUser(this.registerForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),1)}catch(a){da()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}}};const ma=(0,b.Z)(ua,[["render",sa],["__scopeId","data-v-305409ce"]]);var va=ma;const pa=(0,i._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),ga=(0,i._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),fa=[pa,ga];function ha(a,e){return(0,i.wg)(),(0,i.iD)("div",null,fa)}const ba={},wa=(0,b.Z)(ba,[["render",ha]]);var _a=wa;const ya=a=>((0,i.dD)("data-v-fc668da0"),a=a(),(0,i.Cn)(),a),Sa={class:"body"},Ca={class:"main-container"},Ea=ya((()=>(0,i._)("h1",null,"Efetue seu Login",-1))),Ua={class:"form.group"},ka=ya((()=>(0,i._)("label",{for:"email"},"E-mail ",-1))),Oa=ya((()=>(0,i._)("br",null,null,-1))),Fa={class:"form.group"},La=ya((()=>(0,i._)("label",{for:"senha"},"Senha ",-1))),Da=ya((()=>(0,i._)("br",null,null,-1))),Ia={class:"cadastro-name"},xa=(0,i.Uk)(" Cadastre-se aqui! ");function Aa(a,e,t,r,n,s){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("body",Sa,[(0,i._)("div",Ca,[Ea,(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,o.iM)((a=>s.loginSubmitUserForm()),["prevent"]))},[(0,i._)("div",Ua,[ka,(0,i.wy)((0,i._)("input",{type:"text",id:"email",name:"email",class:"form-control mb-5",placeholder:"Digite seu E-mail","onUpdate:modelValue":e[0]||(e[0]=a=>n.loginForm.email=a)},null,512),[[o.nr,n.loginForm.email]])]),Oa,(0,i._)("div",Fa,[La,(0,i.wy)((0,i._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-5",placeholder:"Digite sua Senha","onUpdate:modelValue":e[1]||(e[1]=a=>n.loginForm.password=a)},null,512),[[o.nr,n.loginForm.password]])]),Da,(0,i._)("button",{onClick:e[2]||(e[2]=(...a)=>s.submitLoginUser&&s.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Logar "),(0,i._)("div",Ia,[(0,i.Wm)(l,{to:{name:"novo.usuario"}},{default:(0,i.w5)((()=>[xa])),_:1},8,["to"])])],32)])])}var ja={async loginUser(a){try{const e=await B().post("/login",a),{token:t}=e.data;localStorage.setItem("jwt",t),t&&da()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(e){da()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},Na={name:"LoginViver",data(){return{loginForm:{email:null,password:null}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{this.isSubmitted=!0,await ja.loginUser(this.loginForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),1)}catch(a){da()({title:"password Incorreto!",text:"Digite o password cadastrado!",icon:"error"})}}}};const Ra=(0,b.Z)(Na,[["render",Aa],["__scopeId","data-v-fc668da0"]]);var Va=Ra;const Ma={class:"main-container"},qa=(0,i.uE)('<h1 id="titulo" data-v-61589da8>Área Comum</h1><ul class="lista" data-v-61589da8><li class="lista-destaques" data-v-61589da8><div data-v-61589da8><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>ACADEMIA</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>SALÃO DE BELEZA</h1></div></div><div data-v-61589da8><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Salão de Festas</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Salão de Jogos</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Brinquedoteca</h1></div></div></li></ul>',2),Ta=[qa];function Ba(a,e,t,o,r,n){return(0,i.wg)(),(0,i.iD)("div",Ma,Ta)}var Za={name:"AreaComum",mounted(){B.get("/areacomum").then((a=>this.areacomum=a.data)).catch((a=>console.log(a)))}};const Wa=(0,b.Z)(Za,[["render",Ba],["__scopeId","data-v-61589da8"]]);var $a=Wa;const Ga=[{path:"/",name:"home",component:$},{path:"/convencao",name:"convencao",component:_a},{path:"/cadastre-se",name:"novo.usuario",component:va},{path:"/login",name:"login",component:Va},{path:"/areacomum",name:"areacomum",component:$a}],Ja=(0,N.p7)({history:(0,N.PO)("/"),routes:Ga});var Ha=Ja;(0,o.ri)(j).use(Ha).mount("#app")}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return a[o].call(r.exports,r,r.exports,t),r.exports}t.m=a,function(){var a=[];t.O=function(e,o,i,r){if(!o){var n=1/0;for(c=0;c<a.length;c++){o=a[c][0],i=a[c][1],r=a[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(t.O).every((function(a){return t.O[a](o[l])}))?o.splice(l--,1):(s=!1,r<n&&(n=r));if(s){a.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var c=a.length;c>0&&a[c-1][2]>r;c--)a[c]=a[c-1];a[c]=[o,i,r]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var i,r,n=o[0],s=o[1],l=o[2],d=0;if(n.some((function(e){return 0!==a[e]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(l)var c=l(t)}for(e&&e(o);d<n.length;d++)r=n[d],t.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return t.O(c)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(520)}));o=t.O(o)})();
//# sourceMappingURL=app.af8f14d1.js.map