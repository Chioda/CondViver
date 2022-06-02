import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import ConvencaoViver from '../views/ConvencaoViver.vue'
import LoginViver from '../views/LoginViver.vue'
import AreaComum from '../views/AreaComum.vue'
import Agendamento from '../views/AgendamentoViver.vue'
import FinancViver from '../views/FinancViver.vue'
import AnunciosViver from '../views/AnunciosViver'
import CadastrarAnuncios from '../views/CadastrarAnuncios'
import AssembleiaViver from '../views/AssembleiaViver'
import CheckInViver from '../views/CheckInViver'
import AreaSindico from '../views/AreaSindico'
import AtualizarAnuncio from '../views/AtualizarAnuncio'
//import 'bootstrap'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView    
  },
  {
    path: '/anunciosCadastro',
    name: 'cadastroAnuncio',
    component: CadastrarAnuncios,
    meta: {
      requireAuth: true,
    },
  },
  {
  path: '/anunciosAtualizar/:id',
  name: 'atualizarAnuncio',
  component: AtualizarAnuncio,
  },  
  {
    path: '/anuncios',
    name: 'anuncios',
    component: AnunciosViver,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/financ',
    name: 'financ',
    component: FinancViver,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/convencao',
    name: 'convencao',
    component: ConvencaoViver,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/assembleia',
    name: 'assembleia',
    component: AssembleiaViver,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/areacomum',
    name: 'areacomum',
    component: AreaComum,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/agendamentos',
    name: 'agendamento',
    component: Agendamento,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/check-in',
    name: 'check-in',
    component: CheckInViver,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/area-sindico',
    name: 'area-sindico',
    component: AreaSindico,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
     component: NovoUsuario
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViver
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
