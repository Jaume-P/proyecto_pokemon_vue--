// el router permite la navegacion entre las paginas (en este caso 
//   entre la home y la about)
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
    
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewView.vue')
    }
    ,
    {
      path: '/for',
      name: 'for',
      component: () => import('../views/ForView.vue')
    }
    ,
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
    
    
    {
      path: '/single/:tortugaid',
      name: 'single',
      props:true,/*para pasar propiedades a single (vista)*/
      component: () => import('../views/SingleView.vue')
    }
  ]
})

export default router
