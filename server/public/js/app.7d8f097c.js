(function(){"use strict";var a={641:function(a,e,t){var i=t(963),o=t(252);function n(a,e,t,i,n,r){const s=(0,o.up)("NavBar"),l=(0,o.up)("router-view"),c=(0,o.up)("FooterViver");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(c)])}var r=t.p+"img/Logo.39797c50.jpeg",s=t.p+"img/Icon_Cons.4f2252fa.jpg";const l={id:"nav"},c=(0,o._)("img",{src:r,width:"100",height:"40"},null,-1),d=(0,o._)("h1",{id:"mensagem-provisoria"},[(0,o._)("img",{src:s,width:"50",height:"50"}),(0,o.Uk)(" SITE EM CONSTRUÇÃO!!!")],-1),u={key:0,class:"navbar-nav mr-auto"},m={key:1,class:"navbar-nav mr-auto"},p={key:0,class:"navbar-nav mr-auto"},v=(0,o.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="/anuncios"><i class="fa fa-camera"></i> ANÚNCIOS</a></li><li><a href="/financ"><i class="fa fa-bullhorn"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-tags"></i> CONVENÇÃO</a></li><li><a href="/assembleia"><i class="fa fa-envelope"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-sitemap"></i> ÁREA COMUM</a></li><li><a href="/check-in"><i class="fa fa-exclamation-triangle"></i> CHECK-IN</a></li><li><a href="/area-sindico"><i class="fa fa-exclamation-triangle"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),g=[v];function f(a,e,t,n,r,s){const v=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",l,[(0,o.Wm)(v,{to:"/",id:"logo-url"},{default:(0,o.w5)((()=>[c])),_:1}),d,s.usuarioestaLogado?((0,o.wg)(),(0,o.iD)("ul",u,[(0,o._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,i.iM)(((...a)=>s.efetuarLogout&&s.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[1]||(e[1]=(0,i.iM)(((...a)=>s.direcionaLogin&&s.direcionaLogin(...a)),["prevent"]))},"Login"),(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[2]||(e[2]=(0,i.iM)(((...a)=>s.direcionaRegistrar&&s.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")]))]),s.usuarioestaLogado?((0,o.wg)(),(0,o.iD)("ul",p,g)):(0,o.kq)("",!0)])}var h={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)},direcionaRegistrar(){this.$router.push({name:"novo.usuario"}),setTimeout((function(){window.location.reload(1)}),1)},efetuarLogout(){localStorage.removeItem("jwt"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("jwt"))}}},b=t(744);const w=(0,b.Z)(h,[["render",f]]);var _=w,y=t.p+"img/facebook_108044.72123f49.png",S=t.p+"img/instagram_108043.3c7d5e22.png",C=t.p+"img/youtube_108041.865a1c7f.png",E=t.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const k={class:"footer-absolute"},U=(0,o.uE)('<footer class="footer-distributed" data-v-61f65dba><div class="footer-right" data-v-61f65dba><a href="https://pt-br.facebook.com/" data-v-61f65dba><i class="fa fa-facebook" data-v-61f65dba><img src="'+y+'" alt="face" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.instagram.com/" data-v-61f65dba><i class="fa fa-instagran" data-v-61f65dba><img src="'+S+'" alt="insta" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.youtube.com/" data-v-61f65dba><i class="fa fa-youtube" data-v-61f65dba></i><img src="'+C+'" alt="youtube" width="35px" height="35px" data-v-61f65dba></a><a href="https://github.com/Chioda/viver" data-v-61f65dba><i class="fa fa-github" data-v-61f65dba></i><img src="'+E+'" alt="face" width="35px" height="35px" data-v-61f65dba></a></div><div class="footer-left" data-v-61f65dba><p class="footer-links" data-v-61f65dba><a class="link-1" href="/" data-v-61f65dba>Home</a></p><p data-v-61f65dba>E-mail: thiagochioda@hotmail.com</p><p data-v-61f65dba>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-61f65dba><p data-v-61f65dba>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),A=[U];function D(a,e,t,i,n,r){return(0,o.wg)(),(0,o.iD)("div",k,A)}var F={name:"FooterViver"};const L=(0,b.Z)(F,[["render",D],["__scopeId","data-v-61f65dba"]]);var O=L,I={components:{NavBar:_,FooterViver:O}};const x=(0,b.Z)(I,[["render",n]]);var j=x,N=t(119);const q=(0,o.uE)('<section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image:url(img/Churrasqueira.jpeg);" data-v-932ca7dc></section><div class="main-container" data-v-932ca7dc><h1 id="titulo" data-v-932ca7dc>DESTAQUES</h1><ul class="lista" data-v-932ca7dc><li class="lista-destaques" data-v-932ca7dc><div data-v-932ca7dc><div class="lado-lado" data-v-932ca7dc><img class="painel-corpo" src="/img/Criancas.jpeg" alt="Criancas" data-v-932ca7dc><h2 class="painel-titulo" data-v-932ca7dc>Colônia de Férias para as crianças do Viver</h2><span data-v-932ca7dc>10 de Janeiro de 2022</span></div><div class="lado-lado" data-v-932ca7dc><img class="painel-corpo" src="/img/Covid.jpeg" alt="Covid" data-v-932ca7dc><h2 class="painel-titulo" data-v-932ca7dc>Liberada a obrigatoriedade das mascaras no condomínio </h2><span data-v-932ca7dc>02 de Janeiro de 2022</span></div><div class="lado-lado" data-v-932ca7dc><img class="painel-corpo" src="/img/Gas.jpeg" alt="Gas" data-v-932ca7dc><h2 class="painel-titulo" data-v-932ca7dc>Nova assembléia para regras dos medidores de Gás</h2><span data-v-932ca7dc>10 de Dezembro de 2021</span></div></div></li></ul></div>',2),R=[q];function V(a,e,t,i,n,r){return(0,o.wg)(),(0,o.iD)("div",null,R)}var Z={name:"HomeView"};const M=(0,b.Z)(Z,[["render",V],["__scopeId","data-v-932ca7dc"]]);var T=M;const B=a=>((0,o.dD)("data-v-6952198b"),a=a(),(0,o.Cn)(),a),W={class:"main-container"},$=B((()=>(0,o._)("h1",null,"EFETUE SEU CADASTRO",-1))),G={class:"form-group"},H=B((()=>(0,o._)("label",{for:"nome"},"Nome ",-1))),J=B((()=>(0,o._)("br",null,null,-1))),z={class:"form-group"},P=B((()=>(0,o._)("label",{for:"email"},"E-mail ",-1))),Q=B((()=>(0,o._)("br",null,null,-1))),K={class:"form-group"},X=B((()=>(0,o._)("label",{for:"senha"},"Senha ",-1))),Y=B((()=>(0,o._)("br",null,null,-1))),aa=B((()=>(0,o._)("br",null,null,-1))),ea={class:"center"},ta=(0,o.Uk)(" Já possui um login cadastrado?"),ia=(0,o.Uk)(" Faça o Login Aqui");function oa(a,e,t,n,r,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("div",W,[$,(0,o._)("form",{onSubmit:e[4]||(e[4]=(0,i.iM)((a=>s.registerSubmitUserForm()),["prevent"]))},[(0,o._)("div",G,[H,(0,o.wy)((0,o._)("input",{type:"text",id:"name",name:"name",class:"form-control mb-5",placeholder:"Inclua seu Nome","onUpdate:modelValue":e[0]||(e[0]=a=>r.registerForm.name=a)},null,512),[[i.nr,r.registerForm.name]])]),J,(0,o._)("div",z,[P,(0,o.wy)((0,o._)("input",{type:"email",id:"email",name:"email",class:"form-control mb-5",placeholder:"Inclua seu E-mail","onUpdate:modelValue":e[1]||(e[1]=a=>r.registerForm.email=a)},null,512),[[i.nr,r.registerForm.email]])]),Q,(0,o._)("div",K,[X,(0,o.wy)((0,o._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-5",placeholder:"Inclua a Senha","onUpdate:modelValue":e[2]||(e[2]=a=>r.registerForm.password=a)},null,512),[[i.nr,r.registerForm.password]])]),Y,(0,o._)("button",{onClick:e[3]||(e[3]=(...a)=>s.submitRegisterUser&&s.submitRegisterUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Cadastrar "),aa,(0,o._)("p",ea,[ta,(0,o.Wm)(l,{to:"/login"},{default:(0,o.w5)((()=>[ia])),_:1})])],32)])])}var na=t(737),ra=t.n(na),sa=t(669),la=t.n(sa),ca=()=>la().create({baseURL:"api/v1/"}),da={async registerNewUser(a){try{const e=await ca().post("/register",a),{token:t}=e.data;t&&(localStorage.setItem("jwt",t),ra()({title:"Excelente!",text:"Usuário(a) cadastrado com sucesso!",icon:"success"}))}catch(e){ra()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}},ua={name:"RegisterComponent",data(){return{registerForm:{name:null,email:null,password:null},isSubmitted:!1}},methods:{registerSubmitUserForm(){},async submitRegisterUser(){try{this.isSubmitted=!0,await da.registerNewUser(this.registerForm),this.$router.push("/login")}catch(a){ra()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}}};const ma=(0,b.Z)(ua,[["render",oa],["__scopeId","data-v-6952198b"]]);var pa=ma;const va=(0,o._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),ga=(0,o._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),fa=[va,ga];function ha(a,e){return(0,o.wg)(),(0,o.iD)("div",null,fa)}const ba={},wa=(0,b.Z)(ba,[["render",ha]]);var _a=wa;const ya=a=>((0,o.dD)("data-v-65712a6c"),a=a(),(0,o.Cn)(),a),Sa={class:"body"},Ca={class:"main-container"},Ea=ya((()=>(0,o._)("h1",null,"Efetue seu Login",-1))),ka={class:"form.group"},Ua=ya((()=>(0,o._)("label",{for:"email"},"E-mail ",-1))),Aa=ya((()=>(0,o._)("br",null,null,-1))),Da={class:"form.group"},Fa=ya((()=>(0,o._)("label",{for:"senha"},"Senha ",-1))),La=ya((()=>(0,o._)("br",null,null,-1))),Oa={class:"cadastro-name"},Ia=(0,o.Uk)(" Cadastre-se aqui! ");function xa(a,e,t,n,r,s){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("body",Sa,[(0,o._)("div",Ca,[Ea,(0,o._)("form",{onSubmit:e[3]||(e[3]=(0,i.iM)((a=>s.loginSubmitUserForm()),["prevent"]))},[(0,o._)("div",ka,[Ua,(0,o.wy)((0,o._)("input",{type:"text",id:"email",name:"email",class:"form-control mb-5",placeholder:"Digite seu E-mail","onUpdate:modelValue":e[0]||(e[0]=a=>r.loginForm.email=a)},null,512),[[i.nr,r.loginForm.email]])]),Aa,(0,o._)("div",Da,[Fa,(0,o.wy)((0,o._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-5",placeholder:"Digite sua Senha","onUpdate:modelValue":e[1]||(e[1]=a=>r.loginForm.password=a)},null,512),[[i.nr,r.loginForm.password]])]),La,(0,o._)("button",{onClick:e[2]||(e[2]=(...a)=>s.submitLoginUser&&s.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Logar "),(0,o._)("div",Oa,[(0,o.Wm)(l,{to:{name:"novo.usuario"}},{default:(0,o.w5)((()=>[Ia])),_:1},8,["to"])])],32)])])}var ja={async loginUser(a){try{const e=await ca().post("/login",a),{token:t}=e.data;localStorage.setItem("jwt",t),t&&ra()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(e){ra()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},Na={name:"LoginViver",data(){return{loginForm:{email:null,password:null}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{this.isSubmitted=!0,await ja.loginUser(this.loginForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),1)}catch(a){ra()({title:"Login ou password Incorreto!",text:"Digite Login e password cadastrado!",icon:"error"})}}}};const qa=(0,b.Z)(Na,[["render",xa],["__scopeId","data-v-65712a6c"]]);var Ra=qa;const Va={class:"main-container"},Za=(0,o.uE)('<h1 id="titulo" data-v-0a380d62>Área Comum</h1><ul class="lista" data-v-0a380d62><li class="lista-destaques" data-v-0a380d62><div data-v-0a380d62><div class="lado-lado" data-v-0a380d62><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-0a380d62><h1 class="painel-titulo" data-v-0a380d62>ACADEMIA</h1></div><div class="lado-lado" data-v-0a380d62><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-0a380d62><h1 class="painel-titulo" data-v-0a380d62>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-0a380d62><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-0a380d62><h1 class="painel-titulo" data-v-0a380d62>SALÃO DE BELEZA</h1></div></div><div data-v-0a380d62><div class="lado-lado" data-v-0a380d62><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-0a380d62><h1 class="painel-titulo" data-v-0a380d62>Salão de Festas</h1></div><div class="lado-lado" data-v-0a380d62><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-0a380d62><h1 class="painel-titulo" data-v-0a380d62>Salão de Jogos</h1></div><div class="lado-lado" data-v-0a380d62><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-0a380d62><h1 class="painel-titulo" data-v-0a380d62>Brinquedoteca</h1></div></div></li></ul>',2),Ma=[Za];function Ta(a,e,t,i,n,r){return(0,o.wg)(),(0,o.iD)("div",Va,Ma)}var Ba={name:"AreaComum"};const Wa=(0,b.Z)(Ba,[["render",Ta],["__scopeId","data-v-0a380d62"]]);var $a=Wa;const Ga=(0,o._)("iframe",{src:"/Financ/Financ.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),Ha=(0,o._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),Ja=[Ga,Ha];function za(a,e){return(0,o.wg)(),(0,o.iD)("div",null,Ja)}const Pa={},Qa=(0,b.Z)(Pa,[["render",za]]);var Ka=Qa;function Xa(a,e){return(0,o.wg)(),(0,o.iD)("h1",null,"Anúncios")}const Ya={},ae=(0,b.Z)(Ya,[["render",Xa]]);var ee=ae;function te(a,e){return(0,o.wg)(),(0,o.iD)("h1",null,"Assembléia")}const ie={},oe=(0,b.Z)(ie,[["render",te]]);var ne=oe;function re(a,e){return(0,o.wg)(),(0,o.iD)("h1",null,"CHECK-IN")}const se={},le=(0,b.Z)(se,[["render",re]]);var ce=le;function de(a,e){return(0,o.wg)(),(0,o.iD)("h1",null,"Área do Sindico")}const ue={},me=(0,b.Z)(ue,[["render",de]]);var pe=me;const ve=[{path:"/",name:"home",component:T},{path:"/anuncios",name:"anuncios",component:ee,meta:{requireAuth:!0}},{path:"/financ",name:"financ",component:Ka,meta:{requireAuth:!0}},{path:"/convencao",name:"convencao",component:_a,meta:{requireAuth:!0}},{path:"/assembleia",name:"assembleia",component:ne,meta:{requireAuth:!0}},{path:"/areacomum",name:"areacomum",component:$a,meta:{requireAuth:!0}},{path:"/check-in",name:"check-in",component:ce,meta:{requireAuth:!0}},{path:"/area-sindico",name:"area-sindico",component:pe,meta:{requireAuth:!0}},{path:"/cadastre-se",name:"novo.usuario",component:pa},{path:"/login",name:"login",component:Ra}],ge=(0,N.p7)({history:(0,N.PO)("/"),routes:ve});ge.beforeEach(((a,e,t)=>{a.matched.some((a=>a.meta.requireAuth))&&null==localStorage.getItem("jwt")?t({path:"/"}):t()}));var fe=ge;(0,i.ri)(j).use(fe).mount("#app")}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return a[i].call(n.exports,n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,i,o,n){if(!i){var r=1/0;for(d=0;d<a.length;d++){i=a[d][0],o=a[d][1],n=a[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(t.O).every((function(a){return t.O[a](i[l])}))?i.splice(l--,1):(s=!1,n<r&&(r=n));if(s){a.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[i,o,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,i){var o,n,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==a[e]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var d=l(t)}for(e&&e(i);c<r.length;c++)n=r[c],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(d)},i=self["webpackChunkclient"]=self["webpackChunkclient"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(641)}));i=t.O(i)})();
//# sourceMappingURL=app.7d8f097c.js.map