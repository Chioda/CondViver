(function(){"use strict";var a={660:function(a,e,t){var n=t(963),o=t(252);const i={class:"body"},l={class:"footer"};function r(a,e,t,n,r,s){const c=(0,o.up)("NavBar"),u=(0,o.up)("router-view"),d=(0,o.up)("FooterViver");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o._)("div",i,[(0,o.Wm)(u),(0,o._)("div",l,[(0,o.Wm)(d)])])])}var s=t.p+"img/Logo.39797c50.jpeg";const c={id:"nav"},u=(0,o._)("img",{src:s,width:"100",height:"40"},null,-1),d=(0,o._)("h1",{id:"mensagem-provisoria"}," SEU CONDOMÍNIO ON-LINE",-1),m={key:0,class:"navbar-nav mr-auto"},p={key:1,class:"navbar-nav mr-auto"},g={key:0,class:"navbar-nav mr-auto"},v=(0,o.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="/anuncios"><i class="fa fa-anuncios"></i> ANÚNCIOS</a></li><li><a href="/financ"><i class="fa fa-financas"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-concencao"></i> CONVENÇÃO</a></li><li><a href="/assembleia"><i class="fa fa-assembleia"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-area"></i> ÁREA COMUM</a></li><li><a href="/check-in"><i class="fa fa-check"></i> CHECK-IN</a></li><li><a href="/area-sindico"><i class="fa fa-sindico"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),h=[v];function f(a,e,t,i,l,r){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",c,[(0,o.Wm)(s,{to:"/",id:"logo-url"},{default:(0,o.w5)((()=>[u])),_:1}),d,r.usuarioestaLogado?((0,o.wg)(),(0,o.iD)("ul",m,[(0,o._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,n.iM)(((...a)=>r.efetuarLogout&&r.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("table",null,[(0,o._)("tr",null,[(0,o._)("td",null,[(0,o._)("div",null,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[1]||(e[1]=(0,n.iM)(((...a)=>r.direcionaLogin&&r.direcionaLogin(...a)),["prevent"]))},"Login")])]),(0,o._)("td",null,[(0,o._)("div",null,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[2]||(e[2]=(0,n.iM)(((...a)=>r.direcionaRegistrar&&r.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")])])])])]))]),r.usuarioestaLogado?((0,o.wg)(),(0,o.iD)("ul",g,h)):(0,o.kq)("",!0)])}var b={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)},direcionaRegistrar(){this.$router.push({name:"novo.usuario"}),setTimeout((function(){window.location.reload(1)}),1)},efetuarLogout(){localStorage.removeItem("jwt"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("jwt"))}}},_=t(744);const w=(0,_.Z)(b,[["render",f]]);var A=w,y=t.p+"img/facebook_108044.72123f49.png",C=t.p+"img/instagram_108043.3c7d5e22.png",S=t.p+"img/youtube_108041.865a1c7f.png",k=t.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const D={class:"footer-absolute"},U=(0,o.uE)('<footer class="footer-distributed" data-v-04ec0ae4><div class="footer-right" data-v-04ec0ae4><a href="https://pt-br.facebook.com/" data-v-04ec0ae4><i class="fa fa-facebook" data-v-04ec0ae4><img src="'+y+'" alt="face" width="35px" height="35px" data-v-04ec0ae4></i></a><a href="https://www.instagram.com/" data-v-04ec0ae4><i class="fa fa-instagran" data-v-04ec0ae4><img src="'+C+'" alt="insta" width="35px" height="35px" data-v-04ec0ae4></i></a><a href="https://www.youtube.com/" data-v-04ec0ae4><i class="fa fa-youtube" data-v-04ec0ae4></i><img src="'+S+'" alt="youtube" width="35px" height="35px" data-v-04ec0ae4></a><a href="https://github.com/Chioda/CondViver" data-v-04ec0ae4><i class="fa fa-github" data-v-04ec0ae4></i><img src="'+k+'" alt="face" width="35px" height="35px" data-v-04ec0ae4></a></div><div class="footer-left" data-v-04ec0ae4><p class="footer-links" data-v-04ec0ae4><a class="link-1" href="/" data-v-04ec0ae4>Home</a></p><p data-v-04ec0ae4>E-mail: thiagochioda@hotmail.com</p><p data-v-04ec0ae4>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-04ec0ae4><p data-v-04ec0ae4>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),F=[U];function I(a,e,t,n,i,l){return(0,o.wg)(),(0,o.iD)("div",D,F)}var E={name:"FooterViver"};const N=(0,_.Z)(E,[["render",I],["__scopeId","data-v-04ec0ae4"]]);var x=N,O={components:{NavBar:A,FooterViver:x}};const L=(0,_.Z)(O,[["render",r]]);var q=L,V=t(119);const j=a=>((0,o.dD)("data-v-89a6d1c2"),a=a(),(0,o.Cn)(),a),R=j((()=>(0,o._)("section",{id:"main-banner",class:"mainSection bg-img-section img-fluid",style:{"background-image":"url(img/Churrasqueira.jpeg)"}},null,-1))),z={class:"main-container"},M=j((()=>(0,o._)("h1",{id:"titulo"},"DESTAQUES",-1))),T={class:"lista"},Z={class:"lista-destaques"},$={class:"lado-lado"},H=j((()=>(0,o._)("img",{class:"painel-corpo",src:"/img/Criancas.jpeg",alt:"Criancas"},null,-1))),B={class:"painel-titulo"},W=(0,o.Uk)("Colônia de Férias para as crianças do Viver "),P=j((()=>(0,o._)("br",null,null,-1))),G=(0,o.Uk)(" Saiba mais... "),J=j((()=>(0,o._)("span",null,"10 de Janeiro de 2022",-1))),K={class:"lado-lado"},Q=j((()=>(0,o._)("img",{class:"painel-corpo",src:"/img/Covid.jpeg",alt:"Covid"},null,-1))),X={class:"painel-titulo"},Y=(0,o.Uk)("Liberada a obrigatoriedade das máscaras no condomínio. "),aa=j((()=>(0,o._)("br",null,null,-1))),ea=(0,o.Uk)(" Saiba mais... "),ta=j((()=>(0,o._)("span",null,"02 de Janeiro de 2022",-1))),na={class:"lado-lado"},oa=j((()=>(0,o._)("img",{class:"painel-corpo",src:"/img/Gas.jpeg",alt:"Gas"},null,-1))),ia={class:"painel-titulo"},la=(0,o.Uk)("Nova assembléia para regras dos medidores de Gás "),ra=j((()=>(0,o._)("br",null,null,-1))),sa=(0,o.Uk)(" Saiba mais... "),ca=j((()=>(0,o._)("span",null,"10 de Dezembro de 2021",-1)));function ua(a,e,t,n,i,l){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[R,(0,o._)("div",z,[M,(0,o._)("ul",T,[(0,o._)("li",Z,[(0,o._)("div",null,[(0,o._)("div",$,[H,(0,o._)("h2",B,[W,P,(0,o.Wm)(r,{class:"router",to:{name:"areacomum"}},{default:(0,o.w5)((()=>[G])),_:1})]),J]),(0,o._)("div",K,[Q,(0,o._)("h2",X,[Y,aa,(0,o.Wm)(r,{class:"router",to:{name:"areacomum"}},{default:(0,o.w5)((()=>[ea])),_:1})]),ta]),(0,o._)("div",na,[oa,(0,o._)("h2",ia,[la,ra,(0,o.Wm)(r,{class:"router",to:{name:"areacomum"}},{default:(0,o.w5)((()=>[sa])),_:1})]),ca])])])])])])}var da={name:"HomeView"};const ma=(0,_.Z)(da,[["render",ua],["__scopeId","data-v-89a6d1c2"]]);var pa=ma;const ga=a=>((0,o.dD)("data-v-7200c561"),a=a(),(0,o.Cn)(),a),va={class:"main-container"},ha=ga((()=>(0,o._)("h1",null,"EFETUE SEU CADASTRO",-1))),fa={class:"form-group"},ba=ga((()=>(0,o._)("label",{for:"nome"},"Nome ",-1))),_a=ga((()=>(0,o._)("br",null,null,-1))),wa={class:"form-group"},Aa=ga((()=>(0,o._)("label",{for:"nome"},"CPF ",-1))),ya=ga((()=>(0,o._)("br",null,null,-1))),Ca={class:"form-group"},Sa=ga((()=>(0,o._)("label",{for:"nome"},"Telefone ",-1))),ka=ga((()=>(0,o._)("br",null,null,-1))),Da={class:"form-group"},Ua=ga((()=>(0,o._)("label",{for:"nome"},"Data Nascimento ",-1))),Fa=ga((()=>(0,o._)("br",null,null,-1))),Ia={class:"form-group"},Ea=ga((()=>(0,o._)("label",{for:"nome"},"Apartamento ",-1))),Na=ga((()=>(0,o._)("br",null,null,-1))),xa={class:"form-group"},Oa=ga((()=>(0,o._)("label",{for:"email"},"E-mail ",-1))),La=ga((()=>(0,o._)("br",null,null,-1))),qa={class:"form-group"},Va=ga((()=>(0,o._)("label",{for:"senha"},"Senha ",-1))),ja=ga((()=>(0,o._)("br",null,null,-1))),Ra=ga((()=>(0,o._)("br",null,null,-1))),za={class:"center"},Ma=(0,o.Uk)(" Já possui um login cadastrado? "),Ta=(0,o.Uk)(" Faça o Login Aqui ");function Za(a,e,t,i,l,r){const s=(0,o.up)("router-link"),c=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",va,[ha,(0,o._)("form",{onSubmit:e[8]||(e[8]=(0,n.iM)((a=>r.registerSubmitUserForm()),["prevent"]))},[(0,o._)("div",fa,[ba,(0,o.wy)((0,o._)("input",{type:"text",id:"name",name:"name",class:"form-control mb-2",placeholder:"Inclua seu Nome","onUpdate:modelValue":e[0]||(e[0]=a=>l.registerForm.name=a)},null,512),[[n.nr,l.registerForm.name]])]),_a,(0,o._)("div",wa,[Aa,(0,o.wy)((0,o._)("input",{type:"text",id:"cpf",name:"cpf",class:"form-control mb-2",format:"###.###.###-##",placeholder:"Inclua seu CPF","onUpdate:modelValue":e[1]||(e[1]=a=>l.registerForm.cpf=a)},null,512),[[n.nr,l.registerForm.cpf]])]),ya,(0,o._)("div",Ca,[Sa,(0,o.wy)((0,o._)("input",{type:"text",id:"telefone",name:"telefone",class:"form-control mb-2",placeholder:"Inclua seu Telefone","onUpdate:modelValue":e[2]||(e[2]=a=>l.registerForm.telefone=a)},null,512),[[n.nr,l.registerForm.telefone]])]),ka,(0,o._)("div",Da,[Ua,(0,o.wy)((0,o._)("input",{type:"date",id:"dataNasc",name:"dataNasc",class:"form-control mb-2",placeholder:"Inclua sua Data de Nascimento","onUpdate:modelValue":e[3]||(e[3]=a=>l.registerForm.dataNasc=a)},null,512),[[n.nr,l.registerForm.dataNasc]])]),Fa,(0,o._)("div",Ia,[Ea,(0,o.wy)((0,o._)("input",{type:"text",id:"apto",name:"apto",class:"form-control mb-2",placeholder:"Inclua seu Apartamento","onUpdate:modelValue":e[4]||(e[4]=a=>l.registerForm.apto=a)},null,512),[[n.nr,l.registerForm.apto]])]),Na,(0,o._)("div",xa,[Oa,(0,o.wy)((0,o._)("input",{type:"email",id:"email",name:"email",class:"form-control mb-2",placeholder:"Inclua seu E-mail","onUpdate:modelValue":e[5]||(e[5]=a=>l.registerForm.email=a)},null,512),[[n.nr,l.registerForm.email]])]),La,(0,o._)("div",qa,[Va,(0,o.wy)((0,o._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-2",placeholder:"Inclua a Senha","onUpdate:modelValue":e[6]||(e[6]=a=>l.registerForm.password=a)},null,512),[[n.nr,l.registerForm.password]])]),ja,(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o._)("button",{onClick:e[7]||(e[7]=(...a)=>r.submitRegisterUser&&r.submitRegisterUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Cadastrar "),Ra,(0,o._)("p",za,[Ma,(0,o.Wm)(s,{class:"router",to:"/login"},{default:(0,o.w5)((()=>[Ta])),_:1})])])),_:1})],32)])])}var $a=t(737),Ha=t.n($a),Ba=t(669),Wa=t.n(Ba),Pa=()=>Wa().create({baseURL:"api/v1/"}),Ga={async registerNewUser(a){try{const e=await Pa().post("/register",a),{token:t}=e.data;t&&(localStorage.setItem("jwt",t),Ha()({title:"Excelente!",text:"Usuário(a) cadastrado com sucesso!",icon:"success"}))}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}},Ja={name:"RegisterComponent",data(){return{registerForm:{name:null,cpf:null,telefone:null,dataNasc:null,apto:null,email:null,password:null,inadimplente:"false"},isSubmitted:!1}},methods:{registerSubmitUserForm(){},async submitRegisterUser(){try{this.isSubmitted=!0,await Ga.registerNewUser(this.registerForm),this.$router.push("/login")}catch(a){Ha()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}}};const Ka=(0,_.Z)(Ja,[["render",Za],["__scopeId","data-v-7200c561"]]);var Qa=Ka;const Xa=(0,o._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),Ya=(0,o._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),ae=[Xa,Ya];function ee(a,e){return(0,o.wg)(),(0,o.iD)("div",null,ae)}const te={},ne=(0,_.Z)(te,[["render",ee]]);var oe=ne;const ie=a=>((0,o.dD)("data-v-4d23a692"),a=a(),(0,o.Cn)(),a),le={class:"body"},re={class:"main-container"},se=ie((()=>(0,o._)("h1",null,"Efetue seu Login",-1))),ce={class:"form.group"},ue=ie((()=>(0,o._)("label",{for:"email"},"E-mail ",-1))),de=ie((()=>(0,o._)("br",null,null,-1))),me={class:"form.group"},pe=ie((()=>(0,o._)("label",{for:"senha"},"Senha ",-1))),ge=ie((()=>(0,o._)("br",null,null,-1))),ve={class:"cadastro-name"},he={class:"center"},fe=(0,o.Uk)(" Não tem cadastro? "),be=(0,o.Uk)(" Cadastre-se aqui! ");function _e(a,e,t,i,l,r){const s=(0,o.up)("router-link"),c=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("body",le,[(0,o._)("div",re,[se,(0,o._)("form",{onSubmit:e[3]||(e[3]=(0,n.iM)((a=>r.loginSubmitUserForm()),["prevent"]))},[(0,o._)("div",ce,[ue,(0,o.wy)((0,o._)("input",{type:"text",id:"email",name:"email",class:"form-control mb-2",placeholder:"Digite seu E-mail","onUpdate:modelValue":e[0]||(e[0]=a=>l.loginForm.email=a)},null,512),[[n.nr,l.loginForm.email]])]),de,(0,o._)("div",me,[pe,(0,o.wy)((0,o._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-2",placeholder:"Digite sua Senha","onUpdate:modelValue":e[1]||(e[1]=a=>l.loginForm.password=a)},null,512),[[n.nr,l.loginForm.password]])]),ge,(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o._)("button",{onClick:e[2]||(e[2]=(...a)=>r.submitLoginUser&&r.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Logar "),(0,o._)("div",ve,[(0,o._)("p",he,[fe,(0,o.Wm)(s,{class:"router",to:{name:"novo.usuario"}},{default:(0,o.w5)((()=>[be])),_:1},8,["to"])])])])),_:1})],32)])])}var we={async loginUser(a){try{const e=await Pa().post("/login",a),{token:t}=e.data;localStorage.setItem("jwt",t),t&&Ha()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},Ae={name:"LoginViver",data(){return{loginForm:{email:null,password:null}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{this.isSubmitted=!0,await we.loginUser(this.loginForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),1)}catch(a){Ha()({title:"Login ou password Incorreto!",text:"Digite Login e password cadastrado!",icon:"error"})}}}};const ye=(0,_.Z)(Ae,[["render",_e],["__scopeId","data-v-4d23a692"]]);var Ce=ye;const Se=a=>((0,o.dD)("data-v-c067103a"),a=a(),(0,o.Cn)(),a),ke={class:"main-container"},De={id:"nav-area"},Ue=Se((()=>(0,o._)("h1",{id:"titulo"},"ÁREA COMUM",-1))),Fe={class:"navbar-nav mr-auto"},Ie=(0,o.uE)('<ul class="lista" data-v-c067103a><li class="lista-destaques" data-v-c067103a><div data-v-c067103a><div class="lado-lado" data-v-c067103a><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-c067103a><h1 class="painel-titulo" data-v-c067103a>ACADEMIA</h1></div><div class="lado-lado" data-v-c067103a><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-c067103a><h1 class="painel-titulo" data-v-c067103a>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-c067103a><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-c067103a><h1 class="painel-titulo" data-v-c067103a>SALÃO DE BELEZA</h1></div></div><div data-v-c067103a><div class="lado-lado" data-v-c067103a><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-c067103a><h1 class="painel-titulo" data-v-c067103a>Salão de Festas</h1></div><div class="lado-lado" data-v-c067103a><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-c067103a><h1 class="painel-titulo" data-v-c067103a>Salão de Jogos</h1></div><div class="lado-lado" data-v-c067103a><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-c067103a><h1 class="painel-titulo" data-v-c067103a>Brinquedoteca</h1></div></div></li></ul>',1);function Ee(a,e,t,i,l,r){return(0,o.wg)(),(0,o.iD)("div",ke,[(0,o._)("div",De,[Ue,(0,o._)("ul",Fe,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,n.iM)(((...a)=>r.direcionaAgendamento&&r.direcionaAgendamento(...a)),["prevent"]))},"Agendamento")])]),Ie])}var Ne={name:"AreaComum",methods:{direcionaAgendamento(){this.$router.push({name:"agendamento"}),setTimeout((function(){window.location.reload(1)}),1)}}};const xe=(0,_.Z)(Ne,[["render",Ee],["__scopeId","data-v-c067103a"]]);var Oe=xe,Le=t(577),qe=t.p+"img/Alerta.8dc53268.jpg";const Ve=a=>((0,o.dD)("data-v-376bf3b2"),a=a(),(0,o.Cn)(),a),je={class:"main"},Re=Ve((()=>(0,o._)("h1",{id:"titulo"},"AGENDAMENTO",-1))),ze={class:"main-container"},Me={class:"lista"},Te={class:"lista-destaques"},Ze=Ve((()=>(0,o._)("h2",null,"REALIZE SEU AGENDAMENTO",-1))),$e={class:"input-container"},He={for:"name"},Be=(0,o.Uk)("Nome do Condômino: "),We=Ve((()=>(0,o._)("br",null,null,-1))),Pe={class:"name-user"},Ge={class:"input-container"},Je=Ve((()=>(0,o._)("label",{for:"local"},"Selecione o local:",-1))),Ke=(0,o.uE)('<option value="" data-v-376bf3b2>Selecione o local</option><option value="academia" data-v-376bf3b2>Academia</option><option value="churrasqueira" data-v-376bf3b2>Churrasqueira</option><option value="sl_beleza" data-v-376bf3b2>Salão de Beleza</option><option value="sl_festas" data-v-376bf3b2>Salão de Festas</option>',5),Qe=[Ke],Xe=(0,o.Uk)(),Ye=Ve((()=>(0,o._)("br",null,null,-1))),at=Ve((()=>(0,o._)("br",null,null,-1))),et={class:"input-container"},tt=Ve((()=>(0,o._)("label",{for:"diaa"},"Selecione a data do agendamento::",-1))),nt=Ve((()=>(0,o._)("br",null,null,-1))),ot={class:"input-container"},it=Ve((()=>(0,o._)("label",{for:"horario"},"Selecione o horário:",-1))),lt=(0,o.uE)('<option value="" data-v-376bf3b2>Selecione um horário</option><option value="10:00" data-v-376bf3b2>10:00</option><option value="11:00" data-v-376bf3b2>11:00</option><option value="12:00" data-v-376bf3b2>12:00</option><option value="13:00" data-v-376bf3b2>13:00</option><option value="14:00" data-v-376bf3b2>14:00</option><option value="15:00" data-v-376bf3b2>15:00</option><option value="16:00" data-v-376bf3b2>16:00</option><option value="17:00" data-v-376bf3b2>17:00</option><option value="18:00" data-v-376bf3b2>18:00</option><option value="19:00" data-v-376bf3b2>19:00</option><option value="20:00" data-v-376bf3b2>20:00</option><option value="21:00" data-v-376bf3b2>21:00</option>',13),rt=[lt],st=Ve((()=>(0,o._)("br",null,null,-1))),ct={class:"input-container"},ut=Ve((()=>(0,o._)("a",{href:"/areacomum",class:"btn btn-warning"},"Cancelar",-1))),dt=Ve((()=>(0,o._)("form",{class:"lado-lado"},[(0,o._)("img",{id:"alerta",src:qe,alt:"alerta",width:"600",height:"300"})],-1)));function mt(a,e,t,i,l,r){return(0,o.wg)(),(0,o.iD)("div",je,[Re,(0,o._)("div",ze,[(0,o._)("ul",Me,[(0,o._)("li",Te,[(0,o._)("form",{class:"lado-lado",id:"agendamento-form",onSubmit:e[4]||(e[4]=(0,n.iM)((a=>r.createAgendamento()),["prevent"]))},[Ze,(0,o._)("div",$e,[(0,o._)("label",He,[Be,We,(0,o._)("p",Pe,(0,Le.zw)(l.agendamentoForm.usuario),1)])]),(0,o._)("div",Ge,[Je,(0,o.wy)((0,o._)("select",{required:"",name:"local",id:"local","onUpdate:modelValue":e[0]||(e[0]=a=>l.agendamentoForm.local=a)},Qe,512),[[n.bM,l.agendamentoForm.local]]),Xe,Ye,at,(0,o._)("div",et,[tt,(0,o.wy)((0,o._)("input",{type:"date",id:"diaa",name:"diaa","onUpdate:modelValue":e[1]||(e[1]=a=>l.agendamentoForm.dia=a)},null,512),[[n.nr,l.agendamentoForm.dia]])]),nt,(0,o._)("div",ot,[it,(0,o.wy)((0,o._)("select",{required:"",name:"horario",id:"horario","onUpdate:modelValue":e[2]||(e[2]=a=>l.agendamentoForm.horario=a)},rt,512),[[n.bM,l.agendamentoForm.horario]])]),st,(0,o._)("div",ct,[ut,(0,o._)("button",{onClick:e[3]||(e[3]=(...a)=>r.submitAgendamento&&r.submitAgendamento(...a)),type:"submit",class:"btn btn-primary"},"Agendar")])])],32),dt])])])])}class pt{static async registerNewAgendamento(a){try{const e=await Pa().post("/agendamento",a),t=e.status;t&&Ha()({title:"Excelente!",text:"Agendamento cadastrado com sucesso!",icon:"success"})}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}static async deleteAgendamento(a){return Pa().delete(`/agendamento/${a}`)}static async returnAgendamentoId(a){return Pa().find(`/agendamento/${a}`)}static async upDateAgendamento(a,e){return Pa().patch(`/agendamento/${a}`,e)}}var gt=pt,vt=t(309),ht=t.n(vt),ft={name:"CadastrarAgendamento",data(){return{agendamentoForm:{usuario:null,local:null,dia:null,horario:null,checkIn:"Pendente"},user:{},isSubmitted:!1}},methods:{getUser(){const a=localStorage.getItem("jwt"),e=ht().decode(a);this.user=e,this.agendamentoForm.usuario=this.user.name,console.log(e)},createAgendamento(){},async submitAgendamento(){try{this.isSubmitted=!0,await gt.registerNewAgendamento(this.agendamentoForm),this.$router.push("/check-in")}catch(a){Ha()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}},created(){this.getUser()}};const bt=(0,_.Z)(ft,[["render",mt],["__scopeId","data-v-376bf3b2"]]);var _t=bt;const wt=(0,o._)("iframe",{src:"/Financ/Financ.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),At=(0,o._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),yt=[wt,At];function Ct(a,e){return(0,o.wg)(),(0,o.iD)("div",null,yt)}const St={},kt=(0,_.Z)(St,[["render",Ct]]);var Dt=kt;const Ut=a=>((0,o.dD)("data-v-429fe412"),a=a(),(0,o.Cn)(),a),Ft={class:"main-container"},It={id:"nav-area"},Et=Ut((()=>(0,o._)("h1",{id:"titulo"},"ANÚNCIOS",-1))),Nt={class:"navbar-nav mr-auto"},xt={class:"lista-destaques"},Ot=["onDblclick"],Lt={class:"painel"},qt={class:"painel-titulo"},Vt={class:"painel-corpo"},jt={class:"description"},Rt=Ut((()=>(0,o._)("b",{class:"bold"},"Descrição:",-1))),zt=Ut((()=>(0,o._)("br",null,null,-1))),Mt={class:"contact"},Tt=Ut((()=>(0,o._)("b",null,"Contato:",-1))),Zt=Ut((()=>(0,o._)("br",null,null,-1))),$t=Ut((()=>(0,o._)("br",null,null,-1))),Ht=["onClick"],Bt=Ut((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[(0,o._)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1))),Wt=[Bt];function Pt(a,e,t,i,l,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",Ft,[(0,o._)("div",It,[Et,(0,o._)("ul",Nt,[(0,o._)("button",{class:"nav-item",type:"Submit",onClick:e[0]||(e[0]=(0,n.iM)(((...e)=>a.direcionaAnuncio&&a.direcionaAnuncio(...e)),["prevent"]))},"Crie seu anúncio")])])]),(0,o._)("ul",null,[(0,o._)("li",xt,[(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.anuncios,(a=>((0,o.wg)(),(0,o.iD)("div",{class:"lado-lado",key:a._id,onDblclick:e=>r.deleteAnuncio(a._id)},[(0,o._)("div",Lt,[(0,o._)("h2",qt,(0,Le.zw)(a.title),1),(0,o._)("div",Vt,[(0,o._)("p",jt,[Rt,zt,(0,o.Uk)(" "+(0,Le.zw)(a.description),1)]),(0,o._)("p",Mt,[Tt,Zt,(0,o.Uk)(" "+(0,Le.zw)(a.author)+" ",1),$t,(0,o.Uk)(" "+(0,Le.zw)(a.phone),1)])]),(0,o._)("button",{type:"button",class:"btn btn-light mr-1",onClick:e=>r.deleteAnuncio(a._id)},Wt,8,Ht)])],40,Ot)))),128))])])])])}class Gt{static async registerNewAnuncio(a){try{const e=await Pa().post("/anuncio",a),t=e.status;t&&Ha()({title:"Excelente!",text:"Anuncio cadastrado com sucesso!",icon:"success"})}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}static async deleteAnuncio(a){return Pa().delete(`/anuncio/${a}`)}static async upDateAnuncio(a){return Pa().patch(`/anuncio/${a}`)}}var Jt=Gt,Kt={name:"AnuncioViver",data(){return{anuncios:[]}},mounted(){this.getAnuncios()},methods:{async getAnuncios(){const a=await Pa().get("/anuncio");console.log(a),200==a.status&&(this.anuncios=a.data)},async deleteAnuncio(a){const e=confirm("Deseja realmente excluir este Anúncio?");null==e||""==e?alert("Você desistiu de excluir o Anuncio!"):(await Ha()({title:"Confirmado!",text:"Anuncio EXCLUÍDO com sucesso!",icon:"success"}),await Jt.deleteAnuncio(a),this.anuncios=Pa().get("/anuncio"),setTimeout((function(){window.location.reload(1)}),1))}}};const Qt=(0,_.Z)(Kt,[["render",Pt],["__scopeId","data-v-429fe412"]]);var Xt=Qt;const Yt=a=>((0,o.dD)("data-v-60b0a0f2"),a=a(),(0,o.Cn)(),a),an={class:"body"},en=Yt((()=>(0,o._)("div",{id:"nav-area"},[(0,o._)("h1",{id:"titulo"},"CADASTRAR ANÚNCIOS")],-1))),tn={class:"main-container"},nn={class:"form-group"},on=Yt((()=>(0,o._)("label",{for:"title",class:"text-white"},"Título",-1))),ln={class:"form-group"},rn=Yt((()=>(0,o._)("label",{for:"author",class:"text-white"},"Autor",-1))),sn={class:"form-group"},cn=Yt((()=>(0,o._)("label",{for:"phone",class:"text-white"},"Contato",-1))),un={class:"form-group"},dn=Yt((()=>(0,o._)("label",{for:"description",class:"text-white"},"Descrição",-1))),mn=Yt((()=>(0,o._)("br",null,null,-1))),pn={class:"form-group"},gn=Yt((()=>(0,o._)("a",{href:"/anuncios",class:"btn btn-warning"},"Cancelar",-1))),vn=Yt((()=>(0,o._)("hr",null,null,-1)));function hn(a,e,t,i,l,r){return(0,o.wg)(),(0,o.iD)("body",an,[en,(0,o._)("div",tn,[(0,o._)("form",{onSubmit:e[5]||(e[5]=(0,n.iM)((a=>r.anuncioSubmitForm()),["prevent"]))},[(0,o._)("div",nn,[on,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"Título",name:"title","onUpdate:modelValue":e[0]||(e[0]=a=>l.anuncioForm.title=a),required:""},null,512),[[n.nr,l.anuncioForm.title]])]),(0,o._)("div",ln,[rn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"Autor",name:"author","onUpdate:modelValue":e[1]||(e[1]=a=>l.anuncioForm.author=a),required:""},null,512),[[n.nr,l.anuncioForm.author]])]),(0,o._)("div",sn,[cn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"Telefone de Contato",name:"phone","onUpdate:modelValue":e[2]||(e[2]=a=>l.anuncioForm.phone=a),required:""},null,512),[[n.nr,l.anuncioForm.phone]])]),(0,o._)("div",un,[dn,(0,o.wy)((0,o._)("textarea",{name:"description",placeholder:"Descrição",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=a=>l.anuncioForm.description=a)},"\r\n              ",512),[[n.nr,l.anuncioForm.description]])]),mn,(0,o._)("div",pn,[gn,(0,o._)("button",{onClick:e[4]||(e[4]=(...a)=>r.submitAnuncio&&r.submitAnuncio(...a)),type:"submit",class:"btn btn-primary"},"Salvar")])],32)]),vn])}var fn={name:"CadastrarAnuncios",data(){return{anuncioForm:{title:null,author:null,phone:null,description:null},id:this.$route.params.id,isSubmitted:!1}},methods:{anuncioSubmitForm(){},async submitAnuncio(){try{this.isSubmitted=!0,await Jt.registerNewAnuncio(this.anuncioForm),this.$router.push("/anuncios")}catch(a){Ha()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}}};const bn=(0,_.Z)(fn,[["render",hn],["__scopeId","data-v-60b0a0f2"]]);var _n=bn,wn=t.p+"img/Logo_Zoom.32cea7fd.jpg";const An=a=>((0,o.dD)("data-v-c6b6fcf6"),a=a(),(0,o.Cn)(),a),yn={class:"main"},Cn=An((()=>(0,o._)("h1",{id:"titulo"},"ASSEMBLÉIA ONLINE",-1))),Sn={class:"main-container"},kn=An((()=>(0,o._)("div",{class:"título"},[(0,o._)("h2",null,"LINK PARA A ASSEMLÉIA ONLINE")],-1))),Dn={class:"zoom"},Un=An((()=>(0,o._)("br",null,null,-1))),Fn=An((()=>(0,o._)("img",{src:wn,width:"90",height:"50"},null,-1))),In=An((()=>(0,o._)("br",null,null,-1))),En=An((()=>(0,o._)("br",null,null,-1))),Nn=(0,o.Uk)(" Para acessar a reunião online: "),xn=An((()=>(0,o._)("br",null,null,-1))),On=An((()=>(0,o._)("br",null,null,-1))),Ln=An((()=>(0,o._)("a",{class:"link-1",href:"https://zoom.us/",target:"_blank"},"Clique Aqui!",-1))),qn=An((()=>(0,o._)("br",null,null,-1))),Vn=An((()=>(0,o._)("br",null,null,-1))),jn=(0,o.Uk)(" ID da Reunião: 123 456 ");function Rn(a,e){const t=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("div",yn,[Cn,(0,o._)("div",Sn,[kn,(0,o._)("div",Dn,[Un,(0,o._)("p",null,[(0,o.Wm)(t,null,{default:(0,o.w5)((()=>[Fn,In,En,Nn,xn,On,Ln,qn,Vn,jn])),_:1})])])])])])}const zn={},Mn=(0,_.Z)(zn,[["render",Rn],["__scopeId","data-v-c6b6fcf6"]]);var Tn=Mn;const Zn=a=>((0,o.dD)("data-v-0e9b0f72"),a=a(),(0,o.Cn)(),a),$n=Zn((()=>(0,o._)("h1",{id:"titulo"},"CHECK-IN",-1))),Hn={class:"projetos"},Bn={class:"table is-fullwidth"},Wn=Zn((()=>(0,o._)("tr",{class:"tabela"},[(0,o._)("th",null,"Nome"),(0,o._)("th",null,"Local"),(0,o._)("th",null,"Data"),(0,o._)("th",null,"Horário"),(0,o._)("th",null,"Status"),(0,o._)("th"),(0,o._)("th")],-1))),Pn={key:0,class:"status-verde"},Gn={key:1,class:"status-laranja"},Jn=["onClick"],Kn=["onClick"],Qn=["onClick"];function Xn(a,e,t,i,l,r){return(0,o.wg)(),(0,o.iD)("body",null,[$n,(0,o._)("section",Hn,[(0,o._)("table",Bn,[(0,o._)("tbody",null,[Wn,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.agendamentos,(a=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("tr",{class:"lado-lado",key:a._id},[(0,o._)("td",null,(0,Le.zw)(a.usuario),1),(0,o._)("td",null,(0,Le.zw)(a.local),1),(0,o._)("td",null,(0,Le.zw)(a.dia),1),(0,o._)("td",null,(0,Le.zw)(a.horario),1),"Realizado"==a.checkIn?((0,o.wg)(),(0,o.iD)("td",Pn,(0,Le.zw)(a.checkIn),1)):((0,o.wg)(),(0,o.iD)("td",Gn,(0,Le.zw)(a.checkIn),1)),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e=>r.deleteAgendamento(a._id)}," Remover ",8,Jn)]),(0,o._)("td",null,["Realizado"==a.checkIn?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-success",onClick:e=>r.submitUpDateStatus(a),disabled:""}," Check-In ",8,Kn)):((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",class:"btn btn-success",onClick:e=>r.submitUpDateStatus(a)}," Check-In ",8,Qn))])])),[[n.F8,a.usuario==l.user.name]]))),128))])])])])}var Yn={name:"CheckInViver",data(){return{agendamentos:[],user:{}}},mounted(){this.getAgendamentos(),this.getUser()},methods:{async getAgendamentos(){const a=await Pa().get("/agendamento");console.log(a),200==a.status&&(this.agendamentos=a.data)},getUser(){const a=localStorage.getItem("jwt"),e=ht().decode(a);this.user=e,console.log(e)},async deleteAgendamento(a){const e=confirm("Deseja realmente excluir este Agendamento?");null==e||""==e?alert("Você desistiu de excluir o Agendamento!"):(await Ha()({title:"Confirmado!",text:"Agendamento EXCLUÍDO com sucesso!",icon:"success"}),await gt.deleteAgendamento(a),this.agendamentos=Pa().get("/agendamento"),setTimeout((function(){window.location.reload(1)}),1))},async submitUpDateStatus(a){try{this.agendamento=a,this.agendamento.checkIn="Realizado";const e=await Pa().patch(`/agendamento/${a._id}`,this.agendamento),t=await e.json();console.log(t)}catch(e){Ha()({title:"Confirmado!",text:"Check-In REALIZADO com sucesso!",icon:"success"})}}}};const ao=(0,_.Z)(Yn,[["render",Xn],["__scopeId","data-v-0e9b0f72"]]);var eo=ao;const to=a=>((0,o.dD)("data-v-b8f4f446"),a=a(),(0,o.Cn)(),a),no=to((()=>(0,o._)("div",{class:"main-container"},[(0,o._)("h1",{id:"titulo"},"ÁREA DO SÍNDICO")],-1))),oo=[no];function io(a,e,t,n,i,l){return(0,o.wg)(),(0,o.iD)("body",null,oo)}var lo={name:"SindicoViver",async mounted(){this.getSindico(),await this.direcionaHome()},methods:{async getSindico(){await Ha()({title:"ACESSO RESTRITO!",text:"Apenas o síndico tem acesso a esse local!",icon:"warning"})},async direcionaHome(){await this.$router.push({name:"home"})}}};const ro=(0,_.Z)(lo,[["render",io],["__scopeId","data-v-b8f4f446"]]);var so=ro;const co=[{path:"/",name:"home",component:pa},{path:"/anunciosCadastro",name:"cadastroAnuncio",component:_n,meta:{requireAuth:!0}},{path:"/anuncios",name:"anuncios",component:Xt,meta:{requireAuth:!0}},{path:"/financ",name:"financ",component:Dt,meta:{requireAuth:!0}},{path:"/convencao",name:"convencao",component:oe,meta:{requireAuth:!0}},{path:"/assembleia",name:"assembleia",component:Tn,meta:{requireAuth:!0}},{path:"/areacomum",name:"areacomum",component:Oe,meta:{requireAuth:!0}},{path:"/agendamentos",name:"agendamento",component:_t,meta:{requireAuth:!0}},{path:"/check-in",name:"check-in",component:eo,meta:{requireAuth:!0}},{path:"/area-sindico",name:"area-sindico",component:so,meta:{requireAuth:!0}},{path:"/cadastre-se",name:"novo.usuario",component:Qa},{path:"/login",name:"login",component:Ce}],uo=(0,V.p7)({history:(0,V.PO)("/"),routes:co});uo.beforeEach(((a,e,t)=>{a.matched.some((a=>a.meta.requireAuth))&&null==localStorage.getItem("jwt")?t({path:"/"}):t()}));var mo=uo;t(24);(0,n.ri)(q).use(mo).mount("#app")}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return a[n].call(i.exports,i,i.exports,t),i.exports}t.m=a,function(){var a=[];t.O=function(e,n,o,i){if(!n){var l=1/0;for(u=0;u<a.length;u++){n=a[u][0],o=a[u][1],i=a[u][2];for(var r=!0,s=0;s<n.length;s++)(!1&i||l>=i)&&Object.keys(t.O).every((function(a){return t.O[a](n[s])}))?n.splice(s--,1):(r=!1,i<l&&(l=i));if(r){a.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=a.length;u>0&&a[u-1][2]>i;u--)a[u]=a[u-1];a[u]=[n,o,i]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var o,i,l=n[0],r=n[1],s=n[2],c=0;if(l.some((function(e){return 0!==a[e]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(s)var u=s(t)}for(e&&e(n);c<l.length;c++)i=l[c],t.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return t.O(u)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(660)}));n=t.O(n)})();
//# sourceMappingURL=app.0973efba.js.map