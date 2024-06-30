import { RouterView, createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: RouterView,
    children: [
      {
        path: '',
        component: () => import('./views/PaginaPrincipal.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router