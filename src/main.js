
import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetail from './components/PokemonDetail.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/:name', component: PokemonDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')