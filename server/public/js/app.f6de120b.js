(function(){"use strict";var a={8811:function(a,i,e){var o=e(9963),t=e(6252);function r(a,i,e,o,r,n){const s=(0,t.up)("NavBar"),l=(0,t.up)("router-view"),d=(0,t.up)("FooterViver");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(s),(0,t.Wm)(l),(0,t.Wm)(d)])}var n=e.p+"img/Logo.39797c50.jpeg",s=e.p+"img/Icon_Cons.4f2252fa.jpg";const l={id:"nav"},d=(0,t._)("img",{src:n,width:"100",height:"40"},null,-1),c=(0,t._)("h1",{id:"mensagem-provisoria"},[(0,t._)("img",{src:s,width:"50",height:"50"}),(0,t.Uk)(" SITE EM CONSTRUÇÃO!!!")],-1),u={key:0,class:"navbar-nav mr-auto"},m={key:1,class:"navbar-nav mr-auto"},v={key:0,class:"navbar-nav mr-auto"},p=(0,t.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="#"><i class="fa fa-camera"></i> ANÚNCIOS</a></li><li><a href="#"><i class="fa fa-bullhorn"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-tags"></i> CONVENÇÃO</a></li><li><a href="#"><i class="fa fa-envelope"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-sitemap"></i> ÁREA COMUM</a></li><li><a href="#"><i class="fa fa-exclamation-triangle"></i> CHECK-IN</a></li><li><a href="#"><i class="fa fa-exclamation-triangle"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),g=[p];function f(a,i,e,r,n,s){const p=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",l,[(0,t.Wm)(p,{to:"/",id:"logo-url"},{default:(0,t.w5)((()=>[d])),_:1}),c,s.usuarioestaLogado?((0,t.wg)(),(0,t.iD)("ul",u,[(0,t._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:i[0]||(i[0]=(0,o.iM)(((...a)=>s.efetuarLogout&&s.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:i[1]||(i[1]=(0,o.iM)(((...a)=>s.direcionaLogin&&s.direcionaLogin(...a)),["prevent"]))},"Login"),(0,t._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:i[2]||(i[2]=(0,o.iM)(((...a)=>s.direcionaRegistrar&&s.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")]))]),s.usuarioestaLogado?((0,t.wg)(),(0,t.iD)("ul",v,g)):(0,t.kq)("",!0)],64)}var h={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"})},direcionaRegistrar(){this.$router.push({name:"novo.usuario"})},efetuarLogout(){localStorage.removeItem("token"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("token"))}}},b=e(3744);const w=(0,b.Z)(h,[["render",f]]);var _=w,y=e.p+"img/facebook_108044.72123f49.png",S=e.p+"img/instagram_108043.3c7d5e22.png",C=e.p+"img/youtube_108041.865a1c7f.png",k=e.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const E={class:"footer-absolute"},O=(0,t.uE)('<footer class="footer-distributed" data-v-61f65dba><div class="footer-right" data-v-61f65dba><a href="https://pt-br.facebook.com/" data-v-61f65dba><i class="fa fa-facebook" data-v-61f65dba><img src="'+y+'" alt="face" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.instagram.com/" data-v-61f65dba><i class="fa fa-instagran" data-v-61f65dba><img src="'+S+'" alt="insta" width="35px" height="35px" data-v-61f65dba></i></a><a href="https://www.youtube.com/" data-v-61f65dba><i class="fa fa-youtube" data-v-61f65dba></i><img src="'+C+'" alt="youtube" width="35px" height="35px" data-v-61f65dba></a><a href="https://github.com/Chioda/viver" data-v-61f65dba><i class="fa fa-github" data-v-61f65dba></i><img src="'+k+'" alt="face" width="35px" height="35px" data-v-61f65dba></a></div><div class="footer-left" data-v-61f65dba><p class="footer-links" data-v-61f65dba><a class="link-1" href="/" data-v-61f65dba>Home</a></p><p data-v-61f65dba>E-mail: thiagochioda@hotmail.com</p><p data-v-61f65dba>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-61f65dba><p data-v-61f65dba>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),D=[O];function F(a,i,e,o,r,n){return(0,t.wg)(),(0,t.iD)("div",E,D)}var L={name:"FooterViver"};const U=(0,b.Z)(L,[["render",F],["__scopeId","data-v-61f65dba"]]);var x=U,A={components:{NavBar:_,FooterViver:x}};const I=(0,b.Z)(A,[["render",r]]);var j=I,N=e(2119);const $=(0,t.uE)('<section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image:url(img/Churrasqueira.jpeg);" data-v-679179e9></section><div class="main-container" data-v-679179e9><h1 id="titulo" data-v-679179e9>DESTAQUES</h1><ul class="lista" data-v-679179e9><li class="lista-destaques" data-v-679179e9><div data-v-679179e9><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Criancas.jpeg" alt="Criancas" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Colônia de Férias para as crianças do Viver</h2><span data-v-679179e9>10 de Janeiro de 2022</span></div><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Covid.jpeg" alt="Covid" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Liberada a obrigatoriedade das mascaras no condomínio </h2><span data-v-679179e9>02 de Janeiro de 2022</span></div><div class="lado-lado" data-v-679179e9><img class="painel-corpo" src="/img/Gas.jpeg" alt="Gas" data-v-679179e9><h2 class="painel-titulo" data-v-679179e9>Nova assembléia para regras dos medidores de Gás</h2><span data-v-679179e9>10 de Dezembro de 2021</span></div></div></li></ul></div>',2),q=[$];function V(a,i,e,o,r,n){return(0,t.wg)(),(0,t.iD)("div",null,q)}var M=e(9669),R=e.n(M),T=()=>R().create({baseURL:"api/v1/"}),B={name:"HomeView",mounted(){T.get("/").then((a=>this.home=a.data)).catch((a=>console.log(a)))}};const Z=(0,b.Z)(B,[["render",V],["__scopeId","data-v-679179e9"]]);var G=Z;const H=a=>((0,t.dD)("data-v-e2a6513e"),a=a(),(0,t.Cn)(),a),W={class:"main-container"},J=H((()=>(0,t._)("h1",null,"EFETUE SEU CADASTRO",-1))),P={class:"form-group"},Q=H((()=>(0,t._)("label",{for:"nome"},"Nome ",-1))),z=H((()=>(0,t._)("br",null,null,-1))),K={class:"form-group"},Y=H((()=>(0,t._)("label",{for:"email"},"E-mail ",-1))),X=H((()=>(0,t._)("br",null,null,-1))),aa={class:"form-group"},ia=H((()=>(0,t._)("label",{for:"senha"},"Senha ",-1))),ea=H((()=>(0,t._)("br",null,null,-1))),oa=H((()=>(0,t._)("button",{class:"btn-primary",type:"submit"},"Salvar",-1)));function ta(a,i,e,r,n,s){return(0,t.wg)(),(0,t.iD)("body",null,[(0,t._)("div",W,[J,(0,t._)("form",{onSubmit:i[3]||(i[3]=(0,o.iM)(((...a)=>s.enviarFormulario&&s.enviarFormulario(...a)),["prevent"]))},[(0,t._)("div",P,[Q,(0,t.wy)((0,t._)("input",{type:"text",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=i=>a.usuario.nome=i)},null,512),[[o.nr,a.usuario.nome]])]),z,(0,t._)("div",K,[Y,(0,t.wy)((0,t._)("input",{type:"email",class:"form-control","onUpdate:modelValue":i[1]||(i[1]=i=>a.usuario.email=i)},null,512),[[o.nr,a.usuario.email]])]),X,(0,t._)("div",aa,[ia,(0,t.wy)((0,t._)("input",{type:"password",class:"form-control","onUpdate:modelValue":i[2]||(i[2]=i=>a.usuario.senha=i)},null,512),[[o.nr,a.usuario.senha]])]),ea,oa],32)])])}var ra={data:function(){return{usuario:{nome:"",senha:"",email:""}}},methods:{enviarFormulario(){T.insertPost(this.usuario).then((a=>{console.log(a),this.$router.push({name:"login"})})).catch((a=>console.log(a)))}}};const na=(0,b.Z)(ra,[["render",ta],["__scopeId","data-v-e2a6513e"]]);var sa=na;const la=(0,t._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),da=(0,t._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),ca=[la,da];function ua(a,i){return(0,t.wg)(),(0,t.iD)("div",null,ca)}const ma={},va=(0,b.Z)(ma,[["render",ua]]);var pa=va,ga=e(3577);const fa={class:"container"},ha={class:"row"},ba={class:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},wa={class:"form-group"},_a={key:0,class:"invalid-feedback"},ya={class:"form-group"},Sa={key:0,class:"invalid-feedback"},Ca={class:"center"},ka=(0,t.Uk)(" Não tem uma conta cadastrada?"),Ea=(0,t.Uk)(" Cadastre Aqui");function Oa(a,i,e,r,n,s){const l=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",fa,[(0,t._)("div",ha,[(0,t._)("div",ba,[(0,t._)("form",{class:"text-center border border-primary p-5",style:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},onSubmit:i[3]||(i[3]=(0,o.iM)((a=>s.loginSubmitUserForm()),["prevent"]))},[(0,t._)("div",wa,[(0,t.wy)((0,t._)("input",{type:"text",id:"email",name:"email",class:(0,ga.C_)(["form-control mb-5",{"is-invalid":n.isSubmitted&&a.$v.loginForm.email.$error}]),placeholder:"Digite seu E-mail","onUpdate:modelValue":i[0]||(i[0]=a=>n.loginForm.email=a)},null,2),[[o.nr,n.loginForm.email]]),n.isSubmitted&&!a.$v.loginForm.email.required?((0,t.wg)(),(0,t.iD)("div",_a," O campo e-mail é obrigatório! ")):(0,t.kq)("",!0)]),(0,t._)("div",ya,[(0,t.wy)((0,t._)("input",{type:"password",id:"password",name:"password",class:(0,ga.C_)(["form-control mb-5",{"is-invalid":n.isSubmitted&&a.$v.loginForm.password.$error}]),placeholder:"Digite sua password","onUpdate:modelValue":i[1]||(i[1]=a=>n.loginForm.password=a)},null,2),[[o.nr,n.loginForm.password]]),n.isSubmitted&&!a.$v.loginForm.password.required?((0,t.wg)(),(0,t.iD)("div",Sa," O campo password é obrigatório! ")):(0,t.kq)("",!0)]),(0,t._)("p",Ca,[ka,(0,t.Wm)(l,{to:"/cadastre-se"},{default:(0,t.w5)((()=>[Ea])),_:1})]),(0,t._)("button",{onClick:i[2]||(i[2]=(...a)=>s.submitLoginUser&&s.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Entrar ")],32)])])])}var Da=e(6737),Fa=e.n(Da),La=e(379),Ua={async loginUser(a){try{const i=await T().post("/login",a),{token:e}=i.data;localStorage.setItem("jwt",e),e&&Fa()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(i){Fa()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},xa={name:"LoginViver",data(){return{loginForm:{email:null,password:null},isSubmitted:!1}},validations:{loginForm:{email:{required:La.C1},password:{required:La.C1}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{if(this.isSubmitted=!0,this.$v.$touch(),this.$v.$invalid)return void Fa()({title:"Oops!",text:"Você precisa incluir todos os campos obrigatórios!",icon:"error"});await Ua.loginUser(this.loginForm),this.$router.push("/")}catch(a){Fa()({title:"password Incorreto!",text:"Digite a password cadastrada!",icon:"error"})}}}};const Aa=(0,b.Z)(xa,[["render",Oa],["__scopeId","data-v-7dd3eb51"]]);var Ia=Aa;const ja={class:"main-container"},Na=(0,t.uE)('<h1 id="titulo" data-v-61589da8>Área Comum</h1><ul class="lista" data-v-61589da8><li class="lista-destaques" data-v-61589da8><div data-v-61589da8><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>ACADEMIA</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>SALÃO DE BELEZA</h1></div></div><div data-v-61589da8><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Salão de Festas</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Salão de Jogos</h1></div><div class="lado-lado" data-v-61589da8><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-61589da8><h1 class="painel-titulo" data-v-61589da8>Brinquedoteca</h1></div></div></li></ul>',2),$a=[Na];function qa(a,i,e,o,r,n){return(0,t.wg)(),(0,t.iD)("div",ja,$a)}var Va={name:"AreaComum",mounted(){T.get("/areacomum").then((a=>this.areacomum=a.data)).catch((a=>console.log(a)))}};const Ma=(0,b.Z)(Va,[["render",qa],["__scopeId","data-v-61589da8"]]);var Ra=Ma;const Ta=[{path:"/",name:"home",component:G},{path:"/convencao",name:"convencao",component:pa},{path:"/cadastre-se",name:"novo.usuario",component:sa},{path:"/login",name:"login",component:Ia},{path:"/areacomum",name:"areacomum",component:Ra}],Ba=(0,N.p7)({history:(0,N.PO)("/"),routes:Ta});var Za=Ba;(0,o.ri)(j).use(Za).mount("#app")}},i={};function e(o){var t=i[o];if(void 0!==t)return t.exports;var r=i[o]={exports:{}};return a[o].call(r.exports,r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(i,o,t,r){if(!o){var n=1/0;for(c=0;c<a.length;c++){o=a[c][0],t=a[c][1],r=a[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(e.O).every((function(a){return e.O[a](o[l])}))?o.splice(l--,1):(s=!1,r<n&&(n=r));if(s){a.splice(c--,1);var d=t();void 0!==d&&(i=d)}}return i}r=r||0;for(var c=a.length;c>0&&a[c-1][2]>r;c--)a[c]=a[c-1];a[c]=[o,t,r]}}(),function(){e.n=function(a){var i=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(i,{a:i}),i}}(),function(){e.d=function(a,i){for(var o in i)e.o(i,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:i[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)}}(),function(){e.p="/"}(),function(){var a={143:0};e.O.j=function(i){return 0===a[i]};var i=function(i,o){var t,r,n=o[0],s=o[1],l=o[2],d=0;if(n.some((function(i){return 0!==a[i]}))){for(t in s)e.o(s,t)&&(e.m[t]=s[t]);if(l)var c=l(e)}for(i&&i(o);d<n.length;d++)r=n[d],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(c)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8811)}));o=e.O(o)})();
//# sourceMappingURL=app.f6de120b.js.map