(function(){"use strict";var a={13:function(a,e,t){var o=t(963),i=t(252);const n={class:"body"},r={class:"footer"};function l(a,e,t,o,l,s){const c=(0,i.up)("NavBar"),u=(0,i.up)("router-view"),d=(0,i.up)("FooterViver");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c),(0,i._)("div",n,[(0,i.Wm)(u),(0,i._)("div",r,[(0,i.Wm)(d)])])])}var s=t.p+"img/Logo.39797c50.jpeg",c=t.p+"img/Icon_Cons.4f2252fa.jpg";const u={id:"nav"},d=(0,i._)("img",{src:s,width:"100",height:"40"},null,-1),m=(0,i._)("h1",{id:"mensagem-provisoria"},[(0,i._)("img",{src:c,width:"50",height:"50"}),(0,i.Uk)(" SITE EM CONSTRUÇÃO!!!")],-1),p={key:0,class:"navbar-nav mr-auto"},f={key:1,class:"navbar-nav mr-auto"},v=(0,i._)("div",null,null,-1),g=(0,i._)("div",null,null,-1),h={key:0,class:"navbar-nav mr-auto"},b=(0,i.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="/anuncios"><i class="fa fa-anuncios"></i> ANÚNCIOS</a></li><li><a href="/financ"><i class="fa fa-financas"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-concencao"></i> CONVENÇÃO</a></li><li><a href="/assembleia"><i class="fa fa-assembleia"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-area"></i> ÁREA COMUM</a></li><li><a href="/check-in"><i class="fa fa-check"></i> CHECK-IN</a></li><li><a href="/area-sindico"><i class="fa fa-sindico"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),_=[b];function w(a,e,t,n,r,l){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",u,[(0,i.Wm)(s,{to:"/",id:"logo-url"},{default:(0,i.w5)((()=>[d])),_:1}),m,l.usuarioestaLogado?((0,i.wg)(),(0,i.iD)("ul",p,[(0,i._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,o.iM)(((...a)=>l.efetuarLogout&&l.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("table",null,[(0,i._)("tr",null,[(0,i._)("td",null,[(0,i._)("div",null,[(0,i._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[1]||(e[1]=(0,o.iM)(((...a)=>l.direcionaLogin&&l.direcionaLogin(...a)),["prevent"]))},"Login")])]),(0,i._)("td",null,[(0,i._)("div",null,[(0,i._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[2]||(e[2]=(0,o.iM)(((...a)=>l.direcionaRegistrar&&l.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")])])])]),v,g]))]),l.usuarioestaLogado?((0,i.wg)(),(0,i.iD)("ul",h,_)):(0,i.kq)("",!0)])}var y={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)},direcionaRegistrar(){this.$router.push({name:"novo.usuario"}),setTimeout((function(){window.location.reload(1)}),1)},efetuarLogout(){localStorage.removeItem("jwt"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("jwt"))}}},S=t(744);const k=(0,S.Z)(y,[["render",w]]);var C=k,U=t.p+"img/facebook_108044.72123f49.png",E=t.p+"img/instagram_108043.3c7d5e22.png",A=t.p+"img/youtube_108041.865a1c7f.png",D=t.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const F={class:"footer-absolute"},L=(0,i.uE)('<footer class="footer-distributed" data-v-4d67c782><div class="footer-right" data-v-4d67c782><a href="https://pt-br.facebook.com/" data-v-4d67c782><i class="fa fa-facebook" data-v-4d67c782><img src="'+U+'" alt="face" width="35px" height="35px" data-v-4d67c782></i></a><a href="https://www.instagram.com/" data-v-4d67c782><i class="fa fa-instagran" data-v-4d67c782><img src="'+E+'" alt="insta" width="35px" height="35px" data-v-4d67c782></i></a><a href="https://www.youtube.com/" data-v-4d67c782><i class="fa fa-youtube" data-v-4d67c782></i><img src="'+A+'" alt="youtube" width="35px" height="35px" data-v-4d67c782></a><a href="https://github.com/Chioda/viver" data-v-4d67c782><i class="fa fa-github" data-v-4d67c782></i><img src="'+D+'" alt="face" width="35px" height="35px" data-v-4d67c782></a></div><div class="footer-left" data-v-4d67c782><p class="footer-links" data-v-4d67c782><a class="link-1" href="/" data-v-4d67c782>Home</a></p><p data-v-4d67c782>E-mail: thiagochioda@hotmail.com</p><p data-v-4d67c782>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-4d67c782><p data-v-4d67c782>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),O=[L];function I(a,e,t,o,n,r){return(0,i.wg)(),(0,i.iD)("div",F,O)}var j={name:"FooterViver"};const x=(0,S.Z)(j,[["render",I],["__scopeId","data-v-4d67c782"]]);var N=x,q={components:{NavBar:C,FooterViver:N}};const R=(0,S.Z)(q,[["render",l]]);var V=R,Z=t(119);const M=a=>((0,i.dD)("data-v-63cf106f"),a=a(),(0,i.Cn)(),a),T=M((()=>(0,i._)("section",{id:"main-banner",class:"mainSection bg-img-section img-fluid",style:{"background-image":"url(img/Churrasqueira.jpeg)"}},null,-1))),W={class:"main-container"},B=M((()=>(0,i._)("h1",{id:"titulo"},"DESTAQUES",-1))),$={class:"lista"},G={class:"lista-destaques"},J={class:"lado-lado"},H=M((()=>(0,i._)("img",{class:"painel-corpo",src:"/img/Criancas.jpeg",alt:"Criancas"},null,-1))),z={class:"painel-titulo"},P=(0,i.Uk)("Colônia de Férias para as crianças do Viver "),Q=M((()=>(0,i._)("br",null,null,-1))),K=(0,i.Uk)(" Saiba mais... "),X=M((()=>(0,i._)("span",null,"10 de Janeiro de 2022",-1))),Y={class:"lado-lado"},aa=M((()=>(0,i._)("img",{class:"painel-corpo",src:"/img/Covid.jpeg",alt:"Covid"},null,-1))),ea={class:"painel-titulo"},ta=(0,i.Uk)("Liberada a obrigatoriedade das máscaras no condomínio. "),oa=M((()=>(0,i._)("br",null,null,-1))),ia=(0,i.Uk)(" Saiba mais... "),na=M((()=>(0,i._)("span",null,"02 de Janeiro de 2022",-1))),ra={class:"lado-lado"},la=M((()=>(0,i._)("img",{class:"painel-corpo",src:"/img/Gas.jpeg",alt:"Gas"},null,-1))),sa={class:"painel-titulo"},ca=(0,i.Uk)("Nova assembléia para regras dos medidores de Gás "),ua=M((()=>(0,i._)("br",null,null,-1))),da=(0,i.Uk)(" Saiba mais... "),ma=M((()=>(0,i._)("span",null,"10 de Dezembro de 2021",-1)));function pa(a,e,t,o,n,r){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[T,(0,i._)("div",W,[B,(0,i._)("ul",$,[(0,i._)("li",G,[(0,i._)("div",null,[(0,i._)("div",J,[H,(0,i._)("h2",z,[P,Q,(0,i.Wm)(l,{class:"router",to:{name:"areacomum"}},{default:(0,i.w5)((()=>[K])),_:1})]),X]),(0,i._)("div",Y,[aa,(0,i._)("h2",ea,[ta,oa,(0,i.Wm)(l,{class:"router",to:{name:"areacomum"}},{default:(0,i.w5)((()=>[ia])),_:1})]),na]),(0,i._)("div",ra,[la,(0,i._)("h2",sa,[ca,ua,(0,i.Wm)(l,{class:"router",to:{name:"areacomum"}},{default:(0,i.w5)((()=>[da])),_:1})]),ma])])])])])])}var fa={name:"HomeView"};const va=(0,S.Z)(fa,[["render",pa],["__scopeId","data-v-63cf106f"]]);var ga=va;const ha=a=>((0,i.dD)("data-v-13e9db5c"),a=a(),(0,i.Cn)(),a),ba={class:"main-container"},_a=ha((()=>(0,i._)("h1",null,"EFETUE SEU CADASTRO",-1))),wa={class:"form-group"},ya=ha((()=>(0,i._)("label",{for:"nome"},"Nome ",-1))),Sa=ha((()=>(0,i._)("br",null,null,-1))),ka={class:"form-group"},Ca=ha((()=>(0,i._)("label",{for:"email"},"E-mail ",-1))),Ua=ha((()=>(0,i._)("br",null,null,-1))),Ea={class:"form-group"},Aa=ha((()=>(0,i._)("label",{for:"senha"},"Senha ",-1))),Da=ha((()=>(0,i._)("br",null,null,-1))),Fa=ha((()=>(0,i._)("br",null,null,-1))),La={class:"center"},Oa=(0,i.Uk)(" Já possui um login cadastrado?"),Ia=(0,i.Uk)(" Faça o Login Aqui");function ja(a,e,t,n,r,l){const s=(0,i.up)("router-link"),c=(0,i.up)("center");return(0,i.wg)(),(0,i.iD)("body",null,[(0,i._)("div",ba,[_a,(0,i._)("form",{onSubmit:e[4]||(e[4]=(0,o.iM)((a=>l.registerSubmitUserForm()),["prevent"]))},[(0,i._)("div",wa,[ya,(0,i.wy)((0,i._)("input",{type:"text",id:"name",name:"name",class:"form-control mb-2",placeholder:"Inclua seu Nome","onUpdate:modelValue":e[0]||(e[0]=a=>r.registerForm.name=a)},null,512),[[o.nr,r.registerForm.name]])]),Sa,(0,i._)("div",ka,[Ca,(0,i.wy)((0,i._)("input",{type:"email",id:"email",name:"email",class:"form-control mb-2",placeholder:"Inclua seu E-mail","onUpdate:modelValue":e[1]||(e[1]=a=>r.registerForm.email=a)},null,512),[[o.nr,r.registerForm.email]])]),Ua,(0,i._)("div",Ea,[Aa,(0,i.wy)((0,i._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-2",placeholder:"Inclua a Senha","onUpdate:modelValue":e[2]||(e[2]=a=>r.registerForm.password=a)},null,512),[[o.nr,r.registerForm.password]])]),Da,(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i._)("button",{onClick:e[3]||(e[3]=(...a)=>l.submitRegisterUser&&l.submitRegisterUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Cadastrar "),Fa,(0,i._)("p",La,[Oa,(0,i.Wm)(s,{class:"router",to:"/login"},{default:(0,i.w5)((()=>[Ia])),_:1})])])),_:1})],32)])])}var xa=t(737),Na=t.n(xa),qa=t(669),Ra=t.n(qa),Va=()=>Ra().create({baseURL:"api/v1/"}),Za={async registerNewUser(a){try{const e=await Va().post("/register",a),{token:t}=e.data;t&&(localStorage.setItem("jwt",t),Na()({title:"Excelente!",text:"Usuário(a) cadastrado com sucesso!",icon:"success"}))}catch(e){Na()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}},Ma={name:"RegisterComponent",data(){return{registerForm:{name:null,email:null,password:null},isSubmitted:!1}},methods:{registerSubmitUserForm(){},async submitRegisterUser(){try{this.isSubmitted=!0,await Za.registerNewUser(this.registerForm),this.$router.push("/login")}catch(a){Na()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}}};const Ta=(0,S.Z)(Ma,[["render",ja],["__scopeId","data-v-13e9db5c"]]);var Wa=Ta;const Ba=(0,i._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),$a=(0,i._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),Ga=[Ba,$a];function Ja(a,e){return(0,i.wg)(),(0,i.iD)("div",null,Ga)}const Ha={},za=(0,S.Z)(Ha,[["render",Ja]]);var Pa=za;const Qa=a=>((0,i.dD)("data-v-dc35b5f8"),a=a(),(0,i.Cn)(),a),Ka={class:"body"},Xa={class:"main-container"},Ya=Qa((()=>(0,i._)("h1",null,"Efetue seu Login",-1))),ae={class:"form.group"},ee=Qa((()=>(0,i._)("label",{for:"email"},"E-mail ",-1))),te=Qa((()=>(0,i._)("br",null,null,-1))),oe={class:"form.group"},ie=Qa((()=>(0,i._)("label",{for:"senha"},"Senha ",-1))),ne=Qa((()=>(0,i._)("br",null,null,-1))),re={class:"cadastro-name"},le={class:"center"},se=(0,i.Uk)(" Não tem cadastro? "),ce=(0,i.Uk)(" Cadastre-se aqui! ");function ue(a,e,t,n,r,l){const s=(0,i.up)("router-link"),c=(0,i.up)("center");return(0,i.wg)(),(0,i.iD)("body",Ka,[(0,i._)("div",Xa,[Ya,(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,o.iM)((a=>l.loginSubmitUserForm()),["prevent"]))},[(0,i._)("div",ae,[ee,(0,i.wy)((0,i._)("input",{type:"text",id:"email",name:"email",class:"form-control mb-2",placeholder:"Digite seu E-mail","onUpdate:modelValue":e[0]||(e[0]=a=>r.loginForm.email=a)},null,512),[[o.nr,r.loginForm.email]])]),te,(0,i._)("div",oe,[ie,(0,i.wy)((0,i._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-2",placeholder:"Digite sua Senha","onUpdate:modelValue":e[1]||(e[1]=a=>r.loginForm.password=a)},null,512),[[o.nr,r.loginForm.password]])]),ne,(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i._)("button",{onClick:e[2]||(e[2]=(...a)=>l.submitLoginUser&&l.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Logar "),(0,i._)("div",re,[(0,i._)("p",le,[se,(0,i.Wm)(s,{class:"router",to:{name:"novo.usuario"}},{default:(0,i.w5)((()=>[ce])),_:1},8,["to"])])])])),_:1})],32)])])}var de={async loginUser(a){try{const e=await Va().post("/login",a),{token:t}=e.data;localStorage.setItem("jwt",t),t&&Na()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(e){Na()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},me={name:"LoginViver",data(){return{loginForm:{email:null,password:null}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{this.isSubmitted=!0,await de.loginUser(this.loginForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),1)}catch(a){Na()({title:"Login ou password Incorreto!",text:"Digite Login e password cadastrado!",icon:"error"})}}}};const pe=(0,S.Z)(me,[["render",ue],["__scopeId","data-v-dc35b5f8"]]);var fe=pe;const ve={class:"main-container"},ge=(0,i.uE)('<h1 id="titulo" data-v-33325fe4>Área Comum</h1><ul class="lista" data-v-33325fe4><li class="lista-destaques" data-v-33325fe4><div data-v-33325fe4><div class="lado-lado" data-v-33325fe4><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-33325fe4><h1 class="painel-titulo" data-v-33325fe4>ACADEMIA</h1></div><div class="lado-lado" data-v-33325fe4><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-33325fe4><h1 class="painel-titulo" data-v-33325fe4>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-33325fe4><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-33325fe4><h1 class="painel-titulo" data-v-33325fe4>SALÃO DE BELEZA</h1></div></div><div data-v-33325fe4><div class="lado-lado" data-v-33325fe4><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-33325fe4><h1 class="painel-titulo" data-v-33325fe4>Salão de Festas</h1></div><div class="lado-lado" data-v-33325fe4><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-33325fe4><h1 class="painel-titulo" data-v-33325fe4>Salão de Jogos</h1></div><div class="lado-lado" data-v-33325fe4><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-33325fe4><h1 class="painel-titulo" data-v-33325fe4>Brinquedoteca</h1></div></div></li></ul>',2),he=[ge];function be(a,e,t,o,n,r){return(0,i.wg)(),(0,i.iD)("div",ve,he)}var _e={name:"AreaComum"};const we=(0,S.Z)(_e,[["render",be],["__scopeId","data-v-33325fe4"]]);var ye=we;const Se=(0,i._)("iframe",{src:"/Financ/Financ.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),ke=(0,i._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),Ce=[Se,ke];function Ue(a,e){return(0,i.wg)(),(0,i.iD)("div",null,Ce)}const Ee={},Ae=(0,S.Z)(Ee,[["render",Ue]]);var De=Ae;const Fe=(0,i._)("div",{class:"main-container"},[(0,i._)("h1",null,"Anúncios")],-1),Le=[Fe];function Oe(a,e){return(0,i.wg)(),(0,i.iD)("body",null,Le)}const Ie={},je=(0,S.Z)(Ie,[["render",Oe]]);var xe=je;const Ne=(0,i._)("div",{class:"main-container"},[(0,i._)("h1",null,"Assembléia")],-1),qe=[Ne];function Re(a,e){return(0,i.wg)(),(0,i.iD)("body",null,qe)}const Ve={},Ze=(0,S.Z)(Ve,[["render",Re]]);var Me=Ze;const Te=(0,i._)("div",{class:"main-container"},[(0,i._)("h1",null,"Check-In")],-1),We=[Te];function Be(a,e){return(0,i.wg)(),(0,i.iD)("body",null,We)}const $e={},Ge=(0,S.Z)($e,[["render",Be]]);var Je=Ge;const He=(0,i._)("div",{class:"main-container"},[(0,i._)("h1",null,"Área do Sindico")],-1),ze=[He];function Pe(a,e){return(0,i.wg)(),(0,i.iD)("body",null,ze)}const Qe={},Ke=(0,S.Z)(Qe,[["render",Pe]]);var Xe=Ke;const Ye=[{path:"/",name:"home",component:ga},{path:"/anuncios",name:"anuncios",component:xe,meta:{requireAuth:!0}},{path:"/financ",name:"financ",component:De,meta:{requireAuth:!0}},{path:"/convencao",name:"convencao",component:Pa,meta:{requireAuth:!0}},{path:"/assembleia",name:"assembleia",component:Me,meta:{requireAuth:!0}},{path:"/areacomum",name:"areacomum",component:ye,meta:{requireAuth:!0}},{path:"/check-in",name:"check-in",component:Je,meta:{requireAuth:!0}},{path:"/area-sindico",name:"area-sindico",component:Xe,meta:{requireAuth:!0}},{path:"/cadastre-se",name:"novo.usuario",component:Wa},{path:"/login",name:"login",component:fe}],at=(0,Z.p7)({history:(0,Z.PO)("/"),routes:Ye});at.beforeEach(((a,e,t)=>{a.matched.some((a=>a.meta.requireAuth))&&null==localStorage.getItem("jwt")?t({path:"/"}):t()}));var et=at;(0,o.ri)(V).use(et).mount("#app")}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return a[o].call(n.exports,n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,o,i,n){if(!o){var r=1/0;for(u=0;u<a.length;u++){o=a[u][0],i=a[u][1],n=a[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&n||r>=n)&&Object.keys(t.O).every((function(a){return t.O[a](o[s])}))?o.splice(s--,1):(l=!1,n<r&&(r=n));if(l){a.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=a.length;u>0&&a[u-1][2]>n;u--)a[u]=a[u-1];a[u]=[o,i,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var i,n,r=o[0],l=o[1],s=o[2],c=0;if(r.some((function(e){return 0!==a[e]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(s)var u=s(t)}for(e&&e(o);c<r.length;c++)n=r[c],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(u)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(13)}));o=t.O(o)})();
//# sourceMappingURL=app.c445ad84.js.map