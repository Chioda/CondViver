import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import ConvencaoViver from '../views/ConvencaoViver.vue'
import LoginViver from '../views/LoginViver.vue'
import AreaComum from '../views/AreaComum.vue'
import FinancViver from '../views/FinancViver.vue'
//import 'bootstrap'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView    
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
    path: '/cadastre-se',
    name: 'novo.usuario',
     component: NovoUsuario
  },

  {
    path: '/login',
    name: 'login',
    component: LoginViver
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
    path: '/financ',
    name: 'financ',
    component: FinancViver,
    meta: {
      requireAuth: true,
    },
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
