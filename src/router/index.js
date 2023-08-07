import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import MatView from '../views/MatView.vue'
import MiddagView from '../views/matviews/MiddagView.vue'
import HandlelisteView from '../views/matviews/HandlelisteView.vue'
import oppskriftView from '@/views/matviews/oppskriftView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/mat',
    name: 'mat',
    component: MatView
  },
  {
    path: '/mat/middag',
    name: 'middag',
    component: MiddagView,
  },
  {
    path: '/mat/handleliste',
    name: 'handlelist',
    component: HandlelisteView,
  },
  {
    path: '/mat/middag/oppskrift/:id',
    name: 'oppskriftView',
    component: oppskriftView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
