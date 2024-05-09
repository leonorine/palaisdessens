import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory('https://palaisdessens-974.com'),
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/accueil.vue')
    },
    {
      path: '/reserver',
      name: 'Reserver',
      component: () => import('../views/reserver.vue')
    },
    {
      path: '/carte',
      name: 'Carte',
      component: () => import('../views/carte.vue')
    },
    {
      path: '/mentions-legales',
      name: 'MentionsLegales',
      component: () => import('../views/mentions.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/contact.vue')
    },
    

    
  ]
})

export default router
