(function(){"use strict";var a={223:function(a,e,t){var n=t(963),o=t(252);const i={class:"body"},l={class:"footer"};function s(a,e,t,n,s,r){const c=(0,o.up)("NavBar"),u=(0,o.up)("router-view"),d=(0,o.up)("FooterViver");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o._)("div",i,[(0,o.Wm)(u),(0,o._)("div",l,[(0,o.Wm)(d)])])])}var r=t.p+"img/Logo.39797c50.jpeg";const c={id:"nav"},u=(0,o._)("img",{src:r,width:"100",height:"40"},null,-1),d=(0,o._)("h1",{id:"mensagem-provisoria"}," SEU CONDOMÍNIO ON-LINE",-1),m={key:0,class:"navbar-nav mr-auto"},p={key:1,class:"navbar-nav mr-auto"},g={key:0,class:"navbar-nav mr-auto"},h=(0,o.uE)('<nav><a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i> Menu</a><ul class="menu"><li><a href="/"><i class="fa fa-user"></i> DESTAQUES</a></li><li><a href="/anuncios"><i class="fa fa-anuncios"></i> ANÚNCIOS</a></li><li><a href="/financ"><i class="fa fa-financas"></i> FINANÇAS</a></li><li><a href="/convencao"><i class="fa fa-concencao"></i> CONVENÇÃO</a></li><li><a href="/assembleia"><i class="fa fa-assembleia"></i> ASSEMBLÉIA ONLINE</a></li><li><a href="/areacomum"><i class="fa fa-area"></i> ÁREA COMUM</a></li><li><a href="/check-in"><i class="fa fa-check"></i> CHECK-IN</a></li><li><a href="/area-sindico"><i class="fa fa-sindico"></i> ÁREA DO SÍNDICO</a></li></ul></nav>',1),v=[h];function _(a,e,t,i,l,s){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",c,[(0,o.Wm)(r,{to:"/",id:"logo-url"},{default:(0,o.w5)((()=>[u])),_:1}),d,s.usuarioestaLogado?((0,o.wg)(),(0,o.iD)("ul",m,[(0,o._)("button",{class:"nav-item-logout",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,n.iM)(((...a)=>s.efetuarLogout&&s.efetuarLogout(...a)),["prevent"]))},"Logout")])):((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("table",null,[(0,o._)("tr",null,[(0,o._)("td",null,[(0,o._)("div",null,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[1]||(e[1]=(0,n.iM)(((...a)=>s.direcionaLogin&&s.direcionaLogin(...a)),["prevent"]))},"Login")])]),(0,o._)("td",null,[(0,o._)("div",null,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[2]||(e[2]=(0,n.iM)(((...a)=>s.direcionaRegistrar&&s.direcionaRegistrar(...a)),["prevent"]))},"Registre-se ")])])])])]))]),s.usuarioestaLogado?((0,o.wg)(),(0,o.iD)("ul",g,v)):(0,o.kq)("",!0)])}var f={name:"NavBar",methods:{direcionaLogin(){this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)},direcionaRegistrar(){this.$router.push({name:"novo.usuario"}),setTimeout((function(){window.location.reload(1)}),1)},efetuarLogout(){localStorage.removeItem("jwt"),this.$router.push({name:"login"}),setTimeout((function(){window.location.reload(1)}),1)}},computed:{usuarioestaLogado(){return Boolean(localStorage.getItem("jwt"))}}},b=t(744);const w=(0,b.Z)(f,[["render",_]]);var y=w,A=t.p+"img/facebook_108044.72123f49.png",C=t.p+"img/instagram_108043.3c7d5e22.png",S=t.p+"img/youtube_108041.865a1c7f.png",k=t.p+"img/circle-github_icon-icons.com_66826.43dfea13.png";const D={class:"footer-absolute"},U=(0,o.uE)('<footer class="footer-distributed" data-v-04ec0ae4><div class="footer-right" data-v-04ec0ae4><a href="https://pt-br.facebook.com/" data-v-04ec0ae4><i class="fa fa-facebook" data-v-04ec0ae4><img src="'+A+'" alt="face" width="35px" height="35px" data-v-04ec0ae4></i></a><a href="https://www.instagram.com/" data-v-04ec0ae4><i class="fa fa-instagran" data-v-04ec0ae4><img src="'+C+'" alt="insta" width="35px" height="35px" data-v-04ec0ae4></i></a><a href="https://www.youtube.com/" data-v-04ec0ae4><i class="fa fa-youtube" data-v-04ec0ae4></i><img src="'+S+'" alt="youtube" width="35px" height="35px" data-v-04ec0ae4></a><a href="https://github.com/Chioda/CondViver" data-v-04ec0ae4><i class="fa fa-github" data-v-04ec0ae4></i><img src="'+k+'" alt="face" width="35px" height="35px" data-v-04ec0ae4></a></div><div class="footer-left" data-v-04ec0ae4><p class="footer-links" data-v-04ec0ae4><a class="link-1" href="/" data-v-04ec0ae4>Home</a></p><p data-v-04ec0ae4>E-mail: thiagochioda@hotmail.com</p><p data-v-04ec0ae4>Telefone: (11) 4540-9080</p></div><div class="footer-center" data-v-04ec0ae4><p data-v-04ec0ae4>CONDOMÍNIO VIVER © 2022</p></div></footer>',1),I=[U];function E(a,e,t,n,i,l){return(0,o.wg)(),(0,o.iD)("div",D,I)}var F={name:"FooterViver"};const N=(0,b.Z)(F,[["render",E],["__scopeId","data-v-04ec0ae4"]]);var x=N,O={components:{NavBar:y,FooterViver:x}};const L=(0,b.Z)(O,[["render",s]]);var j=L,z=t(119);const q=a=>((0,o.dD)("data-v-89a6d1c2"),a=a(),(0,o.Cn)(),a),V=q((()=>(0,o._)("section",{id:"main-banner",class:"mainSection bg-img-section img-fluid",style:{"background-image":"url(img/Churrasqueira.jpeg)"}},null,-1))),R={class:"main-container"},M=q((()=>(0,o._)("h1",{id:"titulo"},"DESTAQUES",-1))),T={class:"lista"},Z={class:"lista-destaques"},$={class:"lado-lado"},H=q((()=>(0,o._)("img",{class:"painel-corpo",src:"/img/Criancas.jpeg",alt:"Criancas"},null,-1))),B={class:"painel-titulo"},W=(0,o.Uk)("Colônia de Férias para as crianças do Viver "),P=q((()=>(0,o._)("br",null,null,-1))),G=(0,o.Uk)(" Saiba mais... "),K=q((()=>(0,o._)("span",null,"10 de Janeiro de 2022",-1))),J={class:"lado-lado"},Q=q((()=>(0,o._)("img",{class:"painel-corpo",src:"/img/Covid.jpeg",alt:"Covid"},null,-1))),Y={class:"painel-titulo"},X=(0,o.Uk)("Liberada a obrigatoriedade das máscaras no condomínio. "),aa=q((()=>(0,o._)("br",null,null,-1))),ea=(0,o.Uk)(" Saiba mais... "),ta=q((()=>(0,o._)("span",null,"02 de Janeiro de 2022",-1))),na={class:"lado-lado"},oa=q((()=>(0,o._)("img",{class:"painel-corpo",src:"/img/Gas.jpeg",alt:"Gas"},null,-1))),ia={class:"painel-titulo"},la=(0,o.Uk)("Nova assembléia para regras dos medidores de Gás "),sa=q((()=>(0,o._)("br",null,null,-1))),ra=(0,o.Uk)(" Saiba mais... "),ca=q((()=>(0,o._)("span",null,"10 de Dezembro de 2021",-1)));function ua(a,e,t,n,i,l){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[V,(0,o._)("div",R,[M,(0,o._)("ul",T,[(0,o._)("li",Z,[(0,o._)("div",null,[(0,o._)("div",$,[H,(0,o._)("h2",B,[W,P,(0,o.Wm)(s,{class:"router",to:{name:"areacomum"}},{default:(0,o.w5)((()=>[G])),_:1})]),K]),(0,o._)("div",J,[Q,(0,o._)("h2",Y,[X,aa,(0,o.Wm)(s,{class:"router",to:{name:"areacomum"}},{default:(0,o.w5)((()=>[ea])),_:1})]),ta]),(0,o._)("div",na,[oa,(0,o._)("h2",ia,[la,sa,(0,o.Wm)(s,{class:"router",to:{name:"areacomum"}},{default:(0,o.w5)((()=>[ra])),_:1})]),ca])])])])])])}var da={name:"HomeView"};const ma=(0,b.Z)(da,[["render",ua],["__scopeId","data-v-89a6d1c2"]]);var pa=ma;const ga=a=>((0,o.dD)("data-v-70ef8235"),a=a(),(0,o.Cn)(),a),ha={class:"main-container"},va=ga((()=>(0,o._)("h1",null,"EFETUE SEU CADASTRO",-1))),_a={class:"form-group"},fa=ga((()=>(0,o._)("label",{for:"nome"},"Nome ",-1))),ba=ga((()=>(0,o._)("br",null,null,-1))),wa={class:"form-group"},ya=ga((()=>(0,o._)("label",{for:"nome"},"CPF ",-1))),Aa=ga((()=>(0,o._)("br",null,null,-1))),Ca={class:"form-group"},Sa=ga((()=>(0,o._)("label",{for:"nome"},"Telefone ",-1))),ka=ga((()=>(0,o._)("br",null,null,-1))),Da={class:"form-group"},Ua=ga((()=>(0,o._)("label",{for:"nome"},"Data Nascimento ",-1))),Ia=ga((()=>(0,o._)("br",null,null,-1))),Ea={class:"form-group"},Fa=ga((()=>(0,o._)("label",{for:"nome"},"Apartamento ",-1))),Na=ga((()=>(0,o._)("br",null,null,-1))),xa={class:"form-group"},Oa=ga((()=>(0,o._)("label",{for:"email"},"E-mail ",-1))),La=ga((()=>(0,o._)("br",null,null,-1))),ja={class:"form-group"},za=ga((()=>(0,o._)("label",{for:"senha"},"Senha ",-1))),qa=ga((()=>(0,o._)("br",null,null,-1))),Va=ga((()=>(0,o._)("br",null,null,-1))),Ra={class:"center"},Ma=(0,o.Uk)(" Já possui um login cadastrado? "),Ta=(0,o.Uk)(" Faça o Login Aqui ");function Za(a,e,t,i,l,s){const r=(0,o.up)("router-link"),c=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",ha,[va,(0,o._)("form",{onSubmit:e[8]||(e[8]=(0,n.iM)((a=>s.registerSubmitUserForm()),["prevent"]))},[(0,o._)("div",_a,[fa,(0,o.wy)((0,o._)("input",{type:"text",id:"name",name:"name",class:"form-control mb-2",placeholder:"Inclua seu Nome","onUpdate:modelValue":e[0]||(e[0]=a=>l.registerForm.name=a)},null,512),[[n.nr,l.registerForm.name]])]),ba,(0,o._)("div",wa,[ya,(0,o.wy)((0,o._)("input",{type:"text",id:"cpf",name:"cpf",class:"form-control mb-2",format:"###.###.###-##",placeholder:"Inclua seu CPF","onUpdate:modelValue":e[1]||(e[1]=a=>l.registerForm.cpf=a)},null,512),[[n.nr,l.registerForm.cpf]])]),Aa,(0,o._)("div",Ca,[Sa,(0,o.wy)((0,o._)("input",{type:"text",id:"telefone",name:"telefone",class:"form-control mb-2",placeholder:"Inclua seu Telefone","onUpdate:modelValue":e[2]||(e[2]=a=>l.registerForm.telefone=a)},null,512),[[n.nr,l.registerForm.telefone]])]),ka,(0,o._)("div",Da,[Ua,(0,o.wy)((0,o._)("input",{type:"date",id:"dataNasc",name:"dataNasc",class:"form-control mb-2",placeholder:"Inclua sua Data de Nascimento","onUpdate:modelValue":e[3]||(e[3]=a=>l.registerForm.dataNasc=a)},null,512),[[n.nr,l.registerForm.dataNasc]])]),Ia,(0,o._)("div",Ea,[Fa,(0,o.wy)((0,o._)("input",{type:"text",id:"apto",name:"apto",class:"form-control mb-2",placeholder:"Inclua seu Apartamento","onUpdate:modelValue":e[4]||(e[4]=a=>l.registerForm.apto=a)},null,512),[[n.nr,l.registerForm.apto]])]),Na,(0,o._)("div",xa,[Oa,(0,o.wy)((0,o._)("input",{type:"email",id:"email",name:"email",class:"form-control mb-2",placeholder:"Inclua seu E-mail","onUpdate:modelValue":e[5]||(e[5]=a=>l.registerForm.email=a)},null,512),[[n.nr,l.registerForm.email]])]),La,(0,o._)("div",ja,[za,(0,o.wy)((0,o._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-2",placeholder:"Inclua a Senha","onUpdate:modelValue":e[6]||(e[6]=a=>l.registerForm.password=a)},null,512),[[n.nr,l.registerForm.password]])]),qa,(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o._)("button",{onClick:e[7]||(e[7]=(...a)=>s.submitRegisterUser&&s.submitRegisterUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Cadastrar "),Va,(0,o._)("p",Ra,[Ma,(0,o.Wm)(r,{class:"router",to:"/login"},{default:(0,o.w5)((()=>[Ta])),_:1})])])),_:1})],32)])])}var $a=t(737),Ha=t.n($a),Ba=t(669),Wa=t.n(Ba),Pa=()=>Wa().create({baseURL:"api/v1/"}),Ga={async registerNewUser(a){try{const e=await Pa().post("/register",a),{token:t}=e.data;t&&(localStorage.setItem("jwt",t),Ha()({title:"Excelente!",text:"Usuário(a) cadastrado com sucesso!",icon:"success"}))}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}},Ka={name:"RegisterComponent",data(){return{registerForm:{name:null,cpf:null,telefone:null,dataNasc:null,apto:null,email:null,password:null,inadimplente:!1,sindico:!1},isSubmitted:!1}},methods:{registerSubmitUserForm(){},async submitRegisterUser(){try{this.isSubmitted=!0,await Ga.registerNewUser(this.registerForm),this.$router.push("/login")}catch(a){Ha()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}}};const Ja=(0,b.Z)(Ka,[["render",Za],["__scopeId","data-v-70ef8235"]]);var Qa=Ja;const Ya=(0,o._)("iframe",{src:"/Conv/modelo.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),Xa=(0,o._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),ae=[Ya,Xa];function ee(a,e){return(0,o.wg)(),(0,o.iD)("div",null,ae)}const te={},ne=(0,b.Z)(te,[["render",ee]]);var oe=ne;const ie=a=>((0,o.dD)("data-v-4d23a692"),a=a(),(0,o.Cn)(),a),le={class:"body"},se={class:"main-container"},re=ie((()=>(0,o._)("h1",null,"Efetue seu Login",-1))),ce={class:"form.group"},ue=ie((()=>(0,o._)("label",{for:"email"},"E-mail ",-1))),de=ie((()=>(0,o._)("br",null,null,-1))),me={class:"form.group"},pe=ie((()=>(0,o._)("label",{for:"senha"},"Senha ",-1))),ge=ie((()=>(0,o._)("br",null,null,-1))),he={class:"cadastro-name"},ve={class:"center"},_e=(0,o.Uk)(" Não tem cadastro? "),fe=(0,o.Uk)(" Cadastre-se aqui! ");function be(a,e,t,i,l,s){const r=(0,o.up)("router-link"),c=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("body",le,[(0,o._)("div",se,[re,(0,o._)("form",{onSubmit:e[3]||(e[3]=(0,n.iM)((a=>s.loginSubmitUserForm()),["prevent"]))},[(0,o._)("div",ce,[ue,(0,o.wy)((0,o._)("input",{type:"text",id:"email",name:"email",class:"form-control mb-2",placeholder:"Digite seu E-mail","onUpdate:modelValue":e[0]||(e[0]=a=>l.loginForm.email=a)},null,512),[[n.nr,l.loginForm.email]])]),de,(0,o._)("div",me,[pe,(0,o.wy)((0,o._)("input",{type:"password",id:"password",name:"password",class:"form-control mb-2",placeholder:"Digite sua Senha","onUpdate:modelValue":e[1]||(e[1]=a=>l.loginForm.password=a)},null,512),[[n.nr,l.loginForm.password]])]),ge,(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o._)("button",{onClick:e[2]||(e[2]=(...a)=>s.submitLoginUser&&s.submitLoginUser(...a)),class:"btn btn-primary btn-block w-75 my-4"}," Logar "),(0,o._)("div",he,[(0,o._)("p",ve,[_e,(0,o.Wm)(r,{class:"router",to:{name:"novo.usuario"}},{default:(0,o.w5)((()=>[fe])),_:1},8,["to"])])])])),_:1})],32)])])}var we={async loginUser(a){try{const e=await Pa().post("/login",a),{token:t}=e.data;localStorage.setItem("jwt",t),t&&Ha()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"})}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),this.$router.push("/")}}},ye={name:"LoginViver",data(){return{loginForm:{email:null,password:null}}},methods:{loginSubmitUserForm(){},async submitLoginUser(){try{this.isSubmitted=!0,await we.loginUser(this.loginForm),this.$router.push("/"),setTimeout((function(){window.location.reload(1)}),1)}catch(a){Ha()({title:"Login ou password Incorreto!",text:"Digite Login e password cadastrado!",icon:"error"})}}}};const Ae=(0,b.Z)(ye,[["render",be],["__scopeId","data-v-4d23a692"]]);var Ce=Ae;const Se=a=>((0,o.dD)("data-v-21a44d6f"),a=a(),(0,o.Cn)(),a),ke={class:"main-container"},De={id:"nav-area"},Ue=Se((()=>(0,o._)("h1",{id:"titulo"},"ÁREA COMUM",-1))),Ie={class:"navbar-nav mr-auto"},Ee=(0,o.uE)('<ul class="lista" data-v-21a44d6f><li class="lista-destaques" data-v-21a44d6f><div data-v-21a44d6f><div class="lado-lado" data-v-21a44d6f><img class="painel-corpo" src="/img/Academia.jpeg" alt="Criancas" data-v-21a44d6f><h1 class="painel-titulo" data-v-21a44d6f>ACADEMIA</h1></div><div class="lado-lado" data-v-21a44d6f><img class="painel-corpo" src="/img/Churrasqueira1.jpeg" alt="Covid" data-v-21a44d6f><h1 class="painel-titulo" data-v-21a44d6f>CHURRASQUEIRA</h1></div><div class="lado-lado" data-v-21a44d6f><img class="painel-corpo" src="/img/SL_Blz.jpeg" alt="Gas" data-v-21a44d6f><h1 class="painel-titulo" data-v-21a44d6f>SALÃO DE BELEZA</h1></div></div><div data-v-21a44d6f><div class="lado-lado" data-v-21a44d6f><img class="painel-corpo" src="/img/SL_Festas.jpeg" alt="Criancas" data-v-21a44d6f><h1 class="painel-titulo" data-v-21a44d6f>Salão de Festas</h1></div><div class="lado-lado" data-v-21a44d6f><img class="painel-corpo" src="/img/SL_Jogos.jpeg" alt="Covid" data-v-21a44d6f><h1 class="painel-titulo" data-v-21a44d6f>Salão de Jogos</h1></div><div class="lado-lado" data-v-21a44d6f><img class="painel-corpo" src="/img/Brinquedo.jpeg" alt="Gas" data-v-21a44d6f><h1 class="painel-titulo" data-v-21a44d6f>Brinquedoteca</h1></div></div></li></ul>',1);function Fe(a,e,t,i,l,s){return(0,o.wg)(),(0,o.iD)("div",ke,[(0,o._)("div",De,[Ue,(0,o._)("ul",Ie,[(0,o._)("button",{class:"nav-item",type:"Submit",href:"#",onClick:e[0]||(e[0]=(0,n.iM)((a=>s.direcionaAgendamento(l.user)),["prevent"]))},"Agendamento")])]),Ee])}var Ne=t(309),xe=t.n(Ne),Oe={name:"AreaComum",data(){return{user:{},isSubmitted:!1}},methods:{getUser(){const a=localStorage.getItem("jwt"),e=xe().decode(a);this.user=e,console.log(e)},async direcionaAgendamento(a){1==a.inadimplente?Ha()({title:"ACESSO NEGADO!",text:"Por favor reguarize seus débitos!",icon:"error"}):(this.$router.push({name:"agendamento"}),setTimeout((function(){window.location.reload(1)}),1))}},created(){this.getUser()}};const Le=(0,b.Z)(Oe,[["render",Fe],["__scopeId","data-v-21a44d6f"]]);var je=Le,ze=t(577);const qe=a=>((0,o.dD)("data-v-79852532"),a=a(),(0,o.Cn)(),a),Ve={class:"main"},Re=qe((()=>(0,o._)("h1",{id:"titulo"},"AGENDAMENTO",-1))),Me={class:"main-container"},Te={class:"lista"},Ze={class:"lista-destaques"},$e=qe((()=>(0,o._)("h2",null,"REALIZE SEU AGENDAMENTO",-1))),He={class:"input-container"},Be={for:"name"},We=(0,o.Uk)("Nome do Condômino: "),Pe=qe((()=>(0,o._)("br",null,null,-1))),Ge={class:"name-user"},Ke={class:"input-container"},Je=qe((()=>(0,o._)("label",{for:"local"},"Selecione o local:",-1))),Qe=(0,o.uE)('<option value="" data-v-79852532>Selecione o local</option><option value="academia" data-v-79852532>Academia</option><option value="churrasqueira" data-v-79852532>Churrasqueira</option><option value="sl_beleza" data-v-79852532>Salão de Beleza</option><option value="sl_festas" data-v-79852532>Salão de Festas</option>',5),Ye=[Qe],Xe=(0,o.Uk)(),at=qe((()=>(0,o._)("br",null,null,-1))),et=qe((()=>(0,o._)("br",null,null,-1))),tt={class:"input-container"},nt=qe((()=>(0,o._)("label",{for:"diaa"},"Selecione a data do agendamento::",-1))),ot=qe((()=>(0,o._)("br",null,null,-1))),it={class:"input-container"},lt=qe((()=>(0,o._)("label",{for:"horario"},"Selecione o horário:",-1))),st=(0,o.uE)('<option value="" data-v-79852532>Selecione um horário</option><option value="10:00" data-v-79852532>10:00</option><option value="11:00" data-v-79852532>11:00</option><option value="12:00" data-v-79852532>12:00</option><option value="13:00" data-v-79852532>13:00</option><option value="14:00" data-v-79852532>14:00</option><option value="15:00" data-v-79852532>15:00</option><option value="16:00" data-v-79852532>16:00</option><option value="17:00" data-v-79852532>17:00</option><option value="18:00" data-v-79852532>18:00</option><option value="19:00" data-v-79852532>19:00</option><option value="20:00" data-v-79852532>20:00</option><option value="21:00" data-v-79852532>21:00</option>',13),rt=[st],ct=qe((()=>(0,o._)("br",null,null,-1))),ut={class:"input-container"},dt=qe((()=>(0,o._)("a",{href:"/areacomum",class:"btn btn-warning"},"Cancelar",-1)));function mt(a,e,t,i,l,s){return(0,o.wg)(),(0,o.iD)("div",Ve,[Re,(0,o._)("div",Me,[(0,o._)("ul",Te,[(0,o._)("li",Ze,[(0,o._)("form",{class:"lado-lado",id:"agendamento-form",onSubmit:e[4]||(e[4]=(0,n.iM)((a=>s.createAgendamento()),["prevent"]))},[$e,(0,o._)("div",He,[(0,o._)("label",Be,[We,Pe,(0,o._)("p",Ge,(0,ze.zw)(l.agendamentoForm.usuario),1)])]),(0,o._)("div",Ke,[Je,(0,o.wy)((0,o._)("select",{required:"",name:"local",id:"local","onUpdate:modelValue":e[0]||(e[0]=a=>l.agendamentoForm.local=a)},Ye,512),[[n.bM,l.agendamentoForm.local]]),Xe,at,et,(0,o._)("div",tt,[nt,(0,o.wy)((0,o._)("input",{type:"date",id:"diaa",name:"diaa","onUpdate:modelValue":e[1]||(e[1]=a=>l.agendamentoForm.dia=a)},null,512),[[n.nr,l.agendamentoForm.dia]])]),ot,(0,o._)("div",it,[lt,(0,o.wy)((0,o._)("select",{required:"",name:"horario",id:"horario","onUpdate:modelValue":e[2]||(e[2]=a=>l.agendamentoForm.horario=a)},rt,512),[[n.bM,l.agendamentoForm.horario]])]),ct,(0,o._)("div",ut,[dt,(0,o._)("button",{onClick:e[3]||(e[3]=(...a)=>s.submitAgendamento&&s.submitAgendamento(...a)),type:"submit",class:"btn btn-primary"},"Agendar")])])],32)])])])])}class pt{static async registerNewAgendamento(a){try{const e=await Pa().post("/agendamento",a),t=e.status;t&&Ha()({title:"Excelente!",text:"Agendamento cadastrado com sucesso!",icon:"success"})}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}static async deleteAgendamento(a){return Pa().delete(`/agendamento/${a}`)}static async returnAgendamentoId(a){return Pa().find(`/agendamento/${a}`)}static async upDateAgendamento(a,e){return Pa().patch(`/agendamento/${a}`,e)}}var gt=pt,ht={name:"CadastrarAgendamento",data(){return{agendamentoForm:{usuario:null,local:null,dia:null,horario:null,checkIn:"Pendente"},user:{},isSubmitted:!1}},methods:{getUser(){const a=localStorage.getItem("jwt"),e=xe().decode(a);this.user=e,this.agendamentoForm.usuario=this.user.name,console.log(e)},createAgendamento(){},async submitAgendamento(){try{this.isSubmitted=!0,await gt.registerNewAgendamento(this.agendamentoForm),this.$router.push("/check-in")}catch(a){Ha()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}},created(){this.getUser()}};const vt=(0,b.Z)(ht,[["render",mt],["__scopeId","data-v-79852532"]]);var _t=vt;const ft=(0,o._)("iframe",{src:"/Financ/Financ.pdf",width:"100%",height:"780",style:{border:"none"}},null,-1),bt=(0,o._)("table",{cellpadding:"0",cellspacing:"0",align:"center",width:"100%",height:"100%"},null,-1),wt=[ft,bt];function yt(a,e){return(0,o.wg)(),(0,o.iD)("div",null,wt)}const At={},Ct=(0,b.Z)(At,[["render",yt]]);var St=Ct;const kt=a=>((0,o.dD)("data-v-d73b7992"),a=a(),(0,o.Cn)(),a),Dt={class:"main-container"},Ut={id:"nav-area"},It=kt((()=>(0,o._)("h1",{id:"titulo"},"ANÚNCIOS",-1))),Et={class:"navbar-nav mr-auto"},Ft={class:"lista-destaques"},Nt=["onDblclick"],xt={class:"painel"},Ot={class:"painel-titulo"},Lt={class:"painel-corpo"},jt={class:"description"},zt=kt((()=>(0,o._)("b",{class:"bold"},"Descrição:",-1))),qt=kt((()=>(0,o._)("br",null,null,-1))),Vt={class:"contact"},Rt=kt((()=>(0,o._)("b",null,"Contato:",-1))),Mt=kt((()=>(0,o._)("br",null,null,-1))),Tt=kt((()=>(0,o._)("br",null,null,-1))),Zt=["onClick"],$t=kt((()=>(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},[(0,o._)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})],-1))),Ht=[$t];function Bt(a,e,t,i,l,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",Dt,[(0,o._)("div",Ut,[It,(0,o._)("ul",Et,[(0,o._)("button",{class:"nav-item",type:"Submit",onClick:e[0]||(e[0]=(0,n.iM)(((...a)=>s.direcionaAnuncio&&s.direcionaAnuncio(...a)),["prevent"]))},"Crie seu anúncio")])])]),(0,o._)("ul",null,[(0,o._)("li",Ft,[(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.anuncios,(a=>((0,o.wg)(),(0,o.iD)("div",{class:"lado-lado",key:a._id,onDblclick:e=>s.deleteAnuncio(a._id)},[(0,o._)("div",xt,[(0,o._)("h2",Ot,(0,ze.zw)(a.title),1),(0,o._)("div",Lt,[(0,o._)("p",jt,[zt,qt,(0,o.Uk)(" "+(0,ze.zw)(a.description),1)]),(0,o._)("p",Vt,[Rt,Mt,(0,o.Uk)(" "+(0,ze.zw)(a.author)+" ",1),Tt,(0,o.Uk)(" "+(0,ze.zw)(a.phone),1)])]),(0,o.wy)((0,o._)("button",{type:"button",class:"btn btn-light mr-1",onClick:e=>s.deleteAnuncio(a._id)},Ht,8,Zt),[[n.F8,l.user.name==a.author||1==l.user.sindico]])])],40,Nt)))),128))])])])])}class Wt{static async registerNewAnuncio(a){try{const e=await Pa().post("/anuncio",a),t=e.status;t&&Ha()({title:"Excelente!",text:"Anuncio cadastrado com sucesso!",icon:"success"})}catch(e){Ha()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"})}}static async deleteAnuncio(a){return Pa().delete(`/anuncio/${a}`)}static async upDateAnuncio(a){return Pa().patch(`/anuncio/${a}`)}}var Pt=Wt,Gt={name:"AnuncioViver",data(){return{anuncios:[],user:{}}},mounted(){this.getAnuncios()},methods:{getUser(){const a=localStorage.getItem("jwt"),e=xe().decode(a);this.user=e,console.log(e)},async direcionaAnuncio(){this.$router.push({name:"cadastroAnuncio"}),setTimeout((function(){window.location.reload(1)}),1)},async getAnuncios(){const a=await Pa().get("/anuncio");console.log(a),200==a.status&&(this.anuncios=a.data)},async deleteAnuncio(a){const e=confirm("Deseja realmente excluir este Anúncio?");null==e||""==e?alert("Você desistiu de excluir o Anuncio!"):(await Ha()({title:"Confirmado!",text:"Anuncio EXCLUÍDO com sucesso!",icon:"success"}),await Pt.deleteAnuncio(a),this.anuncios=Pa().get("/anuncio"),setTimeout((function(){window.location.reload(1)}),1))}},created(){this.getUser()}};const Kt=(0,b.Z)(Gt,[["render",Bt],["__scopeId","data-v-d73b7992"]]);var Jt=Kt;const Qt=a=>((0,o.dD)("data-v-9b648216"),a=a(),(0,o.Cn)(),a),Yt={class:"body"},Xt=Qt((()=>(0,o._)("div",{id:"nav-area"},[(0,o._)("h1",{id:"titulo"},"CADASTRAR ANÚNCIOS")],-1))),an={class:"main-container"},en={class:"form-group"},tn=Qt((()=>(0,o._)("label",{for:"title",class:"text-white"},"Título:",-1))),nn={class:"form-group"},on={for:"author",class:"text-white"},ln=(0,o.Uk)("Autor: "),sn=Qt((()=>(0,o._)("br",null,null,-1))),rn={class:"name-user"},cn={class:"form-group"},un=Qt((()=>(0,o._)("label",{for:"phone",class:"text-white"},"Contato",-1))),dn={class:"form-group"},mn=Qt((()=>(0,o._)("label",{for:"description",class:"text-white"},"Descrição",-1))),pn=Qt((()=>(0,o._)("br",null,null,-1))),gn={class:"form-group"},hn=Qt((()=>(0,o._)("a",{href:"/anuncios",class:"btn btn-warning"},"Cancelar",-1))),vn=Qt((()=>(0,o._)("hr",null,null,-1)));function _n(a,e,t,i,l,s){return(0,o.wg)(),(0,o.iD)("body",Yt,[Xt,(0,o._)("div",an,[(0,o._)("form",{onSubmit:e[4]||(e[4]=(0,n.iM)((a=>s.anuncioSubmitForm()),["prevent"]))},[(0,o._)("div",en,[tn,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"Título",name:"title","onUpdate:modelValue":e[0]||(e[0]=a=>l.anuncioForm.title=a),required:""},null,512),[[n.nr,l.anuncioForm.title]])]),(0,o._)("div",nn,[(0,o._)("label",on,[ln,sn,(0,o._)("p",rn,(0,ze.zw)(l.anuncioForm.author),1)])]),(0,o._)("div",cn,[un,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"Telefone de Contato",name:"phone","onUpdate:modelValue":e[1]||(e[1]=a=>l.anuncioForm.phone=a),required:""},null,512),[[n.nr,l.anuncioForm.phone]])]),(0,o._)("div",dn,[mn,(0,o.wy)((0,o._)("textarea",{name:"description",placeholder:"Descrição",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=a=>l.anuncioForm.description=a)},"\r\n              ",512),[[n.nr,l.anuncioForm.description]])]),pn,(0,o._)("div",gn,[hn,(0,o._)("button",{onClick:e[3]||(e[3]=(...a)=>s.submitAnuncio&&s.submitAnuncio(...a)),type:"submit",class:"btn btn-primary"},"Salvar")])],32)]),vn])}var fn={name:"CadastrarAnuncios",data(){return{anuncioForm:{title:null,author:null,phone:null,description:null},user:{},id:this.$route.params.id,isSubmitted:!1}},methods:{getUser(){const a=localStorage.getItem("jwt"),e=xe().decode(a);this.user=e,this.anuncioForm.author=this.user.name,console.log(e)},anuncioSubmitForm(){},async submitAnuncio(){try{this.isSubmitted=!0,await Pt.registerNewAnuncio(this.anuncioForm),this.$router.push("/anuncios")}catch(a){Ha()({title:"Oops!",text:"Erro ao realizar cadastro!",icon:"error"})}}},created(){this.getUser()}};const bn=(0,b.Z)(fn,[["render",_n],["__scopeId","data-v-9b648216"]]);var wn=bn,yn=t.p+"img/Logo_Zoom.32cea7fd.jpg";const An=a=>((0,o.dD)("data-v-c6b6fcf6"),a=a(),(0,o.Cn)(),a),Cn={class:"main"},Sn=An((()=>(0,o._)("h1",{id:"titulo"},"ASSEMBLÉIA ONLINE",-1))),kn={class:"main-container"},Dn=An((()=>(0,o._)("div",{class:"título"},[(0,o._)("h2",null,"LINK PARA A ASSEMLÉIA ONLINE")],-1))),Un={class:"zoom"},In=An((()=>(0,o._)("br",null,null,-1))),En=An((()=>(0,o._)("img",{src:yn,width:"90",height:"50"},null,-1))),Fn=An((()=>(0,o._)("br",null,null,-1))),Nn=An((()=>(0,o._)("br",null,null,-1))),xn=(0,o.Uk)(" Para acessar a reunião online: "),On=An((()=>(0,o._)("br",null,null,-1))),Ln=An((()=>(0,o._)("br",null,null,-1))),jn=An((()=>(0,o._)("a",{class:"link-1",href:"https://zoom.us/",target:"_blank"},"Clique Aqui!",-1))),zn=An((()=>(0,o._)("br",null,null,-1))),qn=An((()=>(0,o._)("br",null,null,-1))),Vn=(0,o.Uk)(" ID da Reunião: 123 456 ");function Rn(a,e){const t=(0,o.up)("center");return(0,o.wg)(),(0,o.iD)("body",null,[(0,o._)("div",Cn,[Sn,(0,o._)("div",kn,[Dn,(0,o._)("div",Un,[In,(0,o._)("p",null,[(0,o.Wm)(t,null,{default:(0,o.w5)((()=>[En,Fn,Nn,xn,On,Ln,jn,zn,qn,Vn])),_:1})])])])])])}const Mn={},Tn=(0,b.Z)(Mn,[["render",Rn],["__scopeId","data-v-c6b6fcf6"]]);var Zn=Tn;const $n=a=>((0,o.dD)("data-v-0e9b0f72"),a=a(),(0,o.Cn)(),a),Hn=$n((()=>(0,o._)("h1",{id:"titulo"},"CHECK-IN",-1))),Bn={class:"projetos"},Wn={class:"table is-fullwidth"},Pn=$n((()=>(0,o._)("tr",{class:"tabela"},[(0,o._)("th",null,"Nome"),(0,o._)("th",null,"Local"),(0,o._)("th",null,"Data"),(0,o._)("th",null,"Horário"),(0,o._)("th",null,"Status"),(0,o._)("th"),(0,o._)("th")],-1))),Gn={key:0,class:"status-verde"},Kn={key:1,class:"status-laranja"},Jn=["onClick"],Qn=["onClick"],Yn=["onClick"];function Xn(a,e,t,i,l,s){return(0,o.wg)(),(0,o.iD)("body",null,[Hn,(0,o._)("section",Bn,[(0,o._)("table",Wn,[(0,o._)("tbody",null,[Pn,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.agendamentos,(a=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("tr",{class:"lado-lado",key:a._id},[(0,o._)("td",null,(0,ze.zw)(a.usuario),1),(0,o._)("td",null,(0,ze.zw)(a.local),1),(0,o._)("td",null,(0,ze.zw)(a.dia),1),(0,o._)("td",null,(0,ze.zw)(a.horario),1),"Realizado"==a.checkIn?((0,o.wg)(),(0,o.iD)("td",Gn,(0,ze.zw)(a.checkIn),1)):((0,o.wg)(),(0,o.iD)("td",Kn,(0,ze.zw)(a.checkIn),1)),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e=>s.deleteAgendamento(a._id)}," Remover ",8,Jn)]),(0,o._)("td",null,["Realizado"==a.checkIn?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-success",onClick:e=>s.submitUpDateStatus(a),disabled:""}," Check-In ",8,Qn)):((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",class:"btn btn-success",onClick:e=>s.submitUpDateStatus(a)}," Check-In ",8,Yn))])])),[[n.F8,a.usuario==l.user.name]]))),128))])])])])}var ao={name:"CheckInViver",data(){return{agendamentos:[],user:{}}},mounted(){this.getAgendamentos(),this.getUser()},methods:{async getAgendamentos(){const a=await Pa().get("/agendamento");console.log(a),200==a.status&&(this.agendamentos=a.data)},getUser(){const a=localStorage.getItem("jwt"),e=xe().decode(a);this.user=e,console.log(e)},async deleteAgendamento(a){const e=confirm("Deseja realmente excluir este Agendamento?");null==e||""==e?alert("Você desistiu de excluir o Agendamento!"):(await Ha()({title:"Confirmado!",text:"Agendamento EXCLUÍDO com sucesso!",icon:"success"}),await gt.deleteAgendamento(a),this.agendamentos=Pa().get("/agendamento"),setTimeout((function(){window.location.reload(1)}),1))},async submitUpDateStatus(a){try{this.agendamento=a,this.agendamento.checkIn="Realizado";const e=await Pa().patch(`/agendamento/${a._id}`,this.agendamento),t=await e.json();console.log(t)}catch(e){Ha()({title:"Confirmado!",text:"Check-In REALIZADO com sucesso!",icon:"success"})}}}};const eo=(0,b.Z)(ao,[["render",Xn],["__scopeId","data-v-0e9b0f72"]]);var to=eo;const no=a=>((0,o.dD)("data-v-458b896d"),a=a(),(0,o.Cn)(),a),oo=no((()=>(0,o._)("h1",{id:"titulo"},"ÁREA DO SÍNDICO",-1))),io={class:"projetos"},lo={class:"table is-fullwidth"},so=no((()=>(0,o._)("tr",{class:"tabela"},[(0,o._)("th",null,"Nome"),(0,o._)("th",null,"Contato"),(0,o._)("th",null,"Email"),(0,o._)("th",null,"Apto"),(0,o._)("th",null,"Inadimplente"),(0,o._)("th")],-1))),ro={key:0,class:"status-red"},co={key:1,class:"status-green"},uo=["onClick"];function mo(a,e,t,n,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[oo,(0,o._)("section",io,[(0,o._)("table",lo,[(0,o._)("tbody",null,[so,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.users,(a=>((0,o.wg)(),(0,o.iD)("tr",{class:"lado-lado",key:a._id},[(0,o._)("td",null,(0,ze.zw)(a.name),1),(0,o._)("td",null,(0,ze.zw)(a.telefone),1),(0,o._)("td",null,(0,ze.zw)(a.email),1),(0,o._)("td",null,(0,ze.zw)(a.apto),1),1==a.inadimplente?((0,o.wg)(),(0,o.iD)("td",ro,(0,ze.zw)(a.inadimplente),1)):((0,o.wg)(),(0,o.iD)("td",co,(0,ze.zw)(a.inadimplente),1)),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e=>l.updateUser(a)}," Alterar Status ",8,uo)])])))),128))])])])])}var po={name:"SindicoViver",data(){return{users:{},sindico:[],isSubmitted:!1}},mounted(){this.getUser(),this.getSindico()},methods:{async getSindico(){const a=localStorage.getItem("jwt"),e=xe().decode(a);this.sindico=e,console.log(e),1==this.sindico.sindico?await Ha()({title:"BEM VINDO!",text:"Acesso liberado ao síndico",icon:"success"}):(this.direcionaHome(),await Ha()({title:"ACESSO RESTRITO!",text:"Apenas o síndico tem acesso a esse local!",icon:"warning"}))},async direcionaHome(){await this.$router.push({name:"home"})},async getUser(){const a=await Pa().get("/user");console.log(a),200==a.status&&(this.users=a.data)},async updateUser(a){try{this.user=a,0==this.user.inadimplente?this.user.inadimplente=!0:this.user.inadimplente=!1;const e=await Pa().patch(`/user/${a._id}`,this.user),t=await e.json();console.log(t)}catch(e){Ha()({title:"Confirmado!",text:"Status ALTERADO com sucesso!",icon:"success"})}}}};const go=(0,b.Z)(po,[["render",mo],["__scopeId","data-v-458b896d"]]);var ho=go;const vo=[{path:"/",name:"home",component:pa},{path:"/anunciosCadastro",name:"cadastroAnuncio",component:wn,meta:{requireAuth:!0}},{path:"/anuncios",name:"anuncios",component:Jt,meta:{requireAuth:!0}},{path:"/financ",name:"financ",component:St,meta:{requireAuth:!0}},{path:"/convencao",name:"convencao",component:oe,meta:{requireAuth:!0}},{path:"/assembleia",name:"assembleia",component:Zn,meta:{requireAuth:!0}},{path:"/areacomum",name:"areacomum",component:je,meta:{requireAuth:!0}},{path:"/agendamentos",name:"agendamento",component:_t,meta:{requireAuth:!0}},{path:"/check-in",name:"check-in",component:to,meta:{requireAuth:!0}},{path:"/area-sindico",name:"area-sindico",component:ho,meta:{requireAuth:!0}},{path:"/cadastre-se",name:"novo.usuario",component:Qa},{path:"/login",name:"login",component:Ce}],_o=(0,z.p7)({history:(0,z.PO)("/"),routes:vo});_o.beforeEach(((a,e,t)=>{a.matched.some((a=>a.meta.requireAuth))&&null==localStorage.getItem("jwt")?t({path:"/"}):t()}));var fo=_o;t(24);(0,n.ri)(j).use(fo).mount("#app")}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return a[n].call(i.exports,i,i.exports,t),i.exports}t.m=a,function(){var a=[];t.O=function(e,n,o,i){if(!n){var l=1/0;for(u=0;u<a.length;u++){n=a[u][0],o=a[u][1],i=a[u][2];for(var s=!0,r=0;r<n.length;r++)(!1&i||l>=i)&&Object.keys(t.O).every((function(a){return t.O[a](n[r])}))?n.splice(r--,1):(s=!1,i<l&&(l=i));if(s){a.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=a.length;u>0&&a[u-1][2]>i;u--)a[u]=a[u-1];a[u]=[n,o,i]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var o,i,l=n[0],s=n[1],r=n[2],c=0;if(l.some((function(e){return 0!==a[e]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(r)var u=r(t)}for(e&&e(n);c<l.length;c++)i=l[c],t.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return t.O(u)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(223)}));n=t.O(n)})();
//# sourceMappingURL=app.76456d02.js.map